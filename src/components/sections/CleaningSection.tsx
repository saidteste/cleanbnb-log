import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Users,
  Phone,
  Plus,
  Search
} from 'lucide-react';

const cleaningTasks = [
  {
    id: 1,
    property: 'Appartement Centre Ville',
    guest: 'Marie Dubois - Sortie',
    date: '2024-01-18',
    time: '11:00',
    status: 'Programmé',
    cleaner: 'Sophie Martin',
    phone: '+33 6 12 34 56 78',
    duration: '2h',
    priority: 'high'
  },
  {
    id: 2,
    property: 'Studio Montmartre',
    guest: 'Jean Martin - Entrée', 
    date: '2024-01-20',
    time: '15:00',
    status: 'En cours',
    cleaner: 'Marie Dupont',
    phone: '+33 6 98 76 54 32',
    duration: '1.5h',
    priority: 'medium'
  },
  {
    id: 3,
    property: 'Loft Marais',
    guest: 'Pierre Moreau - Entrée',
    date: '2024-01-25',
    time: '14:00',
    status: 'À planifier',
    cleaner: null,
    phone: null,
    duration: '2.5h',
    priority: 'medium'
  },
  {
    id: 4,
    property: 'Appartement Centre Ville',
    guest: 'Sophie Lambert - Sortie',
    date: '2024-01-14',
    time: '12:00',
    status: 'Terminé',
    cleaner: 'Sophie Martin',
    phone: '+33 6 12 34 56 78',
    duration: '2h',
    priority: 'low'
  },
];

const cleaners = [
  {
    id: 1,
    name: 'Sophie Martin',
    phone: '+33 6 12 34 56 78',
    email: 'sophie.martin@email.com',
    rating: 4.8,
    completedJobs: 127,
    specialties: ['Appartements', 'Ménage profond'],
    available: true
  },
  {
    id: 2,
    name: 'Marie Dupont',
    phone: '+33 6 98 76 54 32',
    email: 'marie.dupont@email.com',
    rating: 4.6,
    completedJobs: 89,
    specialties: ['Studios', 'Ménage rapide'],
    available: true
  },
  {
    id: 3,
    name: 'Jean Legrand',
    phone: '+33 6 55 44 33 22',
    email: 'jean.legrand@email.com',
    rating: 4.9,
    completedJobs: 203,
    specialties: ['Lofts', 'Maintenance'],
    available: false
  },
];

export const CleaningSection = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Ménage</h1>
          <p className="text-muted-foreground mt-2">
            Planifiez et suivez les tâches de ménage entre les séjours
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Users className="mr-2 h-4 w-4" />
            Gérer équipe
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
            <Plus className="mr-2 h-4 w-4" />
            Planifier ménage
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-sm text-muted-foreground">À planifier</p>
              </div>
              <AlertCircle className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-foreground">1</p>
                <p className="text-sm text-muted-foreground">En cours</p>
              </div>
              <Clock className="h-8 w-8 text-secondary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-foreground">8</p>
                <p className="text-sm text-muted-foreground">Ce mois</p>
              </div>
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-foreground">4.8</p>
                <p className="text-sm text-muted-foreground">Note moyenne</p>
              </div>
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Cleaning Tasks */}
        <Card className="lg:col-span-2 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Tâches de ménage
            </CardTitle>
            <CardDescription>
              Planification et suivi des interventions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Filters */}
            <div className="flex gap-3 mb-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Rechercher une propriété..."
                    className="pl-9"
                  />
                </div>
              </div>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Tous
              </Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                Urgent
              </Badge>
            </div>

            <div className="space-y-4">
              {cleaningTasks.map((task) => (
                <div 
                  key={task.id} 
                  className="p-4 rounded-lg border border-border hover:shadow-soft transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm">{task.property}</h4>
                      <p className="text-xs text-muted-foreground">{task.guest}</p>
                    </div>
                    <Badge 
                      variant={
                        task.status === 'En cours' ? 'default' :
                        task.status === 'Programmé' ? 'secondary' :
                        task.status === 'Terminé' ? 'outline' : 'destructive'
                      }
                      className={
                        task.status === 'En cours' ? 'bg-secondary' :
                        task.status === 'Programmé' ? 'bg-primary' :
                        task.status === 'Terminé' ? 'bg-success border-success text-success-foreground' : 'bg-warning'
                      }
                    >
                      {task.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {task.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {task.time} ({task.duration})
                    </div>
                  </div>
                  
                  {task.cleaner && (
                    <div className="flex items-center justify-between text-xs mb-3 p-2 bg-muted/50 rounded">
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3" />
                        <span className="font-medium">{task.cleaner}</span>
                      </div>
                      {task.phone && (
                        <div className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          <span>{task.phone}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    {task.status === 'À planifier' ? (
                      <>
                        <Button variant="outline" size="sm" className="flex-1">
                          Assigner
                        </Button>
                        <Button size="sm" className="flex-1 bg-gradient-secondary hover:opacity-90">
                          Planifier
                        </Button>
                      </>
                    ) : task.status === 'En cours' ? (
                      <>
                        <Button variant="outline" size="sm" className="flex-1">
                          Contacter
                        </Button>
                        <Button size="sm" className="flex-1 bg-gradient-primary hover:opacity-90">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Terminer
                        </Button>
                      </>
                    ) : (
                      <Button variant="outline" size="sm" className="w-full">
                        Voir détails
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cleaning Team */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-secondary" />
              Équipe de ménage
            </CardTitle>
            <CardDescription>
              Vos agents de nettoyage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cleaners.map((cleaner) => (
                <div 
                  key={cleaner.id}
                  className={`p-3 rounded-lg border transition-all ${
                    cleaner.available 
                      ? 'border-border hover:shadow-soft' 
                      : 'border-muted bg-muted/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{cleaner.name}</h4>
                    <Badge 
                      variant={cleaner.available ? 'default' : 'secondary'}
                      className={cleaner.available ? 'bg-success' : ''}
                    >
                      {cleaner.available ? 'Disponible' : 'Occupé'}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {cleaner.phone}
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Note: {cleaner.rating}/5</span>
                      <span>{cleaner.completedJobs} missions</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {cleaner.specialties.map((specialty) => (
                        <Badge 
                          key={specialty} 
                          variant="outline" 
                          className="text-xs px-2 py-0"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {cleaner.available && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-3 text-xs"
                    >
                      Assigner une tâche
                    </Button>
                  )}
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-4">
              <Plus className="mr-2 h-4 w-4" />
              Ajouter un agent
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};