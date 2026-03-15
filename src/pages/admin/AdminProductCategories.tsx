import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Search, Loader2, PackageX, Tags, Save, Check } from 'lucide-react';
import { fetchProducts, ShopifyProduct } from '@/lib/shopify';
import { categories } from '@/components/ShopFilters';
import { useProductCategories } from '@/hooks/useProductCategories';
import { toast } from 'sonner';

const AdminProductCategories = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [editingProduct, setEditingProduct] = useState<string | null>(null);
  const [editCategories, setEditCategories] = useState<string[]>([]);
  const [saving, setSaving] = useState<string | null>(null);

  const { getCategoriesForProduct, setCategoriesForProduct, isLoading: mappingsLoading } = useProductCategories();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProducts(500);
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setIsLoading(false);
      }
    };
    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.node.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.node.handle.toLowerCase().includes(searchTerm.toLowerCase());

    if (filterCategory === 'all') return matchesSearch;
    if (filterCategory === 'uncategorized') {
      return matchesSearch && getCategoriesForProduct(product.node.handle).length === 0;
    }
    return matchesSearch && getCategoriesForProduct(product.node.handle).includes(filterCategory);
  });

  const openEditor = (handle: string) => {
    setEditingProduct(handle);
    setEditCategories(getCategoriesForProduct(handle));
  };

  const toggleCategory = (catId: string) => {
    setEditCategories(prev =>
      prev.includes(catId) ? prev.filter(id => id !== catId) : [...prev, catId]
    );
  };

  const saveCategories = async (handle: string) => {
    try {
      setSaving(handle);
      await setCategoriesForProduct(handle, editCategories);
      setEditingProduct(null);
      toast.success('Categories saved');
    } catch (err) {
      console.error(err);
      toast.error('Failed to save categories');
    } finally {
      setSaving(null);
    }
  };

  const uncategorizedCount = products.filter(p => getCategoriesForProduct(p.node.handle).length === 0).length;

  if (isLoading || mappingsLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-accent" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Product Categories</h1>
        <p className="text-muted-foreground">
          Assign products to shop filter categories. {uncategorizedCount > 0 && (
            <span className="text-destructive font-medium">{uncategorizedCount} uncategorized</span>
          )}
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              <Button
                variant={filterCategory === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterCategory('all')}
              >
                All ({products.length})
              </Button>
              <Button
                variant={filterCategory === 'uncategorized' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterCategory('uncategorized')}
              >
                Uncategorized ({uncategorizedCount})
              </Button>
              {categories.map(cat => {
                const count = products.filter(p => getCategoriesForProduct(p.node.handle).includes(cat.id)).length;
                return (
                  <Button
                    key={cat.id}
                    variant={filterCategory === cat.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterCategory(cat.id)}
                  >
                    {cat.label} ({count})
                  </Button>
                );
              })}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {products.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <PackageX className="h-16 w-16 mx-auto text-muted-foreground" />
              <h3 className="text-xl font-bold">No products found</h3>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Categories</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => {
                  const { node } = product;
                  const image = node.images.edges[0]?.node;
                  const assignedCategories = getCategoriesForProduct(node.handle);

                  return (
                    <TableRow key={node.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-muted rounded overflow-hidden flex-shrink-0">
                            {image ? (
                              <img src={image.url} alt={image.altText || node.title} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">No img</div>
                            )}
                          </div>
                          <div>
                            <p className="font-medium truncate max-w-[200px]">{node.title}</p>
                            <p className="text-xs text-muted-foreground">{node.handle}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {assignedCategories.length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {assignedCategories.map(catId => {
                              const cat = categories.find(c => c.id === catId);
                              return cat ? (
                                <Badge key={catId} variant="secondary" className="text-xs">
                                  {cat.label}
                                </Badge>
                              ) : null;
                            })}
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground italic">No categories</span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Dialog
                          open={editingProduct === node.handle}
                          onOpenChange={(open) => {
                            if (open) openEditor(node.handle);
                            else setEditingProduct(null);
                          }}
                        >
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="gap-1.5">
                              <Tags className="h-3.5 w-3.5" />
                              Assign
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md">
                            <DialogHeader>
                              <DialogTitle className="truncate">{node.title}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4 mt-2">
                              <p className="text-sm text-muted-foreground">
                                Select all categories this product belongs to:
                              </p>
                              <div className="grid grid-cols-1 gap-2 max-h-[400px] overflow-y-auto">
                                {categories.map(cat => (
                                  <label
                                    key={cat.id}
                                    className="flex items-center gap-3 p-2 rounded hover:bg-muted cursor-pointer"
                                  >
                                    <Checkbox
                                      checked={editCategories.includes(cat.id)}
                                      onCheckedChange={() => toggleCategory(cat.id)}
                                    />
                                    <span className="text-sm">{cat.label}</span>
                                  </label>
                                ))}
                              </div>
                              <Button
                                onClick={() => saveCategories(node.handle)}
                                disabled={saving === node.handle}
                                className="w-full gap-2"
                              >
                                {saving === node.handle ? (
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                  <Save className="h-4 w-4" />
                                )}
                                Save Categories
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
          {filteredProducts.length === 0 && products.length > 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No products found matching your filters.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminProductCategories;
