import { HeroSection } from "@/components/HeroSection";
import { DetectionMethods } from "@/components/DetectionMethods";
import { WorkflowSection } from "@/components/WorkflowSection";
import { KeyInnovations } from "@/components/KeyInnovations";
import { AnalyticsSection } from "@/components/AnalyticsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DetectionMethods />
      <WorkflowSection />
      <KeyInnovations />
      <AnalyticsSection />
      <Footer />
    </div>
  );
};

export default Index;