import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const events = [
  {
    id: 1,
    title: "Lace Spring Showcase 2025",
    date: "March 15, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Downtown Convention Center",
    attendees: 500,
    description: "Join us for our biggest spring event featuring exclusive sneaker drops, live customization stations, and meet-and-greets with top designers.",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1556906781-9cba4a8e7e37?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Sneaker Culture Summit",
    date: "April 22, 2025",
    time: "2:00 PM - 8:00 PM",
    location: "Urban Arts District",
    attendees: 350,
    description: "A day dedicated to sneaker culture with panel discussions, workshops, and exclusive vendor booths from leading brands.",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Lace x Nike Collaboration Launch",
    date: "May 8, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "Lace Flagship Store",
    attendees: 200,
    description: "Be the first to experience our exclusive collaboration with Nike. Limited edition releases, DJ performances, and special giveaways.",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Winter Kickoff Fest",
    date: "January 20, 2025",
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
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-accent/10 via-background to-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Lace Events
              </h1>
              <p className="text-xl text-muted-foreground">
                Where the community comes together. Experience fashion, culture, 
                and connection at our exclusive events.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-muted-foreground">
                Don't miss out on these exciting upcoming experiences.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="group rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow animate-fade-in hover-scale"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Upcoming
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} expected attendees</span>
                      </div>
                    </div>
                    <Button className="w-full">Register Now</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Events</h2>
              <p className="text-muted-foreground">
                Relive the memorable moments from our previous gatherings.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="rounded-lg border bg-card overflow-hidden animate-fade-in"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Past Event
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
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
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold">Stay in the Loop</h2>
              <p className="text-muted-foreground">
                Subscribe to our newsletter to get notified about upcoming events, 
                exclusive releases, and community updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <Button className="sm:w-auto">Subscribe</Button>
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
