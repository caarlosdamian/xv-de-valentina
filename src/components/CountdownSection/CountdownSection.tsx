import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '../../hooks/useLocale';
import type { CountdownProps } from '../../config/types';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(target: string): TimeLeft | null {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8 },
};

function FlipUnit({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      className="countdown-unit"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: 'spring' }}
    >
      <div className="countdown-flip">
        <motion.span
          key={value}
          className="countdown-number"
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
      <span className="countdown-label">{label}</span>
    </motion.div>
  );
}

export default function CountdownSection({ targetDate }: CountdownProps) {
  const { t } = useLocale();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calcTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calcTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section id="countdown" className="section countdown-section">
      <motion.div className="section-header" {...fadeInUp}>
        <span className="section-accent-line" />
        <h2 className="section-title">{t('countdown.sectionTitle')}</h2>
        <p className="section-subtitle">{t('countdown.subtitle')}</p>
      </motion.div>

      {timeLeft ? (
        <div className="countdown-grid">
          <FlipUnit value={timeLeft.days} label={t('countdown.days')} />
          <span className="countdown-separator">:</span>
          <FlipUnit value={timeLeft.hours} label={t('countdown.hours')} />
          <span className="countdown-separator">:</span>
          <FlipUnit value={timeLeft.minutes} label={t('countdown.minutes')} />
          <span className="countdown-separator">:</span>
          <FlipUnit value={timeLeft.seconds} label={t('countdown.seconds')} />
        </div>
      ) : (
        <motion.p
          className="countdown-passed"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {t('countdown.eventPassed')}
        </motion.p>
      )}
    </section>
  );
}
