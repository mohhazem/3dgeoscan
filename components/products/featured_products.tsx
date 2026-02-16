'use client';

import { Product } from '@/constants/products';

interface FeaturedProductsProps {
    products: Product[];
    onSelectProduct: (product: Product) => void;
}

export default function FeaturedProducts({ products, onSelectProduct }: FeaturedProductsProps) {

    const handleViewMore = (product: Product) => {
        // Call parent function to swap products
        onSelectProduct(product);
        
        // Scroll to main product section
        const mainProductSection = document.getElementById('main-product');
        if (mainProductSection) {
            mainProductSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-16 md:py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 w-full">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-[#E55C24] font-medium text-sm md:text-base mb-2 block">
                        Products
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Our Products
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        FARO's Products at it's finest all at one place
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Product Image */}
                            <div className="flex items-center justify-center h-48 mb-6">
                                <img
                                    src={product.productImage}
                                    alt={product.title}
                                    className="max-h-full w-auto object-contain rounded-2xl drop-shadow-md"
                                />
                            </div>

                            {/* Product Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {product.title}
                            </h3>

                            {/* Key Features */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                                <ul className="space-y-2">
                                    {product.keyFeatures?.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            {/* Orange cube icon */}
                                            <svg 
                                                className="w-5 h-5 text-[#E55C24] mr-2 flex-shrink-0 mt-0.5" 
                                                fill="currentColor" 
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 2L3 7v6l7 5 7-5V7l-7-5zM10 4.236L14.764 7.5 10 10.764 5.236 7.5 10 4.236z"/>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* View More Link */}
                            <div className="flex justify-end">
                                <button
                                    onClick={() => handleViewMore(product)}
                                    className="flex items-center text-gray-700 hover:text-[#E55C24] transition font-medium text-sm group cursor-pointer"
                                >
                                    View More
                                    <svg 
                                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}