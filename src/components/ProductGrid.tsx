import { useState } from 'react';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import { Product } from '@/contexts/CartContext';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';
import product7 from '@/assets/product-7.jpg';
import product8 from '@/assets/product-8.jpg';
import product9 from '@/assets/product-9.jpg';
import product10 from '@/assets/product-10.jpg';
import product11 from '@/assets/product-11.jpg';
import product12 from '@/assets/product-12.jpg';

const allProducts: Product[] = [
  {
    id: 1,
    name: 'Cloud Runner',
    price: 129.99,
    image: product1,
    description: 'Lightweight comfort for everyday wear',
    category: 'sneakers',
    brand: 'lace',
  },
  {
    id: 2,
    name: 'Urban Classic',
    price: 89.99,
    image: product2,
    description: 'Timeless high-top canvas design',
    category: 'sneakers',
    brand: 'lace',
  },
  {
    id: 3,
    name: 'Desert Walk',
    price: 119.99,
    image: product3,
    description: 'Premium suede for casual elegance',
    category: 'sneakers',
    brand: 'lace',
  },
  {
    id: 4,
    name: 'Sprint Pro',
    price: 149.99,
    image: product4,
    description: 'Performance mesh for active lifestyles',
    category: 'sneakers',
    brand: 'lace',
  },
  {
    id: 5,
    name: 'Street Essential',
    price: 94.99,
    image: product5,
    description: 'Classic canvas with modern appeal',
    category: 'sneakers',
    brand: 'lace',
  },
  {
    id: 6,
    name: 'Heritage Boot',
    price: 199.99,
    image: product6,
    description: 'Crafted leather for lasting style',
    category: 'boots',
    brand: 'lace',
  },
  {
    id: 7,
    name: 'Nike Air Max Classic',
    price: 159.99,
    image: product7,
    description: 'Iconic Air Max comfort and style',
    category: 'sneakers',
    brand: 'nike',
  },
  {
    id: 8,
    name: 'Air Jordan Retro High',
    price: 189.99,
    image: product8,
    description: 'Legendary basketball heritage',
    category: 'sneakers',
    brand: 'jordan',
  },
  {
    id: 9,
    name: 'Adidas Ultraboost',
    price: 179.99,
    image: product9,
    description: 'Energy-returning cushioning',
    category: 'sneakers',
    brand: 'adidas',
  },
  {
    id: 10,
    name: 'Oxford Classic',
    price: 139.99,
    image: product10,
    description: 'Timeless formal elegance',
    category: 'formal',
    brand: 'lace',
  },
  {
    id: 11,
    name: 'Puma Speed Runner',
    price: 129.99,
    image: product11,
    description: 'Dynamic performance design',
    category: 'sneakers',
    brand: 'puma',
  },
  {
    id: 12,
    name: 'New Balance 574',
    price: 99.99,
    image: product12,
    description: 'Classic comfort meets modern style',
    category: 'sneakers',
    brand: 'newbalance',
  },
];

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const brandMatch = selectedBrand === 'all' || product.brand === selectedBrand;
    return categoryMatch && brandMatch;
  });

  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Collection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore premium footwear from top brands and our exclusive designs
          </p>
        </div>

        <CategoryFilter
          selectedCategory={selectedCategory}
          selectedBrand={selectedBrand}
          onCategoryChange={setSelectedCategory}
          onBrandChange={setSelectedBrand}
        />

        <div className="mb-4 text-sm text-muted-foreground">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found matching your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
