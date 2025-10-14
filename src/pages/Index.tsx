import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <ProductGrid />
        </main>
        <footer className="border-t py-8 mt-16">
          <div className="container text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Lace. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;
