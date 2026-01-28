import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandInfo from '@/components/BrandInfo';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BrandInfo />
        <CommunitySection />
        
        {/* Shop Teaser Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-6 md:px-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold uppercase">Shop Our Collection</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover premium footwear from the world's most iconic brands
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link to="/shop">
                  Visit Shop
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
