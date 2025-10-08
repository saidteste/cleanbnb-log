import { Building2, Plus, MapPin, Bed, Key, ExternalLink, Calendar, Users, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const properties = [
  {
    id: 1,
    name: "CosyHome Bondy",
    code: "BND-001",
    address: "15 Rue Victor Hugo, 93140 Bondy",
    type: "T2",
    capacity: 4,
    status: "occupied",
    platforms: [
      { name: "Airbnb", url: "#", active: true },
      { name: "Booking", url: "#", active: true }
    ],
    access: {
      keyBox: "Code: 1234A",
      digicode: "5678B",
      emergency: "+33 6 12 34 56 78"
    },
    availability: "80%",
    nextCheckout: "2024-01-25",
    cleaner: "Marie Dupont"
  },
  {
    id: 2,
    name: "Studio Gare du Nord",
    code: "GDN-102",
    address: "8 Boulevard de Magenta, 75010 Paris",
    type: "Studio",
    capacity: 2,
    status: "available",
    platforms: [
      { name: "Airbnb", url: "#", active: true }
    ],
    access: {
      keyBox: "Code: 9876C",
      digicode: "4321D",
      emergency: "+33 6 98 76 54 32"
    },
    availability: "65%",
    nextCheckout: null,
    cleaner: "Jean Martin"
  },
  {
    id: 3,
    name: "T3 République",
    code: "REP-203",
    address: "22 Avenue de la République, 75011 Paris",
    type: "T3",
    capacity: 6,
    status: "maintenance",
    platforms: [
      { name: "Airbnb", url: "#", active: true },
      { name: "Booking", url: "#", active: false }
    ],
    access: {
      keyBox: "Code: 5555E",
      digicode: "7777F",
      emergency: "+33 6 11 22 33 44"
    },
    availability: "90%",
    nextCheckout: "2024-01-28",
    cleaner: "Sophie Bernard"
  }
];

export const PropertiesSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Logements</h2>
          <p className="text-muted-foreground mt-1">Gérez tous vos logements en location</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Synchroniser Airbnb
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nouveau logement
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Logements</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Tous types confondus</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Occupés</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Voyageurs actuels</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Disponibles</CardTitle>
            <Key className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Prêts à louer</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Maintenance</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">En cours</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>Liste des logements</CardTitle>
            <Input
              placeholder="Rechercher un logement..."
              className="w-full sm:w-64"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <Tabs defaultValue="info" className="w-full">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold">{property.name}</h3>
                              <Badge variant="outline" className="text-xs">
                                {property.code}
                              </Badge>
                              <Badge 
                                variant={
                                  property.status === 'occupied' ? 'default' : 
                                  property.status === 'available' ? 'secondary' : 
                                  'destructive'
                                }
                              >
                                {property.status === 'occupied' ? 'Occupé' : 
                                 property.status === 'available' ? 'Disponible' : 
                                 'Maintenance'}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {property.address}
                              </div>
                              <div className="flex items-center gap-1">
                                <Bed className="h-4 w-4" />
                                {property.type} · {property.capacity} pers.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <TabsList>
                        <TabsTrigger value="info">Informations</TabsTrigger>
                        <TabsTrigger value="access">Accès</TabsTrigger>
                        <TabsTrigger value="platforms">Plateformes</TabsTrigger>
                      </TabsList>
                    </div>

                    <TabsContent value="info" className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-3">
                        <div>
                          <p className="text-sm font-medium mb-1">Taux d'occupation</p>
                          <p className="text-2xl font-bold text-primary">{property.availability}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Prochain départ</p>
                          <p className="text-sm">{property.nextCheckout || 'Aucun'}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Responsable ménage</p>
                          <p className="text-sm">{property.cleaner}</p>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="access" className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-3">
                        <div>
                          <p className="text-sm font-medium mb-1">
                            <Key className="inline h-4 w-4 mr-1" />
                            Boîte à clés
                          </p>
                          <p className="text-sm font-mono bg-muted p-2 rounded">{property.access.keyBox}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">
                            <Key className="inline h-4 w-4 mr-1" />
                            Digicode
                          </p>
                          <p className="text-sm font-mono bg-muted p-2 rounded">{property.access.digicode}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Contact urgence</p>
                          <p className="text-sm font-mono bg-muted p-2 rounded">{property.access.emergency}</p>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="platforms" className="space-y-4">
                      <div className="flex flex-wrap gap-4">
                        {property.platforms.map((platform, idx) => (
                          <Card key={idx} className="flex-1 min-w-[200px]">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium">{platform.name}</p>
                                  <Badge variant={platform.active ? "default" : "secondary"} className="mt-1">
                                    {platform.active ? "Actif" : "Inactif"}
                                  </Badge>
                                </div>
                                <Button variant="ghost" size="icon">
                                  <ExternalLink className="h-4 w-4" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Calendrier
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="mr-2 h-4 w-4" />
                      Modifier
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};