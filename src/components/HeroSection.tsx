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
            backgroundPosition: 'center 40%'
          }}
        />
        {/* Gradient Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12 py-20">
          {/* Left Side - Text Content */}
          <motion.div
            className="flex-1 space-y-8 max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
                <span className="block text-gradient glow-text">Luxury Living</span>
                <span className="block text-gradient glow-text mt-2">...Anywhere</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl lg:text-2xl text-foreground/90 leading-relaxed backdrop-blur-sm bg-background/30 p-6 rounded-xl"
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
                className="bg-gradient-primary text-primary-foreground border-none hover:shadow-glow hover-lift text-lg px-10 py-6 h-auto"
                onClick={() => scrollToSection("#customization")}
              >
                Explore Models
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-10 py-6 h-auto backdrop-blur-sm bg-background/40"
                onClick={() => scrollToSection("#booking")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {["Sustainable Design", "Smart Technology", "Rapid Deployment"].map((feature, i) => (
                <div
                  key={feature}
                  className="glass-card px-4 py-2 text-sm font-medium backdrop-blur-md bg-background/50"
                >
                  {feature}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Let the image speak through transparency */}
          <motion.div
            className="flex-1 hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            {/* Intentionally empty to let background image show through */}
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
