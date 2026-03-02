'use client';

export default function Solutions() {
    return (
        <section id="vision" className="h-100 md:min-h-screen md:snap-start flex items-center bg-white pt-0 md:pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <span className="text-xl font-bold text-orange-500 mb-8">Vision</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">
                    Dimensioning a Better World
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    We map the Earth in 3D to build smarter cities, preserve our past, and protect our future. 3D Geoscan turns geo-intelligence into the ultimate tool for a sustainable planet.
                </p>

                <div className="w-full rounded-2xl overflow-hidden max-h-[250px] md:max-h-[400px] lg:max-h-[500px]">
                    <img
                        src="./images/vision.jpg"
                        alt="Solutions"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}