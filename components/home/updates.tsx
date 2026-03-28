"use client";
import { useEffect, useState } from "react";
import { events } from "@/constants/events";
import Image from "next/image";

type EventItem = (typeof events)[number];

// News Card Component
function NewsCard({ item }: { item: EventItem }) {
    const imageIntervalMs = 4000; // 4 seconds
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.images.length);
        }, imageIntervalMs); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [item.images.length]);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Image Container */}
            <div
                className="relative h-40 md:h-64 overflow-hidden"
            >
                {item.images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`${item.title} - Image ${index + 1}`}
                        fill
                        className={`object-cover transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                            }`}
                        priority={index === 0}
                    />
                ))}
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
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4" title={item.description}>
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

    const [startIndex, setStartIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(1);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");

        const updateCardsPerView = () => {
            setCardsPerView(mediaQuery.matches ? 3 : 1);
        };

        updateCardsPerView();
        mediaQuery.addEventListener("change", updateCardsPerView);

        return () => mediaQuery.removeEventListener("change", updateCardsPerView);
    }, []);

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

    const visibleEvents = eventsCount === 0
        ? []
        : Array.from({ length: cardsPerView }, (_, offset) => {
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            </div>
        </section>
    );
}