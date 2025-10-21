import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Sparkles, Target, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 bg-primary text-primary-foreground">
          <div className="container px-6 md:px-12">
            <div className="max-w-4xl animate-fade-up">
              <h1 className="mb-8 text-white">
                Laces Hold The Sneaker.<br />Lace Holds The Community.
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl font-light text-white/90 leading-relaxed">
                More than just a brand — we're the thread that connects culture, fashion, and self-expression.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              <div className="space-y-8 animate-fade-in">
                <h2 className="uppercase">Our Story</h2>
                <div className="space-y-6 text-lg font-light leading-relaxed">
                  <p>
                    It started as <span className="font-bold text-accent">Jordan Arena</span> — a small sneaker community born from pure passion for kicks and street culture. We were a crew of sneakerheads, stylists, and dreamers who saw footwear as more than just shoes.
                  </p>
                  <p>
                    But as we grew, we realized something powerful: <span className="italic">every sneaker needs its laces.</span> And every culture needs connection. So we evolved.
                  </p>
                  <p>
                    Today, <span className="font-bold">Lace</span> is the thread that ties it all together — sneakers, streetwear, community, and creativity. From our roots in Kenya to a global movement, we're building Africa's most loved sneaker and lifestyle brand.
                  </p>
                  <p className="text-accent italic font-medium pt-4">
                    "What ties you?"
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] bg-muted animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1556906781-9cba4a8e7e37?w=800&h=800&fit=crop" 
                  alt="Lace Community"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Culture */}
        <section className="py-24 md:py-32 bg-muted">
          <div className="container px-6 md:px-12">
            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              {/* Mission */}
              <div className="space-y-6 animate-fade-in group">
                <div className="w-16 h-16 bg-accent flex items-center justify-center">
                  <Target className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="uppercase">Our Mission</h3>
                <p className="text-base font-light leading-relaxed">
                  To empower culture, fashion, and self-expression through premium sneakers and streetwear — building a community where everyone belongs.
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-6 animate-fade-in group">
                <div className="w-16 h-16 bg-accent flex items-center justify-center">
                  <Eye className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="uppercase">Our Vision</h3>
                <p className="text-base font-light leading-relaxed">
                  To be Africa's most loved sneaker and lifestyle brand — connecting global street culture with authentic local style.
                </p>
              </div>

              {/* Culture */}
              <div className="space-y-6 animate-fade-in group">
                <div className="w-16 h-16 bg-accent flex items-center justify-center">
                  <Heart className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="uppercase">Our Culture</h3>
                <p className="text-base font-light leading-relaxed">
                  Built on inclusivity, creativity, and connection. We celebrate every style, every story, and every step that brings us together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container px-6 md:px-12">
            <div className="mb-20 text-center">
              <h2 className="uppercase mb-6">What We Stand For</h2>
              <p className="text-lg font-light max-w-2xl mx-auto">
                These values are the laces that tie everything we do together.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { title: 'Authenticity', desc: 'Real culture. Real passion. No fakes.' },
                { title: 'Connection', desc: 'Building bridges, not walls.' },
                { title: 'Creativity', desc: 'Express yourself boldly.' },
                { title: 'Inclusivity', desc: 'Everyone is welcome here.' },
                { title: 'Evolution', desc: 'Always growing, never settling.' }
              ].map((value, idx) => (
                <div key={idx} className="p-8 border border-border hover:border-accent transition-colors group animate-fade-in">
                  <Sparkles className="h-8 w-8 mb-4 text-accent" />
                  <h4 className="text-lg font-bold uppercase mb-3">{value.title}</h4>
                  <p className="text-sm font-light text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="container px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-10 animate-fade-in">
              <h2 className="uppercase text-white">Every Sneaker Needs Its Laces.<br/>Every Culture Needs Connection.</h2>
              <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto">
                Join the movement. Be part of the thread that ties us all together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button 
                  size="lg" 
                  className="text-base md:text-lg px-12 py-7 h-auto font-bold uppercase tracking-wider bg-accent hover:bg-accent/90 text-accent-foreground"
                  asChild
                >
                  <a href="/events">Join Our Events</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-base md:text-lg px-12 py-7 h-auto font-bold uppercase tracking-wider border-2 border-white text-white hover:bg-white hover:text-black"
                  asChild
                >
                  <a href="/#products">Shop the Collection</a>
                </Button>
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
