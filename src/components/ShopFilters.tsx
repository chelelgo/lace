import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { Filter, X } from 'lucide-react';

export interface FilterOption {
  id: string;
  label: string;
  query: string;
}

interface ShopFiltersProps {
  selectedCategories: string[];
  selectedBrands: string[];
  onCategoryToggle: (categoryId: string) => void;
  onBrandToggle: (brandId: string) => void;
  onClearFilters: () => void;
}

export const categories: FilterOption[] = [
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
  selectedCategories,
  selectedBrands,
  onCategoryToggle,
  onBrandToggle,
  onClearFilters,
}: ShopFiltersProps) => {
  const hasActiveFilters = selectedCategories.length > 0 || selectedBrands.length > 0;

  return (
    <div className="space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          <span className="text-sm font-bold uppercase tracking-wider">Filters</span>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground h-auto p-1"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Category Filter */}
      <div className="border-t pt-4">
        <h3 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <Checkbox
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => onCategoryToggle(category.id)}
              />
              <span className={cn(
                "text-sm transition-colors",
                selectedCategories.includes(category.id) 
                  ? "text-foreground font-medium" 
                  : "text-muted-foreground group-hover:text-foreground"
              )}>
                {category.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div className="border-t pt-4">
        <h3 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Brands</h3>
        <div className="space-y-3">
          {brands.map((brand) => (
            <label
              key={brand.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <Checkbox
                checked={selectedBrands.includes(brand.id)}
                onCheckedChange={() => onBrandToggle(brand.id)}
              />
              <span className={cn(
                "text-sm transition-colors",
                selectedBrands.includes(brand.id) 
                  ? "text-foreground font-medium" 
                  : "text-muted-foreground group-hover:text-foreground"
              )}>
                {brand.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear All Button */}
      {hasActiveFilters && (
        <div className="border-t pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={onClearFilters}
            className="w-full"
          >
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ShopFilters;
