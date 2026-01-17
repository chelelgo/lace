import { Brand } from '@/data/brands';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface BrandShowcaseProps {
  brand: Brand;
}

const BrandShowcase = ({ brand }: BrandShowcaseProps) => {
  return (
    <div className="space-y-16 animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src={brand.heroImage} 
          alt={brand.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-white mb-4">{brand.name}</h2>
          <p className="text-2xl md:text-3xl font-light text-white/90 italic max-w-2xl">
            {brand.tagline}
          </p>
        </div>
      </div>

      {/* Featured Models */}
      <div className="container px-6 md:px-12">
        <div className="mb-12">
          <h3 className="uppercase mb-2">Featured Models</h3>
          <div className="h-1 w-20 bg-accent" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {brand.featuredModels.map((model, index) => (
            <div 
              key={index} 
              className="group border border-border bg-card overflow-hidden hover:border-accent transition-all duration-300"
              style={{ '--accent': brand.accentColor } as React.CSSProperties}
            >
              <div className="aspect-square overflow-hidden">
                <img src={model.image} alt={model.model} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-4">
                <div className="h-1 w-12 group-hover:w-20 transition-all duration-300" 
                     style={{ backgroundColor: brand.accentColor }} />
                <h4 className="text-xl font-bold uppercase">{model.model}</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {model.variant}
                </p>
                <p className="text-sm leading-relaxed">{model.descriptor}</p>
                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    For: {model.audience}
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-muted">
                    {model.priceKsh ? `Ksh ${model.priceKsh.toLocaleString()}` : model.priceBand}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider group"
          >
            Shop Now
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="font-bold uppercase tracking-wider border-2"
          >
            Discover the Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrandShowcase;
