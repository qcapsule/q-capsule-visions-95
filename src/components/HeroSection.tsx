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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroCapsuleImage})`,
            backgroundPosition: 'center 45%'
          }}
        />
        {/* Minimal gradient only at edges for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent via-40% to-background/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-start min-h-screen pt-32 lg:pt-40 pb-32">
          {/* Left Side - Text Content - Positioned Higher and Tighter */}
          <motion.div
            className="space-y-6 max-w-xl lg:max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <span className="block text-gradient glow-text">Luxury Living</span>
                <span className="block text-gradient glow-text mt-2">...Anywhere</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg lg:text-xl text-foreground leading-relaxed backdrop-blur-md bg-background/50 p-5 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              From desert dunes to tropical beaches. Revolutionary modular capsules that bring luxury to any environment on Earth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground border-none hover:shadow-glow hover-lift text-base px-8 py-5 h-auto"
                onClick={() => scrollToSection("#customization")}
              >
                Explore Models
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 text-base px-8 py-5 h-auto backdrop-blur-md bg-background/50"
                onClick={() => scrollToSection("#booking")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {["Sustainable Design", "Smart Technology", "Rapid Deployment"].map((feature) => (
                <div
                  key={feature}
                  className="glass-card px-4 py-2 text-sm font-medium backdrop-blur-md bg-background/60"
                >
                  {feature}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="text-sm text-foreground/70 backdrop-blur-sm bg-background/30 px-3 py-1 rounded-full">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-background/20">
              <motion.div
                className="w-1.5 h-3 bg-primary rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
