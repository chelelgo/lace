import { Link } from 'react-router-dom';
import { ShopifyProduct } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface ShopifyProductCardProps {
  product: ShopifyProduct;
}

const ShopifyProductCard = ({ product }: ShopifyProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);
  
  const { node } = product;
  const image = node.images.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;
  const firstVariant = node.variants.edges[0]?.node;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!firstVariant) {
      toast.error('No variant available');
      return;
    }

    await addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || []
    });
    
    toast.success('Added to cart', {
      position: 'top-center'
    });
  };

  return (
    <Link 
      to={`/product/${node.handle}`}
      className="group block border border-border bg-card overflow-hidden hover:border-accent transition-all duration-300"
    >
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
      <div className="p-4 space-y-3">
        <h3 className="font-bold text-lg uppercase truncate">{node.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {node.description || 'No description available'}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold">
            {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
          </span>
          <Button 
            size="sm" 
            onClick={handleAddToCart}
            disabled={isLoading || !firstVariant?.availableForSale}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <ShoppingCart className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ShopifyProductCard;
