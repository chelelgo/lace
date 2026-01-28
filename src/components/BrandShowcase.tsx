import { Link } from 'react-router-dom';
import { Brand } from '@/data/brands';
import { Button } from '@/components/ui/button';
import { ChevronRight, Loader2 } from 'lucide-react';
import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';

interface BrandShowcaseProps {
  brand: Brand;
}

const BrandShowcase = ({ brand }: BrandShowcaseProps) => {
  const { products, isLoading } = useShopifyProducts({ brandFilter: brand.shopifyFilter, limit: 4 });
  const addItem = useCartStore(state => state.addItem);
  const isAddingToCart = useCartStore(state => state.isLoading);

  const handleAddToCart = async (product: typeof products[0]) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) {
      toast.error('No variant available');
      return;
    }

    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    });
    
    toast.success('Added to cart', { position: 'top-center' });
  };

  return (
    <div className="space-y-16 animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src={brand.heroImage} 
          alt={brand.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-white mb-4">{brand.name}</h2>
          <p className="text-2xl md:text-3xl font-light text-white/90 italic max-w-2xl">
            {brand.tagline}
          </p>
        </div>
      </div>

      {/* Featured Products from Shopify */}
      <div className="container px-6 md:px-12">
        <div className="mb-12">
          <h3 className="uppercase mb-2">Featured Products</h3>
          <div className="h-1 w-20 bg-accent" />
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-accent" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-border rounded-lg">
            <p className="text-muted-foreground mb-4">No products found for {brand.name}</p>
            <p className="text-sm text-muted-foreground">
              Add products with the tag, vendor, or product type "{brand.shopifyFilter}" in Shopify
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            {products.slice(0, 4).map((product) => {
              const node = product.node;
              const image = node.images.edges[0]?.node;
              const price = node.priceRange.minVariantPrice;
              const variant = node.variants.edges[0]?.node;
              
              return (
                <div 
                  key={node.id} 
                  className="group border border-border bg-card overflow-hidden hover:border-accent transition-all duration-300"
                >
                  <Link to={`/product/${node.handle}`} className="block">
                    <div className="aspect-square overflow-hidden bg-muted">
                      {image ? (
                        <img 
                          src={image.url} 
                          alt={image.altText || node.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          No image
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="p-3 md:p-6 space-y-2 md:space-y-4">
                    <div 
                      className="h-0.5 md:h-1 w-8 md:w-12 group-hover:w-16 md:group-hover:w-20 transition-all duration-300" 
                      style={{ backgroundColor: brand.accentColor }} 
                    />
                    <Link to={`/product/${node.handle}`}>
                      <h4 className="text-sm md:text-xl font-bold uppercase hover:text-accent transition-colors truncate">
                        {node.title}
                      </h4>
                    </Link>
                    <p className="text-sm md:text-lg font-bold" style={{ color: brand.accentColor }}>
                      {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                    </p>
                    <p className="text-xs md:text-sm leading-relaxed line-clamp-2 text-muted-foreground hidden sm:block">
                      {node.description || 'Premium quality sneaker'}
                    </p>
                    {variant && (
                      <Button 
                        onClick={() => handleAddToCart(product)}
                        disabled={isAddingToCart || !variant.availableForSale}
                        className="w-full font-bold uppercase tracking-wider text-xs md:text-sm h-9 md:h-10"
                        style={{ backgroundColor: brand.accentColor }}
                      >
                        {variant.availableForSale ? 'Add to Cart' : 'Out of Stock'}
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider group"
            asChild
          >
            <Link to="/shop">
              Shop All
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrandShowcase;
