import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Package, Euro, Route } from 'lucide-react';
import { toast } from 'sonner';

interface BookingFormProps {
  onSubmit: (booking: {
    pointA: string;
    pointB: string;
    distance: number;
    weight: number;
    productType: string;
    price: number;
    remarks: string;
  }) => void;
}

const productTypes = [
  'Colis standard',
  'Électronique',
  'Alimentaire',
  'Fragile',
  'Vêtements',
  'Documents',
  'Mobilier',
  'Autre'
];

export const BookingForm = ({ onSubmit }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    pointA: '',
    pointB: '',
    weight: '',
    productType: '',
    remarks: ''
  });
  const [distance, setDistance] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [isCalculating, setIsCalculating] = useState(false);

  // Simuler le calcul de distance (en réalité, on utiliserait une API comme Google Maps)
  const calculateDistance = async (pointA: string, pointB: string) => {
    if (!pointA.trim() || !pointB.trim()) return 0;
    
    setIsCalculating(true);
    // Simulation d'une API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Distance simulée basée sur la longueur des adresses (pour la démo)
    const simulatedDistance = Math.max(5, Math.min(100, 
      Math.abs(pointA.length - pointB.length) + 
      (pointA.toLowerCase().includes('paris') ? 15 : 0) +
      (pointB.toLowerCase().includes('paris') ? 15 : 0) +
      Math.random() * 30
    ));
    
    setIsCalculating(false);
    return Math.round(simulatedDistance * 10) / 10;
  };

  useEffect(() => {
    const updateCalculations = async () => {
      if (formData.pointA && formData.pointB) {
        const dist = await calculateDistance(formData.pointA, formData.pointB);
        setDistance(dist);
        
        // Prix = distance * 2 * 1.5
        const calculatedPrice = Math.round(dist * 2 * 1.5 * 100) / 100;
        setPrice(calculatedPrice);
      } else {
        setDistance(0);
        setPrice(0);
      }
    };

    updateCalculations();
  }, [formData.pointA, formData.pointB]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.pointA || !formData.pointB || !formData.weight || !formData.productType) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const weight = parseFloat(formData.weight);
    if (weight <= 0) {
      toast.error('Le poids doit être supérieur à 0');
      return;
    }

    onSubmit({
      pointA: formData.pointA,
      pointB: formData.pointB,
      distance,
      weight,
      productType: formData.productType,
      price,
      remarks: formData.remarks
    });

    toast.success('Réservation créée avec succès !');
    
    // Reset form
    setFormData({
      pointA: '',
      pointB: '',
      weight: '',
      productType: '',
      remarks: ''
    });
  };

  return (
    <Card className="shadow-elegant border-border/50">
      <CardHeader className="bg-gradient-subtle">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Package className="h-6 w-6 text-primary" />
          Nouvelle Réservation de Course
        </CardTitle>
        <CardDescription>
          Remplissez les informations pour calculer automatiquement le prix de votre course
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Points A et B */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pointA" className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Point de départ *
              </Label>
              <Input
                id="pointA"
                placeholder="Adresse de départ"
                value={formData.pointA}
                onChange={(e) => handleInputChange('pointA', e.target.value)}
                className="transition-smooth focus:shadow-glow"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pointB" className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                Point d'arrivée *
              </Label>
              <Input
                id="pointB"
                placeholder="Adresse d'arrivée"
                value={formData.pointB}
                onChange={(e) => handleInputChange('pointB', e.target.value)}
                className="transition-smooth focus:shadow-glow"
              />
            </div>
          </div>

          {/* Distance et Prix */}
          {(distance > 0 || isCalculating) && (
            <Card className="bg-gradient-subtle border-primary/20">
              <CardContent className="p-4">
                <div className="grid md:grid-cols-2 gap-4 text-center">
                  <div className="space-y-2">
                    <Route className="h-8 w-8 mx-auto text-primary" />
                    <div className="text-2xl font-bold text-primary">
                      {isCalculating ? '...' : `${distance} km`}
                    </div>
                    <p className="text-sm text-muted-foreground">Distance estimée</p>
                  </div>
                  <div className="space-y-2">
                    <Euro className="h-8 w-8 mx-auto text-accent" />
                    <div className="text-2xl font-bold text-accent">
                      {isCalculating ? '...' : `${price}€`}
                    </div>
                    <p className="text-sm text-muted-foreground">Prix calculé</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Poids et Type */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="weight">Poids approximatif (kg) *</Label>
              <Input
                id="weight"
                type="number"
                step="0.1"
                min="0.1"
                placeholder="Ex: 2.5"
                value={formData.weight}
                onChange={(e) => handleInputChange('weight', e.target.value)}
                className="transition-smooth focus:shadow-glow"
              />
            </div>
            <div className="space-y-2">
              <Label>Type de produit *</Label>
              <Select value={formData.productType} onValueChange={(value) => handleInputChange('productType', value)}>
                <SelectTrigger className="transition-smooth focus:shadow-glow">
                  <SelectValue placeholder="Sélectionner le type" />
                </SelectTrigger>
                <SelectContent>
                  {productTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Remarques */}
          <div className="space-y-2">
            <Label htmlFor="remarks">Remarques particulières</Label>
            <Textarea
              id="remarks"
              placeholder="Instructions spéciales, horaires préférés, etc."
              value={formData.remarks}
              onChange={(e) => handleInputChange('remarks', e.target.value)}
              className="min-h-[100px] transition-smooth focus:shadow-glow"
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-gradient-primary hover:shadow-glow transition-smooth"
            size="lg"
          >
            Confirmer la Réservation
            {price > 0 && ` - ${price}€`}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};