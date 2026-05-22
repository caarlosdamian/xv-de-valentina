import { motion } from 'framer-motion';
import { useLocale } from '../../hooks/useLocale';
import type { DressCodeProps } from '../../config/types';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8 },
};

export default function DressCodeSection({ palette }: DressCodeProps) {
  const { t } = useLocale();

  return (
    <section id="dresscode" className="section dresscode-section">
      <motion.div className="section-header" {...fadeInUp}>
        <span className="section-accent-line" />
        <h2 className="section-title">{t('dresscode.sectionTitle')}</h2>
        <p className="section-subtitle dresscode-formal">{t('dresscode.subtitle')}</p>
      </motion.div>

      <motion.p
        className="dresscode-description"
        {...fadeInUp}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {t('dresscode.description')}
      </motion.p>

      <div className="dresscode-palette">
        {palette.map((color, i) => (
          <motion.div
            key={color}
            className="palette-swatch"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3 + i * 0.1,
              type: 'spring',
              stiffness: 200,
            }}
            style={{ backgroundColor: color }}
            title={color}
          >
            <span className="swatch-ring" />
          </motion.div>
        ))}
      </div>

      <motion.p
        className="dresscode-note"
        {...fadeInUp}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {t('dresscode.note')}
      </motion.p>
    </section>
  );
}
