import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '../../hooks/useLocale';
import type { GalleryProps } from '../../config/types';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8 },
};

export default function GallerySection({ images, columns = 3 }: GalleryProps) {
  const { t } = useLocale();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="section gallery-section">
      <motion.div className="section-header" {...fadeInUp}>
        <span className="section-accent-line" />
        <h2 className="section-title">{t('gallery.sectionTitle')}</h2>
        <p className="section-subtitle">{t('gallery.subtitle')}</p>
      </motion.div>

      <div
        className="gallery-grid"
        style={{ '--gallery-columns': columns } as React.CSSProperties}
      >
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(i)}
          >
            {img.type === 'video' ? (
              <video src={img.src} muted loop playsInline autoPlay />
            ) : (
              <img src={img.src} alt={img.alt} loading="lazy" />
            )}
            <div className="gallery-item-overlay" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {images[selectedImage].type === 'video' ? (
                <video
                  src={images[selectedImage].src}
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                />
              )}
              <button
                className="lightbox-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                ✕
              </button>
              {/* Navigation */}
              {selectedImage > 0 && (
                <button
                  className="lightbox-nav lightbox-prev"
                  onClick={() => setSelectedImage(selectedImage - 1)}
                  aria-label="Previous"
                >
                  ‹
                </button>
              )}
              {selectedImage < images.length - 1 && (
                <button
                  className="lightbox-nav lightbox-next"
                  onClick={() => setSelectedImage(selectedImage + 1)}
                  aria-label="Next"
                >
                  ›
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
