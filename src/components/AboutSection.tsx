import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Zap, Globe } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    { icon: Award, label: "Awards Won", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "200+" },
    { icon: Zap, label: "Projects Delivered", value: "350+" },
    { icon: Globe, label: "Countries Served", value: "12" },
  ];

  return (
    <section id="about" className="relative overflow-hidden py-32 bg-[#0a0a0a]">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
              OUR STORY
            </span>
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-20 max-w-6xl mx-auto">
          {/* Story Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-white/60 leading-relaxed font-light">
                Born from a vision to revolutionize the way we think about
                living spaces, Q Capsules emerged as Qatar's pioneering force in
                modular architecture.
              </p>

              <p className="text-lg text-white/60 leading-relaxed font-light">
                Founded by architects, engineers, and visionaries,
                we've transformed this vision into reality. Every Q Capsule
                represents our commitment to sustainable innovation.
              </p>
            </div>

            {/* Vision Statement */}
            <motion.div
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-white/60 leading-relaxed font-light">
                "To be the global leader in modular living solutions, creating
                sustainable, innovative spaces that enhance quality of life
                while respecting our planet."
              </p>
            </motion.div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative z-10">
                    <motion.div
                      className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <achievement.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-white/60 font-light">
                      {achievement.label}
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
