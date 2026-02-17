import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 'ultimate-shoe-care-guide',
    title: 'The Ultimate Shoe Care Guide: How to Make Your Footwear Last a Lifetime',
    excerpt: "Proper shoe care isn't just about aesthetics; it's about preserving the structural integrity of the materials.",
    date: 'February 17, 2026',
    readTime: '8 min read',
    author: 'Lace Team',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container px-4 md:px-12">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">The Blog</h1>
            <p className="text-lg text-primary-foreground/70 max-w-xl">Stories, guides, and culture from the world of footwear.</p>
            <div className="h-1 w-20 bg-accent mt-6" />
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group border-2 border-border bg-card hover:border-accent transition-all duration-300"
                >
                  <div className="aspect-[16/9] bg-muted flex items-center justify-center overflow-hidden">
                    <span className="text-6xl">👟</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                    </div>
                    <h2 className="text-lg font-bold uppercase tracking-wide mb-2 group-hover:text-accent transition-colors">{post.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent">
                      Read More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
