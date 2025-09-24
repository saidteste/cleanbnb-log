import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Camera, 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertTriangle,
  Home,
  Plus,
  Eye
} from 'lucide-react';
import { useState } from 'react';

const inspections = [
  {
    id: 1,
    property: 'Appartement Centre Ville',
    guest: 'Marie Dubois',
    date: '2024-01-18',
    type: 'Sortie',
    status: 'En attente',
    photos: 0,
    issues: [],
  },
  {
    id: 2,
    property: 'Studio Montmartre', 
    guest: 'Jean Martin',
    date: '2024-01-19',
    type: 'Entrée',
    status: 'Programmé',
    photos: 0,
    issues: [],
  },
  {
    id: 3,
    property: 'Appartement Centre Ville',
    guest: 'Sophie Lambert',
    date: '2024-01-14',
    type: 'Sortie',
    status: 'Terminé',
    photos: 12,
    issues: ['Tache sur canapé', 'Ampoule grillée'],
  },
];

export const InspectionsSection = () => {
  const [selectedInspection, setSelectedInspection] = useState<number | null>(null);
  const [photos, setPhotos] = useState<File[]>([]);
  const [notes, setNotes] = useState('');

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setPhotos(prev => [...prev, ...files]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">États des lieux</h1>
          <p className="text-muted-foreground mt-2">
            Documentez l'état de vos propriétés avant et après chaque séjour
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
          <Plus className="mr-2 h-4 w-4" />
          Nouvel état des lieux
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Inspections List */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              États des lieux programmés
            </CardTitle>
            <CardDescription>
              Réalisez et suivez vos inspections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {inspections.map((inspection) => (
                <div 
                  key={inspection.id} 
                  className={`p-4 rounded-lg border border-border cursor-pointer transition-all hover:shadow-soft ${
                    selectedInspection === inspection.id ? 'bg-muted/50 border-primary' : 'hover:bg-muted/30'
                  }`}
                  onClick={() => setSelectedInspection(inspection.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{inspection.property}</h4>
                    <Badge 
                      variant={
                        inspection.status === 'En attente' ? 'destructive' :
                        inspection.status === 'Programmé' ? 'secondary' : 'default'
                      }
                      className={
                        inspection.status === 'Terminé' ? 'bg-success' : ''
                      }
                    >
                      {inspection.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-2">
                    <p>Hôte: {inspection.guest}</p>
                    <p>Date: {inspection.date}</p>
                    <p>Type: {inspection.type}</p>
                    <p>Photos: {inspection.photos}</p>
                  </div>
                  
                  {inspection.issues.length > 0 && (
                    <div className="flex items-center gap-1 text-xs">
                      <AlertTriangle className="h-3 w-3 text-warning" />
                      <span className="text-warning">{inspection.issues.length} problème(s) détecté(s)</span>
                    </div>
                  )}
                  
                  <div className="flex gap-2 mt-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="mr-1 h-3 w-3" />
                      Voir
                    </Button>
                    {inspection.status !== 'Terminé' && (
                      <Button size="sm" className="flex-1 bg-gradient-secondary hover:opacity-90">
                        <Camera className="mr-1 h-3 w-3" />
                        Commencer
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Inspection Form */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-secondary" />
              {selectedInspection ? 'Réaliser l\'état des lieux' : 'Sélectionnez un état des lieux'}
            </CardTitle>
            <CardDescription>
              Prenez des photos et ajoutez vos observations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {selectedInspection ? (
              <>
                {/* Photo Upload */}
                <div className="space-y-3">
                  <Label>Photos de l'appartement</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                      id="photo-upload"
                    />
                    <label htmlFor="photo-upload" className="cursor-pointer">
                      <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-1">
                        Cliquez pour ajouter des photos
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG jusqu'à 10MB chacune
                      </p>
                    </label>
                  </div>
                  
                  {photos.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      {photos.map((photo, index) => (
                        <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                          <img 
                            src={URL.createObjectURL(photo)}
                            alt={`Photo ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes">Observations et remarques</Label>
                  <Textarea
                    id="notes"
                    placeholder="Décrivez l'état général de l'appartement, les éventuels problèmes détectés..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                  />
                </div>

                {/* Quick Checkboxes */}
                <div className="space-y-2">
                  <Label>État général</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Propreté générale',
                      'Mobilier intact', 
                      'Électroménager fonctionnel',
                      'Plomberie OK',
                      'Éclairage OK',
                      'Clés présentes'
                    ].map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <input type="checkbox" id={item} className="rounded" />
                        <label htmlFor={item} className="text-sm text-foreground">{item}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    Sauvegarder brouillon
                  </Button>
                  <Button className="flex-1 bg-gradient-primary hover:opacity-90">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Finaliser
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Home className="mx-auto h-12 w-12 mb-3" />
                <p>Sélectionnez un état des lieux dans la liste pour commencer</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};