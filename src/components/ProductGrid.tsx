import ProductCard from './ProductCard';
import { Product } from '@/contexts/CartContext';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';

const products: Product[] = [
  {
    id: 1,
    name: 'Cloud Runner',
    price: 129.99,
    image: product1,
    description: 'Lightweight comfort for everyday wear',
  },
  {
    id: 2,
    name: 'Urban Classic',
    price: 89.99,
    image: product2,
    description: 'Timeless high-top canvas design',
  },
  {
    id: 3,
    name: 'Desert Walk',
    price: 119.99,
    image: product3,
    description: 'Premium suede for casual elegance',
  },
  {
    id: 4,
    name: 'Sprint Pro',
    price: 149.99,
    image: product4,
    description: 'Performance mesh for active lifestyles',
  },
  {
    id: 5,
    name: 'Street Essential',
    price: 94.99,
    image: product5,
    description: 'Classic canvas with modern appeal',
  },
  {
    id: 6,
    name: 'Heritage Boot',
    price: 199.99,
    image: product6,
    description: 'Crafted leather for lasting style',
  },
];

const ProductGrid = () => {
  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each pair is carefully crafted to deliver unmatched comfort and style
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
