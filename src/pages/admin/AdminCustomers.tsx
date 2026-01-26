import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Search, Eye, Mail, User } from 'lucide-react';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
  totalSpent: number;
  joinedDate: string;
  lastOrderDate: string;
  orders: { id: string; date: string; total: number; status: string }[];
}

const mockCustomers: Customer[] = [
  {
    id: 'CUS-001',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    totalOrders: 5,
    totalSpent: 1249.95,
    joinedDate: '2024-06-15',
    lastOrderDate: '2025-01-25',
    orders: [
      { id: 'ORD-001', date: '2025-01-25', total: 349.99, status: 'Delivered' },
      { id: 'ORD-012', date: '2024-12-10', total: 220.00, status: 'Delivered' },
      { id: 'ORD-025', date: '2024-10-05', total: 180.00, status: 'Delivered' },
    ],
  },
  {
    id: 'CUS-002',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1 (555) 234-5678',
    totalOrders: 3,
    totalSpent: 589.97,
    joinedDate: '2024-08-22',
    lastOrderDate: '2025-01-24',
    orders: [
      { id: 'ORD-002', date: '2025-01-24', total: 259.98, status: 'Shipped' },
      { id: 'ORD-018', date: '2024-11-15', total: 329.99, status: 'Delivered' },
    ],
  },
  {
    id: 'CUS-003',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    phone: '+1 (555) 345-6789',
    totalOrders: 8,
    totalSpent: 2150.00,
    joinedDate: '2024-03-10',
    lastOrderDate: '2025-01-24',
    orders: [
      { id: 'ORD-003', date: '2025-01-24', total: 220.00, status: 'Processing' },
      { id: 'ORD-008', date: '2024-12-28', total: 450.00, status: 'Delivered' },
    ],
  },
  {
    id: 'CUS-004',
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    phone: '+1 (555) 456-7890',
    totalOrders: 2,
    totalSpent: 260.00,
    joinedDate: '2024-11-05',
    lastOrderDate: '2025-01-23',
    orders: [
      { id: 'ORD-004', date: '2025-01-23', total: 130.00, status: 'Pending' },
      { id: 'ORD-022', date: '2024-12-15', total: 130.00, status: 'Delivered' },
    ],
  },
  {
    id: 'CUS-005',
    name: 'Tom Brown',
    email: 'tom@example.com',
    phone: '+1 (555) 567-8901',
    totalOrders: 4,
    totalSpent: 875.00,
    joinedDate: '2024-05-20',
    lastOrderDate: '2025-01-22',
    orders: [
      { id: 'ORD-005', date: '2025-01-22', total: 175.00, status: 'Cancelled' },
      { id: 'ORD-014', date: '2024-11-28', total: 350.00, status: 'Delivered' },
    ],
  },
];

const AdminCustomers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const filteredCustomers = mockCustomers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
        <p className="text-muted-foreground">View and manage your customer base.</p>
      </div>

      <Card>
        <CardHeader>
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Last Order</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <User className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium">{customer.name}</p>
                        <p className="text-sm text-muted-foreground">{customer.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{customer.totalOrders} orders</Badge>
                  </TableCell>
                  <TableCell className="font-medium">
                    ${customer.totalSpent.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {customer.lastOrderDate}
                  </TableCell>
                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedCustomer(customer)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-lg">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <User className="h-5 w-5" />
                            {customer.name}
                          </DialogTitle>
                          <DialogDescription>Customer profile and order history</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Email</p>
                              <p className="font-medium">{customer.email}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Phone</p>
                              <p className="font-medium">{customer.phone}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Customer Since</p>
                              <p className="font-medium">{customer.joinedDate}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Total Spent</p>
                              <p className="font-medium">${customer.totalSpent.toFixed(2)}</p>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm text-muted-foreground mb-2">Recent Orders</p>
                            <div className="space-y-2">
                              {customer.orders.map((order) => (
                                <div
                                  key={order.id}
                                  className="flex justify-between items-center text-sm p-2 bg-muted/50 rounded"
                                >
                                  <div>
                                    <p className="font-medium">{order.id}</p>
                                    <p className="text-muted-foreground text-xs">{order.date}</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="font-medium">${order.total.toFixed(2)}</p>
                                    <Badge variant="secondary" className="text-xs">
                                      {order.status}
                                    </Badge>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <Button className="w-full gap-2">
                            <Mail className="h-4 w-4" />
                            Send Email
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {filteredCustomers.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No customers found matching your search.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminCustomers;
