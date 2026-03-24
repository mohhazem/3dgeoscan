"use client";

import { useState, useRef } from "react";

export default function Service1() {
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
        "Rapid Mobile Data Capture.",
        "Exceptional precision",
        "True-Color RGB Colorization",
        "Georeferenced Spatial Accuracy",
    ];

    // Application Industries Data with PNG icons
    const applications = [
        { icon: "/Service_icons/Industry.png", name: "Industry" },
        { icon: "/Service_icons/AEC.png", name: "AEC" },
        { icon: "/Service_icons/Oil%20and%20Gas.png", name: "Oil and Gas" },
        { icon: "/Service_icons/Heritage.png", name: "Heritage" },
        { icon: "/Service_icons/Archeology.png", name: "Archeology" },
        
    ];

    return (
        <section id="3d-scanning" className="min-h-screen md:h-screen bg-white py-20 flex items-center">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Side - Text Content */}
                    <div className="order-2 lg:order-1">
                        {/* Main Title */}
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            3D Laser Scanning
                        </h2>

                        {/* Subtitle */}
                        <h3 className="text-xl lg:text-2xl font-semibold text-[#E85A2C] mb-4">
                            Precision Reality Capture for Complex Environments
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our advanced LiDAR technology captures millions of precise data points
                            to generate a point cloud that perfectly matches the physical environment.
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
                                        className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-full hover:border-[#E85A2C] transition-colors"
                                    >
                                        <img
                                            src={app.icon}
                                            alt={app.name}
                                            width={20}
                                            height={20}
                                            className="object-contain w-5 h-5"
                                            onError={(e) => {
                                                console.error(`Failed to load icon: ${app.icon}`);
                                            }}
                                        />
                                        <span className="text-gray-700 text-sm font-medium">{app.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image Slider */}
                    <div className="order-1 lg:order-2">
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
                                    src="/images/3d-before.jpg"
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
                                    src="/images/3d-after.jpg"
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}