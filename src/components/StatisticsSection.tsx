import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  TrendingUp,
  Clock,
  DollarSign,
  Leaf,
  Zap,
  Home,
  Globe,
  Award,
  Sparkles,
} from "lucide-react";

export const StatisticsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [counters, setCounters] = useState({
    speed: 0,
    cost: 0,
    energy: 0,
    carbon: 0,
    delivery: 0,
    satisfaction: 0,
    countries: 0,
    awards: 0,
  });

  const statistics = [
    {
      icon: Clock,
      title: "Faster Construction",
      value: 70,
      suffix: "%",
      description: "Compared to traditional building methods",
      color: "from-primary/20 to-primary/10",
      iconColor: "text-primary",
      key: "speed",
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      value: 40,
      suffix: "%",
      description: "Reduction in total project costs",
      color: "from-accent/20 to-accent/10",
      iconColor: "text-accent",
      key: "cost",
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      value: 85,
      suffix: "%",
      description: "More efficient than standard buildings",
      color: "from-primary-glow/20 to-primary-glow/10",
      iconColor: "text-primary-glow",
      key: "energy",
    },
    {
      icon: Leaf,
      title: "Carbon Reduction",
      value: 60,
      suffix: "%",
      description: "Lower carbon footprint",
      color: "from-success/20 to-success/10",
      iconColor: "text-success",
      key: "carbon",
    },
    // {
    //   icon: TrendingUp,
    //   title: "On-Time Delivery",
    //   value: 98,
    //   suffix: "%",
    //   description: "Projects delivered on schedule",
    //   color: "from-accent-glow/20 to-accent-glow/10",
    //   iconColor: "text-accent-glow",
    //   key: "delivery"
    // },
    // {
    //   icon: Home,
    //   title: "Client Satisfaction",
    //   value: 96,
    //   suffix: "%",
    //   description: "Customer satisfaction rate",
    //   color: "from-primary-dark/20 to-primary-dark/10",
    //   iconColor: "text-primary-dark",
    //   key: "satisfaction"
    // },
    // {
    //   icon: Globe,
    //   title: "Countries Served",
    //   value: 12,
    //   suffix: "+",
    //   description: "Global presence and reach",
    //   color: "from-primary/20 to-accent/20",
    //   iconColor: "text-primary",
    //   key: "countries"
    // },
    // {
    //   icon: Award,
    //   title: "Industry Awards",
    //   value: 15,
    //   suffix: "+",
    //   description: "Recognition for innovation",
    //   color: "from-warning/20 to-warning/10",
    //   iconColor: "text-warning",
    //   key: "awards"
    // }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      const duration = 2500;
      const steps = 80;
      const stepTime = duration / steps;

      statistics.forEach((stat, index) => {
        setTimeout(() => {
          let currentValue = 0;
          const increment = stat.value / steps;

          const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= stat.value) {
              currentValue = stat.value;
              clearInterval(timer);
            }

            setCounters((prev) => ({
              ...prev,
              [stat.key]: Math.floor(currentValue),
            }));
          }, stepTime);
        }, index * 150);
      });
    }
  }, [isInView, controls]);

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
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
      },
    },
  };

  return (
    <section id="statistics" className="py-32 relative overflow-hidden bg-black/95 cyber-grid">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_20%)] opacity-5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent))_0%,transparent_20%)] opacity-5"></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary-glow/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>

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
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full holographic-card neural-border text-sm font-medium mb-8 border border-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-gradient font-mono tracking-wider">IMPACT & RESULTS</span>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-gradient glow-text">PROVEN PERFORMANCE</span>
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-mono tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Our commitment to excellence is reflected in the numbers. See how
            modular capsules are transforming the construction industry.
          </motion.p>
        </motion.div>

        {/* Enhanced Statistics Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.title}
              className="group relative h-full"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              style={{ perspective: 1000 }}
            >
              <div className="holographic-card neural-border p-8 text-center relative overflow-hidden border border-border/50 group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col justify-between">
                {/* Dynamic background effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                ></div>

                {/* Animated border effect */}
                <div className="absolute inset-0 border border-transparent group-hover:border-primary/20 rounded-lg transition-all duration-500"></div>

                <div className="relative z-10">
                  {/* Enhanced Icon with glow effect */}
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 holographic-card neural-border backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-500 border border-border/30 group-hover:border-primary/30"
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon
                      className={`h-10 w-10 ${stat.iconColor} group-hover:drop-shadow-glow transition-all duration-500`}
                    />
                  </motion.div>

                  {/* Enhanced Counter with better typography */}
                  <div className="mb-6">
                    <motion.div
                      className="text-5xl lg:text-6xl font-black text-gradient mb-3 tracking-tight font-mono"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1 + 0.8,
                        type: "spring",
                      }}
                    >
                      {counters[stat.key as keyof typeof counters]}
                      {stat.suffix}
                    </motion.div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-all duration-300 font-mono tracking-wider">
                      {stat.title}
                    </h3>
                  </div>

                  {/* Enhanced Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-all duration-300 font-mono">
                    {stat.description}
                  </p>
                </div>

                {/* Hover shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 animate-shimmer"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Insights Section */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {[
            {
              title: "Environmental Impact",
              description:
                "Our modular construction methods significantly reduce waste, energy consumption, and environmental disruption compared to traditional building techniques.",
              gradient: "bg-gradient-to-br from-success/10 to-success/5",
              border: "border-success/20",
              icon: Leaf,
            },
            {
              title: "Economic Benefits",
              description:
                "Lower total cost of ownership through reduced construction time, minimal site preparation, and superior energy efficiency over the building's lifetime.",
              gradient: "bg-gradient-to-br from-primary/10 to-primary/5",
              border: "border-primary/20",
              icon: DollarSign,
            },
            {
              title: "Quality Assurance",
              description:
                "Factory-controlled manufacturing ensures consistent quality, weather-independent construction, and rigorous testing of every component.",
              gradient: "bg-gradient-to-br from-accent/10 to-accent/5",
              border: "border-accent/20",
              icon: Award,
            },
          ].map((insight, index) => (
            <motion.div
              key={insight.title}
              className={`holographic-card neural-border p-8 ${insight.gradient} border ${insight.border} group hover-lift`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 30, scale: 0.95 }
              }
              transition={{ duration: 0.6, delay: 1.7 + index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <insight.icon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-gradient font-mono tracking-wider">
                  {insight.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-all duration-300 font-mono">
                {insight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <div className="holographic-card neural-border p-12 max-w-3xl mx-auto border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <motion.h3
              className="text-3xl lg:text-4xl font-bold mb-6 text-gradient font-mono tracking-wider"
              whileHover={{ scale: 1.05 }}
            >
              READY TO EXPERIENCE THESE BENEFITS?
            </motion.h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-mono">
              Join hundreds of satisfied clients who've transformed their
              projects with Q Capsules.
            </p>
            <motion.button
              className="bg-gradient-primary text-primary-foreground px-12 py-4 rounded-2xl font-bold text-lg hover:shadow-glow transition-all duration-500 border border-primary/20 hover:border-primary/40 font-mono tracking-wider"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 50px hsl(var(--primary) / 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              START YOUR PROJECT
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
