import { TrendingUp, TrendingDown, Calendar, Euro, Star, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const statistics = {
  occupancy: {
    current: 78,
    previous: 72,
    trend: 'up'
  },
  avgNightRate: {
    current: 85,
    previous: 80,
    trend: 'up'
  },
  revenue: {
    current: 12450,
    previous: 10800,
    trend: 'up'
  },
  rating: {
    current: 4.8,
    previous: 4.6,
    trend: 'up'
  }
};

const propertyPerformance = [
  {
    id: 1,
    name: "T3 République",
    revenue: 4850,
    occupancy: 90,
    rating: 4.9,
    nights: 22,
    trend: 'up'
  },
  {
    id: 2,
    name: "CosyHome Bondy",
    revenue: 4200,
    occupancy: 80,
    rating: 4.8,
    nights: 18,
    trend: 'up'
  },
  {
    id: 3,
    name: "Studio Gare du Nord",
    revenue: 3400,
    occupancy: 65,
    rating: 4.7,
    nights: 15,
    trend: 'down'
  }
];

const monthlyData = [
  { month: "Oct 2024", revenue: 10200, nights: 45, occupancy: 75 },
  { month: "Nov 2024", revenue: 10800, nights: 48, occupancy: 72 },
  { month: "Déc 2024", revenue: 12450, nights: 55, occupancy: 78 }
];

export const StatisticsSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Statistiques & Reporting</h2>
        <p className="text-muted-foreground mt-1">Analysez vos performances</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux d'occupation</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statistics.occupancy.current}%</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              {statistics.occupancy.trend === 'up' ? (
                <TrendingUp className="h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500" />
              )}
              <span className={statistics.occupancy.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                +{statistics.occupancy.current - statistics.occupancy.previous}%
              </span>
              <span>vs mois dernier</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tarif moyen/nuit</CardTitle>
            <Euro className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statistics.avgNightRate.current}€</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              {statistics.avgNightRate.trend === 'up' ? (
                <TrendingUp className="h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500" />
              )}
              <span className={statistics.avgNightRate.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                +{statistics.avgNightRate.current - statistics.avgNightRate.previous}€
              </span>
              <span>vs mois dernier</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenu total</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statistics.revenue.current.toLocaleString()}€</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              {statistics.revenue.trend === 'up' ? (
                <TrendingUp className="h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500" />
              )}
              <span className={statistics.revenue.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                +{((statistics.revenue.current - statistics.revenue.previous) / statistics.revenue.previous * 100).toFixed(1)}%
              </span>
              <span>vs mois dernier</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Note moyenne</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statistics.rating.current}/5</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              {statistics.rating.trend === 'up' ? (
                <TrendingUp className="h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500" />
              )}
              <span className={statistics.rating.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                +{(statistics.rating.current - statistics.rating.previous).toFixed(1)}
              </span>
              <span>vs mois dernier</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top 3 des logements les plus rentables</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {propertyPerformance.map((property, index) => (
              <Card key={property.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold">
                        #{index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold">{property.name}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span>{property.nights} nuits</span>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {property.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">{property.revenue.toLocaleString()}€</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary">{property.occupancy}% occupé</Badge>
                        {property.trend === 'up' ? (
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-500" />
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Évolution sur 3 mois</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyData.map((month, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-4 bg-muted/50 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Mois</p>
                  <p className="text-lg font-semibold">{month.month}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Revenu</p>
                  <p className="text-lg font-semibold">{month.revenue.toLocaleString()}€</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Nuitées</p>
                  <p className="text-lg font-semibold">{month.nights}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Occupation</p>
                  <p className="text-lg font-semibold">{month.occupancy}%</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};