import { useState } from 'react';
import { motion } from 'framer-motion';
import { Landmark, Gift, Copy, Check } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import type { GiftRegistryProps } from '../../config/types';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8 },
};

export default function GiftRegistrySection({
  registryUrl,
  showBankDetails,
  bankDetails,
}: GiftRegistryProps) {
  const { t } = useLocale();
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="gifts" className="section gifts-section">
      <motion.div className="section-header" {...fadeInUp}>
        <span className="section-accent-line" />
        <h2 className="section-title">{t('gifts.sectionTitle')}</h2>
        <p className="section-subtitle">{t('gifts.subtitle')}</p>
      </motion.div>

      <div className="gifts-content">
        {showBankDetails && bankDetails && (
          <motion.div
            className="gift-card bank-card"
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="gift-card-icon"><Landmark /></div>
            <h3>{t('gifts.bankTitle')}</h3>
            <div className="bank-details">
              <div className="bank-row">
                <span className="bank-label">{t('gifts.bankLabel')}</span>
                <span className="bank-value">{bankDetails.bank}</span>
              </div>
              <div className="bank-row">
                <span className="bank-label">{t('gifts.clabeLabel')}</span>
                <span className="bank-value mono">{bankDetails.clabe}</span>
              </div>
              <div className="bank-row">
                <span className="bank-label">{t('gifts.beneficiaryLabel')}</span>
                <span className="bank-value">{bankDetails.beneficiary}</span>
              </div>
            </div>
            <button
              className="copy-button"
              onClick={() => handleCopy(bankDetails.clabe)}
            >
              {copied ? <><Check size={16} /> {t('gifts.copied')}</> : <><Copy size={16} /> {t('gifts.copyButton')}</>}
            </button>
          </motion.div>
        )}

        {registryUrl && (
          <motion.a
            href={registryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gift-card registry-link"
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="gift-card-icon"><Gift /></div>
            <span>{t('gifts.registryButton')}</span>
          </motion.a>
        )}
      </div>
    </section>
  );
}
