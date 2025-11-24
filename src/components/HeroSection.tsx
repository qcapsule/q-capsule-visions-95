import { motion } from "framer-motion";
import { forwardRef, useState, useEffect } from "react";
import transparentCapsule1 from "@/assets/transparent_capsule_115x.png";
import heroSectionBg from "@/assets/herosection-bg.svg";
import heroSectionBg1 from "@/assets/herosection-bg1.svg";
import heroSectionBg2 from "@/assets/herosection-bg2.svg";
import heroSectionBg3 from "@/assets/herosection-bg3.svg";

const backgrounds = [
  heroSectionBg,
  heroSectionBg1,
  heroSectionBg2,
  heroSectionBg3,
];

export const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Rotate background every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[100vh] w-full">
      <section
        ref={ref}
        id="hero"
        className="relative h-[100vh] flex flex-col overflow-hidden"
      >
        {/* Animated Background - Crossfade */}
        <div className="absolute inset-0">
          {backgrounds.map((bg, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentBgIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          ))}
        </div>

        {/* Transparent Capsule - Centered */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <motion.img
            src={transparentCapsule1}
            alt="Q115X Capsule"
            className="object-contain rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              height: "45%",
              maxWidth: "65%",
              mixBlendMode: "normal",
              display: "block",
              margin: 0,
              padding: 0,
            }}
          />
        </div>

        {/* Bottom Content Section */}
        <div className="absolute bottom-0 left-0 right-0 px-8 lg:px-16 pb-8 lg:pb-12 z-30">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h1 className="text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-amber-50 leading-tight tracking-tight">
              Luxury living anywhere...
            </h1>
          </motion.div>
        </div>
      </section>
    </div>
  );
});

HeroSection.displayName = "HeroSection";
