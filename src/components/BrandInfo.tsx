import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';

const BrandInfo = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="mb-4">The Lace Culture</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>
        
        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6 lg:pr-8">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-balance">
              Every sneaker has a story. But no sneaker is complete without its laces.
            </p>
            <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
              <strong className="text-foreground font-bold">LACE</strong> is what holds culture together — sneakers, style, and community. 
              We're not just selling shoes; we're building connections, celebrating creativity, 
              and honoring the threads that tie us all.
            </p>
            <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
              From the streets of Nairobi to global runways, we champion authentic expression 
              and the artistry of movement. Because every step tells a story.
            </p>
            <p className="text-3xl md:text-4xl font-light italic text-accent mt-8">
              What ties you?
            </p>
          </div>
          
          {/* Imagery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={product1} 
                    alt="Sneaker culture" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img 
                    src={product2} 
                    alt="Street style" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={product5} 
                    alt="Community" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={product4} 
                    alt="Lifestyle" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandInfo;
