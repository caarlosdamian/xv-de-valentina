import { motion } from 'framer-motion';
import { useLocale } from '../../hooks/useLocale';
import type { FooterProps } from '../../config/types';

export default function FooterSection({ showCredits = true }: FooterProps) {
  const { t } = useLocale();

  return (
    <footer id="footer" className="section footer-section">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="footer-message">{t('footer.message')}</p>
        <p className="footer-name">{t('footer.name')}</p>
        {showCredits && (
          <p className="footer-credits">
            {t('footer.credits')} · {t('footer.year')}
          </p>
        )}
      </motion.div>
    </footer>
  );
}
