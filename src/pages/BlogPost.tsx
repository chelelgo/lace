import { Link, useParams, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import blogShoeCare from '@/assets/blog-shoe-care.jpg';

const posts: Record<string, { title: string; date: string; readTime: string; author: string; image: string; content: React.ReactNode }> = {
  'ultimate-shoe-care-guide': {
    title: 'The Ultimate Shoe Care Guide: How to Make Your Footwear Last a Lifetime',
    date: 'February 17, 2026',
    readTime: '8 min read',
    author: 'Lace Team',
    image: blogShoeCare,
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6">
          Whether you've just invested in a pair of Full Carbon Plate Racing Shoes or you're rocking classic Leather Tassel Loafers, your footwear is an investment. In the world of fast-paced fashion and high-performance athletics, the difference between a shoe that lasts six months and one that lasts six years comes down to one thing: <strong>Maintenance</strong>.
        </p>
        <p className="mb-8">
          Proper shoe care isn't just about aesthetics; it's about preserving the structural integrity of the materials. Here is our comprehensive guide to keeping your rotation in box-fresh condition.
        </p>

        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">1. Material-Specific Cleaning</h2>
        <p className="mb-4">Different materials require different levels of "TLC." Using the wrong product can permanently damage the fibers of your shoes.</p>

        <h3 className="text-xl font-bold mb-3 mt-6">Genuine Leather & Suede (The Classics)</h3>
        <p className="mb-2">Leather is a skin; it needs to breathe and stay hydrated.</p>
        <ul className="list-none space-y-3 mb-6 pl-4">
          <li className="border-l-2 border-accent/40 pl-4"><strong>For Smooth Leather:</strong> Use a damp cloth to remove surface dirt, followed by a high-quality leather conditioner to prevent cracking.</li>
          <li className="border-l-2 border-accent/40 pl-4"><strong>For Suede & Split Leather:</strong> Never use water! Water stains suede. Instead, use a Suede Brush to gently lift the "nap" (the fuzz) and a specialized eraser for scuffs.</li>
        </ul>

        <h3 className="text-xl font-bold mb-3">Engineered Mesh & Flyknit (The Performers)</h3>
        <p className="mb-2">High-performance running shoes, like the Canjin 886, often feature mesh for breathability.</p>
        <ul className="list-none space-y-3 mb-8 pl-4">
          <li className="border-l-2 border-accent/40 pl-4"><strong>The Golden Rule:</strong> Avoid the washing machine. The heat and agitation can melt the technical glues holding the sole together.</li>
          <li className="border-l-2 border-accent/40 pl-4"><strong>The Method:</strong> Use a soft-bristled brush and a mixture of warm water and mild detergent. Scrub in circular motions to lift dirt from the knit.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">2. The "Rest Day" Philosophy</h2>
        <p className="mb-4">
          If you wear the same pair of shoes every single day, they will degrade twice as fast. Why? Moisture. Your feet produce sweat throughout the day, which gets absorbed into the insoles and lining (especially in EVA and PU materials). If you don't give the shoe 24 hours to dry out completely, the materials begin to break down, and bacteria (the cause of odor) begin to grow.
        </p>
        <div className="bg-accent/10 border-2 border-accent/30 p-6 mb-8">
          <p className="font-bold text-accent uppercase tracking-wider text-sm mb-1">Pro Tip</p>
          <p>Rotate between at least two pairs of shoes to extend the lifespan of both by up to 50%.</p>
        </div>

        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">3. Preservation & Storage</h2>
        <p className="mb-4">How you store your shoes when they aren't on your feet is just as important as how you wear them.</p>
        <ul className="list-none space-y-3 mb-8 pl-4">
          <li className="border-l-2 border-accent/40 pl-4"><strong>Avoid Direct Sunlight:</strong> UV rays can bleach the vibrant "Warm Red" or "JM Blue" of your sneakers and cause rubber soles to become brittle and yellow.</li>
          <li className="border-l-2 border-accent/40 pl-4"><strong>Use Shoe Trees:</strong> For leather boots and loafers, a cedar shoe tree is a game-changer. It maintains the shape of the toe box and naturally absorbs moisture and odors.</li>
          <li className="border-l-2 border-accent/40 pl-4"><strong>Stuff the Toes:</strong> For lightweight mesh sneakers, stuffing them with acid-free tissue paper when not in use helps maintain their silhouette.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">4. Don't Forget the Soles</h2>
        <p className="mb-8">
          The outsole is your only point of contact with the ground. Periodically check your rubber or "beef tendon" soles for embedded pebbles or debris. These small stones can act like a drill, slowly puncturing the midsole and compromising the cushioning technology (like your Carbon Plates or EVA buffers).
        </p>

        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">5. Summary Checklist</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="border-2 border-border p-5 text-center">
            <p className="font-black uppercase text-accent text-sm tracking-wider mb-1">Weekly</p>
            <p className="text-sm">Wipe down with a microfiber cloth.</p>
          </div>
          <div className="border-2 border-border p-5 text-center">
            <p className="font-black uppercase text-accent text-sm tracking-wider mb-1">Monthly</p>
            <p className="text-sm">Deep clean the midsoles and condition any leather.</p>
          </div>
          <div className="border-2 border-border p-5 text-center">
            <p className="font-black uppercase text-accent text-sm tracking-wider mb-1">Always</p>
            <p className="text-sm">Air dry away from heaters (heat warps the shape!).</p>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground p-8 md:p-12 text-center mt-12">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">Ready to Level Up Your Rotation?</h2>
          <p className="mb-6 text-primary-foreground/80 max-w-2xl mx-auto">
            Now that you know how to keep your shoes looking brand new, it's time to add a new favorite to your collection. Whether you're looking for the explosive energy of our 2026 Carbon Plate Racers or the timeless silhouette of our British Style Loafers, we have the perfect fit for your lifestyle.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white uppercase tracking-wider font-bold">
            <Link to="/shop">Explore Our New Arrivals</Link>
          </Button>
        </div>
      </>
    ),
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Post Header */}
        <section className="bg-primary text-primary-foreground py-12 md:py-20">
          <div className="container px-4 md:px-12 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-accent transition-colors mb-6 uppercase tracking-wider font-bold">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/60">
              <span className="flex items-center gap-1"><User className="h-4 w-4" />{post.author}</span>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{post.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{post.readTime}</span>
            </div>
            <div className="h-1 w-20 bg-accent mt-6" />
          </div>
        </section>

        {/* Hero Image */}
        <div className="w-full max-w-4xl mx-auto px-4 md:px-12 -mt-8 mb-8">
          <img src={post.image} alt={post.title} className="w-full aspect-[16/9] object-cover border-2 border-border" />
        </div>

        {/* Post Content */}
        <article className="py-12 md:py-16">
          <div className="container px-4 md:px-12 max-w-3xl prose-lg">
            {post.content}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
