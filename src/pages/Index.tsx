import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { VisionSection } from "@/components/VisionSection";
import { CapsuleExplorationSection } from "@/components/CapsuleExplorationSection";
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <VisionSection />
      <CapsuleExplorationSection />
      {/* <ScrollCapsuleSection /> */}
      <EnvironmentsSection />
      <CustomizationSection />
      <BrochureSection />
      <UseCasesSection />
      <CrossSectionDiagram />
      <StatisticsSection />
      {/* <CertificationsSection /> */}
      <BookingSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
