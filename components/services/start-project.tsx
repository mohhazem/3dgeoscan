"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function start() {
  const { t } = useLanguage();

  return (
    <section id="start" className="relative py-24 md:py-32 flex items-center bg-white">

      {/* content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">


        {/* main title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {t.start.headingPrefix}{" "}
          <span className="text-orange-500">{t.start.headingHighlight}</span>
        </h2>

        {/* description */}
        <p className="text-gray-500 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          {t.start.description}
        </p>

        {/* button */}
        <Link
          href="/contact"
          className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-orange-600 transition-colors"
        >
          {t.start.contactUs}
        </Link>
      </div>
    </section>
  );
}