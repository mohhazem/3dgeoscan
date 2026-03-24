"use client";

import Image from "next/image";

export default function Faroprod() {
    return (
        <section id="faro-products" className="min-h-screen bg-white flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <Image
                    src="/images/productsFaro.png"
                    alt="Faro Products"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-contain"
                />
            </div>
        </section>
    );
}