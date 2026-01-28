import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CommunitySection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">Laced Together</h2>
          <p className="text-base md:text-xl lg:text-2xl font-light text-white/80 max-w-3xl mx-auto px-2">
            Join over 1,000 sneaker lovers, stylists, and culture creators connected through LACE.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left: CTA */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl text-white normal-case font-bold">Be Part of the Culture</h3>
              <p className="text-base md:text-lg lg:text-xl font-light text-white/80 leading-relaxed">
                Connect with sneaker enthusiasts at exclusive drops, styling sessions, and community events. 
                Share your fits, discover new styles, and celebrate what ties us together.
              </p>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <Button 
                size="lg" 
                className="text-sm md:text-base lg:text-lg px-8 md:px-12 py-5 md:py-7 h-auto font-bold uppercase tracking-wider bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto" 
                asChild
              >
                <Link to="/events">View Events</Link>
              </Button>
              <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider">
                Share your fit using <span className="text-accent font-bold">#StayLaced</span>
              </p>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="p-5 md:p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-2 text-accent">1K+</div>
              <div className="text-xs md:text-base font-medium text-white/70 uppercase tracking-wide">Members</div>
            </div>
            <div className="p-5 md:p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-2 text-accent">0</div>
              <div className="text-xs md:text-base font-medium text-white/70 uppercase tracking-wide">Events</div>
            </div>
            <div className="p-5 md:p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-2 text-accent">20+</div>
              <div className="text-xs md:text-base font-medium text-white/70 uppercase tracking-wide">Brands</div>
            </div>
            <div className="p-5 md:p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-2 text-accent">∞</div>
              <div className="text-xs md:text-base font-medium text-white/70 uppercase tracking-wide">Passion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
