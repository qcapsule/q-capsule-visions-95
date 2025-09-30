import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ecoResortCapsule from "@/assets/eco-resort-capsule.jpg";
import officeCapsule from "@/assets/office-capsule.jpg";
import residentialCapsule from "@/assets/residential-capsule.jpg";
import healthcareCapsule from "@/assets/healthcare-capsule.jpg";
import creativeStudioCapsule from "@/assets/creative-studio-capsule.jpg";
import retailCapsule from "@/assets/retail-capsule.jpg";

export const ScrollCapsuleSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to our internal progress
  const progress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  // Capsules Collection
  const phases = [
    {
      id: 1,
      title: "Residential Capsule",
      description:
        "Luxury living spaces designed for modern comfort and sustainability",
      image: residentialCapsule,
      progress: [0, 0.25],
      features: [
        "Smart home integration",
        "Energy-efficient systems",
        "Premium finishes",
      ],
    },
    {
      id: 2,
      title: "Office Capsule",
      description: "Professional workspaces that adapt to your business needs",
      image: officeCapsule,
      progress: [0.25, 0.5],
      features: [
        "Flexible layouts",
        "Advanced connectivity",
        "Ergonomic design",
      ],
    },
    {
      id: 3,
      title: "Healthcare Capsule",
      description:
        "Medical facilities with cutting-edge technology and patient care",
      image: healthcareCapsule,
      progress: [0.5, 0.75],
      features: [
        "Medical-grade air filtration",
        "Sterile environments",
        "Emergency systems",
      ],
    },
    {
      id: 4,
      title: "Eco Resort Capsule",
      description:
        "Hospitality spaces that blend luxury with environmental responsibility",
      image: ecoResortCapsule,
      progress: [0.75, 1],
      features: [
        "Sustainable materials",
        "Nature integration",
        "Wellness amenities",
      ],
    },
  ];

  // Handle scroll locking
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value > 0.2 && value < 0.8 && !animationComplete) {
        setIsScrollLocked(true);
      } else {
        setIsScrollLocked(false);
      }
    });

    return unsubscribe;
  }, [scrollYProgress, animationComplete]);

  // Handle manual scroll control when locked
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrollLocked && !animationComplete) {
        e.preventDefault();
        setScrollProgress((prev) => {
          const delta = e.deltaY > 0 ? 0.01 : -0.01;
          const newProgress = Math.max(0, Math.min(1, prev + delta));

          // Complete animation and release lock permanently
          if (newProgress >= 0.95) {
            setAnimationComplete(true);
            setIsScrollLocked(false);
            return 1; // Set to 100%
          }

          return newProgress;
        });
      }
    };

    if (isScrollLocked && !animationComplete) {
      document.body.style.overflow = "hidden";
      window.addEventListener("wheel", handleWheel, { passive: false });
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", handleWheel);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isScrollLocked, animationComplete]);

  // Update scroll progress from scroll or manual control
  useEffect(() => {
    const unsubscribe = progress.on("change", (value) => {
      if (!isScrollLocked || animationComplete) {
        setScrollProgress(value);
      }
    });

    return unsubscribe;
  }, [progress, isScrollLocked, animationComplete]);

  // Get current phase
  const getCurrentPhase = () => {
    return (
      phases.find(
        (phase) =>
          scrollProgress >= phase.progress[0] &&
          scrollProgress < phase.progress[1]
      ) || phases[0]
    );
  };

  const currentPhase = getCurrentPhase();

  return (
    <section
      ref={containerRef}
      className="relative min-h-[500vh] bg-gradient-to-br from-background via-muted/5 to-background"
    >
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated golden particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, -100, -200],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Floating luxury elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Sticky Luxury Layout */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Luxury Content */}
            <div className="space-y-12">
              {/* Luxury Progress Indicator */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {currentPhase.id}
                  </div>
                  <div className="w-16 h-px bg-gradient-primary"></div>
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground text-sm font-bold">
                    {phases.length}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground font-medium tracking-wider uppercase">
                  Collection
                </div>
              </div>

              {/* Luxury Title */}
              <motion.div
                key={currentPhase.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <motion.h1
                    className="text-6xl lg:text-7xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <span className="text-gradient glow-text block">
                      {currentPhase.title.split(" ")[0]}
                    </span>
                    <span className="text-foreground block font-light">
                      {currentPhase.title.split(" ").slice(1).join(" ")}
                    </span>
                  </motion.h1>

                  {/* Luxury Divider */}
                  <motion.div
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="w-20 h-px bg-gradient-primary"></div>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="w-20 h-px bg-gradient-primary"></div>
                  </motion.div>

                  <motion.p
                    className="text-xl text-muted-foreground leading-relaxed max-w-lg font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {currentPhase.description}
                  </motion.p>
                </div>

                {/* Luxury Features */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-widest">
                    Premium Features
                  </h3>
                  <div className="space-y-3">
                    {currentPhase.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-4 group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      >
                        <div className="w-1 h-1 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="text-muted-foreground font-light tracking-wide">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Luxury CTA */}
                <motion.div
                  className="pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <button className="group relative overflow-hidden bg-gradient-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold hover:shadow-glow transition-all duration-500 border border-primary/20 hover:border-primary/40">
                    <span className="relative z-10">Explore Collection</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side - Luxury Visual */}
            <div className="relative h-[700px] lg:h-[800px]">
              {/* Luxury Glow Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-3xl blur-3xl"
                style={{
                  transform: `scale(${0.8 + scrollProgress * 0.3})`,
                  opacity: 0.3 + scrollProgress * 0.4,
                }}
              />

              {/* Luxury Image Container */}
              <motion.div
                className="relative z-10 h-full rounded-3xl overflow-hidden shadow-2xl border border-border/20 group"
                style={{
                  transform: `perspective(1000px) rotateY(${
                    scrollProgress * 2 - 1
                  }deg) rotateX(${scrollProgress * 1 - 0.5}deg)`,
                }}
                whileHover={{
                  scale: 1.02,
                  rotateY: 0,
                  rotateX: 0,
                  transition: { duration: 0.6 },
                }}
              >
                <motion.img
                  key={currentPhase.id}
                  src={currentPhase.image}
                  alt={currentPhase.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Luxury Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Luxury Badge */}
                <motion.div
                  className="absolute top-8 right-8 glass-card p-4 backdrop-blur-xl border border-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="text-white text-sm font-semibold">
                    Q Capsule
                  </div>
                  <div className="text-white/80 text-xs">
                    {currentPhase.title}
                  </div>
                </motion.div>

                {/* Luxury Progress Indicator */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="glass-card p-4 backdrop-blur-xl border border-white/20 rounded-2xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white text-sm font-medium">
                        Progress
                      </span>
                      <span className="text-white/80 text-sm font-mono">
                        {Math.round(scrollProgress * 100)}%
                      </span>
                    </div>
                    <div className="bg-white/20 rounded-full h-1 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-primary rounded-full"
                        style={{
                          width: `${scrollProgress * 100}%`,
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Luxury Timeline */}
              <div className="absolute -bottom-12 left-0 right-0 flex justify-center">
                <div className="flex items-center space-x-4 glass-card p-4 backdrop-blur-xl border border-border/20 rounded-2xl">
                  {phases.map((phase, index) => (
                    <motion.div
                      key={phase.id}
                      className="flex flex-col items-center space-y-2 cursor-pointer"
                      style={{
                        opacity: phase.id === currentPhase.id ? 1 : 0.4,
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          phase.id === currentPhase.id
                            ? "bg-primary shadow-glow"
                            : "bg-muted-foreground"
                        }`}
                      />
                      <span className="text-xs text-muted-foreground font-medium">
                        {phase.id}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Scroll Hint */}
      {isScrollLocked && !animationComplete && (
        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 glass-card px-8 py-4 rounded-2xl backdrop-blur-xl border border-primary/20 shadow-glow"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
        >
          <div className="flex items-center space-x-4">
            <motion.div
              className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
            <div className="text-center">
              <div className="text-sm font-semibold text-primary">
                Explore Collection
              </div>
              <div className="text-xs text-muted-foreground font-mono">
                {Math.round(scrollProgress * 100)}% Complete
              </div>
            </div>
            <div className="w-16 h-px bg-gradient-primary"></div>
          </div>
        </motion.div>
      )}
    </section>
  );
};
