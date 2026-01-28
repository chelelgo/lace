import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import laceLogo from '@/assets/lace-logo.png';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground mt-16">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section - Full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <img src={laceLogo} alt="Lace" className="h-10 md:h-12 w-auto mb-4 md:mb-6 brightness-0 invert" />
            <p className="text-sm text-white/70 mb-4 md:mb-6 leading-relaxed">
              The thread that ties culture together. Premium sneakers and streetwear for those who move with purpose.
            </p>
            <p className="text-sm md:text-base font-light italic text-accent">
              Stay Laced. Stay Connected.
            </p>
            <div className="flex gap-2 md:gap-3 mt-4 md:mt-6">
              <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10 rounded-full border border-white/20 hover:bg-accent hover:border-accent text-white">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10 rounded-full border border-white/20 hover:bg-accent hover:border-accent text-white">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10 rounded-full border border-white/20 hover:bg-accent hover:border-accent text-white">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-sm md:text-base uppercase tracking-wider text-white">Shop</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-white/70">
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Products</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Sneakers</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Formal Shoes</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="font-bold mb-4 md:mb-6 text-sm md:text-base uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-white/70">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/events" className="hover:text-accent transition-colors">Events</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/community" className="hover:text-accent transition-colors">Community</Link></li>
            </ul>
          </div>

          {/* Newsletter Section - Full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-bold mb-4 md:mb-6 text-sm md:text-base uppercase tracking-wider text-white">Join the Movement</h4>
            <p className="text-xs md:text-sm text-white/70 mb-4">
              Get the drop first. Subscribe for exclusive releases and community updates.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Your email" 
                type="email" 
                className="flex-1 h-10 text-sm bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent" 
              />
              <Button className="h-10 bg-accent hover:bg-accent/90 text-white font-bold text-sm px-4">Join</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 md:pt-8 mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-white/60">
          <p>&copy; 2025 Lace. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
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
