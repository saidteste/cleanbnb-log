import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Package, Truck, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BookingForm } from './BookingForm';
import { BookingHistory } from './BookingHistory';

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

export const DeliveryBooking = () => {
  const [activeTab, setActiveTab] = useState<'booking' | 'history'>('booking');
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addBooking = (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>) => {
    const newBooking: Booking = {
      ...booking,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
      status: 'pending'
    };
    setBookings(prev => [newBooking, ...prev]);
    setActiveTab('history');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="bg-gradient-primary bg-clip-text text-transparent mb-4">
          <Truck className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold">CourseExpress</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Réservez votre course en quelques clics. Transport rapide et sécurisé entre deux points.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="bg-card rounded-lg p-1 shadow-soft">
          <Button
            variant={activeTab === 'booking' ? 'default' : 'ghost'}
            className={cn(
              "px-6 py-2",
              activeTab === 'booking' && "bg-gradient-primary text-primary-foreground shadow-soft"
            )}
            onClick={() => setActiveTab('booking')}
          >
            <Package className="h-4 w-4 mr-2" />
            Nouvelle Réservation
          </Button>
          <Button
            variant={activeTab === 'history' ? 'default' : 'ghost'}
            className={cn(
              "px-6 py-2",
              activeTab === 'history' && "bg-gradient-primary text-primary-foreground shadow-soft"
            )}
            onClick={() => setActiveTab('history')}
          >
            <Calculator className="h-4 w-4 mr-2" />
            Historique ({bookings.length})
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {activeTab === 'booking' ? (
          <BookingForm onSubmit={addBooking} />
        ) : (
          <BookingHistory bookings={bookings} />
        )}
      </div>
    </div>
  );
};