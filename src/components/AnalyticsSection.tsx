import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlasticMaterialChart } from "./PlasticMaterialChart";
import { SizeConcentrationChart } from "./SizeConcentrationChart";
import { ThresholdComparisonChart } from "./ThresholdComparisonChart";

export const AnalyticsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700">
            📊 Live Analytics Dashboard
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real-Time Data Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive charts and live monitoring for comprehensive microplastic analysis.
          </p>
        </div>
        
        {/* Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Material Composition */}
          <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-500 to-purple-500">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                🧪 Material Composition
              </CardTitle>
            </CardHeader>
            <CardContent className="bg-white m-6 mt-0 rounded-lg">
              <PlasticMaterialChart />
            </CardContent>
          </Card>
          
          {/* Size Distribution */}
          <Card className="shadow-lg border-0 bg-gradient-to-r from-green-500 to-cyan-500">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                📏 Size Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="bg-white m-6 mt-0 rounded-lg">
              <SizeConcentrationChart />
              <p className="text-xs text-gray-600 mt-2">
                Concentration measured across different particle size ranges using our three detection channels.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Threshold Analysis */}
        <Card className="mt-8 shadow-lg border-0 bg-gradient-to-r from-orange-500 to-red-500">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              ⚠️ Threshold Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="bg-white m-6 mt-0 rounded-lg">
            <ThresholdComparisonChart />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
              <div className="text-center">
                <div className="text-orange-600 font-bold">⚠️ Above</div>
                <div className="text-sm text-gray-600">142/100</div>
                <div className="text-xs text-gray-500">PE Particles</div>
              </div>
              <div className="text-center">
                <div className="text-orange-600 font-bold">⚠️ Above</div>
                <div className="text-sm text-gray-600">96/80</div>
                <div className="text-xs text-gray-500">PP Particles</div>
              </div>
              <div className="text-center">
                <div className="text-orange-600 font-bold">⚠️ Above</div>
                <div className="text-sm text-gray-600">72/60</div>
                <div className="text-xs text-gray-500">PS Particles</div>
              </div>
              <div className="text-center">
                <div className="text-orange-600 font-bold">⚠️ Above</div>
                <div className="text-sm text-gray-600">48/40</div>
                <div className="text-xs text-gray-500">PET Particles</div>
              </div>
              <div className="text-center">
                <div className="text-orange-600 font-bold">⚠️ Above</div>
                <div className="text-sm text-gray-600">358/300</div>
                <div className="text-xs text-gray-500">Total Count</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};