import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Import the environment images
import desertOasisImage from '@/assets/desert-oasis-capsules.png';
import islandParadiseImage from '@/assets/island-paradise-capsules.png';
import snowyForestImage from '@/assets/snowy-forest-capsules.png';

const environments = [
  {
    id: 'desert-oasis',
    title: 'Desert Oasis',
    description: 'Luxury capsules in golden dunes',
    image: desertOasisImage,
  },
  {
    id: 'island-paradise',
    title: 'Island Paradise',
    description: 'Crystal waters & pristine beaches',
    image: islandParadiseImage,
  },
  {
    id: 'winter-wonderland',
    title: 'Winter Retreat',
    description: 'Cozy warmth in snowy landscapes',
    image: snowyForestImage,
  }
];

export const EnvironmentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="environments" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Perfect Environments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Q Capsules adapt to any location, bringing comfort and luxury to every environment.
          </p>
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
              <div className="aspect-square overflow-hidden rounded-2xl mb-4">
                <img
                  src={environment.image}
                  alt={environment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{environment.title}</h3>
              <p className="text-muted-foreground text-center text-sm">{environment.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};