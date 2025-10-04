import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CapsuleModel3D } from "./CapsuleModel3D";
import { ImageMarquee } from "./ImageMarquee";
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
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left relative z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Blend gradient overlay for smooth transition */}
            {/* <div className="absolute inset-y-0 -right-48 w-96 bg-gradient-to-l from-[#FBF8F3] via-[#FBF8F3]/90 via-[#FBF8F3]/70 via-[#FBF8F3]/50 via-[#FBF8F3]/30 to-transparent z-10 pointer-events-none blur-lg" /> */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
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

          {/* Right Content - Image Marquee */}
          <motion.div
            className="relative h-[600px] lg:h-[700px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Blend gradient overlay for smooth transition */}
            <div className="absolute inset-y-0 -left-48 w-[160%] bg-gradient-to-r from-[#e5dbca] via-[#FBF8F3]/90 via-[#FBF8F3]/70 via-[#FBF8F3]/50 via-[#FBF8F3]/30 to-transparent z-10 pointer-events-none blur-lg" />

            <ImageMarquee />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
