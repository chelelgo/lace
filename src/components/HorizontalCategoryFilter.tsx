import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { categories } from '@/components/ShopFilters';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HorizontalCategoryFilterProps {
  selectedCategories: string[];
  onCategoryToggle: (categoryId: string) => void;
}

const HorizontalCategoryFilter = ({
  selectedCategories,
  onCategoryToggle,
}: HorizontalCategoryFilterProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      });
    }
  };

  const handleSelect = (categoryId: string) => {
    // If already selected, deselect. Otherwise select only this one.
    if (selectedCategories.includes(categoryId)) {
      onCategoryToggle(categoryId); // deselect
    } else {
      // Deselect all others first
      selectedCategories.forEach((id) => onCategoryToggle(id));
      onCategoryToggle(categoryId); // select new
    }
  };

  return (
    <div className="relative group">
      {/* Left arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 bg-foreground text-background rounded-none p-1.5 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto py-2 px-1 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category.id);
          return (
            <button
              key={category.id}
              onClick={() => handleSelect(category.id)}
              className={cn(
                'relative whitespace-nowrap px-5 py-3 text-sm font-bold uppercase tracking-wider border-2 transition-all flex-shrink-0 rounded-none',
                isSelected
                  ? 'bg-foreground text-background border-foreground shadow-[4px_4px_0px_0px_hsl(var(--accent))]'
                  : 'bg-background text-muted-foreground border-border hover:border-foreground hover:text-foreground hover:shadow-[3px_3px_0px_0px_hsl(var(--border))]'
              )}
            >
              {category.label}
              {isSelected && (
                <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-accent" />
              )}
            </button>
          );
        })}
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-foreground text-background rounded-none p-1.5 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default HorizontalCategoryFilter;
