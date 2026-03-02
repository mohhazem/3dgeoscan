import Link from "next/link";
import Typewriter from "./typewriter";

export default function Hero() {
  return (
    <section id = "hero" className="relative min-h-screen flex items-center md:snap-start">

      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          
        }}
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* small tag */}
        {/* <div className="inline-flex items-center gap-3 bg-orange-500/10 backdrop-blur-sm rounded-full border-orange-500 px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
          <span className="block text-[#F36F21] font-bold tracking-widest text-lg md:text-xl uppercase">
            A jump into the future
          </span>
        </div> */}

        {/* main title */}
        <h1 className="text-[#F36F21] text-white font-bold tracking-widest uppercase text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight max-w-3xl">
          A jump 
          <br />
          into <span className="text-[#F36F21]">the future</span>
        </h1>
        

        {/* description */}
        <p className="text-gray-300 sm:text-lg">
           A World Transformed by <Typewriter words={["Precision Scanning", "Digital Innovation", "3D Geo-Intelligence"]} />
        </p>
        <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
          utilizing cutting-edge laser scanning technology and we capture
          reality in unparalleled detail — enabling smarter design, faster construction, and
          precise heritage preservation.
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* <Link
            href="/videos"
            className="bg-gradient-to-r from-orange-600 to-orange-400 text-white px-6 py-3 rounded-lg text-base font-medium hover:from-orange-500 hover:to-orange-700 transition-colors text-center"
          >
            Watch our videos
          </Link> */}
            <Link
            href="https://www.youtube.com/@3DGeoscan/featured"
            className="bg-white/20  border border-white text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-white hover:text-gray-900 transition-colors text-center"
            >
            Watch our videos
            </Link>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/70 text-sm">scroll for more</span>
        <svg
          className="w-5 h-5 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}