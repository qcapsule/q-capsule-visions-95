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
import { CapsuleStructureSection } from "@/components/CapsuleStructureSection";
import { CapsuleTechnologySection } from "@/components/CapsuleTechnologySection";
import { TechnologySection } from "@/components/TechnologySection";
import { CapsuleStructure3DSection } from "@/components/CapsuleStructure3DSection";
import { UseCasesSection } from "@/components/UseCasesSection";

const Index = () => {
  const {
    heroRef,
    capsuleCollectionRef,
    visionRef,
    aboutRef,
    brochureRef,
    bookingRef,
  } = useParallaxScroll();

  return (
    <div className="min-h-screen relative">
      <BackgroundOrbs />

      {/* LED Light Strips - Left and Right */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        {/* Left LED Strip */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-yellow-600 to-transparent opacity-90"></div>
        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-transparent via-yellow-400/60 to-transparent opacity-60 blur-[3px]"></div>
        <div
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-yellow-500 to-transparent opacity-100 animate-pulse"
          style={{ animationDuration: "2s" }}
        ></div>
        <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-gradient-to-b from-transparent via-yellow-500/30 to-transparent opacity-40 blur-[4px]"></div>

        {/* Right LED Strip */}
        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-yellow-600 to-transparent opacity-90"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-transparent via-yellow-400/60 to-transparent opacity-60 blur-[3px]"></div>
        <div
          className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-yellow-500 to-transparent opacity-100 animate-pulse"
          style={{ animationDuration: "2s" }}
        ></div>
        <div className="absolute right-0 top-0 bottom-0 w-[6px] bg-gradient-to-b from-transparent via-yellow-500/30 to-transparent opacity-40 blur-[4px]"></div>
      </div>

      {/* <Scrolling3DCapsule /> */}
      <div className="relative z-10">
        <ScrollProgress />
        <Navigation />
        <HeroSection ref={heroRef} />
        <VisionSection ref={visionRef} />
        {/* <TechnologySection /> */}
        <CapsuleStructure3DSection />

        {/* <CustomizationSection /> */}
        <CapsuleCollectionSection ref={capsuleCollectionRef} />

        {/* <CollectionSection /> */}
        {/* <FloorPlanSpotlightExample />

        <EnvironmentsSection /> */}
        <BrochureSection ref={brochureRef} />
        <AboutSection ref={aboutRef} />
        {/* <UseCasesSection /> */}
        <BookingSection ref={bookingRef} />

        {/* <CrossSectionDiagram /> */}
        {/* <StatisticsSection /> */}
        {/* <ScrollCapsuleSection /> */}
        {/* <CertificationsSection /> */}

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Index;
