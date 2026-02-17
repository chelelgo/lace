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
      const amount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative group">
      {/* Left arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border border-border rounded-full p-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-4 w-4 text-foreground" />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide py-1 px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category.id);
          return (
            <button
              key={category.id}
              onClick={() => onCategoryToggle(category.id)}
              className={cn(
                'whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-all flex-shrink-0',
                isSelected
                  ? 'bg-foreground text-background border-foreground'
                  : 'bg-background text-muted-foreground border-border hover:border-foreground hover:text-foreground'
              )}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border border-border rounded-full p-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-4 w-4 text-foreground" />
      </button>
    </div>
  );
};

export default HorizontalCategoryFilter;
