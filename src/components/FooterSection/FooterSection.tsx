import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import type { FooterProps } from '../../config/types';

export default function FooterSection({ showCredits = true }: FooterProps) {
  const { t } = useLocale();

  const nameParts = t('footer.name').split(' ');
  const firstName = nameParts[0];
  const middleName = nameParts.length > 2 ? nameParts.slice(1, -1).join(' ') : nameParts.slice(1).join(' ');
  const lastName = nameParts.length > 2 ? nameParts[nameParts.length - 1] : null;

  return (
    <footer id="footer" className="section footer-section">
      <div className="footer-particles">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.span
            key={i}
            className="particle"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 1, 0],
              y: [100, -300],
              x: [0, Math.random() * 80 - 40],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: 'easeOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 30}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="footer-message">{t('footer.message')}</p>
        <div className="footer-name-container">
          <Crown className="footer-crown" size={40} strokeWidth={1.5} />
          <p className="footer-name-first">{firstName}</p>
          {middleName && <p className="footer-name-middle">{middleName}</p>}
          {lastName && <p className="footer-name-last">{lastName}</p>}
        </div>
        {showCredits && (
          <p className="footer-credits">
            {t('footer.credits')} · {t('footer.year')}
          </p>
        )}
      </motion.div>
    </footer>
  );
}
