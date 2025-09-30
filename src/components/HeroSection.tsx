import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CapsuleModel3D } from "./CapsuleModel3D";
import { ArrowRight, Play, Calendar } from "lucide-react";
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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] dark:bg-[#0a0a0a]"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 py-20">
        
        {/* Massive Typography */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-[12vw] lg:text-[10vw] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/30 drop-shadow-2xl select-none">
            CAPSULE
          </h1>
          <motion.p
            className="text-xl lg:text-2xl text-white/60 mt-6 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Luxury living, anywhere on Earth
          </motion.p>
        </motion.div>

        {/* Hero Capsule Image - Center Stage */}
        <motion.div
          className="relative max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {/* Dramatic glow behind capsule */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 blur-[100px] opacity-60"></div>
          
          <img 
            src={heroCapsuleImage} 
            alt="Q Capsule - Revolutionary Modular Living" 
            className="relative w-full h-auto drop-shadow-[0_20px_80px_rgba(0,0,0,0.9)]"
          />

          {/* Floating number indicators */}
          <motion.div
            className="absolute right-4 top-1/4 text-white/20 text-6xl lg:text-8xl font-bold select-none"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            01
          </motion.div>
        </motion.div>

        {/* Glowing CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button
            onClick={() => scrollToSection("#customization")}
            className="group relative"
          >
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Button content */}
            <div className="relative flex items-center justify-center w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform duration-300">
              <div className="flex flex-col items-center">
                <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white mb-2 fill-white" />
                <span className="text-white text-sm lg:text-base font-bold tracking-wider">EXPLORE</span>
              </div>
            </div>
          </button>
        </motion.div>

        {/* Bottom feature tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 lg:gap-12 mt-20 text-white/40 text-xs lg:text-sm uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <span className="hover:text-white/80 transition-colors cursor-pointer">Sustainable</span>
          <span className="hover:text-white/80 transition-colors cursor-pointer">Smart Tech</span>
          <span className="hover:text-white/80 transition-colors cursor-pointer">Rapid Deploy</span>
        </motion.div>

      </div>

      {/* Minimal scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-white/40 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
