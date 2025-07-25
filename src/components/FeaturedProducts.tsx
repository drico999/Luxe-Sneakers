import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export function FeaturedProducts() {
  // Get featured products (first 8 products)
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            HOT DAILY DEALS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exclusive sneakers. Curated with care. Priced to move.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/shop">
            <Button size="lg" className="btn-hero text-lg px-8 py-4">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}