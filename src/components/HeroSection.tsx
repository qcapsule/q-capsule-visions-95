import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroCapsuleImage from "@/assets/hero-capsule-anywhere.png";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      {/* Subtle Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center">
          
          {/* Massive Typography */}
          <motion.div
            className="space-y-8 max-w-7xl w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[140px] font-black leading-[0.9] tracking-tighter"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent drop-shadow-[0_0_80px_rgba(255,255,255,0.3)]">
                CAPSULE
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Luxury living, anywhere on Earth
            </motion.p>
          </motion.div>

          {/* Hero Capsule Image - Centered */}
          <motion.div
            className="relative my-20 w-full max-w-4xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <div className="relative">
              {/* Dramatic Glow Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/40 to-primary/40 blur-[100px] scale-110"></div>
              
              <img 
                src={heroCapsuleImage} 
                alt="Q Capsule - Revolutionary Modular Living" 
                className="relative w-full h-auto drop-shadow-[0_0_100px_rgba(168,85,247,0.4)]"
              />
            </div>
          </motion.div>

          {/* Glowing Circular CTA Button */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="relative inline-block">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-2xl opacity-60 animate-pulse"></div>
              
              {/* Button */}
              <button
                onClick={() => scrollToSection("#customization")}
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group hover:scale-110 transition-transform duration-500"
              >
                <div className="text-white font-bold text-lg md:text-xl tracking-widest">
                  EXPLORE
                </div>
              </button>
            </div>
          </motion.div>

          {/* Minimalist Feature Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {["Sustainable", "Smart Tech", "48h Deploy"].map((feature) => (
              <div
                key={feature}
                className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {feature}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
