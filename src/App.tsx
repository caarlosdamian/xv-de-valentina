import { useEffect } from 'react';
import { inviteConfig } from './config/inviteConfig';
import { theme } from './config/theme';
import { LocaleProvider, useLocale } from './hooks/useLocale';
import SectionRenderer from './components/SectionRenderer';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import './App.css';

// ─── Inject theme as CSS variables ─────────────────────────────────
function injectTheme() {
  const root = document.documentElement;
  const { colors, fonts, spacing, radius, shadows, gradients } = theme;

  Object.entries(colors).forEach(([k, v]) => root.style.setProperty(`--color-${k}`, v));
  Object.entries(fonts).forEach(([k, v]) => root.style.setProperty(`--font-${k}`, v));
  Object.entries(spacing).forEach(([k, v]) => root.style.setProperty(`--space-${k}`, v));
  Object.entries(radius).forEach(([k, v]) => root.style.setProperty(`--radius-${k}`, v));
  Object.entries(shadows).forEach(([k, v]) => root.style.setProperty(`--shadow-${k}`, v));
  Object.entries(gradients).forEach(([k, v]) => root.style.setProperty(`--gradient-${k}`, v));
}

// ─── Language toggle button ────────────────────────────────────────
function LangToggle() {
  const { locale, setLocale, t } = useLocale();

  return (
    <button
      className="lang-toggle"
      onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
      aria-label="Toggle language"
    >
      {t('global.langToggle')}
    </button>
  );
}

// ─── Main App ──────────────────────────────────────────────────────
function App() {
  useEffect(() => {
    injectTheme();
    document.title = inviteConfig.meta.title;
  }, []);

  return (
    <LocaleProvider defaultLocale={inviteConfig.locale}>
      <div className="invite-app">
        <LangToggle />
        <MusicPlayer {...inviteConfig.music} />
        <SectionRenderer sections={inviteConfig.sections} />
      </div>
    </LocaleProvider>
  );
}

export default App;
