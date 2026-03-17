"use client";

// News data - ADD YOUR IMAGES HERE
const newsItems = [
    {
        id: 1,
        title: "FARO Technology Day 2025",
        date: "November 14, 2025",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        image: "/images/conf.png",  // <-- Add your image path
    },
    {
        id: 2,
        title: "FARO Technology Day 2025",
        date: "November 14, 2025",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        image: "/images/conf.png",  // <-- Add your image path
    },
    {
        id: 3,
        title: "FARO Technology Day 2025",
        date: "November 14, 2025",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        image: "/images/conf.png",  // <-- Add your image path
    },
];

// News Card Component
function NewsCard({ item }: { item: typeof newsItems[0] }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Image Container */}
            <div className="relative h-40 md:h-64 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
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
                <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                </p>
            </div>
        </div>
    );
}

// Main Section Component
export default function LatestNews() {
    return (
        <section id="News" className="min-h-screen md:h-screen md:snap-start flex items-center bg-white py-10 md:pt-20 md:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header */}
                {/* <div className="mb-12"> */}
                    <span className="text-sm md:text-lg font-bold text-orange-500 mb-8">
                        News & Updates
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 leading-tight">
                        Latest from 3D Geoscan
                    </h2>
                    <p className="text-gray-600 mb-2 leading-relaxed">
                        Latest from 3D Geoscan
                    </p>
                {/* </div> */}

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsItems.map((item) => (
                        <NewsCard key={item.id} item={item} />
                    ))}
                </div>

            </div>
        </section>
    );
}