import { Bell, Check, Clock, AlertCircle, Calendar, Euro, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';

const notifications = [
  {
    id: 1,
    type: "checkin",
    title: "Check-in aujourd'hui",
    message: "Sophie Martin arrive au CosyHome Bondy à 15h",
    time: "Il y a 1h",
    read: false,
    priority: "high",
    icon: Calendar
  },
  {
    id: 2,
    type: "checkout",
    title: "Check-out demain",
    message: "Prévoir le ménage au Studio Gare du Nord",
    time: "Il y a 3h",
    read: false,
    priority: "medium",
    icon: Calendar
  },
  {
    id: 3,
    type: "maintenance",
    title: "Maintenance requise",
    message: "Problème WiFi signalé au T3 République",
    time: "Il y a 5h",
    read: false,
    priority: "high",
    icon: Wrench
  },
  {
    id: 4,
    type: "payment",
    title: "Paiement reçu",
    message: "Réservation confirmée - 450€",
    time: "Hier",
    read: true,
    priority: "low",
    icon: Euro
  },
  {
    id: 5,
    type: "cleaning",
    title: "Ménage terminé",
    message: "CosyHome Bondy prêt pour le prochain voyageur",
    time: "Hier",
    read: true,
    priority: "low",
    icon: Check
  }
];

const notificationSettings = [
  {
    id: 1,
    category: "Réservations",
    settings: [
      { name: "Nouvelle réservation", enabled: true },
      { name: "Check-in du jour", enabled: true },
      { name: "Check-out du jour", enabled: true },
      { name: "Annulation", enabled: true }
    ]
  },
  {
    id: 2,
    category: "Finances",
    settings: [
      { name: "Paiement reçu", enabled: true },
      { name: "Revenu inférieur au mois précédent", enabled: true },
      { name: "Facture en attente", enabled: false }
    ]
  },
  {
    id: 3,
    category: "Maintenance",
    settings: [
      { name: "Ménage planifié demain", enabled: true },
      { name: "Problème signalé", enabled: true },
      { name: "Stock bas", enabled: true }
    ]
  },
  {
    id: 4,
    category: "Administratif",
    settings: [
      { name: "Document expirant", enabled: true },
      { name: "Déclaration trimestrielle", enabled: true },
      { name: "Rappel assurance", enabled: false }
    ]
  }
];

export const NotificationsSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Notifications</h2>
          <p className="text-muted-foreground mt-1">Alertes et rappels automatiques</p>
        </div>
        <Button variant="outline">
          <Check className="mr-2 h-4 w-4" />
          Tout marquer comme lu
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Non lues</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Notifications en attente</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Priorité haute</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Actions urgentes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aujourd'hui</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Notifications reçues</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Notifications récentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {notifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <Card 
                  key={notification.id}
                  className={`${notification.read ? 'bg-muted/30' : 'bg-background border-primary/50'} transition-colors`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${
                        notification.priority === 'high' ? 'bg-red-500/10' :
                        notification.priority === 'medium' ? 'bg-orange-500/10' :
                        'bg-primary/10'
                      }`}>
                        <Icon className={`h-5 w-5 ${
                          notification.priority === 'high' ? 'text-red-500' :
                          notification.priority === 'medium' ? 'text-orange-500' :
                          'text-primary'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="font-semibold">{notification.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xs text-muted-foreground">{notification.time}</span>
                              {notification.priority === 'high' && (
                                <Badge variant="destructive" className="text-xs">Urgent</Badge>
                              )}
                              {!notification.read && (
                                <Badge variant="default" className="text-xs">Nouveau</Badge>
                              )}
                            </div>
                          </div>
                          {!notification.read && (
                            <Button variant="ghost" size="sm">
                              <Check className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Paramètres des notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {notificationSettings.map((category) => (
              <div key={category.id}>
                <h4 className="font-semibold mb-3">{category.category}</h4>
                <div className="space-y-3">
                  {category.settings.map((setting, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <span className="text-sm">{setting.name}</span>
                      <Switch defaultChecked={setting.enabled} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};