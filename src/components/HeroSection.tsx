import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CapsuleModel3D } from "./CapsuleModel3D";
import { ArrowRight, Play, Calendar } from "lucide-react";
import heroCapsuleImage from "@/assets/hero-capsule-reference.png";

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
      {/* Hero Capsule Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroCapsuleImage} 
          alt="Q Capsule" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Centered Content Layout */}
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-12">
          {/* Main Heading */}
          <motion.div
            className="space-y-6 max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight tracking-tight">
                <span className="block text-gradient glow-text">luxury living...</span>
                <span className="block text-gradient glow-text">anywhere</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Revolutionary modular capsules that adapt to any environment.
              Sustainable, intelligent, and beautifully designed.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground border-none hover:shadow-glow hover-lift text-xl px-12 py-6 h-auto"
              onClick={() => scrollToSection("#customization")}
            >
              Explore Models
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 text-xl px-12 py-6 h-auto backdrop-blur-sm"
              onClick={() => scrollToSection("#booking")}
            >
              <Calendar className="mr-3 h-6 w-6" />
              Book Consultation
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="text-sm text-muted-foreground">Scroll to explore</div>
              <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
                <motion.div
                  className="w-1.5 h-3 bg-primary rounded-full"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
