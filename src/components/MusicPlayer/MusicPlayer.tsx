import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '../../hooks/useLocale';
import type { MusicConfig } from '../../config/types';

export default function MusicPlayer({ enabled, src, autoplay }: MusicConfig) {
  const { t } = useLocale();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const tryPlay = useCallback(() => {
    if (!audioRef.current || !enabled) return;
    audioRef.current.play().then(() => {
      setPlaying(true);
      setHasInteracted(true);
    }).catch(() => {
      // Autoplay blocked — wait for user interaction
    });
  }, [enabled]);

  // Attempt autoplay on mount
  useEffect(() => {
    if (autoplay && enabled) {
      tryPlay();
    }
  }, [autoplay, enabled, tryPlay]);

  // Listen for first user interaction to unblock autoplay
  useEffect(() => {
    if (hasInteracted || !autoplay || !enabled) return;

    const handleInteraction = () => {
      tryPlay();
    };

    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('scroll', handleInteraction, { once: true });
    document.addEventListener('mousemove', handleInteraction, { once: true });
    document.addEventListener('keydown', handleInteraction, { once: true });
    document.addEventListener('force-play-music', handleInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      document.removeEventListener('mousemove', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('force-play-music', handleInteraction);
    };
  }, [hasInteracted, autoplay, enabled, tryPlay]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
      setHasInteracted(true);
    }
  };

  if (!enabled) return null;

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />
      <motion.button
        className="music-toggle"
        onClick={toggle}
        aria-label={playing ? t('music.pause') : t('music.play')}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {playing ? (
            <motion.span key="playing" className="music-icon" initial={{ rotate: -180, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 180, opacity: 0 }}>
              <span className="music-bars">
                <span className="bar" /><span className="bar" /><span className="bar" />
              </span>
            </motion.span>
          ) : (
            <motion.span key="paused" className="music-icon" initial={{ rotate: -180, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 180, opacity: 0 }}>
              ♪
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
