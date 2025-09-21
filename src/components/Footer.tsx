import { Badge } from "@/components/ui/badge";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                <span className="text-xl">🌊</span>
              </div>
              <h3 className="text-2xl font-bold">MicroDetect Pro</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionary AI-powered microplastic detection for environmental monitoring. 
              Precise, portable, and reliable water analysis technology.
            </p>
            <div className="flex gap-3 mb-4">
              <Badge className="bg-green-500 text-white">System Active</Badge>
              <Badge className="bg-blue-500 text-white">Live Monitoring</Badge>
            </div>
          </div>
          
          {/* Detection Tech */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-300">Detection Tech</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                IR Laser Scattering
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Coulter Counter
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Dark-Field Imaging
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                AI Classification
              </li>
            </ul>
          </div>
          
          {/* Capabilities */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-300">Capabilities</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-green-400">📊</span>
                Real-time Analytics
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">🚀</span>
                Portable Design
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">🌱</span>
                Field Ready
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">📱</span>
                Smart Dashboard
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 MicroDetect Pro. Next-generation environmental monitoring.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Badge variant="outline" className="border-green-400 text-green-400">
              Version 2.0
            </Badge>
            <Badge className="bg-green-500 text-white">
              ✅ Certified
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
};