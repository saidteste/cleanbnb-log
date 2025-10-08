import { Users, Plus, Mail, Phone, Shield, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const teamMembers = [
  {
    id: 1,
    name: "Vous (Admin)",
    email: "admin@cosyhome.fr",
    phone: "+33 6 12 34 56 78",
    role: "admin",
    access: ["Tous les logements", "Toutes les sections"],
    status: "active"
  },
  {
    id: 2,
    name: "Marie Dupont",
    email: "marie.dupont@email.fr",
    phone: "+33 6 23 45 67 89",
    role: "cleaner",
    access: ["CosyHome Bondy", "T3 République"],
    status: "active"
  },
  {
    id: 3,
    name: "Jean Martin",
    email: "jean.martin@email.fr",
    phone: "+33 6 34 56 78 90",
    role: "cleaner",
    access: ["Studio Gare du Nord"],
    status: "active"
  },
  {
    id: 4,
    name: "Sophie Bernard",
    email: "sophie.bernard@email.fr",
    phone: "+33 6 45 67 89 01",
    role: "maintenance",
    access: ["Tous les logements"],
    status: "active"
  },
  {
    id: 5,
    name: "Thomas Dubois",
    email: "thomas.dubois@compta.fr",
    phone: "+33 6 56 78 90 12",
    role: "accountant",
    access: ["Section Finances uniquement"],
    status: "active"
  }
];

const roleInfo = {
  admin: {
    label: "Administrateur",
    color: "default",
    description: "Accès complet à toutes les fonctionnalités"
  },
  cleaner: {
    label: "Femme de ménage",
    color: "secondary",
    description: "Accès aux tâches de ménage et planning"
  },
  maintenance: {
    label: "Maintenance",
    color: "secondary",
    description: "Accès aux problèmes techniques et réparations"
  },
  accountant: {
    label: "Comptable",
    color: "secondary",
    description: "Accès aux finances et documents comptables"
  },
  cohost: {
    label: "Co-hôte",
    color: "secondary",
    description: "Accès aux réservations et communication"
  }
};

export const TeamSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Équipe & Collaborateurs</h2>
          <p className="text-muted-foreground mt-1">Gérez les accès de votre équipe</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Inviter un collaborateur
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total membres</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Équipe complète</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ménage</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Actifs</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Maintenance</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Actif</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Autres rôles</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Collaborateurs</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Rôles et permissions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {Object.entries(roleInfo).map(([key, info]) => (
              <Card key={key}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">{info.label}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
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
          <CardTitle>Membres de l'équipe</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {teamMembers.map((member) => (
              <Card key={member.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{member.name}</h4>
                          <Badge variant={roleInfo[member.role as keyof typeof roleInfo].color as any}>
                            {roleInfo[member.role as keyof typeof roleInfo].label}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {member.status === 'active' ? 'Actif' : 'Inactif'}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            {member.email}
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            {member.phone}
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm font-medium mb-1">Accès autorisé :</p>
                          <div className="flex flex-wrap gap-2">
                            {member.access.map((access, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {access}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        Détails
                      </Button>
                      {member.role !== 'admin' && (
                        <Button variant="outline" size="sm">
                          Modifier
                        </Button>
                      )}
                    </div>
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