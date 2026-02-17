import { Link, useLocation } from 'react-router-dom';
import laceLogo from '@/assets/lace-logo.png';
import { ShopifyCartDrawer } from '@/components/ShopifyCartDrawer';
import MobileNav from '@/components/MobileNav';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/blog', label: 'Blog' },
  { href: '/community', label: 'Community' },
  { href: '/events', label: 'Events' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-12">
        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <img src={laceLogo} alt="Lace" className="h-12 md:h-20 w-auto transition-transform group-hover:scale-105" />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-bold transition-colors uppercase tracking-wider relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all ${
                  isActive 
                    ? 'text-accent after:w-full' 
                    : 'hover:text-accent after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Cart */}
        <ShopifyCartDrawer />
      </div>
    </header>
  );
};

export default Header;
