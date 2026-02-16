'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { products } from '@/constants/products';

export default function Products() {
    // Brand color for consistency
    const brandColorClass = 'text-orange-600';
    const brandBgClass = 'bg-[#E55C24]';

    // Animation state - using status for 3-step transition (exit → teleport → enter)
    const [status, setStatus] = useState<'idle' | 'exiting' | 'teleporting'>('idle');
    const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');


    const router = useRouter();

    // State for carousel
    const [currentIndex, setCurrentIndex] = useState(0);

    // Navigation handlers
    const handleNext = () => {
        setSlideDirection('right');
        setStatus('exiting'); // Step 1: Slide current card left

        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
            setStatus('teleporting'); // Step 2: Instantly position new card on right

            setTimeout(() => {
                setStatus('idle'); // Step 3: Slide new card from right to center
            }, 50);
        }, 500);
    };

    const handlePrev = () => {
        setSlideDirection('left');
        setStatus('exiting'); // Step 1: Slide current card right

        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
            setStatus('teleporting'); // Step 2: Instantly position new card on left

            setTimeout(() => {
                setStatus('idle'); // Step 3: Slide new card from left to center
            }, 50);
        }, 500);
    };

    const handleDotClick = (index: number) => {
        if (index !== currentIndex) {
            setSlideDirection(index > currentIndex ? 'right' : 'left');
            setStatus('exiting');

            setTimeout(() => {
                setCurrentIndex(index);
                setStatus('teleporting');

                setTimeout(() => {
                    setStatus('idle');
                }, 50);
            }, 500);
        }
    };

    const currentProduct = products[currentIndex];

    return (
        // Kept original Section & Container classes
        <section id='products' className="min-h-screen md:h-screen md:snap-start flex items-center bg-white py-10 md:pt-20 md:pb-0">
            <div className="max-w-7xl mx-auto px-4 w-full">

                {/* Section Heading */}
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12 leading-tight">
                    Our Products
                </h2>

                {/* Carousel Main Content Area */}
                <div className="relative flex items-center">

                    {/* Left Navigation Arrow */}
                    <button onClick={handlePrev} aria-label="Previous" className="absolute top-32 md:bottom-32 left-2 md:-left-12 lg:-left-16 z-20 p-1 md:p-2 text-gray-400 cursor-pointer hover:text-gray-800 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-12 md:h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    {/* Overflow wrapper for slide effect - doesn't affect arrows */}
                    <div className="overflow-hidden w-full">
                        {/* Main Grid Content: Changed from 3 columns to 2 columns */}
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center w-full min-h-[350px] md:min-h-[450px] ${status === 'exiting'
                                ? 'transition-all duration-500 ease-in-out ' + (slideDirection === 'right' ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0')
                                : status === 'teleporting'
                                    ? (slideDirection === 'right' ? 'translate-x-full' : '-translate-x-full') // No transition during teleport
                                    : 'transition-all duration-500 ease-in-out translate-x-0 opacity-100'
                            }`}>

                            {/* --- Column 1: Product Image (Card Style) --- */}
                            <div className="relative w-full aspect-square max-h-[300px] md:max-h-[400px] lg:max-h-[450px] bg-gray-50 rounded-[40px] flex items-center justify-center p-4 md:p-6 lg:p-8">
                                <img
                                    key={currentProduct.id}
                                    src={currentProduct.productImage}
                                    alt={currentProduct.title}
                                    className="w-full h-auto object-contain max-h-full drop-shadow-xl z-10 rounded-[40px]"
                                />
                            </div>

                            {/* --- Column 2: Product Details --- */}
                            <div className="flex flex-col justify-center h-full">

                                {/* Title & Logos */}
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{currentProduct.title}</h3>

                                {/* Simple Logo/Badge placeholder row */}
                                <div className="flex items-center gap-4 mb-4">
                                    {currentProduct.logos.map((logo, i) => (
                                        // <span key={i} className="font-bold text-gray-700 text-sm tracking-widest uppercase border border-gray-300 px-2 py-1 rounded">
                                        //     {logo}
                                        // </span>
                                        <img key={i} src={`/images/${logo}`} alt="" className='h-12'/>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8 line-clamp-3">
                                    {currentProduct.description}
                                </p>

                                {/* Two-Column List Section (Package & Software) */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-6 mb-6 md:mb-8">
                                    {/* Package Includes */}
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-3">Package Includes</h4>
                                        <ul className="space-y-2">
                                            {currentProduct.packageIncludes.map((item, idx) => (
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
                                            {currentProduct.software}
                                        </p>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex justify-center md:justify-start flex-wrap gap-4">
                                    <button className={`${brandBgClass} text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg hover:opacity-90 transition cursor-pointer`}>
                                        Get a Quote
                                    </button>
                                    <button
                                        onClick={() => router.push(`/products?product=${currentProduct.slug}`)}
                                        className="bg-white text-[#E55C24] border-2 border-[#E55C24] font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg hover:bg-orange-50 transition cursor-pointer"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Navigation Arrow */}
                    <button onClick={handleNext} aria-label="Next" className="absolute top-32 md:bottom-32 right-2 md:-right-12 lg:-right-16 z-20 p-1 md:p-2 text-gray-400 cursor-pointer hover:text-gray-800 transition">
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
                            aria-label={`Go to slide ${index + 1}`}
                            className={`w-3 h-3 rounded-full transition ${currentIndex === index
                                ? brandBgClass
                                : 'bg-gray-300 hover:bg-gray-400 cursor-pointer'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};