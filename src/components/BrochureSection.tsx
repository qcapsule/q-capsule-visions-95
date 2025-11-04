import { forwardRef, useRef, useEffect } from "react";
import {
  Download,
  Eye,
  Sparkles,
  CheckCircle,
  Star,
  Award,
} from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import brochureImage from "@/assets/qcapsule-brochure.png";

export const BrochureSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const brochureItems = [
    {
      icon: CheckCircle,
      title: "Complete Specifications",
      description:
        "Detailed technical specifications, dimensions, and performance metrics for all Q Capsule models.",
      stat: "100%",
      statLabel: "Detailed",
      color: "from-primary/20 to-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Star,
      title: "Design Gallery",
      description:
        "High-quality images showcasing different configurations, interior options, and customization possibilities.",
      stat: "50+",
      statLabel: "Designs",
      color: "from-primary/20 to-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Award,
      title: "Customization Guide",
      description:
        "Comprehensive guide to personalizing your Q Capsule experience with premium materials and finishes.",
      stat: "24/7",
      statLabel: "Support",
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

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = brochureImage;
    link.download = "Q-Capsules-Brochure.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(brochureImage, "_blank");
  };

  return (
    <section ref={ref} id="brochure" className="relative overflow-hidden py-32">
      {/* Light Background Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

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
            <span className="text-foreground">Product Guide</span>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore Our Brochure
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Discover the complete Q Capsules experience. Our comprehensive
            brochure showcases all models, specifications, and customization
            options in beautiful detail.
          </motion.p>
        </motion.div>

        {/* Main Content Grid - Cover on Left, Content on Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Brochure Cover Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="max-w-md w-full sticky top-24">
              <div className="glass-card p-4 rounded-2xl border border-border/50 overflow-hidden group hover:border-primary/30 transition-all duration-500">
                <img
                  src={brochureImage}
                  alt="Q Capsules Brochure"
                  className="w-full h-auto rounded-xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Brochure Items and Actions */}
          <div className="space-y-8">
            {/* Brochure Items Grid */}
            <motion.div
              className="grid grid-cols-1 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {brochureItems.map((item, index) => (
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

                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <motion.div
                          className="w-16 h-16 flex-shrink-0 bg-card/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-500 border border-border/30 group-hover:border-primary/30"
                          whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <item.icon
                            className={`h-8 w-8 ${item.iconColor} group-hover:drop-shadow-glow transition-all duration-500`}
                          />
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-all duration-300">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-all duration-300 mb-3">
                            {item.description}
                          </p>
                          {/* Stat */}
                          <div className="flex items-center gap-2">
                            <div className="text-2xl font-bold text-primary">
                              {item.stat}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {item.statLabel}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.button
                onClick={handleDownload}
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 rounded-full px-8 py-4 text-lg font-medium flex items-center justify-center gap-3 shadow-lg hover:shadow-xl flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-5 w-5" />
                Download Brochure
              </motion.button>
              <motion.button
                onClick={handleView}
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 text-foreground transition-all duration-300 rounded-full px-8 py-4 text-lg font-medium flex items-center justify-center gap-3 flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="h-5 w-5" />
                Preview Online
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

BrochureSection.displayName = "BrochureSection";
