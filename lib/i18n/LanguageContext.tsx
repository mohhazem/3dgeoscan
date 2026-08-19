'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { en } from './translations/en';
import { ar } from './translations/ar';

export type Locale = 'en' | 'ar';

const dictionaries = { en, ar };

const STORAGE_KEY = '3dgeoscan-locale';

interface LanguageContextValue {
  locale: Locale;
  dir: 'ltr' | 'rtl';
  setLocale: (locale: Locale) => void;
  t: typeof en;
  /** Picks the Arabic value when the current locale is Arabic and a value is provided, otherwise falls back to English. */
  pick: <T>(enValue: T, arValue: T | undefined) => T;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'ar') {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const value: LanguageContextValue = {
    locale,
    dir: locale === 'ar' ? 'rtl' : 'ltr',
    setLocale,
    t: dictionaries[locale],
    pick: (enValue, arValue) => (locale === 'ar' && arValue !== undefined ? arValue : enValue),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
