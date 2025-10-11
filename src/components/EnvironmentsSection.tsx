import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Thermometer, Mountain, Waves, Sparkles } from 'lucide-react';

// Import the environment images
import desertOasisImage from '@/assets/desert-oasis-capsules.png';
import islandParadiseImage from '@/assets/island-paradise-capsules.png';
import snowyForestImage from '@/assets/snowy-forest-capsules.png';

const environments = [
  {
    id: 'desert-oasis',
    title: 'Desert Oasis',
    description: 'Engineered for extreme heat with advanced cooling systems',
    image: desertOasisImage,
    features: ['Solar-Powered', 'UV Protection', 'Sand-Resistant'],
    temp: '45°C+',
    icon: Thermometer,
    gradient: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    id: 'island-paradise',
    title: 'Island Paradise',
    description: 'Built to withstand coastal conditions and ocean winds',
    image: islandParadiseImage,
    features: ['Corrosion-Proof', 'Hurricane-Rated', 'Waterproof'],
    temp: '30°C',
    icon: Waves,
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 'winter-wonderland',
    title: 'Winter Retreat',
    description: 'Insulated design maintains warmth in sub-zero temperatures',
    image: snowyForestImage,
    features: ['Snow-Load Ready', 'Triple-Glazed', 'Heated Floors'],
    temp: '-20°C',
    icon: Mountain,
    gradient: 'from-blue-300/20 to-indigo-500/20',
  }
];

export const EnvironmentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="environments" className="relative overflow-hidden py-32" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [-30, 30, -30],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 glass-card px-8 py-4 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-gradient font-bold tracking-wide">
              Extreme Environments
            </span>
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          </motion.div>

          <h2 className="text-6xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
            <span className="text-gradient glow-text block">Deploy</span>
            <span className="text-foreground block">Anywhere</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            From scorching deserts to frozen tundras. Our capsules thrive in the world's most challenging climates.
          </p>
        </motion.div>

        {/* Environments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {environments.map((environment, index) => (
            <motion.div
              key={environment.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group perspective-1000"
            >
              <div className="glass-panel overflow-hidden depth-layer-1 group-hover:depth-layer-3 transition-all duration-500 h-full">
                {/* Image with overlay */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={environment.image}
                    alt={environment.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${environment.gradient} opacity-60`} />
                  
                  {/* Top badge */}
                  <div className="absolute top-4 left-4">
                    <div className="glass-card px-4 py-2 rounded-xl flex items-center gap-2">
                      <environment.icon className="w-4 h-4 text-white" />
                      <span className="text-white font-bold text-sm">{environment.temp}</span>
                    </div>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-3xl font-black text-white drop-shadow-lg">
                      {environment.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {environment.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-foreground/60 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {environment.features.map((feature) => (
                        <span
                          key={feature}
                          className="glass-card px-3 py-1.5 text-xs font-medium text-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn more */}
                  <motion.button
                    className="w-full glass-card py-3 rounded-xl font-semibold text-sm text-primary hover:bg-primary/10 transition-all duration-300 group-hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="glass-panel p-12 max-w-3xl mx-auto depth-layer-2">
            <h3 className="text-3xl lg:text-4xl font-black mb-4 text-gradient">
              Ready for Any Challenge
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our capsules are tested in the harshest conditions to ensure your comfort and safety, no matter where you deploy.
            </p>
            <motion.button
              className="bg-gradient-primary text-primary-foreground px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-glow transition-all duration-500"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 50px hsl(var(--primary) / 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Environments
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
