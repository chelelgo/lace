import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram } from 'lucide-react';

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 bg-primary text-primary-foreground">
          <div className="container px-6 md:px-12">
            <div className="max-w-4xl animate-fade-up">
              <h1 className="mb-8 text-white">
                Laced<br />Together
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl font-light text-white/90 leading-relaxed">
                A celebration of sneaker culture and collaboration. Connect with stylists, creators, and fellow sneakerheads.
              </p>
            </div>
          </div>
        </section>

        {/* Member Highlights */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container px-6 md:px-12">
            <div className="mb-16">
              <h2 className="uppercase mb-4">Community Spotlight</h2>
              <p className="text-lg font-light text-muted-foreground">
                Meet the people who make Lace what it is.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Jordan K.', role: 'Sneaker Collector', fav: 'Air Jordan 1', img: 'photo-1539571696357-5a69c17a67c6' },
                { name: 'Maya R.', role: 'Street Stylist', fav: 'Yeezy 350 V2', img: 'photo-1494790108377-be9c29b29330' },
                { name: 'Alex M.', role: 'Creative Director', fav: 'Nike Dunk Low', img: 'photo-1507003211169-0a1dd7228f2d' },
              ].map((member, idx) => (
                <div key={idx} className="group border border-border overflow-hidden hover:border-accent transition-colors animate-fade-in">
                  <div className="relative h-96 overflow-hidden bg-muted">
                    <img 
                      src={`https://images.unsplash.com/${member.img}?w=600&h=800&fit=crop`}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 bg-background">
                    <h4 className="text-xl font-bold uppercase mb-1">{member.name}</h4>
                    <p className="text-sm text-accent mb-2 font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Favorite:</span> {member.fav}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Feed */}
        <section className="py-24 md:py-32 bg-muted">
          <div className="container px-6 md:px-12">
            <div className="mb-16 text-center">
              <h2 className="uppercase mb-4">#StayLaced</h2>
              <p className="text-lg font-light text-muted-foreground">
                Share your fits. Join the culture.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="group relative aspect-square overflow-hidden bg-background border border-border hover:border-accent transition-colors">
                  <img 
                    src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1549298916' : '1460353581641'}-${i}12345678?w=400&h=400&fit=crop`}
                    alt={`Community post ${i}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Instagram className="h-8 w-8 text-white" />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider px-12"
              >
                View More Posts
              </Button>
            </div>
          </div>
        </section>

        {/* Collaboration Spotlight */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container px-6 md:px-12">
            <div className="mb-16">
              <h2 className="uppercase mb-4">Collaborations</h2>
              <p className="text-lg font-light text-muted-foreground">
                Working with brands, stylists, and creatives to push culture forward.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 animate-fade-in">
                <div className="relative h-96 bg-muted overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556906781-9cba4a8e7e37?w=800&h=800&fit=crop"
                    alt="Collab 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold uppercase">Lace x Local Artists</h3>
                <p className="text-base font-light text-muted-foreground leading-relaxed">
                  Custom sneaker designs celebrating African street art and culture.
                </p>
              </div>
              <div className="space-y-6 animate-fade-in">
                <div className="relative h-96 bg-muted overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=800&fit=crop"
                    alt="Collab 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold uppercase">Stylist Sessions</h3>
                <p className="text-base font-light text-muted-foreground leading-relaxed">
                  Monthly workshops with top stylists sharing their secrets to perfect fits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Form */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="container px-6 md:px-12">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="uppercase mb-6 text-white">Join The Community</h2>
                <p className="text-xl font-light text-white/90">
                  Connect with us. Share your passion. Stay laced.
                </p>
              </div>
              <form className="space-y-6 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input 
                    placeholder="Your Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent py-6"
                  />
                  <Input 
                    type="email"
                    placeholder="Email Address"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent py-6"
                  />
                </div>
                <Input 
                  placeholder="Location (City, Country)"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent py-6"
                />
                <Input 
                  placeholder="Favorite Sneaker"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent py-6"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider py-7 h-auto text-lg"
                >
                  Join Now
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
