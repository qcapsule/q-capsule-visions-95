import { forwardRef, useRef, useEffect } from "react";
import { Target, Lightbulb, Sparkles } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";

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
    },
    {
      icon: Lightbulb,
      title: "Our Mission",
      content:
        "Our mission is to revolutionize the way people think about home and community. We are committed to delivering modular capsule solutions that combine sustainability, innovation, and luxury in perfect harmony. Every capsule we create is designed with the future in mind – using eco-friendly materials, smart technology, and adaptable spaces that grow with your family's needs. We believe that everyone deserves a home that not only shelters but inspires, connects, and empowers. Through our dedication to quality, sustainability, and customer satisfaction, we're building more than structures – we're creating the foundation for better living.",
      color: "from-accent/20 to-accent/10",
      iconColor: "text-accent",
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

        {/* Vision & Mission Content */}
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {visionMissionData.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative h-full"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                z: 50,
              }}
            >
              <div className="glass-card p-8 lg:p-12 relative overflow-hidden border border-border/50 group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                {/* Dynamic background effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                ></div>

                {/* Golden Divider */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-50"></div>

                <div className="flex items-start space-x-6 relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 bg-card/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-500 border border-border/30 group-hover:border-primary/30"
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon
                      className={`h-8 w-8 ${item.iconColor} group-hover:drop-shadow-glow transition-all duration-500`}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-all duration-300">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <blockquote className="text-2xl lg:text-3xl text-foreground/90 italic max-w-4xl mx-auto leading-relaxed">
            "Building the future of sustainable living, one capsule at a time."
          </blockquote>
          <cite className="text-primary text-lg font-medium mt-4 block">
            — Q Capsules Team
          </cite>
        </motion.div>
      </div>
    </section>
  );
});

VisionSection.displayName = "VisionSection";
