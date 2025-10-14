import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Heart, Award, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                More Than Just Shoes
              </h1>
              <p className="text-xl text-muted-foreground">
                Lace is a community-driven brand where style meets passion, 
                and every step tells a story.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Founded in 2020, Lace began as a small collective of sneaker enthusiasts 
                  who believed that footwear is more than just an accessory—it's a form of 
                  self-expression, a conversation starter, and a way to connect people.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What started in a garage has grown into a thriving community of designers, 
                  collectors, and fashion lovers from around the world. We curate the finest 
                  selection of footwear while hosting events that bring our community together.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At Lace, we're not just selling shoes—we're building connections, celebrating 
                  creativity, and creating moments that matter.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 animate-fade-in">
                <div className="bg-muted/50 rounded-lg p-6 text-center hover-scale">
                  <div className="text-4xl font-bold text-accent mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Community Members</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-6 text-center hover-scale">
                  <div className="text-4xl font-bold text-accent mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Events Hosted</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-6 text-center hover-scale">
                  <div className="text-4xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Partner Brands</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-6 text-center hover-scale">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Passion Driven</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our values guide everything we do, from the products we curate to the 
                events we host.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4 animate-fade-in hover-scale">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Community First</h3>
                <p className="text-sm text-muted-foreground">
                  We're built by and for our community, always putting people before profit.
                </p>
              </div>
              <div className="text-center space-y-4 animate-fade-in hover-scale">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Authentic Passion</h3>
                <p className="text-sm text-muted-foreground">
                  Every product and event reflects our genuine love for sneaker culture.
                </p>
              </div>
              <div className="text-center space-y-4 animate-fade-in hover-scale">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Quality Always</h3>
                <p className="text-sm text-muted-foreground">
                  We curate only the finest footwear from trusted brands worldwide.
                </p>
              </div>
              <div className="text-center space-y-4 animate-fade-in hover-scale">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Creative Expression</h3>
                <p className="text-sm text-muted-foreground">
                  We celebrate individuality and encourage everyone to express themselves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Community CTA */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold">Join the Lace Community</h2>
              <p className="text-muted-foreground">
                Be part of something bigger. Connect with fellow sneaker enthusiasts, 
                get early access to drops, and exclusive invites to our events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a 
                  href="/events" 
                  className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-8 py-3 text-sm font-medium hover:bg-accent/90 transition-colors"
                >
                  View Upcoming Events
                </a>
                <a 
                  href="#products" 
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
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
