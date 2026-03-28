'use client';

import { Product } from '@/constants/products';

interface MainProductProps {
    product: Product;
}

export default function MainProduct({ product }: MainProductProps) {
    const brandColorClass = 'text-orange-600';
    const brandBgClass = 'bg-[#E55C24]';

    // ✅ Download handler
    const handleDownloadBrochure = () => {
        if (!product.brochure) return;
        const link = document.createElement('a');
        link.href = product.brochure;
        link.download = `${product.title} Brochure.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="main-product" className="pt-6 pb-16 md:pb-20 bg-white scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 w-full">

                {/* ✅ Photo above the grid */}
                <div className="w-full mb-8 flex justify-center">
                    <img
                        src="/images/3dGeoscanFaro2.png"
                        alt="Banner"
                        className="h-[120px] md:h-[160px] object-contain"
                    />
                </div>
                {/* Main Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center w-full min-h-[350px] md:min-h-[450px]">

                    {/* --- Column 1: Product Image --- */}
                    <div className="relative w-full aspect-square max-h-[300px] md:max-h-[400px] lg:max-h-[450px] bg-gray-50 rounded-[40px] flex items-center justify-center p-4 md:p-6 lg:p-8">
                        <img
                            src={product.productImage}
                            alt={product.title}
                            className="w-full h-auto object-contain max-h-full drop-shadow-xl z-10 rounded-[40px]"
                        />
                    </div>

                    {/* --- Column 2: Product Details --- */}
                    <div className="flex flex-col justify-center h-full">

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                            {product.title}
                        </h3>

                        {/* Software Badge */}
                        {product.type === 'software' && (
                            <span className="inline-block text-sm font-semibold text-[#E55C24] uppercase tracking-widest mb-3">
                                Software
                            </span>
                        )}

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8 line-clamp-3">
                            {product.description}
                        </p>

                        {/* Two-Column List Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-6 mb-6 md:mb-8">

                            {/* Package Includes */}
                            <div>
                                <h4 className="font-bold text-gray-900 mb-3">Package Includes</h4>
                                <ul className="space-y-2">
                                    {product.packageIncludes.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <span className={`${brandColorClass} mr-2`}>•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Logos — hardware only */}
                            {product.type === 'hardware' && (
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-3">Software</h4>
                                    <div className="flex flex-wrap items-center gap-3">
                                        {product.logos.map((logo, i) => (
                                            <img key={i} src={`/images/${logo}`} alt="" className='h-12' />
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* CTA Buttons */}
                        <div className="flex justify-center md:justify-start flex-wrap gap-4">
                            <button
                                className={`${brandBgClass} text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg hover:opacity-90 transition cursor-pointer`}
                            >
                                Get a Quote
                            </button>

                            {/* ✅ Download Brochure Button — only shown if brochure exists */}
                            {product.brochure && (
                                <button
                                    onClick={handleDownloadBrochure}
                                    className="flex items-center gap-2 bg-white text-[#E55C24] border-2 border-[#E55C24] font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg hover:bg-orange-50 transition cursor-pointer"
                                >
                                    {/* Download icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                                    </svg>
                                    Download Brochure
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}