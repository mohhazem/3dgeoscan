'use client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { products } from '@/constants/products';

export default function Products() {
    const brandColorClass = 'text-orange-600';
    const brandBgClass = 'bg-[#E55C24]';
    const transitionDurationMs = 500;

    const router = useRouter();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
        };
    }, []);

    const lockDuringAnimation = () => {
        setIsAnimating(true);

        if (animationTimeoutRef.current) {
            clearTimeout(animationTimeoutRef.current);
        }

        animationTimeoutRef.current = setTimeout(() => {
            setIsAnimating(false);
        }, transitionDurationMs);
    };

    const handleNext = () => {
        if (isAnimating) {
            return;
        }

        lockDuringAnimation();
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const handlePrev = () => {
        if (isAnimating) {
            return;
        }

        lockDuringAnimation();
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    const handleDotClick = (index: number) => {
        if (isAnimating || index === currentIndex) {
            return;
        }

        lockDuringAnimation();
        setCurrentIndex(index);
    };

    return (
        <section id='products' className="min-h-screen md:h-screen md:snap-start flex items-center bg-white py-10 md:pt-20 md:pb-0">
            <div className="max-w-7xl mx-auto px-4 w-full">

                {/* Section Heading */}
                <div className='flex-col flex md:flex-row justify-center items-center gap-3 mb-8 md:mb-12'>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Our Products
                    </h2>
                    <img className='h-16' src="images/3dGeoscanFaro2.png" alt="faro insight authorized distributor" />
                </div>

                {/* Carousel Main Content Area */}
                <div className="relative flex items-center">

                    {/* Left Navigation Arrow */}
                    <button onClick={handlePrev} disabled={isAnimating} aria-label="Previous" className="absolute top-32 md:bottom-32 left-2 md:-left-12 lg:-left-16 z-20 p-1 md:p-2 text-gray-400 cursor-pointer hover:text-gray-800 transition disabled:opacity-40 disabled:cursor-not-allowed">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-12 md:h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    {/* Overflow wrapper for slide effect */}
                    <div className="overflow-hidden w-full">
                        <div
                            className="grid grid-flow-col auto-cols-[100%] transition-transform ease-in-out"
                            style={{
                                transitionDuration: `${transitionDurationMs}ms`,
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            {products.map((product) => (
                                <div key={product.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center w-full min-h-[350px] md:min-h-[450px]">

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

                                        {/* Software Badge — only shown for software products */}
                                        {product.type === 'software' && (
                                            <span className="inline-block text-sm font-semibold text-[#E55C24] uppercase tracking-widest mb-3">
                                                Software
                                            </span>
                                        )}

                                        {/* Description */}
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8 line-clamp-3">
                                            {product.description}
                                        </p>

                                        {/* Two-Column List Section (Package Includes & Logos) */}
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

                                            {/* Logos — only shown for hardware products */}
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
                                            <button className={`${brandBgClass} text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg hover:opacity-90 transition cursor-pointer`}>
                                                Get a Quote
                                            </button>
                                            <button
                                                onClick={() => router.push(`/products?product=${product.slug}`)}
                                                className="bg-white text-[#E55C24] border-2 border-[#E55C24] font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg hover:bg-orange-50 transition cursor-pointer"
                                            >
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Navigation Arrow */}
                    <button onClick={handleNext} disabled={isAnimating} aria-label="Next" className="absolute top-32 md:bottom-32 right-2 md:-right-12 lg:-right-16 z-20 p-1 md:p-2 text-gray-400 cursor-pointer hover:text-gray-800 transition disabled:opacity-40 disabled:cursor-not-allowed">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-12 md:h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                {/* Bottom Pagination Dots */}
                <div className="flex justify-center items-center gap-3 mt-8 md:mt-10">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            disabled={isAnimating}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`w-3 h-3 rounded-full transition ${currentIndex === index
                                ? brandBgClass
                                : 'bg-gray-300 hover:bg-gray-400 cursor-pointer'
                                } disabled:opacity-60 disabled:cursor-not-allowed`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};