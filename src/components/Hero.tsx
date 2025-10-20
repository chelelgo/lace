import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-shoes.jpg';

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-background">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container relative z-10 max-w-6xl px-6 md:px-12">
        <div className="max-w-3xl">
          <h1 className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 uppercase">
            Where Style<br />Meets Street
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 font-light">
            Premium footwear for those who move with purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            <Button size="lg" className="text-base px-12 py-6 h-auto font-medium">
              <a href="#products">Shop Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
