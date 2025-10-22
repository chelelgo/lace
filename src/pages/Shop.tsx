import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrandShowcase from '@/components/BrandShowcase';
import BrandCatalog from '@/components/BrandCatalog';
import { brands } from '@/data/brands';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const Shop = () => {
  const [selectedBrand, setSelectedBrand] = useState(brands[0].id);

  const currentBrand = brands.find(b => b.id === selectedBrand) || brands[0];

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
                Curated sneakers and streetwear. From heritage to hype. Every brand, every story.
              </p>
            </div>
          </div>
        </section>

        {/* Brand Tabs - Horizontal Scrolling */}
        <section className="sticky top-[73px] z-40 bg-background border-b border-border">
          <div className="container px-6 md:px-12">
            <Tabs value={selectedBrand} onValueChange={setSelectedBrand} className="w-full">
              <ScrollArea className="w-full">
                <TabsList className="w-full justify-start h-16 bg-transparent rounded-none border-b-0 p-0">
                  {brands.map((brand) => (
                    <TabsTrigger
                      key={brand.id}
                      value={brand.id}
                      className="relative uppercase font-bold tracking-wider px-6 h-16 rounded-none border-b-4 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:shadow-none hover:bg-muted/50 transition-all"
                    >
                      {brand.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </Tabs>
          </div>
        </section>

        {/* Brand Content */}
        <section className="py-16 md:py-24">
          <BrandShowcase brand={currentBrand} />
        </section>

        {/* Complete Catalog */}
        <section className="py-16 md:py-24 bg-muted/30 border-t border-border">
          <BrandCatalog brand={currentBrand} />
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
