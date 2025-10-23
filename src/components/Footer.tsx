import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import laceLogo from '@/assets/lace-logo.png';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground mt-16">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <img src={laceLogo} alt="Lace" className="h-20 w-auto mb-6 brightness-0 invert" />
            <p className="text-sm text-white/70 mb-6 leading-relaxed">
              The thread that ties culture together. Premium sneakers and streetwear for those who move with purpose.
            </p>
            <p className="text-base font-light italic text-accent">
              Stay Laced. Stay Connected.
            </p>
            <div className="flex gap-3 mt-6">
              <Button variant="ghost" size="icon" className="rounded-full border border-white/20 hover:bg-accent hover:border-accent text-white">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full border border-white/20 hover:bg-accent hover:border-accent text-white">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full border border-white/20 hover:bg-accent hover:border-accent text-white">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-white">Shop</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#products" className="hover:text-accent transition-colors">All Products</a></li>
              <li><a href="#products?category=sneakers" className="hover:text-accent transition-colors">Sneakers</a></li>
              <li><a href="#products?category=formal" className="hover:text-accent transition-colors">Formal Shoes</a></li>
              <li><a href="#products?brand=nike" className="hover:text-accent transition-colors">Nike</a></li>
              <li><a href="#products?brand=adidas" className="hover:text-accent transition-colors">Adidas</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="/about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/events" className="hover:text-accent transition-colors">Events</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-white">Join the Movement</h4>
            <p className="text-sm text-white/70 mb-4">
              Get the drop first. Subscribe for exclusive releases and community updates.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Your email" 
                type="email" 
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent" 
              />
              <Button className="bg-accent hover:bg-accent/90 text-white font-bold">Join</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
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
