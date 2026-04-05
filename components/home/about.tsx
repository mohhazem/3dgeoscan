import Image from "next/image";
import Logo3D from "../Logo3D";

const CheckmarkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.8011 9.99999C22.2578 12.2413 21.9323 14.5714 20.879 16.6018C19.8256 18.6322 18.108 20.24 16.0126 21.1573C13.9172 22.0746 11.5707 22.2458 9.3644 21.6424C7.15807 21.0389 5.22529 19.6974 3.88838 17.8414C2.55146 15.9854 1.89122 13.7272 2.01776 11.4434C2.14431 9.15952 3.04998 6.98808 4.58375 5.29116C6.11752 3.59424 8.18668 2.47442 10.4462 2.11844C12.7056 1.76247 15.0189 2.19185 17.0001 3.33499" stroke="#F15A27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 11L12 14L22 4" stroke="#F15A27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-white h-screen md:snap-start flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* left side - text */}
          <div>
            <span className="text-sm md:text-lg font-bold text-orange-500 mb-8">
              About us
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              We are the architects of precision
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed ">
              3D Geoscan is an Egyptian company delivering reliable,
              state-of-the-art 3D geospatial and 3D modeling solutions.
              We provide full end-to-end services
              using the latest technologies from trusted, market-leading brands.
            </p>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">
              What We Do & Why It Matters
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Our portfolio of
              3D solutions includes (but not limited to)
              Mobile Data Collection, 3D Scanning, 3D Printing, Ground
              Penetrating Radar, and Pipeline Mapping.</p>
            <p className="text-gray-600  leading-relaxed">
              The result? Higher
              quality outputs, faster project delivery, and
              productivity boosts that make timelines shorter and results
              sharper. Less waiting, more winning.
            </p>

            {/* features list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <CheckmarkIcon />
                <span className="text-sm text-gray-700">Latest generation of laser scanners</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckmarkIcon />
                <span className="text-sm text-gray-700">Strong servers for data processing & archiving</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckmarkIcon />
                <span className="text-sm text-gray-700">Seamless BIM & CAD integration</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckmarkIcon />
                <span className="text-sm text-gray-700">Comprehensive training programs</span>
              </div>
            </div>

          </div>

          {/* right side - logo with icons */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-64 h-64 lg:w-96 lg:h-96">


              {/* 3D Logo in center - FULL SIZE */}
              <div className="absolute inset-0 z-10">
                <Logo3D />
              </div>
              {/* inner circular border */}
              <div className="absolute inset-10 border-2 border-dashed border-orange-200 rounded-full animate-orbit">
                {/* inner border - top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 animate-counter-orbit">
                  <Image width={48} height={48} src="/icons/top.svg" alt="" />
                </div>

                {/* inner border - right */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 animate-counter-orbit">
                    <Image width={48} height={48} src="/icons/right.svg" alt="" />
                </div>

                {/* inner border - bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded-full p-2 animate-counter-orbit">
                  <Image width={48} height={48} src="/icons/bottom.svg" alt="" />
                </div>

                {/* inner border - left */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2  animate-counter-orbit">
                  <Image width={48} height={48} src="/icons/left.svg" alt="" />
                </div>
              </div>


              {/* outer circular border */}
              <div className="absolute -inset-5 border-2 border-dashed border-orange-300 rounded-full animate-counter-orbit">
                {/* outer border - top-left */}
                <div className="absolute top-0 left-12 bg-white rounded-full p-2 animate-orbit">
                  <Image width={48} height={48} src="/icons/tl.svg" alt="" />
                </div>

                {/* outer border - top-right */}
                <div className="absolute top-0 right-12 bg-white rounded-full p-2 animate-orbit">
                  <Image width={48} height={48} src="/icons/tr.svg" alt="" />
                </div>

                {/* outer border - bottom-right */}
                <div className="absolute bottom-0 right-12 bg-white rounded-full p-2 animate-orbit">
                  <Image width={48} height={48} src="/icons/br.svg" alt="" />
                </div>

                {/* outer border - bottom-left */}
                <div className="absolute bottom-0 left-12 bg-white rounded-full p-2 animate-orbit">
                  <Image width={48} height={48} src="/icons/bl.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}