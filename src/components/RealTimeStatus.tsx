import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

export const RealTimeStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [particleCount, setParticleCount] = useState(2450);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate real-time particle count changes
      setParticleCount(prev => prev + Math.floor(Math.random() * 10 - 5));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border/50">
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
            <span className="text-sm font-medium text-card-foreground">System Active</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-card-foreground/80">
            <div>
              <span className="font-medium">{particleCount.toLocaleString()}</span>
              <span className="ml-1">particles/mL</span>
            </div>
            <div>{currentTime.toLocaleTimeString()}</div>
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <Badge variant="outline" className="text-xs border-success/50 text-success">
            IR: Online
          </Badge>
          <Badge variant="outline" className="text-xs border-success/50 text-success">
            Coulter: Online  
          </Badge>
          <Badge variant="outline" className="text-xs border-success/50 text-success">
            Imaging: Online
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};