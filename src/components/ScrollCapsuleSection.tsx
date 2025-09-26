import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ecoResortCapsule from '@/assets/eco-resort-capsule.jpg';
import officeCapsule from '@/assets/office-capsule.jpg';
import residentialCapsule from '@/assets/residential-capsule.jpg';
import healthcareCapsule from '@/assets/healthcare-capsule.jpg';
import creativeStudioCapsule from '@/assets/creative-studio-capsule.jpg';
import retailCapsule from '@/assets/retail-capsule.jpg';

export const ScrollCapsuleSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to our internal progress
  const progress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  // Capsules Collection
  const phases = [
    {
      id: 1,
      title: "Residential Capsule",
      description: "Luxury living spaces designed for modern comfort and sustainability",
      image: residentialCapsule,
      progress: [0, 0.25],
      features: ["Smart home integration", "Energy-efficient systems", "Premium finishes"]
    },
    {
      id: 2,
      title: "Office Capsule", 
      description: "Professional workspaces that adapt to your business needs",
      image: officeCapsule,
      progress: [0.25, 0.5],
      features: ["Flexible layouts", "Advanced connectivity", "Ergonomic design"]
    },
    {
      id: 3,
      title: "Healthcare Capsule",
      description: "Medical facilities with cutting-edge technology and patient care",
      image: healthcareCapsule,
      progress: [0.5, 0.75],
      features: ["Medical-grade air filtration", "Sterile environments", "Emergency systems"]
    },
    {
      id: 4,
      title: "Eco Resort Capsule",
      description: "Hospitality spaces that blend luxury with environmental responsibility",
      image: ecoResortCapsule,
      progress: [0.75, 1],
      features: ["Sustainable materials", "Nature integration", "Wellness amenities"]
    }
  ];

  // Handle scroll locking
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      if (value > 0.2 && value < 0.8 && !animationComplete) {
        setIsScrollLocked(true);
      } else {
        setIsScrollLocked(false);
      }
    });

    return unsubscribe;
  }, [scrollYProgress, animationComplete]);

  // Handle manual scroll control when locked
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrollLocked && !animationComplete) {
        e.preventDefault();
        setScrollProgress(prev => {
          const delta = e.deltaY > 0 ? 0.01 : -0.01;
          const newProgress = Math.max(0, Math.min(1, prev + delta));
          
          // Complete animation and release lock permanently
          if (newProgress >= 0.95) {
            setAnimationComplete(true);
            setIsScrollLocked(false);
            return 1; // Set to 100%
          }
          
          return newProgress;
        });
      }
    };

    if (isScrollLocked && !animationComplete) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('wheel', handleWheel, { passive: false });
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', handleWheel);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isScrollLocked, animationComplete]);

  // Update scroll progress from scroll or manual control
  useEffect(() => {
    const unsubscribe = progress.on('change', (value) => {
      if (!isScrollLocked || animationComplete) {
        setScrollProgress(value);
      }
    });

    return unsubscribe;
  }, [progress, isScrollLocked, animationComplete]);

  // Get current phase
  const getCurrentPhase = () => {
    return phases.find(phase => 
      scrollProgress >= phase.progress[0] && scrollProgress < phase.progress[1]
    ) || phases[0];
  };

  const currentPhase = getCurrentPhase();

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[500vh]"
    >
      {/* Sticky Split Layout */}
      <div className="sticky top-0 h-screen flex">
        {/* Left Side - Content */}
        <div className="w-1/2 bg-gradient-primary flex items-center justify-center relative">
          {/* Progress Indicator */}
          <div className="absolute top-8 left-8 text-primary-foreground/80 text-sm font-mono tracking-wider">
            {currentPhase.id} — {phases.length}
          </div>
          
          <div className="px-12 text-primary-foreground">
            <motion.div
              key={currentPhase.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-bold leading-none">
                  {currentPhase.title.split(' ').map((word, index) => (
                    <div key={index} className={index === 0 ? 'font-light' : 'font-bold'}>
                      {word}
                    </div>
                  ))}
                </h1>
                
                <div className="w-16 h-0.5 bg-primary-foreground/60 my-6" />
                
                <p className="text-lg text-primary-foreground/90 font-light leading-relaxed max-w-md">
                  {currentPhase.description}
                </p>
              </div>

              <div className="space-y-2 text-sm text-primary-foreground/70">
                {currentPhase.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className="w-1/2 relative overflow-hidden bg-muted/10">
          <motion.div
            key={currentPhase.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={currentPhase.image}
              alt={currentPhase.title}
              className="w-full h-full object-cover"
            />
            
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/10" />
          </motion.div>

          {/* Progress Bar */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full h-1">
              <motion.div 
                className="h-full bg-white rounded-full"
                style={{ 
                  width: `${scrollProgress * 100}%`,
                  transition: 'width 0.3s ease-out'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      {isScrollLocked && !animationComplete && (
        <motion.div 
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-primary/90 text-primary-foreground px-6 py-3 rounded-full backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="flex items-center space-x-3">
            <div className="animate-bounce">↓</div>
            <span className="text-sm font-medium">Scroll to explore construction phases</span>
            <div className="text-xs opacity-75">{Math.round(scrollProgress * 100)}%</div>
          </div>
        </motion.div>
      )}
    </section>
  );
};