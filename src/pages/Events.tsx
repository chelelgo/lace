import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const events = [
  {
    id: 1,
    title: "Lace Brand Launch 2026",
    date: "March 7, 2025",
    time: "2:00 PM - 8:00 PM",
    location: "Downtown Convention Center",
    attendees: 500,
    description: "Join us for our biggest launch event featuring exclusive sneaker drops, live customization stations, and meet-and-greets with top designers.",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1556906781-9cba4a8e7e37?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Sneaker Culture Summit",
    date: "April 22, 2026",
    time: "2:00 PM - 8:00 PM",
    location: "Urban Arts District",
    attendees: 350,
    description: "A day dedicated to sneaker culture with panel discussions, workshops, and exclusive vendor booths from leading brands.",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Lace x Xceed Collaboration Launch",
    date: "May 8, 2026",
    time: "7:00 PM - 11:00 PM",
    location: "Lace Flagship Store",
    attendees: 200,
    description: "Be the first to experience our exclusive collaboration with Nike. Limited edition releases, DJ performances, and special giveaways.",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Festive Kickoff Fest",
    date: "November 20, 2026",
    time: "5:00 PM - 9:00 PM",
    location: "City Square Plaza",
    attendees: 450,
    description: "Started the year with style! Featured winter collections, hot chocolate bar, and community sneaker swaps.",
    status: "past",
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&h=600&fit=crop"
  },
];

const Events = () => {
  const upcomingEvents = events.filter(e => e.status === 'upcoming');
  const pastEvents = events.filter(e => e.status === 'past');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 bg-primary text-primary-foreground">
          <div className="container px-6 md:px-12">
            <div className="max-w-4xl animate-fade-up">
              <h1 className="mb-8 text-white">
                Step Into<br />The Culture
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl font-light text-white/90 leading-relaxed">
                Lace events connect people through fashion, music, and art. Experience the drops, meet the community, and celebrate what ties us together.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container px-6 md:px-12">
            <div className="mb-16">
              <h2 className="uppercase mb-4">Upcoming Events</h2>
              <p className="text-lg font-light text-muted-foreground">
                Reserve your spot. Experience the culture firsthand.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="group border border-border overflow-hidden hover:border-accent transition-colors animate-fade-in"
                >
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 text-xs font-bold uppercase tracking-wider">
                      Upcoming
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold uppercase group-hover:text-accent transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-muted-foreground">
                      {event.description}
                    </p>
                    <div className="space-y-2 text-sm pt-2">
                      <div className="flex items-center gap-3 text-foreground">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <Clock className="h-4 w-4 text-accent" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <Users className="h-4 w-4 text-accent" />
                        <span>{event.attendees} expected</span>
                      </div>
                    </div>
                    <Button className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider">
                      Reserve Spot
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-24 md:py-32 bg-muted">
          <div className="container px-6 md:px-12">
            <div className="mb-16">
              <h2 className="uppercase mb-4">Past Events</h2>
              <p className="text-lg font-light text-muted-foreground">
                Relive the moments that brought us together.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="border border-border overflow-hidden animate-fade-in bg-background"
                >
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute top-4 right-4 bg-muted text-muted-foreground px-4 py-2 text-xs font-bold uppercase tracking-wider">
                      Past Event
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold uppercase">{event.title}</h3>
                    <p className="text-sm font-light leading-relaxed text-muted-foreground">
                      {event.description}
                    </p>
                    <div className="space-y-2 text-sm pt-2">
                      <div className="flex items-center gap-3 text-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="container px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
              <h2 className="uppercase text-white">Stay Connected</h2>
              <p className="text-xl font-light text-white/90">
                Sign up for event notifications and never miss a drop, meetup, or collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:outline-none"
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

export default Events;
