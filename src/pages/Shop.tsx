import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShopifyProductGrid from '@/components/ShopifyProductGrid';

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-primary text-primary-foreground border-b-4 border-accent">
          <div className="container px-6 md:px-12">
            <div className="max-w-4xl animate-fade-up">
              <h1 className="mb-6 text-white">
                Our Collection
              </h1>
              <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed">
                Curated sneakers and streetwear. From heritage to hype. Every style, every story.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24">
          <div className="container px-6 md:px-12">
            <div className="mb-12">
              <h3 className="uppercase mb-2">All Products</h3>
              <p className="text-muted-foreground">
                Browse our complete collection
              </p>
              <div className="h-1 w-20 bg-accent mt-4" />
            </div>
            
            <ShopifyProductGrid />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="container px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
              <h2 className="uppercase text-white">
                Stay Laced.<br/>Stay Connected.
              </h2>
              <p className="text-xl font-light text-white/90">
                Join the Lace Community for early access to drops, exclusive collabs, and member-only releases.
              </p>
              <button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider px-12 py-4 text-lg transition-colors"
              >
                Join The Community
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
