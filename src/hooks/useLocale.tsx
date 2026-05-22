import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { es, type LocaleStrings } from '../i18n/es';
import { en } from '../i18n/en';

// ─── Locale dictionaries ───────────────────────────────────────────
const dictionaries: Record<string, LocaleStrings> = { es, en };

// ─── Helper: deep key access with dot notation ─────────────────────
type NestedKeyOf<T> = T extends object
  ? { [K in keyof T & string]: T[K] extends object ? `${K}.${NestedKeyOf<T[K]>}` : K }[keyof T & string]
  : never;

export type LocaleKey = NestedKeyOf<LocaleStrings>;

function getNestedValue(obj: unknown, path: string): string {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return path; // fallback: return the key itself
  }, obj) as string;
}

// ─── Context ───────────────────────────────────────────────────────
interface LocaleContextValue {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string, replacements?: Record<string, string>) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

// ─── Provider ──────────────────────────────────────────────────────
interface LocaleProviderProps {
  defaultLocale?: string;
  children: ReactNode;
}

export function LocaleProvider({ defaultLocale = 'es', children }: LocaleProviderProps) {
  const [locale, setLocale] = useState(defaultLocale);

  const t = useCallback(
    (key: string, replacements?: Record<string, string>) => {
      const dict = dictionaries[locale] ?? dictionaries.es;
      let value = getNestedValue(dict, key);

      if (replacements) {
        Object.entries(replacements).forEach(([k, v]) => {
          value = value.replace(`{${k}}`, v);
        });
      }

      return value;
    },
    [locale]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

// ─── Hook ──────────────────────────────────────────────────────────
export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
