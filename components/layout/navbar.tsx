"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeStyle, setActiveStyle] = useState({ left: 0, width: 0 });
  const [hoverStyle, setHoverStyle] = useState({ left: 0, width: 0 });
  const [indicatorReady, setIndicatorReady] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const isHomePage = pathname === "/";
  const isSolid = scrolled || !isHomePage;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const activeLink = linkRefs.current[pathname];
    const navContainer = navRef.current;

    if (activeLink && navContainer) {
      const navRect = navContainer.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setActiveStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
      setIndicatorReady(true);
    } else {
      setIndicatorReady(false);
    }
  }, [pathname]);

  // The indicator follows hover when hovering, otherwise snaps to active
  const indicatorStyle = isHovering ? hoverStyle : activeStyle;

  const handleMouseEnter = (href: string) => {
    const link = linkRefs.current[href];
    const navContainer = navRef.current;
    if (link && navContainer) {
      const navRect = navContainer.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      setHoverStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isSolid ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="3d geoscan logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl">
              <span className={`${isSolid ? "text-gray-900" : "text-white"}`}>3D</span>
              <span className={`${isSolid ? "text-gray-900" : "text-white"} font-bold`}> GEOSCAN</span>
            </span>
          </Link>

          {/* desktop menu */}
          <div
            ref={navRef}
            className="hidden md:flex items-center gap-8 relative"
            onMouseLeave={handleMouseLeave}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                ref={(el: HTMLAnchorElement | null) => {
                  linkRefs.current[link.href] = el;
                }}
                onMouseEnter={() => handleMouseEnter(link.href)}
                className={`relative transition-colors text-sm font-medium pb-1 ${
                  isSolid
                    ? "text-gray-900 hover:text-gray-700"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* sliding indicator */}
            <span
              className={`absolute bottom-0 h-[2.5px] rounded-full bg-[#E55C24] transition-all duration-300 ease-in-out ${
                indicatorReady || isHovering ? "opacity-100" : "opacity-0"
              }`}
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
            />
          </div>

          {/* contact button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-[#E55C24] text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
            >
              Contact us
            </Link>
          </div>

          {/* mobile menu button */}
          <button
            className={`md:hidden ${isSolid ? "text-gray-900" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md rounded-lg p-4 mt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative block py-3 transition-colors text-sm font-medium
                  text-white/80 hover:text-white
                  after:absolute after:left-0 after:bottom-1
                  after:h-[2.5px] after:rounded-full after:bg-[#E55C24]
                  after:transition-all after:duration-300 after:ease-in-out
                  ${pathname === link.href ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-4 bg-orange-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}