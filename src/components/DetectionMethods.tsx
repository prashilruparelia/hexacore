import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const methods = [
  {
    id: 1,
    title: "IR Scattering",
    subtitle: "Laser light scattering detection",
    description: "High-powered IR laser detects large particles through light scattering intensity patterns.",
    sizeRange: "500 μm - 5 mm",
    accuracy: "95%",
    color: "bg-red-500",
    iconColor: "text-red-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    id: 2,
    title: "Coulter Counting",
    subtitle: "Electrical impedance sensing",
    description: "Microfluidic channel detects particles through electrical resistance changes as they pass electrodes.",
    sizeRange: "10-100 μm",
    accuracy: "98%",
    color: "bg-blue-500",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: 3,
    title: "Dark-Field Imaging",
    subtitle: "Optical microscopy analysis",
    description: "Advanced imaging system provides morphological analysis and precise particle identification.",
    sizeRange: "100-500 μm",
    accuracy: "97%",
    color: "bg-green-500",
    iconColor: "text-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  }
];

export const DetectionMethods = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-purple-200 text-purple-700">
            ⚡ Triple Detection Technology
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Three Powerful Detection Methods
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each method targets specific particle sizes for complete coverage and maximum accuracy.
          </p>
        </div>
        
        {/* Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((method) => (
            <Card key={method.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${method.bgColor} ${method.borderColor} border-2`}>
              {/* Accuracy Badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-500 text-white">
                  {method.accuracy}
                </Badge>
              </div>
              
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl ${method.color} flex items-center justify-center mb-4`}>
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    {method.id === 1 && <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />}
                    {method.id === 2 && <div className={`w-4 h-4 ${method.color} rounded`} />}
                    {method.id === 3 && <div className={`w-4 h-4 ${method.color} rounded-full`} />}
                  </div>
                </div>
                
                <CardTitle className={`text-xl ${method.iconColor} mb-2`}>
                  {method.title}
                </CardTitle>
                
                <Badge variant="outline" className={`w-fit text-xs ${method.iconColor} border-current`}>
                  {method.sizeRange}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Method</h4>
                  <p className="text-sm text-gray-600">{method.subtitle}</p>
                </div>
                
                <p className="text-sm text-gray-700 leading-relaxed">
                  {method.description}
                </p>
                
                {/* Progress bar */}
                <div className="pt-4">
                  <div className={`h-2 ${method.color} rounded-full`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};