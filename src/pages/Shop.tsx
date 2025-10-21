import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import CategoryFilter from '@/components/CategoryFilter';
import { Button } from '@/components/ui/button';

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative py-20 md:py-32 bg-primary text-primary-foreground">
          <div className="container px-6 md:px-12">
            <div className="max-w-4xl animate-fade-up">
              <h1 className="mb-8 text-white">
                Shop The<br />Collection
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl font-light text-white/90 leading-relaxed">
                Premium sneakers and streetwear. Curated for culture. Styled for the streets.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Drop Banner */}
        <section className="py-12 bg-accent text-accent-foreground">
          <div className="container px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2">Limited Drop Alert</h3>
                <p className="text-sm md:text-base font-light">
                  New arrivals dropping this week. Don't miss out on exclusive releases.
                </p>
              </div>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider px-8"
              >
                View New Drops
              </Button>
            </div>
          </div>
        </section>

        {/* Category Info */}
        <section className="py-8 border-b border-border bg-background">
          <div className="container px-6 md:px-12">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">
              Showing all products
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-6 md:px-12">
            <ProductGrid />
          </div>
        </section>

        {/* Editor's Picks */}
        <section className="py-24 md:py-32 bg-muted">
          <div className="container px-6 md:px-12">
            <div className="mb-16">
              <h2 className="uppercase mb-4">Editor's Picks</h2>
              <p className="text-lg font-light text-muted-foreground">
                Hand-selected styles that define the culture right now.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group border border-border overflow-hidden hover:border-accent transition-colors animate-fade-in bg-background">
                  <div className="relative h-80 overflow-hidden bg-muted">
                    <img 
                      src={`https://images.unsplash.com/photo-${i === 1 ? '1542291026' : i === 2 ? '1491553895' : '1460353581641'}-37baddab0fa2?w=600&h=800&fit=crop`}
                      alt="Editor's Pick"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold uppercase mb-2">Featured Style {i}</h4>
                    <p className="text-sm text-muted-foreground mb-4">Tied by Culture</p>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase">
                      Shop Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="container px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
              <h2 className="uppercase text-white">Join The Lace Community<br/>For Early Access</h2>
              <p className="text-xl font-light text-white/90">
                Get first dibs on limited drops, exclusive collabs, and community-only releases.
              </p>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider px-12 py-7 h-auto text-lg"
                asChild
              >
                <a href="/community">Join Community</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
