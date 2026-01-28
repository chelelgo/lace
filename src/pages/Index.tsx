import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandInfo from '@/components/BrandInfo';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';
import ShopifyProductCard from '@/components/ShopifyProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { fetchProducts, ShopifyProduct } from '@/lib/shopify';

const Index = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProducts(8); // Limit to 8 products for 2 rows
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BrandInfo />
        <CommunitySection />
        
        {/* Top Selling Products Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-muted/30">
          <div className="container px-4 md:px-6 lg:px-12">
            <div className="text-center mb-8 md:mb-12 animate-fade-up">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-3 md:mb-4">Top Selling</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Discover our most popular picks from the collection
              </p>
              <div className="h-1 w-16 md:w-20 bg-accent mx-auto mt-3 md:mt-4" />
            </div>
            
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-accent" />
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                {products.map((product) => (
                  <ShopifyProductCard key={product.node.id} product={product} />
                ))}
              </div>
            ) : null}
            
            <div className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Button asChild size="lg" className="uppercase tracking-wider font-bold text-sm md:text-base">
                <Link to="/shop">
                  Visit Shop
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
