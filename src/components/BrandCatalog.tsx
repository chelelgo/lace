import { Brand } from '@/data/brands';

interface BrandCatalogProps {
  brand: Brand;
}

const BrandCatalog = ({ brand }: BrandCatalogProps) => {
  return (
    <div className="container px-6 md:px-12 py-16">
      <div className="mb-12">
        <h3 className="uppercase mb-2">Complete Catalog</h3>
        <p className="text-muted-foreground">
          Showing all {brand.allModels.length} models from {brand.name}
        </p>
        <div className="h-1 w-20 bg-accent mt-4" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {brand.allModels.map((model, index) => (
          <div 
            key={index}
            className="group border border-border bg-card hover:border-accent transition-all duration-300 overflow-hidden"
          >
            {/* Product Image */}
            <div className="aspect-square bg-muted relative overflow-hidden">
              <img src={model.image} alt={model.model} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 right-4">
                <span 
                  className="text-xs font-bold uppercase px-2 py-1 bg-background/90 backdrop-blur-sm"
                  style={{ color: brand.accentColor }}
                >
                  {model.priceBand}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4 space-y-3">
              <div>
                <h4 className="font-bold uppercase text-sm mb-1 group-hover:text-accent transition-colors">
                  {model.model}
                </h4>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {model.variant}
                </p>
              </div>
              
              <p className="text-xs leading-relaxed line-clamp-2">
                {model.descriptor}
              </p>
              
              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  For: <span className="text-foreground">{model.audience}</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <button className="flex-1 text-xs font-bold uppercase tracking-wider py-2 border border-border hover:border-accent hover:text-accent transition-colors">
                  View
                </button>
                <button 
                  className="flex-1 text-xs font-bold uppercase tracking-wider py-2 text-accent-foreground transition-colors"
                  style={{ backgroundColor: brand.accentColor }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCatalog;
