import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-shoes.jpg';

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      </div>
      
      <div className="container relative z-10 max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Step Into Style
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          Discover the perfect blend of comfort and design with Lace's curated collection of premium footwear.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <Button size="lg" className="text-base px-8">
            <a href="#products">Shop Now</a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
