import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const CommunitySection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="container px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-8">
              <h2 className="uppercase">Join the Movement</h2>
              <p className="text-lg md:text-xl font-light leading-relaxed">
                Connect with fellow sneaker lovers at exclusive drop events, 
                community meetups, and fashion showcases. Experience the culture firsthand.
              </p>
              <Button 
                size="lg" 
                className="text-base px-12 py-6 h-auto font-medium uppercase tracking-wide"
                asChild
              >
                <a href="/events" className="flex items-center gap-3">
                  <Calendar className="h-5 w-5" />
                  View Events
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background p-8 text-center transition-opacity hover:opacity-70">
                <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
                <div className="text-xs uppercase tracking-wide">Members</div>
              </div>
              <div className="bg-background p-8 text-center transition-opacity hover:opacity-70">
                <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
                <div className="text-xs uppercase tracking-wide">Events</div>
              </div>
              <div className="bg-background p-8 text-center transition-opacity hover:opacity-70">
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <div className="text-xs uppercase tracking-wide">Brands</div>
              </div>
              <div className="bg-background p-8 text-center transition-opacity hover:opacity-70">
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-xs uppercase tracking-wide">Passion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
