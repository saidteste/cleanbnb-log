import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Calendar,
  BarChart3,
  Download,
  Plus
} from 'lucide-react';

const monthlyRevenue = [
  { month: 'Décembre 2023', revenue: 2450, bookings: 7, avgNightly: 85 },
  { month: 'Janvier 2024', revenue: 2850, bookings: 8, avgNightly: 92 },
  { month: 'Février 2024', revenue: 3200, bookings: 9, avgNightly: 98 },
];

const properties = [
  {
    name: 'Appartement Centre Ville',
    monthlyRevenue: 1200,
    occupancy: 87,
    avgRate: 95,
    trend: 'up',
    change: '+12%'
  },
  {
    name: 'Studio Montmartre',
    monthlyRevenue: 850,
    occupancy: 82,
    avgRate: 68,
    trend: 'up',
    change: '+8%'
  },
  {
    name: 'Loft Marais',
    monthlyRevenue: 800,
    occupancy: 75,
    avgRate: 105,
    trend: 'down',
    change: '-3%'
  },
];

const recentTransactions = [
  {
    id: 1,
    guest: 'Marie Dubois',
    property: 'Appartement Centre Ville',
    amount: 425,
    date: '2024-01-15',
    nights: 3,
    status: 'Reçu'
  },
  {
    id: 2,
    guest: 'Sophie Lambert',
    property: 'Appartement Centre Ville',
    amount: 280,
    date: '2024-01-12',
    nights: 2,
    status: 'Reçu'
  },
  {
    id: 3,
    guest: 'Pierre Moreau',
    property: 'Loft Marais',
    amount: 520,
    date: '2024-01-10',
    nights: 5,
    status: 'En attente'
  },
];

export const RevenueSection = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Revenus</h1>
          <p className="text-muted-foreground mt-2">
            Suivez vos revenus et analysez les performances de vos propriétés
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
            <Plus className="mr-2 h-4 w-4" />
            Saisir revenus
          </Button>
        </div>
      </div>

      {/* Revenue Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Revenus ce mois
            </CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">€2,850</div>
            <div className="flex items-center text-xs mt-1">
              <TrendingUp className="h-3 w-3 text-success mr-1" />
              <span className="text-success">+16.3%</span>
              <span className="text-muted-foreground ml-1">vs mois dernier</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Taux moyen/nuit
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">€92</div>
            <div className="flex items-center text-xs mt-1">
              <TrendingUp className="h-3 w-3 text-success mr-1" />
              <span className="text-success">+8.2%</span>
              <span className="text-muted-foreground ml-1">vs mois dernier</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Réservations
            </CardTitle>
            <Calendar className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">8</div>
            <div className="flex items-center text-xs mt-1">
              <TrendingUp className="h-3 w-3 text-success mr-1" />
              <span className="text-success">+14%</span>
              <span className="text-muted-foreground ml-1">vs mois dernier</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Taux d'occupation
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">81%</div>
            <div className="flex items-center text-xs mt-1">
              <TrendingDown className="h-3 w-3 text-destructive mr-1" />
              <span className="text-destructive">-2.1%</span>
              <span className="text-muted-foreground ml-1">vs mois dernier</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Properties Performance */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Performance par propriété</CardTitle>
            <CardDescription>Revenus et taux d'occupation ce mois</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {properties.map((property) => (
                <div key={property.name} className="p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{property.name}</h4>
                    <Badge 
                      variant={property.trend === 'up' ? 'default' : 'destructive'}
                      className={property.trend === 'up' ? 'bg-success' : ''}
                    >
                      {property.change}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs">Revenus</p>
                      <p className="font-semibold">€{property.monthlyRevenue}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Occupation</p>
                      <p className="font-semibold">{property.occupancy}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Tarif moyen</p>
                      <p className="font-semibold">€{property.avgRate}</p>
                    </div>
                  </div>
                  
                  {/* Occupation Bar */}
                  <div className="mt-3">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-secondary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${property.occupancy}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Transactions récentes</CardTitle>
            <CardDescription>Paiements reçus et en attente</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-sm">{transaction.guest}</h4>
                      <p className="text-xs text-muted-foreground">{transaction.property}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground">€{transaction.amount}</p>
                      <Badge 
                        variant={transaction.status === 'Reçu' ? 'default' : 'secondary'}
                        className={transaction.status === 'Reçu' ? 'bg-success text-xs' : 'text-xs'}
                      >
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                    <p>Date: {transaction.date}</p>
                    <p>Nuits: {transaction.nights}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-4">
              Voir toutes les transactions
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Evolution */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Évolution mensuelle</CardTitle>
          <CardDescription>Revenus et réservations des 3 derniers mois</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {monthlyRevenue.map((month, index) => (
              <div key={month.month} className="text-center p-4 rounded-lg bg-muted/30">
                <h4 className="font-medium text-sm mb-2">{month.month}</h4>
                <div className="space-y-2">
                  <div>
                    <p className="text-2xl font-bold text-primary">€{month.revenue}</p>
                    <p className="text-xs text-muted-foreground">Revenus total</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="font-semibold">{month.bookings}</p>
                      <p className="text-xs text-muted-foreground">Réservations</p>
                    </div>
                    <div>
                      <p className="font-semibold">€{month.avgNightly}</p>
                      <p className="text-xs text-muted-foreground">Moy./nuit</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};