import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { VisionSection } from "@/components/VisionSection";
import { CustomizationSection } from "@/components/CustomizationSection";
import { BrochureSection } from "@/components/BrochureSection";
import { BookingSection } from "@/components/BookingSection";
import { AboutSection } from "@/components/AboutSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { StatisticsSection } from "@/components/StatisticsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { CrossSectionDiagram } from "@/components/CrossSectionDiagram";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";
import { ScrollCapsuleSection } from "@/components/ScrollCapsuleSection";
import { EnvironmentsSection } from "@/components/EnvironmentsSection";
import { FloorPlanSpotlightExample } from "@/components/FloorPlanSpotlight";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";

import { ScrollingCapsule3D } from "@/components/ScrollingCapsule3D";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundOrbs />
      <ScrollingCapsule3D />
      <div className="relative z-10">
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <CustomizationSection />
      <FloorPlanSpotlightExample />

      <EnvironmentsSection />

      <UseCasesSection />

      <CrossSectionDiagram />
      <StatisticsSection />
      <BrochureSection />
      {/* <CertificationsSection /> */}
      <AboutSection />
      <BookingSection />

      <Footer />
      </div>
    </div>
  );
};

export default Index;
