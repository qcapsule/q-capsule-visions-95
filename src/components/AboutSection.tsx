import { forwardRef, useRef, useEffect } from "react";
import {
  Award,
  Users,
  Zap,
  Globe,
  Sparkles,
  Building2,
  Heart,
  Target,
} from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import dohaSkylineImage from "@/assets/doha-skyline.png";

export const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const aboutItems = [
    {
      icon: Building2,
      title: "Qatar Heritage",
      description:
        "Born in Qatar, built for the world. We're proud to be part of Qatar's innovative future while honoring our rich cultural heritage.",
      stat: "100%",
      statLabel: "Made in Qatar",
      color: "from-primary/20 to-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description:
        "Every capsule we create is infused with passion, precision, and purpose. We believe in crafting spaces that inspire and transform lives.",
      stat: "500+",
      statLabel: "Dreams Realized",
      color: "from-primary/20 to-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Target,
      title: "Excellence Focus",
      description:
        "Committed to delivering exceptional quality and service. Our attention to detail ensures every project exceeds expectations.",
      stat: "99%",
      statLabel: "Client Satisfaction",
      color: "from-primary/20 to-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Sparkles,
      title: "Innovation First",
      description:
        "Pioneering the future of modular living with cutting-edge technology and sustainable design principles.",
      stat: "24/7",
      statLabel: "Innovation",
      color: "from-primary/20 to-primary/10",
      iconColor: "text-primary",
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
    <section ref={ref} id="about" className="relative overflow-hidden py-32">
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
            <span className="text-foreground">Our Story</span>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            About Q Capsules
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Born from Qatar's vision for the future, we're pioneering modular
            living solutions that combine innovation, sustainability, and luxury
            in every capsule we create.
          </motion.p>
        </motion.div>

        {/* Doha Skyline Image - Top Center */}
        <motion.div
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="max-w-2xl w-full">
            <div className="glass-card p-4 rounded-2xl border border-border/50 overflow-hidden group hover:border-primary/30 transition-all duration-500">
              <img
                src={dohaSkylineImage}
                alt="Doha Skyline"
                className="w-full h-auto rounded-xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>

        {/* About Items Grid - 2x2 Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {aboutItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative h-full"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                z: 50,
              }}
            >
              <div className="glass-card p-8 relative overflow-hidden border border-border/50 group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                {/* Dynamic background effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                ></div>

                {/* Golden Divider */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-50"></div>

                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 mb-6 mx-auto bg-card/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-500 border border-border/30 group-hover:border-primary/30"
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon
                      className={`h-8 w-8 ${item.iconColor} group-hover:drop-shadow-glow transition-all duration-500`}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-all duration-300 mb-4">
                    {item.description}
                  </p>
                  {/* Stat */}
                  <div className="mt-auto">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {item.stat}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.statLabel}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote - Bottom Center */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <blockquote className="text-xl lg:text-2xl text-foreground/90 italic max-w-4xl mx-auto leading-relaxed">
            "We don't just build homes, we craft experiences that connect people
            with nature, innovation, and each other."
          </blockquote>
          <cite className="text-primary text-lg font-medium mt-4 block">
            — Q Capsules Founders
          </cite>
        </motion.div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
