import { Suspense } from 'react';
import ProductsHero from '@/components/products/our_products';
import ProductsContent from '@/components/products/products-content';
import Faroprod from '@/components/products/Faroprod';

export default function ProductsPage() {
    return (
        <main>
            <ProductsHero />
            <Suspense fallback={<div className="min-h-screen">Loading...</div>}>
                <ProductsContent />
            </Suspense>
            <Faroprod />
            
        </main>
    );
}