import { ReactNode, useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Calendar, 
  FileText, 
  Building2,
  Menu,
  X,
  Sparkles,
  MessageSquare,
  TrendingUp,
  BarChart3,
  Bell,
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dashboard } from '@/components/Dashboard';
import { PropertiesSection } from '@/components/sections/PropertiesSection';
import { ReservationsSection } from '@/components/sections/ReservationsSection';
import { CleaningSection } from '@/components/sections/CleaningSection';
import { CommunicationSection } from '@/components/sections/CommunicationSection';
import { RevenueSection } from '@/components/sections/RevenueSection';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { DocumentsSection } from '@/components/sections/DocumentsSection';
import { NotificationsSection } from '@/components/sections/NotificationsSection';
import { TeamSection } from '@/components/sections/TeamSection';

interface LayoutProps {
  children?: ReactNode;
}

interface NavigationItem {
  id: string;
  label: string;
  icon: typeof Home;
}

const navigationItems: NavigationItem[] = [
  { id: 'dashboard', label: 'Tableau de bord', icon: Home },
  { id: 'properties', label: 'Logements', icon: Building2 },
  { id: 'reservations', label: 'Réservations', icon: Calendar },
  { id: 'cleaning', label: 'Ménage & Maintenance', icon: Sparkles },
  { id: 'communication', label: 'Communication', icon: MessageSquare },
  { id: 'revenue', label: 'Finances', icon: TrendingUp },
  { id: 'statistics', label: 'Statistiques', icon: BarChart3 },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'team', label: 'Équipe', icon: Users },
];

const renderContent = (activeTab: string) => {
  switch (activeTab) {
    case 'dashboard':
      return <Dashboard />;
    case 'properties':
      return <PropertiesSection />;
    case 'reservations':
      return <ReservationsSection />;
    case 'cleaning':
      return <CleaningSection />;
    case 'communication':
      return <CommunicationSection />;
    case 'revenue':
      return <RevenueSection />;
    case 'statistics':
      return <StatisticsSection />;
    case 'documents':
      return <DocumentsSection />;
    case 'notifications':
      return <NotificationsSection />;
    case 'team':
      return <TeamSection />;
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