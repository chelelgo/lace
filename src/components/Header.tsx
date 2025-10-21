import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import laceLogo from '@/assets/lace-logo.png';

const Header = () => {
  const { items, getTotalItems, getTotalPrice, updateQuantity, removeFromCart } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between px-6 md:px-12">
        <a href="/" className="flex items-center space-x-2 group">
          <img src={laceLogo} alt="Lace" className="h-14 w-auto transition-transform group-hover:scale-105" />
        </a>
        
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          <a href="/" className="text-sm font-bold transition-colors hover:text-accent uppercase tracking-wider relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full">
            Home
          </a>
          <a href="/shop" className="text-sm font-bold transition-colors hover:text-accent uppercase tracking-wider relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full">
            Shop
          </a>
          <a href="/community" className="text-sm font-bold transition-colors hover:text-accent uppercase tracking-wider relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full">
            Community
          </a>
          <a href="/events" className="text-sm font-bold transition-colors hover:text-accent uppercase tracking-wider relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full">
            Events
          </a>
          <a href="/about" className="text-sm font-bold transition-colors hover:text-accent uppercase tracking-wider relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full">
            About
          </a>
          <a href="/contact" className="text-sm font-bold transition-colors hover:text-accent uppercase tracking-wider relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full">
            Contact
          </a>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="relative hover:bg-accent/10">
              <ShoppingCart className="h-6 w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Shopping Cart ({getTotalItems()} items)</SheetTitle>
            </SheetHeader>
            <div className="mt-8 space-y-4">
              {items.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">${item.price}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </Button>
                            <span className="text-sm w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto text-destructive"
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <div className="space-y-4 pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <Button className="w-full" size="lg" asChild>
                      <a href="/checkout">Proceed to Checkout</a>
                    </Button>
                  </div>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
