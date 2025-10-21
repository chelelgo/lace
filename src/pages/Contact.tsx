import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 bg-primary text-primary-foreground">
          <div className="container px-6 md:px-12">
            <div className="max-w-4xl animate-fade-up">
              <h1 className="mb-8 text-white">
                Let's Tie<br />Something Together
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl font-light text-white/90 leading-relaxed">
                Partnerships, styling, or community collaborations — we're here to connect.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <h2 className="uppercase mb-8">Send Us A Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block uppercase tracking-wide">Name</label>
                      <Input 
                        placeholder="Your name"
                        className="py-6"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block uppercase tracking-wide">Email</label>
                      <Input 
                        type="email"
                        placeholder="your@email.com"
                        className="py-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block uppercase tracking-wide">Subject</label>
                    <Input 
                      placeholder="What's this about?"
                      className="py-6"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block uppercase tracking-wide">Message</label>
                    <Textarea 
                      placeholder="Tell us more..."
                      rows={6}
                      className="resize-none"
                    />
                  </div>
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider py-7 h-auto text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-12 animate-fade-in">
                <div>
                  <h2 className="uppercase mb-8">Get In Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-bold uppercase text-sm mb-1">Email</h4>
                        <p className="text-muted-foreground">hello@lace.community</p>
                        <p className="text-muted-foreground">partnerships@lace.community</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-bold uppercase text-sm mb-1">Phone</h4>
                        <p className="text-muted-foreground">+254 700 123 456</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-bold uppercase text-sm mb-1">Location</h4>
                        <p className="text-muted-foreground">Nairobi, Kenya</p>
                        <p className="text-muted-foreground">East Africa</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold uppercase text-lg mb-6">Follow The Culture</h3>
                  <div className="flex gap-4">
                    <Button 
                      size="icon" 
                      className="w-14 h-14 bg-foreground hover:bg-accent text-background"
                    >
                      <Instagram className="h-6 w-6" />
                    </Button>
                    <Button 
                      size="icon" 
                      className="w-14 h-14 bg-foreground hover:bg-accent text-background"
                    >
                      <Facebook className="h-6 w-6" />
                    </Button>
                    <Button 
                      size="icon" 
                      className="w-14 h-14 bg-foreground hover:bg-accent text-background"
                    >
                      <Mail className="h-6 w-6" />
                    </Button>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <h3 className="font-bold uppercase text-lg mb-4">Business Inquiries</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Interested in collaborations, wholesale partnerships, or brand integrations? 
                    Reach out to our partnerships team and let's create something special together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-muted">
          <div className="container px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
              <h2 className="uppercase">Stay Connected</h2>
              <p className="text-xl font-light text-muted-foreground">
                Join our newsletter for updates on drops, events, and community highlights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Your email"
                  className="py-6"
                />
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase px-8">
                  Subscribe
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

export default Contact;
