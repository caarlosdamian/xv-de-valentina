import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '../../hooks/useLocale';
import type { RSVPProps } from '../../config/types';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8 },
};

function buildSmsUrl(number: string, template: string, data: Record<string, string>): string {
  let message = template;
  Object.entries(data).forEach(([key, value]) => {
    message = message.replace(`{${key}}`, value);
  });
  
  // Detect iOS for proper SMS link formatting (older iOS used &, modern uses ?)
  // To be safe and compatible, we check if it's iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const separator = isIOS ? '&' : '?';
  
  return `sms:${number}${separator}body=${encodeURIComponent(message)}`;
}

export default function RSVPSection({ whatsappNumber }: RSVPProps) {
  const { t } = useLocale();
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState('');
  const [maxGuests, setMaxGuests] = useState(0);
  const [hasUrlParam, setHasUrlParam] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const guestsParam = params.get('guests') || params.get('guest');
    
    if (guestsParam) {
      const parsed = parseInt(guestsParam, 10);
      if (!isNaN(parsed) && parsed > 0) {
        setMaxGuests(parsed);
        setGuests(parsed);
        setHasUrlParam(true);
      }
    }
  }, []);

  const handleConfirm = () => {
    if (!name.trim()) return;
    const url = buildSmsUrl(whatsappNumber, t('rsvp.whatsappConfirm'), {
      name: name.trim(),
      guests: String(guests),
      message: message.trim() ? `Mensaje: ${message.trim()}` : '',
    });
    window.open(url, '_blank');
  };

  const handleDecline = () => {
    if (!name.trim()) return;
    const url = buildSmsUrl(whatsappNumber, t('rsvp.whatsappDecline'), {
      name: name.trim(),
      message: message.trim() ? `Mensaje: ${message.trim()}` : '',
    });
    window.open(url, '_blank');
  };

  return (
    <section id="rsvp" className="section rsvp-section">
      <motion.div className="section-header" {...fadeInUp}>
        <span className="section-accent-line" />
        <h2 className="section-title">{t('rsvp.sectionTitle')}</h2>
        <p className="section-subtitle">{t('rsvp.subtitle')}</p>
      </motion.div>

      {hasUrlParam ? (
        <motion.form className="rsvp-form" {...fadeInUp} transition={{ duration: 0.8, delay: 0.2 }} onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="rsvp-name">{t('rsvp.nameLabel')}</label>
            <input id="rsvp-name" type="text" placeholder={t('rsvp.namePlaceholder')} value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="rsvp-guests">{t('rsvp.guestsLabel')}</label>
            <div className="guest-counter">
              <button type="button" className="guest-btn" onClick={() => setGuests((g) => Math.max(1, g - 1))} disabled={guests <= 1}>−</button>
              <span className="guest-count">{guests}</span>
              <button type="button" className="guest-btn" onClick={() => setGuests((g) => Math.min(maxGuests, g + 1))} disabled={guests >= maxGuests}>+</button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="rsvp-message">{t('rsvp.messageLabel')}</label>
            <textarea id="rsvp-message" placeholder={t('rsvp.messagePlaceholder')} value={message} onChange={(e) => setMessage(e.target.value)} rows={3} />
          </div>

          <div className="rsvp-actions">
            <motion.button type="button" className="rsvp-confirm" onClick={handleConfirm} disabled={!name.trim()} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              {t('rsvp.confirmButton')}
            </motion.button>
            <motion.button type="button" className="rsvp-decline" onClick={handleDecline} disabled={!name.trim()} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              {t('rsvp.declineButton')}
            </motion.button>
          </div>
        </motion.form>
      ) : (
        <motion.div className="rsvp-banner" {...fadeInUp} transition={{ duration: 0.8, delay: 0.2 }}>
          <p>{t('rsvp.noUrlMessage')}</p>
        </motion.div>
      )}
    </section>
  );
}
