import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShopifyProductGrid from '@/components/ShopifyProductGrid';

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground border-b-4 border-accent">
          <div className="container px-4 md:px-6 lg:px-12">
            <div className="max-w-4xl animate-fade-up">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
                Our Collection
              </h1>
              <p className="text-base md:text-xl lg:text-2xl font-light text-white/90 leading-relaxed">
                Curated sneakers and streetwear. From heritage to hype. Every style, every story.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-10 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6 lg:px-12">
            <div className="mb-8 md:mb-12">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold uppercase mb-2">All Products</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Browse our complete collection
              </p>
              <div className="h-1 w-16 md:w-20 bg-accent mt-3 md:mt-4" />
            </div>
            
            <ShopifyProductGrid />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center space-y-5 md:space-y-8 animate-fade-in">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-white">
                Stay Laced.<br/>Stay Connected.
              </h2>
              <p className="text-base md:text-lg lg:text-xl font-light text-white/90">
                Join the Lace Community for early access to drops, exclusive collabs, and member-only releases.
              </p>
              <Link 
                to="/community"
                className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider px-8 md:px-12 py-3 md:py-4 text-sm md:text-lg transition-colors"
              >
                Join The Community
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
