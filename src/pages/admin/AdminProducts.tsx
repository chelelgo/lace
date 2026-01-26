import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Search, Eye, ExternalLink, Loader2, PackageX } from 'lucide-react';
import { fetchProducts, ShopifyProduct } from '@/lib/shopify';

const AdminProducts = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<ShopifyProduct | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProducts(50);
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setIsLoading(false);
      }
    };
    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.node.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.node.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-accent" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">Manage your product catalog from Shopify.</p>
        </div>
        <Button asChild>
          <a
            href="https://admin.shopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Shopify Admin
          </a>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          {products.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <PackageX className="h-16 w-16 mx-auto text-muted-foreground" />
              <h3 className="text-xl font-bold">No products found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Your Shopify store doesn't have any products yet. Add products through the Shopify Admin.
              </p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Variants</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => {
                  const { node } = product;
                  const image = node.images.edges[0]?.node;
                  const price = node.priceRange.minVariantPrice;
                  const variantCount = node.variants.edges.length;
                  const isAvailable = node.variants.edges.some((v) => v.node.availableForSale);

                  return (
                    <TableRow key={node.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-muted rounded overflow-hidden flex-shrink-0">
                            {image ? (
                              <img
                                src={image.url}
                                alt={image.altText || node.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                                No img
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-medium truncate max-w-[200px]">{node.title}</p>
                            <p className="text-sm text-muted-foreground truncate max-w-[200px]">
                              {node.handle}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                      </TableCell>
                      <TableCell>{variantCount} variant{variantCount !== 1 ? 's' : ''}</TableCell>
                      <TableCell>
                        <Badge variant={isAvailable ? 'default' : 'secondary'}>
                          {isAvailable ? 'In Stock' : 'Out of Stock'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedProduct(product)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-lg">
                            <DialogHeader>
                              <DialogTitle>{node.title}</DialogTitle>
                              <DialogDescription>Product details from Shopify</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              {image && (
                                <img
                                  src={image.url}
                                  alt={image.altText || node.title}
                                  className="w-full h-48 object-cover rounded"
                                />
                              )}
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <p className="text-muted-foreground">Price</p>
                                  <p className="font-medium">
                                    {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-muted-foreground">Handle</p>
                                  <p className="font-medium">{node.handle}</p>
                                </div>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Description</p>
                                <p className="text-sm">{node.description || 'No description'}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-2">Variants</p>
                                <div className="space-y-2">
                                  {node.variants.edges.map((variant) => (
                                    <div
                                      key={variant.node.id}
                                      className="flex justify-between items-center text-sm"
                                    >
                                      <span>{variant.node.title}</span>
                                      <div className="flex items-center gap-2">
                                        <span>
                                          {variant.node.price.currencyCode}{' '}
                                          {parseFloat(variant.node.price.amount).toFixed(2)}
                                        </span>
                                        <Badge
                                          variant={variant.node.availableForSale ? 'default' : 'secondary'}
                                          className="text-xs"
                                        >
                                          {variant.node.availableForSale ? 'Available' : 'Sold out'}
                                        </Badge>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
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
              No products found matching your search.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminProducts;
