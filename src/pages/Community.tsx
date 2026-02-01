import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const instagramCommunities = [
  { 
    name: 'Lace Africa', 
    handle: '@lace.africa', 
    url: 'https://www.instagram.com/lace.africa/',
    region: '🌍 Africa'
  },
  { 
    name: 'Lace Australia', 
    handle: '@lace.australia', 
    url: 'https://www.instagram.com/lace.australia/',
    region: '🦘 Australia'
  },
];

const instagramPosts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', likes: 234, comments: 18 },
  { id: 2, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop', likes: 189, comments: 12 },
  { id: 3, image: 'https://images.unsplash.com/photo-1556906781-9cba4a8e7e37?w=400&h=400&fit=crop', likes: 312, comments: 24 },
  { id: 4, image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&h=400&fit=crop', likes: 278, comments: 21 },
  { id: 5, image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=400&fit=crop', likes: 156, comments: 9 },
  { id: 6, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop', likes: 203, comments: 15 },
  { id: 7, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop', likes: 267, comments: 19 },
  { id: 8, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop', likes: 198, comments: 14 },
];

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 text-primary-foreground overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1920&h=800&fit=crop)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />
          
          <div className="container relative z-10 px-6 md:px-12">
            <div className="max-w-4xl animate-fade-up">
              <h1 className="mb-8 text-white">
                Laced<br />Together
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl font-light text-white/90 leading-relaxed">
                Join our growing global community of sneaker enthusiasts. Share your fits, discover new styles, and connect with fellow sneakerheads worldwide.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {instagramCommunities.map((community) => (
                  <Button
                    key={community.handle}
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider px-6"
                    asChild
                  >
                    <a href={community.url} target="_blank" rel="noopener noreferrer">
                      <Instagram className="mr-2 h-5 w-5" />
                      {community.handle}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Online Community Stats */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container px-6 md:px-12">
            <div className="mb-16 text-center">
              <h2 className="uppercase mb-4">Our Online Community</h2>
              <p className="text-lg font-light text-muted-foreground max-w-2xl mx-auto">
                Connect with us on Instagram where we share the latest drops, community fits, and sneaker culture content.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-16">
              <div className="p-6 md:p-8 bg-muted border border-border text-center">
                <div className="text-3xl md:text-5xl font-bold mb-2 text-accent">1K+</div>
                <div className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide">Followers</div>
              </div>
              <div className="p-6 md:p-8 bg-muted border border-border text-center">
                <div className="text-3xl md:text-5xl font-bold mb-2 text-accent">500+</div>
                <div className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide">Posts Shared</div>
              </div>
              <div className="p-6 md:p-8 bg-muted border border-border text-center">
                <div className="text-3xl md:text-5xl font-bold mb-2 text-accent">20+</div>
                <div className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide">Brands Featured</div>
              </div>
              <div className="p-6 md:p-8 bg-muted border border-border text-center">
                <div className="text-3xl md:text-5xl font-bold mb-2 text-accent">∞</div>
                <div className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide">Passion</div>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="py-24 md:py-32 bg-muted">
          <div className="container px-6 md:px-12">
            <div className="mb-16 text-center">
              <h2 className="uppercase mb-4">#StayLaced</h2>
              <p className="text-lg font-light text-muted-foreground">
                Community posts from our Instagram. Tag us to get featured!
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {instagramPosts.map((post) => (
                <a 
                  key={post.id} 
                  href="https://www.instagram.com/lace.africa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden bg-background border border-border hover:border-accent transition-colors"
                >
                  <img 
                    src={post.image}
                    alt={`Community post ${post.id}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <div className="flex items-center gap-1 text-white">
                      <Heart className="h-5 w-5" />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white">
                      <MessageCircle className="h-5 w-5" />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider px-12"
                asChild
              >
                <a href="https://www.instagram.com/lace.africa/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-5 w-5" />
                  View More on Instagram
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container px-6 md:px-12">
            <div className="mb-16">
              <h2 className="uppercase mb-4">Why Join Our Community?</h2>
              <p className="text-lg font-light text-muted-foreground">
                More than just sneakers — we're building a movement.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-border hover:border-accent transition-colors">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-bold uppercase mb-3">Early Access</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Be the first to know about new drops, restocks, and exclusive releases before anyone else.
                </p>
              </div>
              <div className="p-8 border border-border hover:border-accent transition-colors">
                <div className="text-4xl mb-4">👟</div>
                <h3 className="text-xl font-bold uppercase mb-3">Style Inspiration</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Get inspired by community fits and share your own looks. Tag #StayLaced to be featured.
                </p>
              </div>
              <div className="p-8 border border-border hover:border-accent transition-colors">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold uppercase mb-3">African Sneaker Culture</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Connect with sneakerheads across Africa and celebrate our unique style and culture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="container px-6 md:px-12">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="uppercase mb-6 text-white">Stay Connected</h2>
                <p className="text-xl font-light text-white/90">
                  Follow us on Instagram and join the conversation. Share your passion. Stay laced.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                {instagramCommunities.map((community) => (
                  <Button 
                    key={community.handle}
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider px-6"
                    asChild
                  >
                    <a href={community.url} target="_blank" rel="noopener noreferrer">
                      <Instagram className="mr-2 h-5 w-5" />
                      {community.region} {community.handle}
                    </a>
                  </Button>
                ))}
              </div>
              <p className="text-center mt-6 text-white/60 text-sm">
                Use <span className="text-accent font-bold">#StayLaced</span> to get featured on our pages
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
