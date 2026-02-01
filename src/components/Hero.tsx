import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-shoes.png';

const backgroundImages = [
  'https://images.unsplash.com/photo-1556906781-9cba4a8e7e37?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&h=1080&fit=crop',
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Multiple Background Images with Blend */}
      <div className="absolute inset-0">
        {/* Primary hero image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Secondary image overlay for depth */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: `url(${backgroundImages[0]})` }}
        />
        {/* Third image for texture */}
        <div 
          className="absolute inset-0 bg-cover bg-right opacity-20 mix-blend-soft-light"
          style={{ backgroundImage: `url(${backgroundImages[1]})` }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      
      {/* Content */}
      <div className="container relative z-10 max-w-7xl px-4 md:px-6 lg:px-12 py-16 md:py-0">
        <div className="max-w-4xl space-y-5 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-none animate-slide-up opacity-0 [animation-delay:200ms]">
            Stay Laced.<br />Stay Connected.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-white/90 max-w-2xl font-light leading-relaxed animate-slide-up opacity-0 [animation-delay:400ms]">
            More than sneakers — we're the thread that ties culture together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 animate-slide-up opacity-0 [animation-delay:600ms]">
            <Button 
              size="lg" 
              className="text-sm md:text-base lg:text-lg px-8 md:px-12 py-5 md:py-7 h-auto font-bold uppercase tracking-wider bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link to="/shop">Shop the Drop</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-sm md:text-base lg:text-lg px-8 md:px-12 py-5 md:py-7 h-auto font-bold uppercase tracking-wider border-2 border-white bg-transparent text-white hover:bg-white hover:text-black"
              asChild
            >
              <Link to="/community">Join the Movement</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
