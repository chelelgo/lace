import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Filter, X } from 'lucide-react';

export interface FilterOption {
  id: string;
  label: string;
  query: string; // Shopify search query
}

interface ShopFiltersProps {
  selectedCategory: string;
  selectedBrand: string;
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
  onClearFilters: () => void;
}

export const categories: FilterOption[] = [
  { id: 'all', label: 'All Shoes', query: '' },
  { id: 'sneakers', label: 'Sneakers', query: 'product_type:Sneakers OR tag:sneakers' },
  { id: 'running', label: 'Running', query: 'product_type:Running OR tag:running' },
  { id: 'basketball', label: 'Basketball', query: 'product_type:Basketball OR tag:basketball' },
  { id: 'golf', label: 'Golf', query: 'product_type:Golf OR tag:golf' },
  { id: 'gym', label: 'Gym & Training', query: 'product_type:Training OR tag:gym OR tag:training' },
  { id: 'boots', label: 'Boots', query: 'product_type:Boots OR tag:boots' },
  { id: 'casual', label: 'Casual', query: 'product_type:Casual OR tag:casual' },
  { id: 'formal', label: 'Formal', query: 'product_type:Formal OR tag:formal OR tag:dress' },
];

export const brands: FilterOption[] = [
  { id: 'all', label: 'All Brands', query: '' },
  { id: 'nike', label: 'Nike', query: 'vendor:Nike' },
  { id: 'jordan', label: 'Air Jordan', query: 'vendor:Jordan OR title:Jordan' },
  { id: 'adidas', label: 'Adidas', query: 'vendor:Adidas' },
  { id: 'puma', label: 'Puma', query: 'vendor:Puma' },
  { id: 'newbalance', label: 'New Balance', query: 'vendor:"New Balance"' },
  { id: 'vans', label: 'Vans', query: 'vendor:Vans' },
  { id: 'converse', label: 'Converse', query: 'vendor:Converse' },
  { id: 'drmartens', label: 'Dr. Martens', query: 'vendor:"Dr. Martens" OR vendor:DrMartens' },
  { id: 'reebok', label: 'Reebok', query: 'vendor:Reebok' },
  { id: 'asics', label: 'ASICS', query: 'vendor:ASICS OR vendor:Asics' },
  { id: 'underarmour', label: 'Under Armour', query: 'vendor:"Under Armour"' },
];

const ShopFilters = ({
  selectedCategory,
  selectedBrand,
  onCategoryChange,
  onBrandChange,
  onClearFilters,
}: ShopFiltersProps) => {
  const hasActiveFilters = selectedCategory !== 'all' || selectedBrand !== 'all';

  return (
    <div className="space-y-6 mb-8 md:mb-12">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Filter className="h-4 w-4" />
          <span className="text-sm font-medium uppercase tracking-wider">Filters</span>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                'transition-all text-xs md:text-sm',
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
        <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Brands</h3>
        <div className="flex flex-wrap gap-2">
          {brands.map((brand) => (
            <Button
              key={brand.id}
              variant={selectedBrand === brand.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => onBrandChange(brand.id)}
              className={cn(
                'transition-all text-xs md:text-sm',
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

export default ShopFilters;
