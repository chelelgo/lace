import { Button } from '@/components/ui/button';

const CommunitySection = () => {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-white">Laced Together</h2>
          <p className="text-xl md:text-2xl font-light text-white/80 max-w-3xl mx-auto">
            Join over 1,000 sneaker lovers, stylists, and culture creators connected through LACE.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left: CTA */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-white normal-case font-bold">Be Part of the Culture</h3>
              <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed">
                Connect with sneaker enthusiasts at exclusive drops, styling sessions, and community events. 
                Share your fits, discover new styles, and celebrate what ties us together.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="text-base md:text-lg px-12 py-7 h-auto font-bold uppercase tracking-wider bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto" 
                asChild
              >
                <a href="/events">View Events</a>
              </Button>
              <p className="text-sm text-white/60 uppercase tracking-wider">
                Share your fit using <span className="text-accent font-bold">#StayLaced</span>
              </p>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-accent">1K+</div>
              <div className="text-base font-medium text-white/70 uppercase tracking-wide">Members</div>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-accent">0</div>
              <div className="text-base font-medium text-white/70 uppercase tracking-wide">Events</div>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-accent">20+</div>
              <div className="text-base font-medium text-white/70 uppercase tracking-wide">Brands</div>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-5xl md:text-6xl font-bold mb-2 text-accent">∞</div>
              <div className="text-base font-medium text-white/70 uppercase tracking-wide">Passion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
