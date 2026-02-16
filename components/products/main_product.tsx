// components/products/main_product.tsx
'use client';

import { Product } from '@/constants/products';
import {useRouter} from 'next/navigation';

interface MainProductProps {
    product: Product;
}

export default function MainProduct({ product }: MainProductProps) {
    const router = useRouter();
    const brandColorClass = 'text-orange-600';
    const brandBgClass = 'bg-[#E55C24]';

    const handleLearnMore = () => {
        // Scroll to main product section (already viewing details)
        const mainProductSection = document.getElementById('main-product');
        if (mainProductSection) {
            mainProductSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="main-product" className="py-16 md:py-20 bg-white scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 w-full">

                {/* Main Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

                    {/* --- Column 1: Product Image (Card Style) --- */}
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

                        {/* Logo/Badge row */}
                        <div className="flex items-center gap-4 mb-4">
                            {product.logos.map((logo, i) => (
                                // <span 
                                //     key={i} 
                                //     className="font-bold text-gray-700 text-sm tracking-widest uppercase border border-gray-300 px-2 py-1 rounded"
                                // >
                                //     {logo}
                                // </span>
                                <img key={i} src={`/images/${logo}`} alt="" className='h-12'/>
                            ))}
                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
                            {product.description}
                        </p>

                        {/* Two-Column List Section (Package & Software) */}
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

                            {/* Software */}
                            <div>
                                <h4 className="font-bold text-gray-900 mb-3">Software</h4>
                                <p className="text-sm text-gray-600">
                                    {product.software}
                                </p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex justify-center md:justify-start flex-wrap gap-4">
                            <button 
                                className={`${brandBgClass} text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg hover:opacity-90 transition cursor-pointer`}
                            >
                                Get a Quote
                            </button>
                            <button
                                onClick={() => router.push(`/products/${product.slug}`)}
                                className="bg-white text-[#E55C24] border-2 border-[#E55C24] font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg hover:bg-orange-50 transition cursor-pointer"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}