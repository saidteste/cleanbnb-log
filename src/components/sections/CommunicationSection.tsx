import { MessageSquare, Send, Plus, Clock, CheckCircle2, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

const messageTemplates = [
  {
    id: 1,
    name: "Bienvenue - Avant arrivée",
    type: "pre-checkin",
    subject: "Bienvenue ! Informations pour votre arrivée",
    content: "Bonjour {guest_name},\n\nNous sommes ravis de vous accueillir au {property_name} !\n\nVoici les informations pour votre arrivée :\n- Check-in : {checkin_date} à partir de 15h\n- Adresse : {property_address}\n- Code boîte à clés : {keybox_code}\n- Digicode : {digicode}\n\nN'hésitez pas si vous avez des questions !\n\nÀ bientôt,\nL'équipe",
    triggers: "3 jours avant",
    status: "active"
  },
  {
    id: 2,
    name: "Pendant le séjour - Infos utiles",
    type: "during-stay",
    subject: "Tout se passe bien ?",
    content: "Bonjour {guest_name},\n\nNous espérons que votre séjour se passe bien !\n\nQuelques informations utiles :\n- WiFi : {wifi_name} / {wifi_password}\n- Supermarchés à proximité\n- Restaurants recommandés\n- Transports en commun\n\nBesoin de quoi que ce soit ? Contactez-nous !\n\nBon séjour,\nL'équipe",
    triggers: "1 jour après check-in",
    status: "active"
  },
  {
    id: 3,
    name: "Après départ - Remerciements",
    type: "post-checkout",
    subject: "Merci pour votre séjour !",
    content: "Bonjour {guest_name},\n\nMerci d'avoir choisi {property_name} !\n\nNous espérons que vous avez passé un excellent séjour. Votre avis compte beaucoup pour nous, n'hésitez pas à laisser un commentaire sur Airbnb.\n\nAu plaisir de vous revoir !\n\nL'équipe",
    triggers: "Immédiatement après check-out",
    status: "active"
  }
];

const recentMessages = [
  {
    id: 1,
    guest: "Sophie Martin",
    property: "CosyHome Bondy",
    type: "Question",
    message: "Bonjour, à quelle heure peut-on arriver ?",
    date: "Il y a 2h",
    status: "pending",
    channel: "airbnb"
  },
  {
    id: 2,
    guest: "Thomas Dubois",
    property: "Studio Gare du Nord",
    type: "Automatique",
    message: "Message de bienvenue envoyé",
    date: "Il y a 5h",
    status: "sent",
    channel: "email"
  },
  {
    id: 3,
    guest: "Marie Lefèvre",
    property: "T3 République",
    type: "Problème",
    message: "Le WiFi ne fonctionne pas",
    date: "Hier",
    status: "resolved",
    channel: "phone"
  }
];

export const CommunicationSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Communication</h2>
          <p className="text-muted-foreground mt-1">Messages automatisés et historique</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouveau modèle
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages en attente</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">À répondre</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Envoyés aujourd'hui</CardTitle>
            <Send className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Messages automatiques</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Modèles actifs</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Templates configurés</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="templates" className="w-full">
        <TabsList>
          <TabsTrigger value="templates">Modèles</TabsTrigger>
          <TabsTrigger value="history">Historique</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Modèles de messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {messageTemplates.map((template) => (
                  <Card key={template.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-lg font-semibold">{template.name}</h3>
                              <Badge variant={template.status === 'active' ? 'default' : 'secondary'}>
                                {template.status === 'active' ? 'Actif' : 'Inactif'}
                              </Badge>
                              <Badge variant="outline">
                                {template.type === 'pre-checkin' ? 'Avant arrivée' :
                                 template.type === 'during-stay' ? 'Pendant séjour' :
                                 'Après départ'}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                              <Clock className="inline h-4 w-4 mr-1" />
                              Déclencheur : {template.triggers}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div>
                            <p className="text-sm font-medium mb-1">Objet</p>
                            <p className="text-sm bg-muted p-2 rounded">{template.subject}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium mb-1">Message</p>
                            <Textarea
                              value={template.content}
                              readOnly
                              className="min-h-[150px] font-mono text-sm"
                            />
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Modifier</Button>
                          <Button variant="outline" size="sm">Tester</Button>
                          <Button variant="outline" size="sm">Dupliquer</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Messages récents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentMessages.map((message) => (
                  <Card key={message.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">{message.guest}</h4>
                            <Badge variant="outline" className="text-xs">
                              {message.property}
                            </Badge>
                            <Badge variant={
                              message.status === 'pending' ? 'destructive' :
                              message.status === 'sent' ? 'default' :
                              'secondary'
                            }>
                              {message.status === 'pending' ? 'En attente' :
                               message.status === 'sent' ? 'Envoyé' :
                               'Résolu'}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{message.message}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{message.date}</span>
                            <span className="flex items-center gap-1">
                              {message.channel === 'airbnb' && <MessageSquare className="h-3 w-3" />}
                              {message.channel === 'email' && <Mail className="h-3 w-3" />}
                              {message.channel === 'phone' && <Phone className="h-3 w-3" />}
                              {message.channel}
                            </span>
                          </div>
                        </div>
                        {message.status === 'pending' && (
                          <Button size="sm">
                            <Send className="mr-2 h-4 w-4" />
                            Répondre
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};