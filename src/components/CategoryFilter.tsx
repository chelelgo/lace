import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  selectedCategory: string;
  selectedBrand: string;
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
}

const categories = [
  { id: 'all', label: 'All Shoes' },
  { id: 'sneakers', label: 'Sneakers' },
  { id: 'formal', label: 'Formal' },
  { id: 'boots', label: 'Boots' },
];

const brands = [
  { id: 'all', label: 'All Brands' },
  { id: 'nike', label: 'Nike' },
  { id: 'jordan', label: 'Air Jordan' },
  { id: 'adidas', label: 'Adidas' },
  { id: 'puma', label: 'Puma' },
  { id: 'newbalance', label: 'New Balance' },
];

const CategoryFilter = ({
  selectedCategory,
  selectedBrand,
  onCategoryChange,
  onBrandChange,
}: CategoryFilterProps) => {
  return (
    <div className="space-y-6 mb-12">
      {/* Category Filter */}
      <div>
        <h3 className="text-sm font-semibold mb-3 text-muted-foreground">CATEGORIES</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                'transition-all',
                selectedCategory === category.id && 'shadow-md'
              )}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="text-sm font-semibold mb-3 text-muted-foreground">BRANDS</h3>
        <div className="flex flex-wrap gap-2">
          {brands.map((brand) => (
            <Button
              key={brand.id}
              variant={selectedBrand === brand.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => onBrandChange(brand.id)}
              className={cn(
                'transition-all',
                selectedBrand === brand.id && 'shadow-md'
              )}
            >
              {brand.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
