"use client";
import { useEffect, useState } from "react";
import { events } from "@/constants/events";

type EventItem = (typeof events)[number];

// News Card Component
function NewsCard({ item }: { item: EventItem }) {
    const imageIntervalMs = 3500;
    const fadeDurationMs = 500;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageVisible, setIsImageVisible] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const imagesCount = item.images.length;
    const currentImage = item.images[currentImageIndex] ?? item.images[0];

    useEffect(() => {
        setCurrentImageIndex(0);
        setIsImageVisible(true);
    }, [item.id]);

    useEffect(() => {
        if (imagesCount <= 1 || isHovered) {
            return;
        }

        const intervalId = setInterval(() => {
            setIsImageVisible(false);
        }, imageIntervalMs);

        return () => {
            clearInterval(intervalId);
        };
    }, [imagesCount, isHovered]);

    useEffect(() => {
        if (isImageVisible || imagesCount <= 1) {
            return;
        }

        const timeoutId = setTimeout(() => {
            setCurrentImageIndex((prev) => (prev + 1) % imagesCount);
            setIsImageVisible(true);
        }, fadeDurationMs);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isImageVisible, imagesCount]);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Image Container */}
            <div
                className="relative h-40 md:h-64 overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {currentImage ? (
                    <img
                        src={currentImage}
                        alt={item.title}
                        className={`w-full h-full object-cover hover:scale-105 transition-all duration-300 ${isImageVisible ? "opacity-100" : "opacity-0"}`}
                        style={{ transitionDuration: `${fadeDurationMs}ms` }}
                    />
                ) : (
                    <div className="w-full h-full bg-gray-100" />
                )}
            </div>

            {/* News Details */}
            <div className="p-6">
                {/* Date */}
                <p className="text-sm text-orange-500 font-semibold mb-3">
                    {item.date}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                    {item.description}
                </p>
            </div>
        </div>
    );
}

// Main Section Component
export default function LatestNews() {
    const brandBgClass = "bg-[#E55C24]";
    const eventsCount = events.length;
    const visibleCardsCount = 3;

    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        if (eventsCount === 0) {
            setStartIndex(0);
            return;
        }

        setStartIndex((prev) => ((prev % eventsCount) + eventsCount) % eventsCount);
    }, [eventsCount]);

    const handleNext = () => {
        if (eventsCount === 0) {
            return;
        }

        setStartIndex((prev) => (prev + 1) % eventsCount);
    };

    const handlePrev = () => {
        if (eventsCount === 0) {
            return;
        }

        setStartIndex((prev) => (prev - 1 + eventsCount) % eventsCount);
    };

    const handleDotClick = (index: number) => {
        if (eventsCount === 0) {
            return;
        }

        if (index === startIndex) {
            return;
        }

        setStartIndex(index);
    };

    const visibleEvents = eventsCount === 0
        ? []
        : Array.from({ length: visibleCardsCount }, (_, offset) => {
            const index = (startIndex + offset) % eventsCount;
            return {
                item: events[index],
                key: `${events[index].id}-${startIndex}-${offset}`,
            };
        });

    return (
        <section id="News" className="min-h-screen md:h-screen md:snap-start flex items-center bg-white py-10 md:pt-20 md:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <span className="text-sm md:text-lg font-bold text-orange-500 mb-8">
                    News & Updates
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 leading-tight">
                    Latest from 3D Geoscan
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Stay updated with our latest events and activities.
                </p>

                <div className="relative flex items-center">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous"
                        className="absolute left-0 md:-left-10 z-20 p-1 md:p-2 text-gray-400 cursor-pointer hover:text-gray-800 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <div className="w-full px-8 md:px-10">
                        <div className="grid grid-cols-3 gap-6">
                            {visibleEvents.map(({ item, key }) => (
                                <NewsCard key={key} item={item} />
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleNext}
                        aria-label="Next"
                        className="absolute right-0 md:-right-10 z-20 p-1 md:p-2 text-gray-400 cursor-pointer hover:text-gray-800 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
                {/* <div className="flex justify-center items-center gap-3 mt-8 md:mt-10">
                    {events.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`w-3 h-3 rounded-full transition ${startIndex === index
                                ? brandBgClass
                                : "bg-gray-300 hover:bg-gray-400 cursor-pointer"
                                }`}
                        />
                    ))}
                </div> */}
            </div>
        </section>
    );
}