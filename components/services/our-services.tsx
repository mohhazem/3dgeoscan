// components/services/our-services.tsx

import React from 'react';

const OurServices = () => {
  return (
    <section className="h-screen bg-white py-20 snap-start flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Label */}
        <span className="text-[#E85A2C] font-medium text-md tracking-wide">
          Our Services
        </span>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
          Reality, Digitized. From the{' '}
          <br />
          <span className="text-[#E85A2C]"> Surface to the Subsurface.</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          We eliminate the guesswork for you. 3D Geoscan combines advanced 3D laser scanning with subsurface detection.
          We provide the reliable data foundation required for smart design, clash-free execution, and asset management
          in all sectors.
        </p>
      </div>
    </section>
  );
};

export default OurServices;