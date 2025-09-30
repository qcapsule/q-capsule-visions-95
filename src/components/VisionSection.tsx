import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Globe, Zap, Users } from "lucide-react";

export const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const visionItems = [
    {
      icon: Globe,
      title: "Global Vision",
      description:
        "Redefining housing with modular capsules deployed anywhere, creating sustainable communities worldwide.",
    },
    {
      icon: Leaf,
      title: "Sustainable",
      description:
        "Eco-friendly construction with minimal environmental impact and maximum energy efficiency.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Cutting-edge technology creating smart, adaptive living spaces for the modern world.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building connected communities that foster collaboration and well-being.",
    },
  ];

  return (
    <section id="vision" className="relative overflow-hidden py-32 bg-black">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
              OUR MISSION
            </span>
          </h2>

          <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed font-light">
            Sustainable, modular living solutions that enable people to live anywhere
            while maintaining luxury, comfort, and environmental responsibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 mb-6 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="h-7 w-7 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>

                <p className="text-white/60 leading-relaxed text-sm font-light">
                  {item.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
