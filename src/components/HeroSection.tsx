import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CapsuleModel3D } from "./CapsuleModel3D";
import { ArrowRight, Play, Calendar } from "lucide-react";

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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-primary/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="inline-flex items-center  rounded-full glass-card text-sm text-primary font-medium">
                <span className="animate-shimmer px-4 py-2 rounded-full">
                  Made in Qatar
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gradient glow-text">Future of</span>
                <span className="block text-foreground">Modular Living</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl">
                Revolutionary capsule homes that adapt to your lifestyle.
                Sustainable, customizable, and ready to deploy anywhere in the
                world.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground border-none hover:shadow-glow hover-lift text-lg px-8 py-4"
                onClick={() => scrollToSection("#customization")}
              >
                Explore Capsules
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-4"
                onClick={() => scrollToSection("#booking")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Meeting
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient">50%</div>
                <div className="text-sm text-muted-foreground">
                  Faster Build
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient">30%</div>
                <div className="text-sm text-muted-foreground">
                  Cost Savings
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gradient">100%</div>
                <div className="text-sm text-muted-foreground">Sustainable</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Model */}
          <motion.div
            className="relative h-[600px] lg:h-[700px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-3xl"></div>
            <CapsuleModel3D className="relative z-10" />

            {/* Floating Info Cards */}
            <motion.div
              className="absolute top-20 -left-4 glass-card p-4 max-w-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-glow-pulse"></div>
                <div>
                  <div className="font-semibold text-sm">
                    Smart Climate Control
                  </div>
                  <div className="text-xs text-muted-foreground">
                    AI-powered efficiency
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-32 -right-4 glass-card p-4 max-w-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-glow-pulse"></div>
                <div>
                  <div className="font-semibold text-sm">Modular Design</div>
                  <div className="text-xs text-muted-foreground">
                    Infinite possibilities
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
