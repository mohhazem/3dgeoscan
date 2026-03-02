'use client';

import Polymesh from '@/components/layout/polymesh';
import AnimatedCounter from './animated-counter';

const StatsSection = () => {

  const stats = [
    { value: '60', suffix: '+', label: 'Projects' },
    { value: '100', suffix: '+', label: 'TB Storage' },
    { value: '10', unit: 'M', suffix: '+', label: 'm² Scanned' },
    { value: '7', unit: 'M', suffix: '+', label: 'm² Digitized' }
  ];

  return (
    <section id="stats" className="w-full bg-white h-screen md:snap-start pt-20">
      <div className="w-full h-full flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full">
          {/* Left side - Animated background */}
          <div className="relative overflow-hidden bg-[#272727]">
            <div className="absolute inset-0 w-full h-full opacity-90">
              <Polymesh />
            </div>
            <div className="relative z-10 flex flex-col justify-center h-full p-6 md:p-8 lg:p-12">
              <span className="text-sm font-bold text-orange-500 mb-4">Why choose us</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Industry-Leading Capabilities
              </h2>
              <p className="text-[#AEAEAE] leading-relaxed">
                With the latest equipment of laser scanners and a team of certified professionals, we deliver
                unmatched precision and efficiency on every project
              </p>
            </div>
          </div>

          {/* Right side - Stats grid */}
          <div className="bg-white p-6 md:p-8 lg:p-12 flex items-center">
            <div className="grid grid-cols-2 gap-6 md:gap-8 lg:gap-12 w-full">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 ml-2 flex justify-center">
                    <AnimatedCounter
                      end={parseInt(stat.value.replace(/,/g, ''))}
                      unit={stat.unit}
                      suffix={stat.suffix}
                      duration={1500} // You can tweak speed here
                    />
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;