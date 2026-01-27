import { useState, useEffect } from 'react';
import { fetchProducts, ShopifyProduct } from '@/lib/shopify';

interface UseShopifyProductsOptions {
  brandFilter?: string; // Filter by product type, vendor, or tag
  limit?: number;
}

export const useShopifyProducts = (options: UseShopifyProductsOptions = {}) => {
  const { brandFilter, limit = 50 } = options;
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Build query for Shopify Storefront API
        let query: string | undefined;
        if (brandFilter) {
          // Search by product type, vendor, or tag
          query = `product_type:${brandFilter} OR vendor:${brandFilter} OR tag:${brandFilter}`;
        }
        
        const data = await fetchProducts(limit, query);
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setError('Failed to load products');
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [brandFilter, limit]);

  // Filter products client-side if needed (for more flexible matching)
  const filteredProducts = brandFilter 
    ? products.filter(p => {
        const node = p.node;
        const brandLower = brandFilter.toLowerCase();
        return (
          node.productType?.toLowerCase().includes(brandLower) ||
          node.vendor?.toLowerCase().includes(brandLower) ||
          node.tags?.some(tag => tag.toLowerCase().includes(brandLower)) ||
          node.title.toLowerCase().includes(brandLower)
        );
      })
    : products;

  return { products: filteredProducts, allProducts: products, isLoading, error };
};
