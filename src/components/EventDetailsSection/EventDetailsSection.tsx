import { motion } from 'framer-motion';
import { Church, PartyPopper, MapPin, GlassWater } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import type { EventDetailsProps } from '../../config/types';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8 },
};

export default function EventDetailsSection({ ceremony, cocktail, reception, showMap, embedMapUrl, embedMapActionUrl }: EventDetailsProps) {
  const { t } = useLocale();

  return (
    <section id="details" className="section details-section">
      <motion.div className="section-header" {...fadeInUp}>
        <span className="section-accent-line" />
        <h2 className="section-title">{t('details.sectionTitle')}</h2>
        <p className="section-date">{t('details.dateFormatted')}</p>
      </motion.div>

      <div className="details-grid">
        {/* Ceremony card */}
        <motion.div
          className="detail-card"
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="detail-card-icon"><Church /></div>
          <h3>{t('details.ceremonyTitle')}</h3>
          <div className="detail-info">
            <div className="detail-row">
              <span className="detail-label">{t('details.timeLabel')}</span>
              <span className="detail-value">{ceremony.time} hrs</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">{t('details.venueLabel')}</span>
              <span className="detail-value">{ceremony.venue}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">{t('details.addressLabel')}</span>
              <span className="detail-value">{ceremony.address}</span>
            </div>
          </div>
          {showMap && ceremony.mapUrl && (
            <a
              href={ceremony.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-button"
            >
              <MapPin size={18} /> {t('details.mapButton')}
            </a>
          )}
        </motion.div>

        {/* Cocktail card */}
        {cocktail && (
          <motion.div
            className="detail-card"
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="detail-card-icon"><GlassWater /></div>
            <h3>Cocktail</h3>
            <div className="detail-info">
              <div className="detail-row">
                <span className="detail-label">{t('details.timeLabel')}</span>
                <span className="detail-value">{cocktail.time}</span>
              </div>
              {cocktail.venue && (
                <div className="detail-row">
                  <span className="detail-label">{t('details.venueLabel')}</span>
                  <span className="detail-value">{cocktail.venue}</span>
                </div>
              )}
              {cocktail.address && (
                <div className="detail-row">
                  <span className="detail-label">{t('details.addressLabel')}</span>
                  <span className="detail-value">{cocktail.address}</span>
                </div>
              )}
            </div>
            {showMap && cocktail.mapUrl && (
              <a
                href={cocktail.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-button"
              >
                <MapPin size={18} /> {t('details.mapButton')}
              </a>
            )}
          </motion.div>
        )}

        {/* Reception card */}
        <motion.div
          className="detail-card"
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="detail-card-icon"><PartyPopper /></div>
          <h3>{t('details.receptionTitle')}</h3>
          <div className="detail-info">
            <div className="detail-row">
              <span className="detail-label">{t('details.timeLabel')}</span>
              <span className="detail-value">{reception.time} hrs</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">{t('details.venueLabel')}</span>
              <span className="detail-value">{reception.venue}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">{t('details.addressLabel')}</span>
              <span className="detail-value">{reception.address}</span>
            </div>
          </div>
          {showMap && reception.mapUrl && (
            <a
              href={reception.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-button"
            >
              <MapPin size={18} /> {t('details.mapButton')}
            </a>
          )}
        </motion.div>
      </div>

      {embedMapUrl && (
        <motion.div 
          className="map-embed-wrapper"
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="map-embed-container">
            <iframe
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {embedMapActionUrl && (
            <a
              href={embedMapActionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-button embed-action-button"
            >
              <MapPin size={18} /> {t('details.mapButton')}
            </a>
          )}
        </motion.div>
      )}
    </section>
  );
}
