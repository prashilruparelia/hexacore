import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const innovations = [
  {
    id: 1,
    title: "Triple Detection Method",
    description: "Combines 3 independent methods for increased accuracy and reduced false positives",
    icon: "✅",
    bgColor: "bg-white/10"
  },
  {
    id: 2,
    title: "Portable & Low-Cost",
    description: "Real-time field microplastic detection without laboratory requirements",
    icon: "🚀",
    bgColor: "bg-white/10"
  },
  {
    id: 3,
    title: "ML-Based Classification",
    description: "Adaptive and future-proof system with intelligent particle classification",
    icon: "🤖",
    bgColor: "bg-white/10"
  },
  {
    id: 4,
    title: "Modular Design",
    description: "Independent blocks for easier prototyping, testing, and scalability",
    icon: "🔧",
    bgColor: "bg-white/10"
  }
];

const features = [
  {
    title: "Portable Power",
    description: "Battery or solar panel operation for field use",
    icon: "🔋",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    title: "Local Processing",
    description: "All data processed locally without internet dependency",
    icon: "💾",
    bgColor: "bg-green-50", 
    borderColor: "border-green-200"
  },
  {
    title: "Controlled Flow",
    description: "Peristaltic pumps ensure consistent detection conditions",
    icon: "⚙️",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  }
];

export const KeyInnovations = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/90 via-blue-500/90 to-cyan-500/90" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            🚀 Key Innovation Points
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Revolutionary Features
          </h2>
        </div>
        
        {/* Innovation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {innovations.map((innovation) => (
            <Card key={innovation.id} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{innovation.icon}</span>
                </div>
                <h3 className="font-semibold text-lg mb-3">{innovation.title}</h3>
                <p className="text-white/90 text-sm flex-1">{innovation.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className={`${feature.bgColor} ${feature.borderColor} border-2`}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};