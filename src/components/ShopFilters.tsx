import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { Filter, X } from 'lucide-react';

export interface FilterOption {
  id: string;
  label: string;
  query: string; // kept for Shopify API compatibility but also used as keywords for client-side matching
  keywords: string[]; // title/description keywords for client-side matching
}

interface ShopFiltersProps {
  selectedCategories: string[];
  selectedSizes: string[];
  priceRange: [number, number];
  onCategoryToggle: (categoryId: string) => void;
  onSizeToggle: (size: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  onClearFilters: () => void;
}

export const categories: FilterOption[] = [
  { id: 'running', label: 'Running', query: '', keywords: ['running', 'marathon', 'racing', 'jogging', 'athletic'] },
  { id: 'sneakers', label: 'Sneakers', query: '', keywords: ['sneaker', 'sneakers', 'trainer', 'trainers', 'sport shoe'] },
  { id: 'boots', label: 'Boots', query: '', keywords: ['boot', 'boots', 'high-top'] },
  { id: 'oxford', label: 'Oxford & Formal', query: '', keywords: ['oxford', 'brogue', 'formal', 'wingtip', 'spectator', 'dress'] },
  { id: 'loafers', label: 'Loafers', query: '', keywords: ['loafer', 'loafers', 'slip-on', 'tassel'] },
  { id: 'platform', label: 'Platform', query: '', keywords: ['platform', 'chunky', 'thick sole', 'dad shoe'] },
  { id: 'casual', label: 'Casual', query: '', keywords: ['casual', 'walking', 'travel'] },
];

export const sizes: string[] = [
  '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5',
  '9', '9.5', '10', '10.5', '11', '11.5', '12', '13', '14',
];

export const PRICE_MIN = 0;
export const PRICE_MAX = 500;

const ShopFilters = ({
  selectedCategories,
  selectedSizes,
  priceRange,
  onCategoryToggle,
  onSizeToggle,
  onPriceRangeChange,
  onClearFilters,
}: ShopFiltersProps) => {
  const hasActiveFilters = selectedCategories.length > 0 || selectedSizes.length > 0 || priceRange[0] !== PRICE_MIN || priceRange[1] !== PRICE_MAX;

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

      {/* Price Range Filter */}
      <div className="border-t pt-4">
        <h3 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Price Range</h3>
        <div className="px-1">
          <Slider
            min={PRICE_MIN}
            max={PRICE_MAX}
            step={10}
            value={priceRange}
            onValueChange={(value) => onPriceRangeChange(value as [number, number])}
            className="mb-3"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}{priceRange[1] === PRICE_MAX ? '+' : ''}</span>
          </div>
        </div>
      </div>

      {/* Size Filter */}
      <div className="border-t pt-4">
        <h3 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Size (US)</h3>
        <div className="grid grid-cols-4 gap-1.5">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSizeToggle(size)}
              className={cn(
                "text-xs py-1.5 px-1 rounded border transition-colors text-center",
                selectedSizes.includes(size)
                  ? "bg-foreground text-background border-foreground font-medium"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              )}
            >
              {size}
            </button>
          ))}
        </div>
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