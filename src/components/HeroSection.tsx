import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 min-h-screen flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/90 via-blue-500/90 to-cyan-500/90" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              🧬 Revolutionary Technology
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Microplastic Detection System
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Portable AI-powered device that detects microplastics in water using three
              advanced sensing methods. Get real-time results anywhere, anytime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 font-semibold">
                <Zap className="w-5 h-5 mr-2" />
                Start Detection
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Play className="w-5 h-5 mr-2" />
                View Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">3</div>
                <p className="text-sm text-white/80">Detection Methods</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">⚡</div>
                <p className="text-sm text-white/80">Real-Time Results</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">99%</div>
                <p className="text-sm text-white/80">Accuracy</p>
              </div>
            </div>
          </div>
          
          {/* Right content - Device image placeholder */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Zap className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Detection Device</h3>
                  <p className="text-white/80">Advanced microplastic analyzer</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-medium animate-pulse">
              System Active
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};