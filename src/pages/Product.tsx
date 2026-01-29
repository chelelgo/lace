import { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductByHandle } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart, Loader2, Minus, Plus, Check } from 'lucide-react';
import { toast } from 'sonner';

interface ProductNode {
  id: string;
  title: string;
  description: string;
  handle: string;
  vendor?: string;
  productType?: string;
  tags?: string[];
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string | null;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        price: {
          amount: string;
          currencyCode: string;
        };
        availableForSale: boolean;
        selectedOptions: Array<{
          name: string;
          value: string;
        }>;
      };
    }>;
  };
  options: Array<{
    name: string;
    values: string[];
  }>;
}

const Product = () => {
  const { handle } = useParams<{ handle: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductNode | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const addItem = useCartStore(state => state.addItem);
  const isAddingToCart = useCartStore(state => state.isLoading);

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      try {
        setIsLoading(true);
        const data = await fetchProductByHandle(handle);
        setProduct(data);
        
        // Initialize selected options with first value of each option
        if (data?.options) {
          const initialOptions: Record<string, string> = {};
          data.options.forEach((option: { name: string; values: string[] }) => {
            if (option.values.length > 0) {
              initialOptions[option.name] = option.values[0];
            }
          });
          setSelectedOptions(initialOptions);
        }
      } catch (err) {
        console.error('Failed to fetch product:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [handle]);

  // Find variant that matches selected options
  const selectedVariant = useMemo(() => {
    if (!product) return null;
    
    return product.variants.edges.find((v) => {
      return v.node.selectedOptions.every(
        (opt) => selectedOptions[opt.name] === opt.value
      );
    })?.node || product.variants.edges[0]?.node;
  }, [product, selectedOptions]);

  // Check if a specific option combination is available
  const isOptionAvailable = (optionName: string, optionValue: string) => {
    if (!product) return false;
    
    const testOptions = { ...selectedOptions, [optionName]: optionValue };
    
    return product.variants.edges.some((v) => {
      const matches = v.node.selectedOptions.every(
        (opt) => testOptions[opt.name] === opt.value
      );
      return matches && v.node.availableForSale;
    });
  };

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions(prev => ({ ...prev, [optionName]: value }));
  };

  const handleAddToCart = async () => {
    if (!product || !selectedVariant) {
      toast.error('Please select all options');
      return;
    }

    await addItem({
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity,
      selectedOptions: selectedVariant.selectedOptions || []
    });
    
    toast.success('Added to cart', {
      position: 'top-center'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-accent" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Product not found</h2>
            <Button onClick={() => navigate('/')}>Back to Shop</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const images = product.images.edges;
  const price = selectedVariant?.price || product.priceRange.minVariantPrice;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-24 md:pb-8">
        {/* Mobile: Full-width image */}
        <div className="md:hidden">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur-sm"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="w-full aspect-square bg-muted">
              {images[selectedImage]?.node ? (
                <img
                  src={images[selectedImage].node.url}
                  alt={images[selectedImage].node.altText || product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  No image
                </div>
              )}
            </div>
          </div>
          {/* Thumbnail strip */}
          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto p-3 bg-muted/30">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-14 h-14 flex-shrink-0 rounded overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <img
                    src={img.node.url}
                    alt={img.node.altText || `${product.title} ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block container max-w-6xl px-6 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 -ml-2"
            size="sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Desktop Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden bg-muted rounded-lg">
                {images[selectedImage]?.node ? (
                  <img
                    src={images[selectedImage].node.url}
                    alt={images[selectedImage].node.altText || product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    No image
                  </div>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-colors ${
                        selectedImage === idx ? 'border-accent' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={img.node.url}
                        alt={img.node.altText || `${product.title} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold uppercase mb-2">{product.title}</h1>
                <p className="text-2xl font-bold text-accent">
                  {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                </p>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Desktop Option Selectors */}
              {product.options.map((option) => (
                <div key={option.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold uppercase tracking-wide">
                      {option.name}
                    </label>
                    <span className="text-sm text-muted-foreground">
                      {selectedOptions[option.name]}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {option.values.map((value) => {
                      const isSelected = selectedOptions[option.name] === value;
                      const isAvailable = isOptionAvailable(option.name, value);
                      
                      return (
                        <button
                          key={value}
                          onClick={() => handleOptionChange(option.name, value)}
                          disabled={!isAvailable}
                          className={`
                            relative px-4 py-2.5 text-sm font-medium rounded border-2 transition-all
                            ${isSelected 
                              ? 'border-accent bg-accent/10 text-accent' 
                              : 'border-border hover:border-accent/50'
                            }
                            ${!isAvailable ? 'opacity-40 cursor-not-allowed line-through' : 'cursor-pointer'}
                            min-w-[60px] text-center
                          `}
                        >
                          {isSelected && (
                            <Check className="absolute -top-1 -right-1 h-4 w-4 bg-accent text-accent-foreground rounded-full p-0.5" />
                          )}
                          {value}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Desktop Quantity */}
              <div className="space-y-3">
                <label className="text-sm font-semibold uppercase tracking-wide">Quantity</label>
                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10"
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="w-16 h-10 flex items-center justify-center border border-border rounded-md font-medium">
                    {quantity}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10"
                    onClick={() => setQuantity(q => q + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {selectedVariant && (
                <div className="p-3 bg-muted/50 rounded-lg text-sm">
                  <span className="text-muted-foreground">Selected: </span>
                  <span className="font-medium">
                    {selectedVariant.selectedOptions.map(o => o.value).join(' / ')}
                  </span>
                  {!selectedVariant.availableForSale && (
                    <span className="ml-2 text-destructive">(Out of stock)</span>
                  )}
                </div>
              )}

              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider h-14 text-base"
                onClick={handleAddToCart}
                disabled={isAddingToCart || !selectedVariant?.availableForSale}
              >
                {isAddingToCart ? (
                  <Loader2 className="h-5 w-5 animate-spin mr-2" />
                ) : (
                  <ShoppingCart className="h-5 w-5 mr-2" />
                )}
                Add to Cart
              </Button>

              {selectedVariant && !selectedVariant.availableForSale && (
                <p className="text-destructive text-sm text-center">This variant is currently out of stock</p>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Details */}
        <div className="md:hidden px-4 py-4 space-y-4">
          <div>
            <h1 className="text-xl font-bold uppercase leading-tight">{product.title}</h1>
            <p className="text-xl font-bold text-accent mt-1">
              {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
            </p>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>

          {/* Mobile AliExpress-style Option Selectors */}
          {product.options.map((option) => (
            <div key={option.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {option.name}
                </span>
                <span className="text-xs font-medium">
                  {selectedOptions[option.name]}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {option.values.map((value) => {
                  const isSelected = selectedOptions[option.name] === value;
                  const isAvailable = isOptionAvailable(option.name, value);
                  
                  return (
                    <button
                      key={value}
                      onClick={() => handleOptionChange(option.name, value)}
                      disabled={!isAvailable}
                      className={`
                        relative px-3 py-2 text-xs font-medium rounded border transition-all
                        ${isSelected 
                          ? 'border-accent bg-accent/10 text-accent' 
                          : 'border-border'
                        }
                        ${!isAvailable ? 'opacity-40 cursor-not-allowed line-through' : ''}
                      `}
                    >
                      {isSelected && (
                        <Check className="absolute -top-1 -right-1 h-3 w-3 bg-accent text-accent-foreground rounded-full p-0.5" />
                      )}
                      {value}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Mobile Quantity */}
          <div className="flex items-center justify-between py-2 border-t border-border">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Quantity</span>
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-10 text-center font-medium text-sm">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => setQuantity(q => q + 1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {selectedVariant && (
            <div className="p-2.5 bg-muted/50 rounded text-xs">
              <span className="text-muted-foreground">Selected: </span>
              <span className="font-medium">
                {selectedVariant.selectedOptions.map(o => o.value).join(' / ')}
              </span>
              {!selectedVariant.availableForSale && (
                <span className="ml-2 text-destructive">(Out of stock)</span>
              )}
            </div>
          )}
        </div>

        {/* Mobile Sticky Add to Cart Bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border p-3 flex items-center gap-3 z-50">
          <div className="flex-1">
            <p className="text-lg font-bold text-accent">
              {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
            </p>
            {selectedVariant && (
              <p className="text-xs text-muted-foreground truncate">
                {selectedVariant.selectedOptions.map(o => o.value).join(' / ')}
              </p>
            )}
          </div>
          <Button
            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase h-12"
            onClick={handleAddToCart}
            disabled={isAddingToCart || !selectedVariant?.availableForSale}
          >
            {isAddingToCart ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
