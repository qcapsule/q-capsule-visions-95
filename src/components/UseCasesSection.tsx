import { motion, useInView, useAnimation } from "framer-motion";
import { forwardRef, useRef, useEffect, useState } from "react";
import {
  Building2,
  TreePine,
  Heart,
  Shield,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// Import use case images
import officeImage from "@/assets/office-capsule.jpg";
import ecoResortImage from "@/assets/eco-resort-capsule.jpg";
import healthcareImage from "@/assets/healthcare-capsule.jpg";
import secureBankingImage from "@/assets/secure-banking-capsule.jpg";

export const UseCasesSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const useCases = [
    {
      icon: Building2,
      title: "Office Spaces",
      description:
        "Modern workspaces that adapt to your business needs, from startups to enterprise operations.",
      applications: [
        "Remote Offices",
        "Startup Hubs",
        "Meeting Spaces",
        "Co-working",
      ],
      color: "from-blue-500/20 to-indigo-600/20",
      iconColor: "text-blue-400",
      image: officeImage,
      stats: "50+ Deployments",
      tagline: "Work Anywhere—Thrive Everywhere",
    },
    {
      icon: TreePine,
      title: "Eco Resorts",
      description:
        "Sustainable luxury retreats that blend seamlessly with natural environments.",
      applications: [
        "Glamping",
        "Safari Lodges",
        "Eco Hotels",
        "Wellness Retreats",
      ],
      color: "from-emerald-500/20 to-teal-600/20",
      iconColor: "text-emerald-400",
      image: ecoResortImage,
      stats: "Zero Carbon Footprint",
      tagline: "Nature First—Luxury Always",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description:
        "Mobile medical facilities bringing advanced healthcare to underserved communities.",
      applications: [
        "Mobile Clinics",
        "Telemedicine",
        "Emergency Care",
        "Wellness Centers",
      ],
      color: "from-pink-500/20 to-rose-600/20",
      iconColor: "text-pink-400",
      image: healthcareImage,
      stats: "Medical Grade",
      tagline: "Care Everywhere—Healing Always",
    },
    {
      icon: Shield,
      title: "Secure Banking",
      description:
        "Fortified financial facilities providing secure, private banking services with cutting-edge technology.",
      applications: [
        "Private Banking",
        "Secure Vaults",
        "Financial Consulting",
        "Digital Banking",
      ],
      color: "from-purple-500/20 to-violet-600/20",
      iconColor: "text-purple-400",
      image: secureBankingImage,
      stats: "Bank-Grade Security",
      tagline: "Secure Banking—Anywhere Access",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 200,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="use-cases"
      className="relative overflow-hidden py-32"
    >
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
            <span className="text-foreground">Applications</span>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Built for Every Vision
            </motion.h2>

            <motion.p
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover how Q Capsules transform ideas into reality across
              industries and applications.
            </motion.p>
          </motion.div>

        {/* Use Cases Grid - Interactive Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
              className="group relative h-full"
              variants={cardVariants}
              onHoverStart={() => setSelectedIndex(index)}
              onHoverEnd={() => setSelectedIndex(null)}
              whileHover={{
                scale: 1.03,
                z: 50,
              }}
            >
              <div className="glass-card relative overflow-hidden border border-border/50 group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col rounded-2xl">
                {/* Dynamic background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                ></div>

                {/* Golden Divider */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-50"></div>

                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{
                      scale: selectedIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4">
                    <motion.div
                      className="w-14 h-14 bg-card/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-border/30 group-hover:border-primary/30 transition-all duration-500"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    >
                      <useCase.icon
                        className={`h-7 w-7 ${useCase.iconColor} group-hover:drop-shadow-glow transition-all duration-500`}
                      />
                    </motion.div>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-card/80 backdrop-blur-sm text-foreground text-xs font-medium rounded-lg border border-border/30 group-hover:border-primary/30 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-500">
                      {useCase.stats}
                    </span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-all duration-300">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-all duration-300">
                      {useCase.tagline}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-all duration-300 flex-1">
                    {useCase.description}
                  </p>

                  {/* Applications */}
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 group-hover:text-foreground/80 transition-all duration-300">
                      Applications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.applications.map((app, i) => (
                        <motion.span
                          key={app}
                          className="px-3 py-1.5 bg-card/50 backdrop-blur-sm text-foreground/70 text-xs rounded-lg border border-border/30 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {app}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-lg border border-primary/30 group-hover:bg-primary/30 transition-all duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </motion.div>
                </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.8 }}
          >
          <div className="glass-card p-12 max-w-4xl mx-auto border border-border/50 hover:border-primary/30 transition-all duration-500 rounded-2xl relative overflow-hidden group">
            {/* Golden Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-50"></div>

              <motion.h3
              className="text-3xl lg:text-4xl font-bold mb-6 text-foreground group-hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              >
                Ready to Bring Your Vision to Life?
              </motion.h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed group-hover:text-foreground/80 transition-all duration-300">
                Every project is unique. Let's collaborate to create a Q Capsule
                solution tailored specifically to your needs and vision.
              </p>
                <motion.button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{
                    scale: 1.05,
                boxShadow: "0 0 30px rgba(var(--primary), 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discuss Your Project
                </motion.button>
            </div>
          </motion.div>
      </div>
    </section>
  );
});

UseCasesSection.displayName = "UseCasesSection";
