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
        "Redefining housing with modular capsules that can be deployed anywhere, creating sustainable communities worldwide.",
    },
    {
      icon: Leaf,
      title: "Sustainable Mission",
      description:
        "Pioneering eco-friendly construction with minimal environmental impact and maximum energy efficiency.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "Leveraging cutting-edge technology to create smart, adaptive living spaces for the modern world.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "Building more than homes – creating connected communities that foster collaboration and well-being.",
    },
  ];

  return (
    <section id="vision" className="relative overflow-hidden my-64">

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm text-primary font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Purpose
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Vision & Mission</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We envision a future where sustainable, modular living solutions
            enable people to live anywhere while maintaining luxury, comfort,
            and environmental responsibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visionItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="glass-card p-8 hover-lift group relative overflow-hidden rounded-3xl"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotateY: 0 }
                  : { opacity: 0, y: 50, rotateY: -15 }
              }
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl border-2 border-transparent bg-gradient-to-r from-primary via-primary-glow to-accent p-[2px]">
                <div className="absolute inset-[2px] bg-card rounded-[calc(1.5rem-2px)]"></div>
              </div>

              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 mb-6 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-accent transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </motion.div>

                <h3 className="text-xl font-bold mb-4 text-center group-hover:text-foreground transition-all duration-300">
                  {item.title}
                </h3>

                <p className="text-muted-foreground group-hover:text-foreground text-center leading-relaxed transition-all duration-300">
                  {item.description}
                </p>
              </div>

              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg"></div>

              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 group-hover:shadow-glow transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Inspiring Quote */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 30, scale: 0.95 }
          }
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="glass-card p-12 max-w-4xl mx-auto relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated Background Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <motion.blockquote
              className="text-2xl lg:text-3xl font-light text-gradient leading-relaxed mb-6 relative z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              "The future of living is not about building bigger houses, but
              about creating smarter, more sustainable spaces that adapt to our
              evolving needs."
            </motion.blockquote>
            <motion.cite
              className="text-muted-foreground font-medium relative z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 1.7, duration: 0.5 }}
            >
              — Q Capsules Team
            </motion.cite>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/20 rounded-tl-lg"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/20 rounded-br-lg"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
