// ─── Theme Configuration ───────────────────────────────────────────
// Edit these values to change the entire look of the invitation.
// All tokens are injected as CSS custom properties at runtime.

export const theme = {
  // ── Colors ──
  colors: {
    primary: '#C1121F',       // Deep red (Rojo)
    primaryLight: '#D8A7B1',  // Rosa palo for better contrast on dark red
    primaryGlow: 'rgba(193, 18, 31, 0.25)',
    secondary: '#D4AF37',     // Gold (Dorado)
    secondaryLight: '#E5C354',
    accent: '#D8A7B1',        // Pale pink (Rosa palo)
    background: '#110505',    // Deep dark red-black
    backgroundAlt: '#1A0A0A', // Slightly lighter red-black
    surface: 'rgba(193, 18, 31, 0.08)',
    surfaceGlass: 'rgba(255, 255, 255, 0.04)',
    text: '#F0E8E8',
    textMuted: '#B89A9A',
    textHeading: '#FFF5F5',
    border: 'rgba(193, 18, 31, 0.15)',
    borderGold: 'rgba(212, 175, 55, 0.3)',
    ring: 'rgba(255, 255, 255, 0.15)',
    lightboxBg: 'rgba(0, 0, 0, 0.9)',
    buttonHover: 'rgba(193, 18, 31, 0.15)',
  },

  // ── Typography ──
  fonts: {
    heading: "'Playfair Display', Georgia, serif",
    body: "'Inter', system-ui, sans-serif",
    accent: "'Great Vibes', cursive",
  },

  // ── Spacing scale (rem) ──
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '6rem',
    xxl: '8rem',
  },

  // ── Border radius ──
  radius: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    full: '9999px',
  },

  // ── Shadows ──
  shadows: {
    glow: '0 0 60px rgba(193, 18, 31, 0.15)',
    card: '0 8px 32px rgba(0, 0, 0, 0.3)',
    gold: '0 0 40px rgba(212, 175, 55, 0.15)',
  },

  // ── Gradients ──
  gradients: {
    hero: 'linear-gradient(180deg, rgba(17,5,5,0) 0%, rgba(17,5,5,0.8) 100%)',
    heroOverlay: 'linear-gradient(180deg, rgba(17, 5, 5, 0.3) 0%, rgba(17, 5, 5, 0.7) 50%, rgba(17, 5, 5, 0.95) 100%)',
    section: 'linear-gradient(180deg, rgba(26,10,10,0) 0%, rgba(26,10,10,1) 100%)',
    gold: 'linear-gradient(135deg, #D4AF37 0%, #E5C354 50%, #D4AF37 100%)',
    primaryGlowBg: 'radial-gradient(ellipse at center, rgba(193, 18, 31, 0.12) 0%, transparent 70%)',
    detailsBg: 'radial-gradient(ellipse at center top, rgba(193, 18, 31, 0.06) 0%, transparent 60%)',
    countdownBg: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.05) 0%, transparent 60%)',
    rsvpBg: 'radial-gradient(ellipse at center bottom, rgba(193, 18, 31, 0.06) 0%, transparent 60%)',
    galleryOverlay: 'linear-gradient(180deg, transparent 60%, rgba(17, 5, 5, 0.5) 100%)',
  },
} as const;

export type Theme = typeof theme;
