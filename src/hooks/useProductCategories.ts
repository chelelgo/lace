import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface ProductCategoryMapping {
  product_handle: string;
  category_id: string;
}

export const useProductCategories = () => {
  const [mappings, setMappings] = useState<ProductCategoryMapping[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMappings = useCallback(async () => {
    const { data, error } = await supabase
      .from('product_categories')
      .select('product_handle, category_id');
    
    if (!error && data) {
      setMappings(data);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMappings();
  }, [fetchMappings]);

  const setCategoriesForProduct = async (productHandle: string, categoryIds: string[]) => {
    // Delete existing mappings for this product
    await supabase
      .from('product_categories')
      .delete()
      .eq('product_handle', productHandle);

    // Insert new mappings
    if (categoryIds.length > 0) {
      const rows = categoryIds.map(categoryId => ({
        product_handle: productHandle,
        category_id: categoryId,
      }));
      
      const { error } = await supabase
        .from('product_categories')
        .insert(rows);
      
      if (error) throw error;
    }

    // Update local state
    setMappings(prev => [
      ...prev.filter(m => m.product_handle !== productHandle),
      ...categoryIds.map(category_id => ({ product_handle: productHandle, category_id })),
    ]);
  };

  const getCategoriesForProduct = (productHandle: string): string[] => {
    return mappings
      .filter(m => m.product_handle === productHandle)
      .map(m => m.category_id);
  };

  const getProductsForCategory = (categoryId: string): string[] => {
    return mappings
      .filter(m => m.category_id === categoryId)
      .map(m => m.product_handle);
  };

  return {
    mappings,
    isLoading,
    setCategoriesForProduct,
    getCategoriesForProduct,
    getProductsForCategory,
    refetch: fetchMappings,
  };
};
