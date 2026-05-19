'use client'

import type { Metadata } from "next";
import { Inter, Poly } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollIndicator from "@/components/layout/scroll-indicator";
import PolymeshCursor from "@/components/layout/polymesh-cursor";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "3DGEOSCAN - professional 3d geospatial scanning",
  description: "professional 3d geospatial scanning solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html lang="en" className={isHomePage ? "snap-y snap-mandatory scroll-smooth" : "scroll-smooth"}>
      <head>
        <title>3DGEOSCAN - professional 3d geospatial scanning</title>
        <meta name="description" content="professional 3d geospatial scanning solutions" />
        {/* Preload hero image as early as possible for fastest LCP */}
        <link
          rel="preload"
          as="image"
          href="/images/hero.jpg"
          fetchPriority="high"
        />
        {/* Preload 3D logo model so it downloads alongside Three.js, not after */}
        <link
          rel="preload"
          as="fetch"
          href="/images/models/logo.glb"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} overflow-y-scroll`}>
        <PolymeshCursor />
        <Navbar />
        <ScrollIndicator />
        <main className=" w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}