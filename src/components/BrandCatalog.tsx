import { Link } from 'react-router-dom';
import { Brand } from '@/data/brands';
import { Loader2 } from 'lucide-react';
import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';

interface BrandCatalogProps {
  brand: Brand;
}

const BrandCatalog = ({ brand }: BrandCatalogProps) => {
  const { products, isLoading } = useShopifyProducts({ brandFilter: brand.shopifyFilter, limit: 50 });
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

  if (isLoading) {
    return (
      <div className="container px-6 md:px-12 py-16">
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-accent" />
        </div>
      </div>
    );
  }

  return (
    <div className="container px-6 md:px-12 py-16">
      <div className="mb-12">
        <h3 className="uppercase mb-2">Complete Catalog</h3>
        <p className="text-muted-foreground">
          {products.length > 0 
            ? `Showing ${products.length} product${products.length !== 1 ? 's' : ''} from ${brand.name}`
            : `No products available for ${brand.name}`
          }
        </p>
        <div className="h-1 w-20 bg-accent mt-4" />
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-border rounded-lg">
          <p className="text-muted-foreground mb-4">No products found</p>
          <p className="text-sm text-muted-foreground">
            Add products with the tag, vendor, or product type "{brand.shopifyFilter}" in Shopify
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => {
            const node = product.node;
            const image = node.images.edges[0]?.node;
            const price = node.priceRange.minVariantPrice;
            const variant = node.variants.edges[0]?.node;

            return (
              <div 
                key={node.id}
                className="group border border-border bg-card hover:border-accent transition-all duration-300 overflow-hidden"
              >
                {/* Product Image */}
                <Link to={`/product/${node.handle}`} className="block">
                  <div className="aspect-square bg-muted relative overflow-hidden">
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
                    <div className="absolute top-4 right-4">
                      <span 
                        className="text-xs font-bold uppercase px-2 py-1 bg-background/90 backdrop-blur-sm"
                        style={{ color: brand.accentColor }}
                      >
                        {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  <div>
                    <Link to={`/product/${node.handle}`}>
                      <h4 className="font-bold uppercase text-sm mb-1 group-hover:text-accent transition-colors">
                        {node.title}
                      </h4>
                    </Link>
                    {node.productType && (
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {node.productType}
                      </p>
                    )}
                  </div>
                  
                  <p className="text-xs leading-relaxed line-clamp-2 text-muted-foreground">
                    {node.description || 'Premium quality sneaker'}
                  </p>
                  
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm font-bold" style={{ color: brand.accentColor }}>
                      {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Link 
                      to={`/product/${node.handle}`}
                      className="flex-1 text-xs font-bold uppercase tracking-wider py-2 border border-border hover:border-accent hover:text-accent transition-colors text-center"
                    >
                      View
                    </Link>
                    {variant && (
                      <button 
                        onClick={() => handleAddToCart(product)}
                        disabled={isAddingToCart || !variant.availableForSale}
                        className="flex-1 text-xs font-bold uppercase tracking-wider py-2 text-white transition-colors disabled:opacity-50"
                        style={{ backgroundColor: brand.accentColor }}
                      >
                        {variant.availableForSale ? 'Add to Cart' : 'Sold Out'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BrandCatalog;
