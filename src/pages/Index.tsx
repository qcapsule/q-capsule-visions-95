import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { VisionSection } from "@/components/VisionSection";
import { CustomizationSection } from "@/components/CustomizationSection";
import { BrochureSection } from "@/components/BrochureSection";
import { BookingSection } from "@/components/BookingSection";
import { AboutSection } from "@/components/AboutSection";
import { StatisticsSection } from "@/components/StatisticsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { CrossSectionDiagram } from "@/components/CrossSectionDiagram";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";
import { ScrollCapsuleSection } from "@/components/ScrollCapsuleSection";
import { EnvironmentsSection } from "@/components/EnvironmentsSection";
import { FloorPlanSpotlightExample } from "@/components/FloorPlanSpotlight";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import CollectionSection from "@/components/CollectionSection";
import { CapsuleCollectionSection } from "@/components/CapsuleCollectionSection";
import { useParallaxScroll } from "@/hooks/useParallaxScroll";

import { Scrolling3DCapsule } from "@/components/Scrolling3DCapsule";

const Index = () => {
  const { heroRef, capsuleCollectionRef, visionRef, aboutRef } =
    useParallaxScroll();

  return (
    <div className="min-h-screen relative">
      <BackgroundOrbs />
      {/* <Scrolling3DCapsule /> */}
      <div className="relative z-10">
        <ScrollProgress />
        <Navigation />
        <HeroSection ref={heroRef} />
        <VisionSection ref={visionRef} />

        {/* <CustomizationSection /> */}
        <CapsuleCollectionSection ref={capsuleCollectionRef} />

        {/* <CollectionSection /> */}
        {/* <FloorPlanSpotlightExample />

        <EnvironmentsSection /> */}

        <AboutSection ref={aboutRef} />

        {/* <CrossSectionDiagram /> */}
        {/* <StatisticsSection />
        <BrochureSection /> */}
        {/* <ScrollCapsuleSection /> */}
        {/* <CertificationsSection /> */}
        {/* <BookingSection /> */}

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Index;
