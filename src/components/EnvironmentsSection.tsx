import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

// Import the environment images
import desertOasisImage from "@/assets/desert-oasis-capsules.png";
import islandParadiseImage from "@/assets/island-paradise-capsules.png";
import snowyForestImage from "@/assets/snowy-forest-capsules.png";

const environments = [
  {
    id: "desert-oasis",
    title: "Desert Oasis",
    description: "Luxury capsules in golden dunes",
    image: desertOasisImage,
  },
  {
    id: "island-paradise",
    title: "Island Paradise",
    description: "Crystal waters & pristine beaches",
    image: islandParadiseImage,
  },
  {
    id: "winter-wonderland",
    title: "Winter Retreat",
    description: "Cozy warmth in snowy landscapes",
    image: snowyForestImage,
  },
];

export const EnvironmentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="environments"
      className="relative overflow-hidden py-32"
      ref={ref}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
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
            <span className="text-foreground">Perfect Environments</span>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Perfect Environments
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Q Capsules adapt to any location, bringing comfort and luxury to
            every environment.
          </motion.p>
        </motion.div>

        {/* Environments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {environments.map((environment, index) => (
            <motion.div
              key={environment.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <h3 className="text-xl font-bold mb-2 text-center">
                {environment.title}
              </h3>
              <p className="text-muted-foreground text-center text-sm">
                {environment.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
