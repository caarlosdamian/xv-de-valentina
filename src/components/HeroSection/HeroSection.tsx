import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocale } from '../../hooks/useLocale';
import type { HeroProps } from '../../config/types';

export default function HeroSection({ backgroundImage, overlayOpacity = 0.6, dateBlock }: HeroProps) {
  const { t } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleScroll = () => {
    // Force music play on this specific interaction
    document.dispatchEvent(new Event('force-play-music'));
    const nextSection = document.getElementById('details');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} id="hero" className="hero-section">
      {/* Parallax background */}
      <motion.div className="hero-bg" style={{ y: bgY }}>
        <img src={backgroundImage} alt="" className="hero-bg-image" />
        <div
          className="hero-overlay"
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>

      {/* Floating particles */}
      <div className="hero-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.span
            key={i}
            className="particle"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 1, 0],
              y: [100, -100],
              x: [0, Math.random() * 60 - 30],
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

      {/* Content */}
      <motion.div className="hero-content" style={{ y: textY, opacity }}>
        <motion.span
          className="hero-pre-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {t('hero.preTitle')}
        </motion.span>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
        >
          {t('hero.name')}
        </motion.p>

        {dateBlock && (
          <motion.div
            className="hero-date-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="date-column">
              <span>{dateBlock.dayOfWeek}</span>
              <span>{dateBlock.time}</span>
            </div>
            <div className="date-divider" />
            <div className="date-column date-day">
              {dateBlock.day}
            </div>
            <div className="date-divider" />
            <div className="date-column">
              <span>{dateBlock.month}</span>
              <span>{dateBlock.year}</span>
            </div>
          </motion.div>
        )}

        <motion.p
          className="hero-invitation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          {t('hero.invitation')}
        </motion.p>

        <motion.div
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          onClick={handleScroll}
          style={{ cursor: 'pointer' }}
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↓
          </motion.span>
          <span>{t('hero.scrollHint')}</span>
        </motion.div>
      </motion.div>

      {/* Decorative gold line */}
      <div className="hero-divider" />
    </section>
  );
}
