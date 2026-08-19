'use client'

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollIndicator from "@/components/layout/scroll-indicator";
import PolymeshCursor from "@/components/layout/polymesh-cursor";
import { LanguageProvider, useLanguage } from "@/lib/i18n/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

function Document({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { locale, dir, t } = useLanguage();

  return (
    <html
      lang={locale}
      dir={dir}
      className={isHomePage ? "snap-y snap-mandatory scroll-smooth" : "scroll-smooth"}
    >
      <head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <Document>{children}</Document>
    </LanguageProvider>
  );
}