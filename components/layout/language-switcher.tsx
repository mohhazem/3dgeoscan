'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function LanguageSwitcher({ isSolid }: { isSolid: boolean }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`flex items-center rounded-lg border text-xs font-semibold overflow-hidden ${
        isSolid ? 'border-gray-300' : 'border-white/40'
      }`}
    >
      <button
        type="button"
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        className={`px-2.5 py-1.5 transition-colors cursor-pointer ${
          locale === 'en'
            ? 'bg-[#E55C24] text-white'
            : isSolid
            ? 'text-gray-700 hover:text-gray-900'
            : 'text-white/80 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale('ar')}
        aria-pressed={locale === 'ar'}
        className={`px-2.5 py-1.5 transition-colors cursor-pointer ${
          locale === 'ar'
            ? 'bg-[#E55C24] text-white'
            : isSolid
            ? 'text-gray-700 hover:text-gray-900'
            : 'text-white/80 hover:text-white'
        }`}
      >
        AR
      </button>
    </div>
  );
}
