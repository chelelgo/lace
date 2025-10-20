import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Heart, Award, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-40 bg-background">
          <div className="container px-6 md:px-12">
            <div className="max-w-4xl animate-fade-in">
              <h1 className="mb-8 uppercase">
                More Than<br />Just Shoes
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl font-light">
                Lace is a community-driven brand where style meets passion, 
                and every step tells a story.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 md:py-32 bg-muted">
          <div className="container px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
              <div className="space-y-8 animate-fade-in">
                <h2 className="uppercase">Our Story</h2>
                <div className="space-y-6 text-lg font-light leading-relaxed">
                  <p>
                    Founded in 2020, Lace began as a small collective of sneaker enthusiasts 
                    who believed that footwear is more than just an accessory—it's a form of 
                    self-expression, a conversation starter, and a way to connect people.
                  </p>
                  <p>
                    What started in a garage has grown into a thriving community of designers, 
                    collectors, and fashion lovers from around the world. We curate the finest 
                    selection of footwear while hosting events that bring our community together.
                  </p>
                  <p>
                    At Lace, we're not just selling shoes—we're building connections, celebrating 
                    creativity, and creating moments that matter.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 animate-fade-in">
                <div className="bg-background p-8 text-center transition-opacity hover:opacity-70">
                  <div className="text-5xl md:text-6xl font-bold mb-3">50K+</div>
                  <div className="text-sm uppercase tracking-wide">Community Members</div>
                </div>
                <div className="bg-background p-8 text-center transition-opacity hover:opacity-70">
                  <div className="text-5xl md:text-6xl font-bold mb-3">200+</div>
                  <div className="text-sm uppercase tracking-wide">Events Hosted</div>
                </div>
                <div className="bg-background p-8 text-center transition-opacity hover:opacity-70">
                  <div className="text-5xl md:text-6xl font-bold mb-3">15+</div>
                  <div className="text-sm uppercase tracking-wide">Partner Brands</div>
                </div>
                <div className="bg-background p-8 text-center transition-opacity hover:opacity-70">
                  <div className="text-5xl md:text-6xl font-bold mb-3">100%</div>
                  <div className="text-sm uppercase tracking-wide">Passion Driven</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container px-6 md:px-12">
            <div className="mb-20">
              <h2 className="uppercase mb-6">What We Stand For</h2>
              <p className="text-lg font-light max-w-2xl">
                Our values guide everything we do, from the products we curate to the 
                events we host.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              <div className="space-y-4 animate-fade-in group">
                <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center transition-opacity group-hover:opacity-70">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium uppercase tracking-wide">Community First</h3>
                <p className="text-sm font-light leading-relaxed">
                  We're built by and for our community, always putting people before profit.
                </p>
              </div>
              <div className="space-y-4 animate-fade-in group">
                <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center transition-opacity group-hover:opacity-70">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium uppercase tracking-wide">Authentic Passion</h3>
                <p className="text-sm font-light leading-relaxed">
                  Every product and event reflects our genuine love for sneaker culture.
                </p>
              </div>
              <div className="space-y-4 animate-fade-in group">
                <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center transition-opacity group-hover:opacity-70">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium uppercase tracking-wide">Quality Always</h3>
                <p className="text-sm font-light leading-relaxed">
                  We curate only the finest footwear from trusted brands worldwide.
                </p>
              </div>
              <div className="space-y-4 animate-fade-in group">
                <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center transition-opacity group-hover:opacity-70">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium uppercase tracking-wide">Creative Expression</h3>
                <p className="text-sm font-light leading-relaxed">
                  We celebrate individuality and encourage everyone to express themselves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Community CTA */}
        <section className="py-24 md:py-32 bg-muted">
          <div className="container px-6 md:px-12">
            <div className="max-w-4xl space-y-10 animate-fade-in">
              <h2 className="uppercase">Join the Lace Community</h2>
              <p className="text-xl md:text-2xl font-light max-w-2xl">
                Be part of something bigger. Connect with fellow sneaker enthusiasts, 
                get early access to drops, and exclusive invites to our events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a 
                  href="/events" 
                  className="inline-flex items-center justify-center bg-foreground text-background px-12 py-6 text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
                >
                  View Upcoming Events
                </a>
                <a 
                  href="/#products" 
                  className="inline-flex items-center justify-center border border-foreground bg-transparent px-12 py-6 text-sm font-medium uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
