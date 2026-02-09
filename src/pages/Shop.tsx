import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShopFilters, { categories, brands, sizes, PRICE_MIN, PRICE_MAX } from '@/components/ShopFilters';
import ShopifyProductCard from '@/components/ShopifyProductCard';
import { fetchProducts, ShopifyProduct } from '@/lib/shopify';
import { Loader2, PackageX, ChevronLeft, ChevronRight, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const PRODUCTS_PER_PAGE = 20;

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([PRICE_MIN, PRICE_MAX]);
  const [allProducts, setAllProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Build Shopify search query from category/brand filters
  const buildSearchQuery = () => {
    const queries: string[] = [];
    
    if (selectedCategories.length > 0) {
      const categoryQueries = selectedCategories
        .map(id => categories.find(c => c.id === id)?.query)
        .filter(Boolean);
      if (categoryQueries.length > 0) {
        queries.push(`(${categoryQueries.join(' OR ')})`);
      }
    }
    
    if (selectedBrands.length > 0) {
      const brandQueries = selectedBrands
        .map(id => brands.find(b => b.id === id)?.query)
        .filter(Boolean);
      if (brandQueries.length > 0) {
        queries.push(`(${brandQueries.join(' OR ')})`);
      }
    }
    
    return queries.length > 0 ? queries.join(' AND ') : undefined;
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const query = buildSearchQuery();
        const data = await fetchProducts(250, query);
        setAllProducts(data);
        setCurrentPage(1);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setError('Failed to load products');
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [selectedCategories, selectedBrands]);

  // Client-side filtering for price and size
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const price = parseFloat(product.node.priceRange.minVariantPrice.amount);

      // Price filter
      if (price < priceRange[0]) return false;
      if (priceRange[1] < PRICE_MAX && price > priceRange[1]) return false;

      // Size filter — check if any variant has a matching size option
      if (selectedSizes.length > 0) {
        const productSizes = product.node.variants.edges.flatMap(v =>
          v.node.selectedOptions
            .filter(o => o.name.toLowerCase() === 'size')
            .map(o => o.value)
        );
        const hasMatchingSize = selectedSizes.some(s => productSizes.includes(s));
        if (!hasMatchingSize) return false;
      }

      return true;
    });
  }, [allProducts, priceRange, selectedSizes]);

  // Reset page when client-side filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [priceRange, selectedSizes]);

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleBrandToggle = (brandId: string) => {
    setSelectedBrands(prev =>
      prev.includes(brandId)
        ? prev.filter(id => id !== brandId)
        : [...prev, brandId]
    );
  };

  const handleSizeToggle = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedSizes([]);
    setPriceRange([PRICE_MIN, PRICE_MAX]);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedBrands.length > 0 || selectedSizes.length > 0 || priceRange[0] !== PRICE_MIN || priceRange[1] !== PRICE_MAX;
  const activeFilterCount = selectedCategories.length + selectedBrands.length + selectedSizes.length + (priceRange[0] !== PRICE_MIN || priceRange[1] !== PRICE_MAX ? 1 : 0);

  const FilterContent = () => (
    <ShopFilters
      selectedCategories={selectedCategories}
      selectedBrands={selectedBrands}
      selectedSizes={selectedSizes}
      priceRange={priceRange}
      onCategoryToggle={handleCategoryToggle}
      onBrandToggle={handleBrandToggle}
      onSizeToggle={handleSizeToggle}
      onPriceRangeChange={setPriceRange}
      onClearFilters={handleClearFilters}
    />
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-20 text-primary-foreground border-b-4 border-accent overflow-hidden">
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

        {/* Products Section */}
        <section className="py-10 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              
              {/* Desktop Sidebar Filters */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-24">
                  <FilterContent />
                </div>
              </aside>

              {/* Main Content */}
              <div className="flex-1">
                {/* Mobile Filter Button & Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold uppercase mb-1">All Products</h3>
                    {!isLoading && !error && (
                      <p className="text-sm text-muted-foreground">
                        Showing {paginatedProducts.length} of {filteredProducts.length} products
                        {hasActiveFilters && ' (filtered)'}
                      </p>
                    )}
                  </div>

                  {/* Mobile Filter Button */}
                  <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="lg:hidden">
                        <SlidersHorizontal className="h-4 w-4 mr-2" />
                        Filters
                        {hasActiveFilters && (
                          <span className="ml-2 bg-accent text-accent-foreground text-xs px-1.5 py-0.5 rounded-full">
                            {activeFilterCount}
                          </span>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6 overflow-y-auto max-h-[calc(100vh-120px)]">
                        <FilterContent />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>

                {/* Active Filter Tags */}
                {hasActiveFilters && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedCategories.map(id => {
                      const category = categories.find(c => c.id === id);
                      return category ? (
                        <Button
                          key={id}
                          variant="secondary"
                          size="sm"
                          onClick={() => handleCategoryToggle(id)}
                          className="h-7 text-xs"
                        >
                          {category.label}
                          <X className="h-3 w-3 ml-1" />
                        </Button>
                      ) : null;
                    })}
                    {selectedBrands.map(id => {
                      const brand = brands.find(b => b.id === id);
                      return brand ? (
                        <Button
                          key={id}
                          variant="secondary"
                          size="sm"
                          onClick={() => handleBrandToggle(id)}
                          className="h-7 text-xs"
                        >
                          {brand.label}
                          <X className="h-3 w-3 ml-1" />
                        </Button>
                      ) : null;
                    })}
                    {selectedSizes.map(size => (
                      <Button
                        key={`size-${size}`}
                        variant="secondary"
                        size="sm"
                        onClick={() => handleSizeToggle(size)}
                        className="h-7 text-xs"
                      >
                        Size {size}
                        <X className="h-3 w-3 ml-1" />
                      </Button>
                    ))}
                    {(priceRange[0] !== PRICE_MIN || priceRange[1] !== PRICE_MAX) && (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setPriceRange([PRICE_MIN, PRICE_MAX])}
                        className="h-7 text-xs"
                      >
                        ${priceRange[0]} – ${priceRange[1]}{priceRange[1] === PRICE_MAX ? '+' : ''}
                        <X className="h-3 w-3 ml-1" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleClearFilters}
                      className="h-7 text-xs text-muted-foreground"
                    >
                      Clear all
                    </Button>
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
                {!isLoading && !error && filteredProducts.length === 0 && (
                  <div className="text-center py-20 space-y-4">
                    <PackageX className="h-16 w-16 mx-auto text-muted-foreground" />
                    <h3 className="text-xl font-bold">No products found</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      {hasActiveFilters
                        ? "No products match your current filters. Try adjusting or clearing filters."
                        : "Your store doesn't have any products yet. Create your first product by telling me what you'd like to sell!"}
                    </p>
                    {hasActiveFilters && (
                      <Button variant="outline" onClick={handleClearFilters}>
                        Clear Filters
                      </Button>
                    )}
                  </div>
                )}

                {/* Products Grid */}
                {!isLoading && !error && paginatedProducts.length > 0 && (
                  <>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                      {paginatedProducts.map((product) => (
                        <ShopifyProductCard key={product.node.id} product={product} />
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex items-center justify-center gap-2 mt-12">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => goToPage(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <div className="flex items-center gap-1">
                          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                            const showPage = 
                              page === 1 || 
                              page === totalPages || 
                              Math.abs(page - currentPage) <= 1;
                            
                            const showEllipsis = 
                              (page === 2 && currentPage > 3) ||
                              (page === totalPages - 1 && currentPage < totalPages - 2);

                            if (showEllipsis && !showPage) {
                              return <span key={page} className="px-2 text-muted-foreground">...</span>;
                            }

                            if (!showPage) return null;

                            return (
                              <Button
                                key={page}
                                variant={currentPage === page ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => goToPage(page)}
                                className="w-9 h-9"
                              >
                                {page}
                              </Button>
                            );
                          })}
                        </div>

                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => goToPage(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
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