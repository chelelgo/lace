import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';

const BrandInfo = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">The Lace Culture</h2>
          <div className="w-16 md:w-24 h-1 bg-accent mx-auto" />
        </div>
        
        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-4 md:space-y-6 lg:pr-8 order-2 lg:order-1">
            <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-balance">
              Every sneaker has a story. But no sneaker is complete without its laces.
            </p>
            <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-muted-foreground">
              <strong className="text-foreground font-bold">LACE</strong> is what holds culture together — sneakers, style, and community. 
              We're not just selling shoes; we're building connections, celebrating creativity, 
              and honoring the threads that tie us all.
            </p>
            <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-muted-foreground">
              From the streets to global runways, we champion authentic expression 
              and the artistry of movement. Because every step tells a story.
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light italic text-accent mt-6 md:mt-8">
              What ties you?
            </p>
          </div>
          
          {/* Imagery */}
          <div className="relative order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="space-y-2 md:space-y-4">
                <div className="aspect-square overflow-hidden bg-muted rounded-sm">
                  <img 
                    src={product1} 
                    alt="Sneaker culture" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden bg-muted rounded-sm">
                  <img 
                    src={product2} 
                    alt="Street style" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-2 md:space-y-4 pt-6 md:pt-8">
                <div className="aspect-square overflow-hidden bg-muted rounded-sm">
                  <img 
                    src={product5} 
                    alt="Community" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square overflow-hidden bg-muted rounded-sm">
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
