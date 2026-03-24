'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const PARTNERS = [
  { id: 1, name: "Partner 1" },
  { id: 2, name: "Partner 2" },
  { id: 3, name: "Partner 3" },
  { id: 4, name: "Partner 4" },
  { id: 5, name: "Partner 5" },
  { id: 6, name: "Partner 6" },
  { id: 7, name: "Partner 7" },
  { id: 8, name: "Partner 8" },
  { id: 9, name: "Partner 9" },
  { id: 10, name: "Partner 10" },
  { id: 11, name: "Partner 11" },
  { id: 12, name: "Partner 12" },
  { id: 13, name: "Partner 13" },
  { id: 14, name: "Partner 14" },
  { id: 15, name: "Partner 15" },
  { id: 16, name: "Partner 16" },
  { id: 17, name: "Partner 17" },
  { id: 18, name: "Partner 18" },
  { id: 19, name: "Partner 19" },
  { id: 20, name: "Partner 20" },
  { id: 21, name: "Partner 21" },
  { id: 22, name: "Partner 22" },
  { id: 23, name: "Partner 23" },
  { id: 24, name: "Partner 24" },
  { id: 25, name: "Partner 25" },
  { id: 26, name: "Partner 26" },
  { id: 27, name: "Partner 27" },
  { id: 28, name: "Partner 28" },
  { id: 29, name: "Partner 29" },
  { id: 30, name: "Partner 30" },
  { id: 31, name: "Partner 31" },
  { id: 32, name: "Partner 32" },
  { id: 33, name: "Partner 33" },
  { id: 34, name: "Partner 34" },
  { id: 35, name: "Partner 35" },
  { id: 36, name: "Partner 36" },
  { id: 37, name: "Partner 37" },
  { id: 38, name: "Partner 38" },
  { id: 39, name: "Partner 39" },
];

export default function Contact() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 2;

    const animate = () => {
      position -= speed;

      const halfWidth = track.scrollWidth / 2;
      if (Math.abs(position) >= halfWidth) {
        position = 0;
      }

      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const allPartners = [...PARTNERS, ...PARTNERS];

  return (
    <section
      id="contact"
      className="h-screen md:snap-start flex flex-col items-center justify-center py-16 md:py-20 relative"
    >
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('./images/contact-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Carousel */}
      <div
        className="relative z-10 w-full mb-16 overflow-hidden bg-white"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >

        <div ref={trackRef} className="flex items-center gap-10 w-max py-4">
          {allPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 w-48 h-28 flex items-center justify-center"
            >
              <Image
                src={`/images/partners/partner-${partner.id}.png`}
                alt={partner.name}
                width={180}
                height={100}
                className="object-contain w-44 h-24 opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          BE OUR PARTNER
        </h2>

        <Link
          href="/contact"
          className="w-full sm:w-[189px] h-[48px] rounded-[300px] p-[10px] gap-[10px] flex items-center justify-center bg-[#2C2C31] text-white font-semibold hover:bg-[#3C3C41] transition-colors duration-300 mx-auto cursor-pointer"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}