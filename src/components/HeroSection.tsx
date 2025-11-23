import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { forwardRef, useState, useEffect } from "react";
import { capsules } from "@/data/capsules";
import capsule_transparent from "@/assets/transparent_image_q56x.png";
import capsule_transparent2 from "@/assets/transparent_capsule_q75x.png";
import capsule_transparent3 from "@/assets/capsule_transparent3.png";
import transparentCapsule1 from "@/assets/transparent_capsule_115x.png";

// Map capsules to their transparent images
const capsuleTransparentMap: Record<string, string> = {
  q75x: capsule_transparent2,
  q115x: transparentCapsule1,
};

export const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentCapsule = capsules[currentIndex];
  const currentTransparentImage =
    capsuleTransparentMap[currentCapsule.id] || capsule_transparent3;

  const nextCapsule = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % capsules.length);
  };

  const prevCapsule = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + capsules.length) % capsules.length);
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % capsules.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[100vh] w-full">
      {/* Transparent Capsule - Full Size, Center Bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          zIndex: 20,
          pointerEvents: "none",
        }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={currentCapsule.id}
            src={currentTransparentImage}
            alt={currentCapsule.name}
            className="w-full object-contain object-bottom rounded-2xl"
            custom={direction}
            initial={{
              opacity: 0,
              scale: 0.9,
              x: direction > 0 ? 50 : -50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: 1.1,
              x: direction > 0 ? -50 : 50,
            }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{
              height: "35%",
              mixBlendMode: "normal",
              display: "block",
              margin: 0,
              padding: 0,
            }}
          />
        </AnimatePresence>
      </div>

      <section
        ref={ref}
        id="hero"
        className="relative h-[100vh] flex flex-col overflow-hidden bg-background"
      >
        {/* Main Content Area - Dead Center */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {/* Large Brand Name Text */}
          <motion.h1
            className="text-7xl lg:text-9xl xl:text-[12rem] font-bold text-foreground leading-none tracking-tight text-center relative z-[5] -mt-16 lg:-mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Luxury living anywhere...
          </motion.h1>
        </div>

        {/* Bottom Content Section */}
        <div className="absolute bottom-0 left-0 right-0 px-8 lg:px-16 pb-8 lg:pb-12 z-30">
          <div className="w-full flex flex-row items-end justify-between">
            {/* Left - Mission Text */}
            <motion.div
              className="max-w-xs lg:max-w-sm w-[280px]"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <p className="text-base lg:text-md text-muted-foreground leading-relaxed mb-6 text-justify">
                Our mission is to deliver bespoke capsule homes that are purely
                made from sustainable materials and natural supplies. Our
                products reflect modern minimalism with a touch of creativity.
              </p>
              <Button
                className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-3 text-sm lg:text-base font-medium transition-all duration-300 flex items-center gap-2 group"
                onClick={() => scrollToSection("#customization")}
              >
                explore
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Right - Collection Carousel */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="w-48 lg:w-56 relative overflow-hidden rounded-2xl">
                {/* Carousel Images */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentCapsule.id}
                    custom={direction}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      x: direction > 0 ? 100 : -100,
                      rotateY: direction > 0 ? 15 : -15,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                      rotateY: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.1,
                      x: direction > 0 ? -100 : 100,
                      rotateY: direction > 0 ? -15 : 15,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="w-full h-auto rounded-2xl overflow-hidden"
                  >
                    <img
                      src={currentCapsule.images[0]}
                      alt={currentCapsule.name}
                      className="w-full h-auto object-contain rounded-2xl"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                  onClick={prevCapsule}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 hover:bg-background rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg hover:scale-110"
                  aria-label="Previous capsule"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={nextCapsule}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 hover:bg-background rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg hover:scale-110"
                  aria-label="Next capsule"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>

                {/* Capsule Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-3 rounded-b-2xl">
                  <p className="text-sm lg:text-base text-foreground font-medium text-right">
                    {currentCapsule.name}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
});

HeroSection.displayName = "HeroSection";
