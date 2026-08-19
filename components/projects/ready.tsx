"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Ready() {
  const { t } = useLanguage();

  return (
    <section id="ready" className="relative py-24 md:py-32 flex items-center bg-white">

      {/* content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">


        {/* main title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {t.ready.headingPrefix}{" "}
          <span className="text-orange-500">{t.ready.headingHighlight}</span>
        </h2>

        {/* description */}
        <p className="text-gray-500 text-base font-semibold sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          {t.ready.description}
        </p>

        {/* button */}
        <Link
          href="/contact"
          className="inline-block bg-[#E55C24] text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-orange-600 transition-colors"
        >
          {t.ready.contactUs}
        </Link>
      </div>
    </section>
  );
}