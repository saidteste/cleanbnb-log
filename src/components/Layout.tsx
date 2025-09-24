import { ReactNode, useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Calendar, 
  FileText, 
  Camera, 
  DollarSign, 
  ClipboardList, 
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dashboard } from '@/components/Dashboard';
import { ReservationsSection } from '@/components/sections/ReservationsSection';
import { InspectionsSection } from '@/components/sections/InspectionsSection';
import { RevenueSection } from '@/components/sections/RevenueSection';
import { CleaningSection } from '@/components/sections/CleaningSection';

interface LayoutProps {
  children?: ReactNode;
}

interface NavigationItem {
  id: string;
  label: string;
  icon: typeof Home;
}

const navigationItems: NavigationItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'reservations', label: 'Réservations', icon: Calendar },
  { id: 'inspections', label: 'États des lieux', icon: Camera },
  { id: 'reports', label: 'Comptes rendus', icon: FileText },
  { id: 'revenue', label: 'Revenus', icon: DollarSign },
  { id: 'cleaning', label: 'Ménage', icon: Sparkles },
];

const renderContent = (activeTab: string) => {
  switch (activeTab) {
    case 'dashboard':
      return <Dashboard />;
    case 'reservations':
      return <ReservationsSection />;
    case 'inspections':
      return <InspectionsSection />;
    case 'revenue':
      return <RevenueSection />;
    case 'cleaning':
      return <CleaningSection />;
    case 'reports':
      return (
        <div className="text-center py-12">
          <ClipboardList className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Comptes rendus</h2>
          <p className="text-muted-foreground">Cette section sera disponible prochainement</p>
        </div>
      );
    default:
      return <Dashboard />;
  }
};

export const Layout = ({ children }: LayoutProps) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-card px-6 py-4 shadow-medium">
          <div className="flex h-16 shrink-0 items-center">
            <div className="bg-gradient-hero bg-clip-text text-transparent">
              <h1 className="text-2xl font-bold">AirbnbManager</h1>
            </div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <Button
                      variant={activeTab === item.id ? "default" : "ghost"}
                      className={cn(
                        "w-full justify-start gap-x-3",
                        activeTab === item.id && "bg-gradient-primary text-primary-foreground shadow-soft"
                      )}
                      onClick={() => setActiveTab(item.id)}
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="bg-gradient-hero bg-clip-text text-transparent">
            <h1 className="text-xl font-bold">AirbnbManager</h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile sidebar */}
        {isMobileMenuOpen && (
          <div className="bg-card border-b border-border p-4">
            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-x-3",
                      activeTab === item.id && "bg-gradient-primary text-primary-foreground"
                    )}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </Button>
                );
              })}
            </nav>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="lg:pl-72">
        <main className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children || renderContent(activeTab)}
          </div>
        </main>
      </div>
    </div>
  );
};