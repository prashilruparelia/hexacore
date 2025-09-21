import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Sample Pre-Processing & Conditioning",
    description: "The incoming water sample (~50 mL) is passed through a primary mesh filter that removes large debris and aggregates (>5 mm). The conditioned sample is then split into three parallel microchannels.",
    icon: "🔧",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Parallel Detection Channels",
    description: "Three specialized detection methods operate simultaneously: IR Scattering (500μm-5mm), Coulter Counting (10-100μm), and Dark-Field Imaging (100-500μm).",
    icon: "🔬",
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "Data Logging & Synchronization",
    description: "Microcontrollers (ESP32/STM32) manage sensor readings while a central Raspberry Pi collects synchronized data from all three channels in real time.",
    icon: "📊",
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "Machine Learning Classification",
    description: "Lightweight ML algorithms analyze particle size distribution, scattering patterns, and morphological features to classify particles as plastic or organic matter.",
    icon: "🤖",
    color: "bg-orange-500"
  },
  {
    id: 5,
    title: "User Output Interface",
    description: "Web-based dashboard displays live graphs, size distribution histograms, concentration estimates, and real-time video feed from imaging channels.",
    icon: "📱",
    color: "bg-red-500"
  }
];

export const WorkflowSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700">
            🔄 Smart Workflow
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five intelligent steps for precise microplastic detection and analysis.
          </p>
        </div>
        
        {/* Workflow Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                <Card className="bg-white shadow-lg border-0 h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    {/* Step Icon */}
                    <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    
                    {/* Step Number */}
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                      {step.id}
                    </div>
                    
                    {/* Step Title */}
                    <h3 className="font-semibold text-gray-900 mb-3 text-sm leading-tight">
                      {step.title}
                    </h3>
                    
                    {/* Step Description */}
                    <p className="text-xs text-gray-600 leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Arrow connector (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};