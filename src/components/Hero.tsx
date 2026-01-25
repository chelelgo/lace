import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-shoes.png';

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="container relative z-10 max-w-7xl px-6 md:px-12">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-white leading-none animate-slide-up opacity-0 [animation-delay:200ms]">
            Stay Laced.<br />Stay Connected.
          </h1>
          <p className="text-xl md:text-3xl text-white/90 max-w-2xl font-light leading-relaxed animate-slide-up opacity-0 [animation-delay:400ms]">
            More than sneakers — we're the thread that ties culture together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up opacity-0 [animation-delay:600ms]">
            <Button size="lg" className="text-base md:text-lg px-12 py-7 h-auto font-bold uppercase tracking-wider bg-accent hover:bg-accent/90 text-accent-foreground">
              Shop the Drop
            </Button>
            <Button size="lg" variant="outline" className="text-base md:text-lg px-12 py-7 h-auto font-bold uppercase tracking-wider border-2 border-black bg-white text-black hover:bg-black hover:text-white">
              Join the Movement
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
