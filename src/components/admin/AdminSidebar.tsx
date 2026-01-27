import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LayoutDashboard, ShoppingCart, Package, Users, ChevronLeft, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import laceLogo from '@/assets/lace-logo.png';

const navItems = [
  { title: 'Dashboard', url: '/admin', icon: LayoutDashboard },
  { title: 'Orders', url: '/admin/orders', icon: ShoppingCart },
  { title: 'Products', url: '/admin/products', icon: Package },
  { title: 'Customers', url: '/admin/customers', icon: Users },
];

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out",
        description: "You have been signed out successfully",
      });
      navigate('/admin/login');
    }
  };

  return (
    <aside className="w-64 border-r border-border bg-sidebar min-h-screen flex flex-col">
      <div className="p-4 border-b border-border">
        <a href="/" className="flex items-center gap-2">
          <img src={laceLogo} alt="Lace" className="h-12 w-auto" />
        </a>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.url || 
            (item.url !== '/admin' && location.pathname.startsWith(item.url));
          
          return (
            <NavLink
              key={item.url}
              to={item.url}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                isActive
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border space-y-2">
        {user && (
          <p className="text-xs text-muted-foreground truncate px-1 mb-2">
            {user.email}
          </p>
        )}
        <Button variant="ghost" className="w-full gap-2 justify-start" onClick={handleLogout}>
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
        <Button variant="outline" className="w-full gap-2" asChild>
          <a href="/">
            <ChevronLeft className="h-4 w-4" />
            Back to Store
          </a>
        </Button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
