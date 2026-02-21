"use client";

import { useState, useRef } from "react";

export default function Service2() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const handleMove = (clientX: number) => {
        if (!containerRef.current || !isDragging.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    };

    const handleMouseDown = () => {
        isDragging.current = true;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    // Key Features Data
    const features = [
        "Non-Destructive detection without digging .",
        "Clear utility maps and full site transparency.",
        "3D BIM integration.",
        "Full data for reducing risk and enhancing safety",
    ];

    // Application Industries Data
    const applications = [
        { icon: "building", name: "Oil and gas (pipeline mapping)" },
        { icon: "building", name: "Industrial and manufacturing (factory expansions)" },
        { icon: "building", name: "Construction and infrastructure (Site preparation and urban redevelopment)" },
    ];

    return (
        <section id="underground-utilities" className="min-h-screen md:h-screen bg-gray-50 py-20 flex items-center">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Side - Image Slider (SWAPPED) */}
                    <div className="order-1">
                        <div
                            ref={containerRef}
                            className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-lg"
                            onMouseMove={handleMouseMove}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            onTouchMove={handleTouchMove}
                            onTouchStart={handleMouseDown}
                            onTouchEnd={handleMouseUp}
                        >
                            {/* Before Image (Left Side) */}
                            <div className="absolute inset-0">
                                <img
                                    src="/images/ug-before.jpg"
                                    alt="Before - Original scan"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* After Image (Right Side) */}
                            <div
                                className="absolute inset-0"
                                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                            >
                                <img
                                    src="/images/ug-after.jpg"
                                    alt="After - 3D model"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Slider Handle */}
                            <div
                                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200">
                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-600 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                            {/* PlaceHolder Button */}
                            <div className="absolute bottom-4 right-4">
                                <button className="bg-[#E85A2C] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#d14a1f] transition-colors">
                                    PlaceHolder
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Text Content (SWAPPED) */}
                    <div className="order-2">
                        {/* Main Title */}
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Underground Utilities
                        </h2>

                        {/* Subtitle */}
                        <h3 className="text-xl lg:text-2xl font-semibold text-[#E85A2C] mb-4">
                            A clear view of everything above
                            and below the ground in one place
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We provide comprehensive subsurface utility detection services. We
                            map the invisible infrastructure beneath your site to prevent costly
                            utility strikes and project delays
                        </p>

                        {/* Key Features */}
                        <div className="mb-8">
                            <h4 className="text-lg font-bold text-gray-900 mb-4">Key Features</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="flex-shrink-0">
                                            <svg className="w-5 h-5 text-[#E85A2C]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Application */}
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4">Application</h4>
                            <div className="flex flex-wrap gap-3">
                                {applications.map((app, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 border border-gray-200 bg-white px-4 py-2 rounded-full hover:border-[#E85A2C] transition-colors"
                                    >
                                        {app.icon === "location" ? (
                                            <svg className="w-4 h-4 text-[#E85A2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4 text-[#E85A2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        )}
                                        <span className="text-gray-700 text-sm font-medium">{app.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}