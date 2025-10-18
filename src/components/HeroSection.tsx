import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ImageMarquee } from "./ImageMarquee";
import { ArrowRight, Play, Calendar } from "lucide-react";
import heroBgImage from "@/assets/herosection-bg.png";
import qcapsuleLogo from "@/assets/qcapsule-logo4.png";
import { forwardRef } from "react";

export const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-[100vh] flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: `url(${heroBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background for GSAP */}
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBgImage})`,
        }}
      ></div>

      {/* Subtle Background Overlay */}
      <div className="hero-overlay absolute inset-0 bg-black/20 z-0"></div>

      {/* Main Content - Centered */}
      <div className="hero-content container mx-auto px-6 relative z-10 flex items-center justify-center h-full">
        <motion.div
          className="text-center max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h2
            className="text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Luxury Living{" "}
            <span className="text-white drop-shadow-lg">Anywhere...</span>
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Revolutionary capsule homes that adapt to your lifestyle.
            Sustainable, customizable, and ready to deploy anywhere in the
            world.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Button
              size="lg"
              className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 rounded-full px-8 py-4 text-lg"
              onClick={() => scrollToSection("#customization")}
            >
              Explore Capsules
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Content Row */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 z-20 px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="flex flex-row items-center justify-between gap-2 lg:gap-8">
          {/* Left Tagline */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-white text-sm lg:text-lg font-medium drop-shadow-lg whitespace-nowrap">
              Closer to Nature—Closer to Yourself
            </p>
          </motion.div>

          {/* Center Stats */}
          <motion.div
            className="flex gap-4 lg:gap-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-full px-4 lg:px-6 py-2 lg:py-3 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-xl lg:text-2xl font-bold text-white">
                50%
              </div>
              <div className="text-xs lg:text-sm text-white/80">
                Faster Build
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-full px-4 lg:px-6 py-2 lg:py-3 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-xl lg:text-2xl font-bold text-white">
                30%
              </div>
              <div className="text-xs lg:text-sm text-white/80">
                Cost Savings
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-full px-4 lg:px-6 py-2 lg:py-3 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-xl lg:text-2xl font-bold text-white">
                100%
              </div>
              <div className="text-xs lg:text-sm text-white/80">
                Sustainable
              </div>
            </div>
          </motion.div>

          {/* Right Description */}
          <motion.div
            className="text-center lg:text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <p className="text-white/90 text-sm lg:text-base drop-shadow-md max-w-xs">
              Spend unforgettable and remarkable time in the desert with—
              <br />Q Capsules.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";
