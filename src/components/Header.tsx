import laceLogo from '@/assets/lace-logo.png';
import { ShopifyCartDrawer } from '@/components/ShopifyCartDrawer';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between px-6 md:px-12">
        <a href="/" className="flex items-center space-x-2 group">
          <img src={laceLogo} alt="Lace" className="h-20 w-auto transition-transform group-hover:scale-105" />
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

        <ShopifyCartDrawer />
      </div>
    </header>
  );
};

export default Header;
