// components/services/our-services.tsx

'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

const OurServices = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen bg-white py-20 flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Label */}
        <span className="text-[#E85A2C] font-medium text-md tracking-wide">
          {t.servicesPage.label}
        </span>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
          {t.servicesPage.headingPrefix}{' '}
          <br />
          <span className="text-[#E85A2C]"> {t.servicesPage.headingHighlight}</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {t.servicesPage.description}
        </p>
      </div>
    </section>
  );
};

export default OurServices;