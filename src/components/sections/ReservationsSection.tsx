import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, Search, Plus, MapPin, Users, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-apartment.jpg';

const reservations = [
  {
    id: 1,
    guest: 'Marie Dubois',
    property: 'Appartement Centre Ville',
    checkIn: '2024-01-15',
    checkOut: '2024-01-18',
    nights: 3,
    guests: 2,
    status: 'En cours',
    revenue: '€425',
    image: heroImage,
  },
  {
    id: 2,
    guest: 'Jean Martin',
    property: 'Studio Montmartre',
    checkIn: '2024-01-20',
    checkOut: '2024-01-25',
    nights: 5,
    guests: 1,
    status: 'Confirmée',
    revenue: '€350',
    image: heroImage,
  },
  {
    id: 3,
    guest: 'Sophie Lambert',
    property: 'Appartement Centre Ville',
    checkIn: '2024-01-12',
    checkOut: '2024-01-14',
    nights: 2,
    guests: 3,
    status: 'Terminée',
    revenue: '€280',
    image: heroImage,
  },
  {
    id: 4,
    guest: 'Pierre Moreau',
    property: 'Loft Marais',
    checkIn: '2024-01-25',
    checkOut: '2024-01-30',
    nights: 5,
    guests: 2,
    status: 'Confirmée',
    revenue: '€520',
    image: heroImage,
  },
];

export const ReservationsSection = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Réservations</h1>
          <p className="text-muted-foreground mt-2">
            Gérez vos réservations Airbnb et synchronisez votre calendrier
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
            <Calendar className="mr-2 h-4 w-4" />
            Synchroniser calendrier
          </Button>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Nouvelle réservation
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="shadow-soft">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Rechercher par nom d'hôte ou propriété..."
                  className="pl-9"
                />
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                Toutes
              </Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                En cours
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                Confirmées
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                Terminées
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reservations Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reservations.map((reservation) => (
          <Card key={reservation.id} className="shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden">
            <div className="relative h-48">
              <img 
                src={reservation.image}
                alt={reservation.property}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
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
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-lg">{reservation.guest}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {reservation.property}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="text-muted-foreground">Arrivée</p>
                  <p className="font-medium">{reservation.checkIn}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Départ</p>
                  <p className="font-medium">{reservation.checkOut}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{reservation.nights} nuits</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{reservation.guests} invités</span>
                  </div>
                </div>
                <div className="text-lg font-bold text-foreground">
                  {reservation.revenue}
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Détails
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="flex-1 bg-gradient-primary hover:opacity-90"
                >
                  État des lieux
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="px-8">
          Charger plus de réservations
        </Button>
      </div>
    </div>
  );
};