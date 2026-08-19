'use client';

import { useParams } from 'next/navigation';
import { products } from '@/constants/products';
import { useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [show3D, setShow3D] = useState(false);
  const { t, pick } = useLanguage();

  if (!product) return <p className="p-10">{t.productsPage.productNotFound}</p>;

  return (
    <section className="min-h-screen pt-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Product Image */}
        <div
          onClick={() => setShow3D(true)}
          className="cursor-pointer bg-gray-50 rounded-3xl p-8"
        >
          <img
            src={product.productImage}
            alt={product.title}
            className="w-full h-auto object-contain"
          />
          <p className="text-center text-sm text-gray-500 mt-3">
            {t.productsPage.clickFor3D}
          </p>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl text-gray-900 font-bold mb-4">{product.title}</h1>

          <p className="text-gray-600 mb-6">{pick(product.description, product.descriptionAr)}</p>

          <h3 className="text-gray-900 font-semibold mb-2">{t.productsPage.packageIncludes}</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6 marker:text-[#E55C24]">
            {pick(product.packageIncludes, product.packageIncludesAr).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3 className="text-gray-900 font-semibold mb-2">{t.productsPage.software}</h3>
          <p className="text-gray-600">{product.software.join(', ')}</p>
        </div>
      </div>
      </div>

      {/* 3D MODAL */}
      {show3D && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden">
            <button
              onClick={() => setShow3D(false)}
              className="absolute top-3 right-3 rtl:right-auto rtl:left-3 z-10 bg-white rounded-full px-3 py-1 text-sm font-semibold"
            >
              ✕ {t.productsPage.close}
            </button>

            <iframe
              src={product.sketchfabUrl}
              allow="autoplay; fullscreen; xr-spatial-tracking"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}