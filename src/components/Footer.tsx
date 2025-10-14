import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Lace</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Premium footwear designed for comfort and style. Step into excellence with every pair.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#products" className="hover:text-accent transition-colors">All Products</a></li>
              <li><a href="#products?category=sneakers" className="hover:text-accent transition-colors">Sneakers</a></li>
              <li><a href="#products?category=formal" className="hover:text-accent transition-colors">Formal Shoes</a></li>
              <li><a href="#products?brand=nike" className="hover:text-accent transition-colors">Nike</a></li>
              <li><a href="#products?brand=adidas" className="hover:text-accent transition-colors">Adidas</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get special offers and updates.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email" type="email" className="flex-1" />
              <Button>Join</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Lace. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
