import { Product, useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="group overflow-hidden transition-all border-0 shadow-none bg-transparent">
      <div className="aspect-square overflow-hidden bg-muted mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-500"
        />
      </div>
      <CardContent className="p-0 space-y-2">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="font-medium text-base mb-1 group-hover:opacity-60 transition-opacity">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.description}</p>
          </div>
        </div>
        <div className="flex justify-between items-center pt-2">
          <p className="text-lg font-medium">${product.price}</p>
          <Button
            size="sm"
            variant="ghost"
            className="opacity-0 group-hover:opacity-100 transition-opacity font-medium"
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
