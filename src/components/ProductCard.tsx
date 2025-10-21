import { Product, useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden transition-all border-0 shadow-none bg-transparent cursor-pointer">
      <div className="aspect-square overflow-hidden bg-muted/50 mb-4 relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-110 duration-700"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <CardContent className="p-0 space-y-3">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-base mb-1 uppercase tracking-wide group-hover:text-accent transition-colors">{product.name}</h3>
            <p className="text-sm text-muted-foreground font-light">{product.description}</p>
          </div>
        </div>
        <div className="flex justify-between items-center pt-2">
          <p className="text-xl font-bold">${product.price}</p>
          <Button
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-all font-bold uppercase tracking-wider text-xs bg-accent hover:bg-accent/90"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
