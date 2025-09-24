import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  DollarSign, 
  Home, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Users
} from 'lucide-react';

const stats = [
  {
    label: 'Revenus ce mois',
    value: '€2,850',
    change: '+12%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    label: 'Réservations actives',
    value: '8',
    change: '+2',
    trend: 'up',
    icon: Calendar,
  },
  {
    label: 'Taux d\'occupation',
    value: '87%',
    change: '+5%',
    trend: 'up',
    icon: TrendingUp,
  },
  {
    label: 'États des lieux',
    value: '3',
    change: 'En attente',
    trend: 'neutral',
    icon: Home,
  },
];

const recentReservations = [
  {
    id: 1,
    guest: 'Marie Dubois',
    property: 'Appartement Centre Ville',
    checkIn: '2024-01-15',
    checkOut: '2024-01-18',
    status: 'En cours',
    revenue: '€425',
  },
  {
    id: 2,
    guest: 'Jean Martin',
    property: 'Studio Montmartre',
    checkIn: '2024-01-20',
    checkOut: '2024-01-25',
    status: 'Confirmée',
    revenue: '€350',
  },
  {
    id: 3,
    guest: 'Sophie Lambert',
    property: 'Appartement Centre Ville',
    checkIn: '2024-01-12',
    checkOut: '2024-01-14',
    status: 'Terminée',
    revenue: '€280',
  },
];

const upcomingTasks = [
  {
    id: 1,
    task: 'État des lieux - Appartement Centre Ville',
    type: 'inspection',
    deadline: '2024-01-18',
    priority: 'high',
  },
  {
    id: 2,
    task: 'Ménage - Studio Montmartre',
    type: 'cleaning',
    deadline: '2024-01-19',
    priority: 'medium',
  },
  {
    id: 3,
    task: 'Compte rendu - Séjour Martin',
    type: 'report',
    deadline: '2024-01-16',
    priority: 'low',
  },
];

export const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Vue d'ensemble de vos propriétés Airbnb
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center text-xs">
                  <Badge 
                    variant={stat.trend === 'up' ? 'default' : 'secondary'} 
                    className={stat.trend === 'up' ? 'bg-success' : ''}
                  >
                    {stat.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Reservations */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Réservations récentes
            </CardTitle>
            <CardDescription>
              Dernières réservations et leur statut
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReservations.map((reservation) => (
                <div key={reservation.id} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="space-y-1">
                    <p className="font-medium text-sm">{reservation.guest}</p>
                    <p className="text-xs text-muted-foreground">{reservation.property}</p>
                    <p className="text-xs text-muted-foreground">
                      {reservation.checkIn} → {reservation.checkOut}
                    </p>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge 
                      variant={
                        reservation.status === 'En cours' ? 'default' :
                        reservation.status === 'Confirmée' ? 'secondary' : 'outline'
                      }
                      className={
                        reservation.status === 'En cours' ? 'bg-primary' :
                        reservation.status === 'Confirmée' ? 'bg-success' : ''
                      }
                    >
                      {reservation.status}
                    </Badge>
                    <p className="text-sm font-semibold text-foreground">{reservation.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Voir toutes les réservations
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              Tâches à venir
            </CardTitle>
            <CardDescription>
              Actions requises pour vos propriétés
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="space-y-1 flex-1">
                    <p className="font-medium text-sm">{task.task}</p>
                    <p className="text-xs text-muted-foreground">Échéance: {task.deadline}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="outline"
                      className={
                        task.priority === 'high' ? 'border-destructive text-destructive' :
                        task.priority === 'medium' ? 'border-warning text-warning' :
                        'border-muted-foreground text-muted-foreground'
                      }
                    >
                      {task.priority === 'high' ? 'Urgent' :
                       task.priority === 'medium' ? 'Moyen' : 'Faible'}
                    </Badge>
                    {task.type === 'inspection' && <CheckCircle className="h-4 w-4 text-primary" />}
                    {task.type === 'cleaning' && <AlertCircle className="h-4 w-4 text-warning" />}
                    {task.type === 'report' && <Clock className="h-4 w-4 text-muted-foreground" />}
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Voir toutes les tâches
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Actions rapides</CardTitle>
          <CardDescription>
            Accédez rapidement aux fonctionnalités principales
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <Calendar className="mr-2 h-4 w-4" />
              Nouvelle réservation
            </Button>
            <Button variant="secondary" className="bg-gradient-secondary hover:opacity-90">
              <Home className="mr-2 h-4 w-4" />
              État des lieux
            </Button>
            <Button variant="outline">
              <DollarSign className="mr-2 h-4 w-4" />
              Saisir revenus
            </Button>
            <Button variant="outline">
              <CheckCircle className="mr-2 h-4 w-4" />
              Planifier ménage
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};