'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Solutions() {
    const { t } = useLanguage();

    return (
        <section id="vision" className="md:min-h-screen md:snap-start flex items-center bg-white pt-0 md:pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <span className="text-sm md:text-lg font-bold text-orange-500 mb-8">{t.vision.label}</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">
                    {t.vision.heading}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    {t.vision.description}
                </p>

                <div className="w-full rounded-2xl overflow-hidden">
                    <video
                        className="w-full h-[250px] md:h-[400px] lg:h-[400px] object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="./videos/3dgeoscan.mp4" type="video/mp4" />
                        {t.vision.videoUnsupported}
                    </video>
                </div>
            </div>
        </section>
    );
}