import { forwardRef, useRef, useEffect } from "react";
import { Target, Lightbulb, Sparkles } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import desertOasisImage from "@/assets/desert-oasis-capsules.png";
import modernInteriorImage from "@/assets/modern-interior-capsule.png";

export const VisionSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const visionMissionData = [
    {
      icon: Target,
      title: "Our Vision",
      content:
        "We envision a world where sustainable living is not just a choice, but a seamless reality. Our vision is to create modular living solutions that harmonize with nature while providing unparalleled comfort and luxury. We see a future where every family can live in a space that adapts to their needs, grows with their dreams, and leaves a positive footprint on our planet. Through innovative design and cutting-edge technology, we're building the foundation for communities that thrive in harmony with their environment, creating lasting legacies for generations to come.",
      color: "from-primary/20 to-primary/10",
      iconColor: "text-primary",
      image: desertOasisImage,
      imagePosition: "right", // Text on left, image on right
    },
    {
      icon: Lightbulb,
      title: "Our Mission",
      content:
        "Our mission is to revolutionize the way people think about home and community. We are committed to delivering modular capsule solutions that combine sustainability, innovation, and luxury in perfect harmony. Every capsule we create is designed with the future in mind – using eco-friendly materials, smart technology, and adaptable spaces that grow with your family's needs. We believe that everyone deserves a home that not only shelters but inspires, connects, and empowers. Through our dedication to quality, sustainability, and customer satisfaction, we're building more than structures – we're creating the foundation for better living.",
      color: "from-accent/20 to-accent/10",
      iconColor: "text-accent",
      image: modernInteriorImage,
      imagePosition: "left", // Image on left, text on right
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
      },
    },
  };

  return (
    <section ref={ref} id="vision" className="relative overflow-hidden py-32">
      {/* Light Background Overlay */}
      <div className="absolute inset-0 bg-white/15 backdrop-blur-sm"></div>

      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary-glow/5 rounded-full blur-2xl animate-float"></div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, -50, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div
        className="container mx-auto px-6 relative z-10 max-w-7xl"
        ref={containerRef}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-8 border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-foreground">Our Foundation</span>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our Vision & Mission
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Discover the principles that drive our commitment to sustainable,
            innovative living solutions
          </motion.p>
        </motion.div>

        {/* Vision & Mission Content - Alternating Layout */}
        <div className="max-w-7xl mx-auto space-y-20">
          {visionMissionData.map((item, index) => {
            const isImageLeft = item.imagePosition === "left";

            return (
              <motion.div
                key={item.title}
                className="relative"
                variants={cardVariants}
                initial="hidden"
                animate={controls}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch ${
                    !isImageLeft ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Text Content - First if image is on right */}
                  {!isImageLeft && (
                    <motion.div
                      className="relative h-[400px] lg:h-[500px] lg:col-start-1 lg:row-start-1"
                      initial={{ opacity: 0, x: -50 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                      }
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                    >
                      <div className="glass-card p-8 lg:p-10 relative overflow-hidden border border-border/50 group-hover:border-primary/40 transition-all duration-500 backdrop-blur-xl h-full w-full">
                        {/* Dynamic background effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                        ></div>

                        {/* Decorative line on left */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 flex flex-col h-full group">
                          {/* Title */}
                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-all duration-300 mb-6">
                            {item.title}
                          </h3>

                          {/* Content */}
                          <div className="flex-1 flex items-start">
                            <div className="flex-1">
                              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-all duration-300">
                                {item.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Image */}
                  <motion.div
                    className={`relative h-[400px] lg:h-[500px] overflow-hidden ${
                      !isImageLeft ? "lg:col-start-2" : ""
                    }`}
                    initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: isImageLeft ? -50 : 50 }
                    }
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                  >
                    <div className="glass-card h-full w-full relative overflow-hidden border border-border/50 backdrop-blur-xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                  </motion.div>

                  {/* Text Content - Second if image is on left */}
                  {isImageLeft && (
                    <motion.div
                      className="relative h-[400px] lg:h-[500px]"
                      initial={{ opacity: 0, x: 50 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                      }
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                    >
                      <div className="glass-card p-8 lg:p-10 relative overflow-hidden border border-border/50 group-hover:border-primary/40 transition-all duration-500 backdrop-blur-xl h-full w-full">
                        {/* Dynamic background effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                        ></div>

                        {/* Decorative line on left */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 flex flex-col h-full group">
                          {/* Title */}
                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-all duration-300 mb-6">
                            {item.title}
                          </h3>

                          {/* Content */}
                          <div className="flex-1 flex items-start">
                            <div className="flex-1">
                              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-all duration-300">
                                {item.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Connecting Element */}
        <motion.div
          className="max-w-7xl mx-auto mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/50"></div>
            <motion.div
              className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center backdrop-blur-sm"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary/50"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

VisionSection.displayName = "VisionSection";
