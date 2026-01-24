import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandInfo from '@/components/BrandInfo';
import CommunitySection from '@/components/CommunitySection';
import ShopifyProductGrid from '@/components/ShopifyProductGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BrandInfo />
        <CommunitySection />
        
        {/* Shopify Products Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">Shop Our Collection</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover premium footwear from the world's most iconic brands
              </p>
            </div>
            <ShopifyProductGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
