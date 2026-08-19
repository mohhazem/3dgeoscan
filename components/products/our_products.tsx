'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ProductsHero() {
    const { t } = useLanguage();

    return (
        <section className="pt-32 pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 w-full">
                {/* Page Header */}
                <div className="text-center">
                    {/* Small Label */}
                    <span className="text-[#E55C24] font-medium text-sm md:text-base mb-4 block">
                        {t.productsPage.heroLabel}
                    </span>

                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {t.productsPage.heroHeadingPrefix}{' '}
                        <span className="text-[#E55C24]">{t.productsPage.heroHeadingHighlight}</span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                        {t.productsPage.heroDescription}
                    </p>
                </div>
            </div>
        </section>
    );
}