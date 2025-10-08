import { FileText, Upload, Download, Trash2, Eye, Plus, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const documents = [
  {
    id: 1,
    name: "Bail CosyHome Bondy.pdf",
    category: "Contrats",
    property: "CosyHome Bondy",
    size: "2.3 MB",
    date: "15/12/2024",
    type: "pdf"
  },
  {
    id: 2,
    name: "Assurance habitation 2024.pdf",
    category: "Assurances",
    property: "Tous",
    size: "1.8 MB",
    date: "01/01/2024",
    type: "pdf"
  },
  {
    id: 3,
    name: "DPE Studio Gare du Nord.pdf",
    category: "Diagnostics",
    property: "Studio Gare du Nord",
    size: "3.2 MB",
    date: "10/11/2024",
    type: "pdf"
  },
  {
    id: 4,
    name: "Facture EDF Novembre.pdf",
    category: "Factures",
    property: "T3 République",
    size: "0.5 MB",
    date: "05/12/2024",
    type: "pdf"
  },
  {
    id: 5,
    name: "Photos état des lieux - Marie.zip",
    category: "Photos",
    property: "CosyHome Bondy",
    size: "15.4 MB",
    date: "20/12/2024",
    type: "zip"
  },
  {
    id: 6,
    name: "Déclaration fiscale Q4 2024.xlsx",
    category: "Fiscal",
    property: "Tous",
    size: "0.8 MB",
    date: "18/12/2024",
    type: "excel"
  }
];

const categories = [
  { name: "Contrats", count: 3, color: "blue" },
  { name: "Assurances", count: 2, color: "green" },
  { name: "Diagnostics", count: 3, color: "purple" },
  { name: "Factures", count: 12, color: "orange" },
  { name: "Photos", count: 45, color: "pink" },
  { name: "Fiscal", count: 8, color: "red" }
];

export const DocumentsSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Documents</h2>
          <p className="text-muted-foreground mt-1">Centralisez tous vos documents</p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Importer des fichiers
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <Card key={category.name} className="cursor-pointer hover:bg-accent transition-colors">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <FolderOpen className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-sm">{category.name}</p>
                  <p className="text-xs text-muted-foreground">{category.count} fichiers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>Tous les documents</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Tout exporter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {documents.map((doc) => (
              <Card key={doc.id} className="hover:bg-accent/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <FileText className="h-8 w-8 text-primary" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold truncate">{doc.name}</h4>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                          <Badge variant="outline" className="text-xs">
                            {doc.category}
                          </Badge>
                          <span>{doc.property}</span>
                          <span>·</span>
                          <span>{doc.size}</span>
                          <span>·</span>
                          <span>{doc.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
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