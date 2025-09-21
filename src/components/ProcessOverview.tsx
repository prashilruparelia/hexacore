import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const processes = [
  {
    id: 1,
    title: "IR Scattering Detection",
    subtitle: "Large Particle Analysis",
    description: "Focused IR laser (850 nm) detects scattered light from particles passing through the beam",
    sizeRange: "500 µm – 5 mm",
    status: "Active",
    color: "bg-primary",
    icon: "🔬"
  },
  {
    id: 2,
    title: "Coulter Counting",
    subtitle: "Electrical Sensing Zone",
    description: "Microfluidic channel detects impedance changes as particles pass through electrodes",
    sizeRange: "10–100 µm", 
    status: "Active",
    color: "bg-secondary",
    icon: "⚡"
  },
  {
    id: 3,
    title: "Dark-Field Imaging",
    subtitle: "Optical Morphology Analysis",
    description: "Dark-field microscopy captures particle images for shape and size analysis",
    sizeRange: "100–500 µm",
    status: "Active", 
    color: "bg-accent",
    icon: "📸"
  }
];

export const ProcessOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {processes.map((process) => (
        <Card key={process.id} className="relative overflow-hidden shadow-lg border-border/50 hover:shadow-xl transition-shadow">
          <div className={`absolute top-0 left-0 right-0 h-1 ${process.color}`} />
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="text-2xl">{process.icon}</div>
              <Badge variant="outline" className="text-success border-success/50">
                {process.status}
              </Badge>
            </div>
            <CardTitle className="text-lg">{process.title}</CardTitle>
            <p className="text-sm text-muted-foreground font-medium">
              {process.subtitle}
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-foreground/80 leading-relaxed">
              {process.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Size Range:</span>
              <Badge variant="secondary" className="text-xs">
                {process.sizeRange}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};