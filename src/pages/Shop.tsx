import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShopFilters, { categories, brands } from '@/components/ShopFilters';
import ShopifyProductCard from '@/components/ShopifyProductCard';
import { fetchProducts, ShopifyProduct } from '@/lib/shopify';
import { Loader2, PackageX } from 'lucide-react';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Build Shopify search query from filters
  const buildSearchQuery = () => {
    const queries: string[] = [];
    
    const selectedCategoryOption = categories.find(c => c.id === selectedCategory);
    if (selectedCategoryOption?.query) {
      queries.push(`(${selectedCategoryOption.query})`);
    }
    
    const selectedBrandOption = brands.find(b => b.id === selectedBrand);
    if (selectedBrandOption?.query) {
      queries.push(`(${selectedBrandOption.query})`);
    }
    
    return queries.length > 0 ? queries.join(' AND ') : undefined;
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const query = buildSearchQuery();
        const data = await fetchProducts(50, query);
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setError('Failed to load products');
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [selectedCategory, selectedBrand]);

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-20 text-primary-foreground border-b-4 border-accent overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=1920&h=600&fit=crop)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
          
          <div className="container relative z-10 px-4 md:px-6 lg:px-12">
            <div className="max-w-4xl animate-fade-up">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
                Our Collection
              </h1>
              <p className="text-base md:text-xl lg:text-2xl font-light text-white/90 leading-relaxed">
                Curated sneakers and streetwear. From heritage to hype. Every style, every story.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-10 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6 lg:px-12">
            <div className="mb-8 md:mb-12">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold uppercase mb-2">All Products</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Browse our complete collection
              </p>
              <div className="h-1 w-16 md:w-20 bg-accent mt-3 md:mt-4" />
            </div>

            {/* Filters */}
            <ShopFilters
              selectedCategory={selectedCategory}
              selectedBrand={selectedBrand}
              onCategoryChange={setSelectedCategory}
              onBrandChange={setSelectedBrand}
              onClearFilters={handleClearFilters}
            />

            {/* Product Count */}
            {!isLoading && !error && (
              <div className="mb-6 text-sm text-muted-foreground">
                Showing {products.length} {products.length === 1 ? 'product' : 'products'}
                {(selectedCategory !== 'all' || selectedBrand !== 'all') && ' (filtered)'}
              </div>
            )}
            
            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-accent" />
              </div>
            )}

            {/* Error State */}
            {error && !isLoading && (
              <div className="text-center py-20">
                <p className="text-destructive">{error}</p>
              </div>
            )}

            {/* Empty State */}
            {!isLoading && !error && products.length === 0 && (
              <div className="text-center py-20 space-y-4">
                <PackageX className="h-16 w-16 mx-auto text-muted-foreground" />
                <h3 className="text-xl font-bold">No products found</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {selectedCategory !== 'all' || selectedBrand !== 'all'
                    ? "No products match your current filters. Try adjusting or clearing filters."
                    : "Your store doesn't have any products yet. Create your first product by telling me what you'd like to sell!"}
                </p>
              </div>
            )}

            {/* Products Grid */}
            {!isLoading && !error && products.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                {products.map((product) => (
                  <ShopifyProductCard key={product.node.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center space-y-5 md:space-y-8 animate-fade-in">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-white">
                Stay Laced.<br/>Stay Connected.
              </h2>
              <p className="text-base md:text-lg lg:text-xl font-light text-white/90">
                Join the Lace Community for early access to drops, exclusive collabs, and member-only releases.
              </p>
              <Link 
                to="/community"
                className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider px-8 md:px-12 py-3 md:py-4 text-sm md:text-lg transition-colors"
              >
                Join The Community
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
