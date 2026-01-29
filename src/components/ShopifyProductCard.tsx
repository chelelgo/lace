import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ShopifyProduct } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';

interface ShopifyProductCardProps {
  product: ShopifyProduct;
}

const ShopifyProductCard = ({ product }: ShopifyProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  const { node } = product;
  const images = node.images.edges;
  const price = node.priceRange.minVariantPrice;
  const firstVariant = node.variants.edges[0]?.node;

  // Auto-slideshow on hover
  useEffect(() => {
    if (!isHovering || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1500);
    
    return () => clearInterval(interval);
  }, [isHovering, images.length]);

  const handlePrevImage = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNextImage = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

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

  const currentImage = images[currentImageIndex]?.node;

  return (
    <Link 
      to={`/product/${node.handle}`}
      className="group block border border-border bg-card overflow-hidden hover:border-accent transition-all duration-300"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setCurrentImageIndex(0);
      }}
    >
      <div className="aspect-square overflow-hidden bg-muted relative">
        {currentImage ? (
          <img 
            src={currentImage.url} 
            alt={currentImage.altText || node.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
            No image
          </div>
        )}
        
        {/* Navigation arrows - show on hover when multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-1 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            
            {/* Image dots indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentImageIndex 
                      ? 'bg-accent w-3' 
                      : 'bg-background/60'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-3 md:p-4 space-y-2 md:space-y-3">
        <h3 className="font-bold text-sm md:text-lg uppercase truncate">{node.title}</h3>
        <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 hidden sm:block">
          {node.description || 'No description available'}
        </p>
        <div className="flex items-center justify-between pt-1 md:pt-2">
          <span className="text-sm md:text-lg font-bold">
            {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
          </span>
          <Button 
            size="sm" 
            onClick={handleAddToCart}
            disabled={isLoading || !firstVariant?.availableForSale}
            className="bg-accent hover:bg-accent/90 text-accent-foreground h-8 w-8 md:h-9 md:w-auto md:px-3 p-0 md:p-2"
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
