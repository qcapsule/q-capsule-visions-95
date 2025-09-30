import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Zap, Globe } from "lucide-react";
import madeInQatarLogo from "@/assets/made-in-qatar-logo.png";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    { icon: Award, label: "Awards Won", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "200+" },
    { icon: Zap, label: "Projects Delivered", value: "350+" },
    { icon: Globe, label: "Countries Served", value: "12" },
  ];

  const timeline = [
    {
      year: "2020",
      event: "Q Capsules Founded",
      description: "Started with a vision to revolutionize modular living",
    },
    {
      year: "2021",
      event: "First Prototype",
      description: "Developed our first fully functional capsule prototype",
    },
    {
      year: "2022",
      event: "Market Launch",
      description: "Launched our first commercial capsule line in Qatar",
    },
    {
      year: "2023",
      event: "International Expansion",
      description: "Expanded to serve clients across the Middle East",
    },
    {
      year: "2024",
      event: "Innovation Awards",
      description: "Recognized for sustainable design and innovation",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden my-64">
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
            Our Story
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">About Q Capsules</span>
          </h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Story Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Born from a vision to revolutionize the way we think about
                living spaces, Q Capsules emerged as Qatar's pioneering force in
                modular architecture. Our journey began with a simple question:
                "What if homes could adapt to people, rather than people
                adapting to homes?"
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by a team of architects, engineers, and visionaries,
                we've transformed this question into reality. Every Q Capsule
                represents our commitment to sustainable innovation, combining
                cutting-edge technology with timeless design principles.
              </p>

            </div>

            {/* Made in Qatar Logo 
            <motion.div
              className="flex items-center space-x-4 glass-card p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <img
                src={madeInQatarLogo}
                alt="Made in Qatar"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-gradient mb-1">
                  Made in Qatar
                </h3>
                <p className="text-muted-foreground">
                  Proudly contributing to Qatar's sustainable future
                </p>
              </div>
            </motion.div>*/}
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="glass-card p-6 text-center hover-lift group relative overflow-hidden"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 30, scale: 0.9 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 120,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    whileHover={{ opacity: 0.1 }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center shadow-md group-hover:shadow-glow transition-all duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <achievement.icon className="h-6 w-6 text-primary-foreground" />
                    </motion.div>
                    <motion.div
                      className="text-3xl font-bold text-gradient mb-2"
                      initial={{ scale: 0.5 }}
                      animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                      transition={{
                        delay: 0.8 + index * 0.1,
                        duration: 0.5,
                        type: "spring",
                      }}
                    >
                      {achievement.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-colors duration-300"></div>
                </motion.div>
              ))}
            </div>

            {/* Vision Statement */}
            <motion.div
              className="glass-card p-8 bg-gradient-primary/5 border-primary/20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <h3 className="text-xl font-bold text-gradient mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                "To be the global leader in modular living solutions, creating
                sustainable, innovative spaces that enhance quality of life
                while respecting our planet."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
