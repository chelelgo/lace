import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandInfo from '@/components/BrandInfo';
import CommunitySection from '@/components/CommunitySection';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <BrandInfo />
          <CommunitySection />
          <ProductGrid />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
