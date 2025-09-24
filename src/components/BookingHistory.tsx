import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Package, Euro, Clock, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Booking {
  id: string;
  pointA: string;
  pointB: string;
  distance: number;
  weight: number;
  productType: string;
  price: number;
  remarks: string;
  createdAt: Date;
  status: 'pending' | 'confirmed' | 'completed';
}

interface BookingHistoryProps {
  bookings: Booking[];
}

const statusConfig = {
  pending: { label: 'En attente', variant: 'secondary' as const, color: 'text-yellow-600' },
  confirmed: { label: 'Confirmée', variant: 'default' as const, color: 'text-blue-600' },
  completed: { label: 'Terminée', variant: 'outline' as const, color: 'text-green-600' }
};

export const BookingHistory = ({ bookings }: BookingHistoryProps) => {
  if (bookings.length === 0) {
    return (
      <Card className="text-center py-10">
        <CardContent>
          <Package className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <CardTitle className="mb-2">Aucune réservation</CardTitle>
          <CardDescription>
            Vos réservations de course apparaîtront ici une fois créées.
          </CardDescription>
        </CardContent>
      </Card>
    );
  }

  const totalAmount = bookings.reduce((sum, booking) => sum + booking.price, 0);

  return (
    <div className="space-y-6">
      {/* Stats */}
      <Card className="bg-gradient-subtle border-primary/20">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <Package className="h-8 w-8 mx-auto text-primary" />
              <div className="text-2xl font-bold text-primary">{bookings.length}</div>
              <p className="text-sm text-muted-foreground">Réservations</p>
            </div>
            <div className="space-y-2">
              <Euro className="h-8 w-8 mx-auto text-accent" />
              <div className="text-2xl font-bold text-accent">{totalAmount.toFixed(2)}€</div>
              <p className="text-sm text-muted-foreground">Total dépensé</p>
            </div>
            <div className="space-y-2">
              <Clock className="h-8 w-8 mx-auto text-muted-foreground" />
              <div className="text-2xl font-bold text-foreground">
                {bookings.filter(b => b.status === 'completed').length}
              </div>
              <p className="text-sm text-muted-foreground">Courses terminées</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bookings List */}
      <div className="space-y-4">
        {bookings.map((booking) => {
          const status = statusConfig[booking.status];
          
          return (
            <Card key={booking.id} className="shadow-soft hover:shadow-elegant transition-smooth">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-primary bg-clip-text text-transparent">
                      <Package className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Course #{booking.id}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {booking.createdAt.toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant={status.variant} className={cn("font-medium", status.color)}>
                    {status.label}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Route */}
                <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="font-medium">{booking.pointA}</span>
                  <div className="flex-1 border-t border-dashed border-muted-foreground/30"></div>
                  <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="font-medium">{booking.pointB}</span>
                </div>

                {/* Details */}
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Distance</p>
                    <p className="font-medium">{booking.distance} km</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Poids</p>
                    <p className="font-medium">{booking.weight} kg</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Type</p>
                    <p className="font-medium">{booking.productType}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Prix</p>
                    <p className="font-bold text-accent text-lg">{booking.price}€</p>
                  </div>
                </div>

                {/* Remarks */}
                {booking.remarks && (
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Remarques</p>
                        <p className="text-sm">{booking.remarks}</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};