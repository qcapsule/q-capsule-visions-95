import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  ChefHat, 
  Bed, 
  TreePine, 
  Palette, 
  Recycle, 
  Lightbulb, 
  Wifi,
  ArrowRight,
  Play,
  Zap,
  Eye,
  Layers,
  Cpu
} from 'lucide-react';

import modernInteriorImage from '@/assets/modern-interior-capsule.png';
import q56xImage from '@/assets/q56x-capsule.png';
import q75xImage from '@/assets/q75x-capsule.png';
import q95xImage from '@/assets/q95x-capsule.png';
import q115xImage from '@/assets/q115x-capsule.png';

export const CapsuleExplorationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeRoom, setActiveRoom] = useState('lounge');
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState(0);

  const rooms = [
    { id: 'lounge', name: 'Lounge', icon: Home, color: 'from-blue-500/20 to-cyan-500/20' },
    { id: 'kitchen', name: 'Kitchen', icon: ChefHat, color: 'from-orange-500/20 to-amber-500/20' },
    { id: 'bedroom', name: 'Bedroom', icon: Bed, color: 'from-purple-500/20 to-pink-500/20' },
    { id: 'terrace', name: 'Terrace', icon: TreePine, color: 'from-green-500/20 to-emerald-500/20' },
  ];

  const features = [
    {
      id: 'ai-control',
      title: 'AI Control Hub',
      description: 'Neural interface for complete environmental control',
      icon: Cpu,
      position: { top: '20%', left: '10%' },
      color: 'text-cyan-400'
    },
    {
      id: 'quantum-materials',
      title: 'Quantum Materials',
      description: 'Self-healing nano-composite construction',
      icon: Layers,
      position: { top: '15%', right: '15%' },
      color: 'text-purple-400'
    },
    {
      id: 'photonic-lighting',
      title: 'Photonic System',
      description: 'Bio-adaptive light therapy and ambiance control',
      icon: Zap,
      position: { bottom: '35%', left: '15%' },
      color: 'text-amber-400'
    },
    {
      id: 'holographic-display',
      title: 'Holo Display',
      description: '360° immersive holographic projection system',
      icon: Eye,
      position: { bottom: '25%', right: '20%' },
      color: 'text-green-400'
    }
  ];

  const capsuleModels = [
    {
      id: 'nexus-pro',
      name: 'Nexus Pro',
      codename: 'NX-O18',
      layout: 'Neural Interface',
      size: '36m²',
      image: q75xImage,
      specs: ['AI Integration', 'Quantum Core', 'Bio-Adaptive']
    },
    {
      id: 'quantum-elite',
      name: 'Quantum Elite', 
      codename: 'QE-H40',
      layout: 'Holographic Suite',
      size: '46m²',
      image: q95xImage,
      specs: ['Holo Display', 'Zero-G Sim', 'Neuro-Link']
    },
    {
      id: 'fusion-x',
      name: 'Fusion X',
      codename: 'FX-X56',
      layout: 'Modular Core', 
      size: '36m²',
      image: q115xImage,
      specs: ['Adaptive Walls', 'Fusion Reactor', 'Mind-Mesh']
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="exploration" className="py-32 relative overflow-hidden bg-black/95 cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background opacity-90" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Futuristic Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative">
            <Badge className="mb-8 bg-primary-glow/20 text-primary-glow border-primary-glow/40 animate-led-pulse font-mono uppercase tracking-wider">
              &gt;&gt; NEURAL EXPLORATION INTERFACE
            </Badge>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 relative">
              <span className="text-gradient animate-hologram">Experience the</span>
              <br />
              <span className="text-white glow-text animate-glow-pulse">Future Protocol</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono">
              Interface with next-generation living spaces through our quantum exploration matrix
            </p>
          </div>
        </motion.div>

        {/* Main Holographic Interface */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <div className="holographic-card rounded-3xl p-2 led-border animate-circuit-flow">
            <div className="bg-black/80 rounded-3xl overflow-hidden backdrop-blur-xl">
              {/* Neural Header Interface */}
              <div className="flex items-center justify-between p-8 border-b border-primary-glow/20">
                <div className="flex items-center gap-6">
                  <div className="w-3 h-3 rounded-full bg-primary-glow animate-led-pulse" />
                  <div className="font-mono">
                    <h3 className="text-2xl font-bold text-white">CAPSULE.{capsuleModels[selectedModel].codename}</h3>
                    <p className="text-primary-glow text-sm tracking-wider">NEURAL_LINK_ESTABLISHED</p>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="bg-transparent border-primary-glow/40 text-primary-glow hover:bg-primary-glow/10 font-mono tracking-wider"
                >
                  <Play className="h-4 w-4 mr-2" />
                  ENGAGE_VR
                </Button>
              </div>

              {/* Main Interface Display */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={modernInteriorImage}
                  alt="Neural Interface"
                  className="w-full h-full object-cover animate-hologram"
                />
                
                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/5 via-transparent to-cyan-500/10" />
                
                {/* Neural Hotspots */}
                <AnimatePresence>
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.id}
                      className="absolute cursor-pointer group"
                      style={feature.position}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      onMouseEnter={() => setActiveHotspot(feature.id)}
                      onMouseLeave={() => setActiveHotspot(null)}
                    >
                      {/* Neural Node */}
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-full bg-black/80 border-2 border-primary-glow/60 flex items-center justify-center animate-led-pulse hover:scale-110 transition-all duration-300 backdrop-blur-sm ${feature.color}`}>
                          <feature.icon className="h-5 w-5" />
                        </div>
                        
                        {/* Pulse Rings */}
                        <div className="absolute inset-0 rounded-full border-2 border-primary-glow/30 animate-ping" />
                        <div className="absolute -inset-2 rounded-full border border-primary-glow/20 animate-pulse" />
                        
                        {/* Neural Interface Tooltip */}
                        {activeHotspot === feature.id && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: -20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            className="absolute z-20 -top-4 left-16 holographic-card p-4 min-w-[280px] led-border"
                          >
                            <div className="bg-black/90 p-4 rounded-lg backdrop-blur-xl">
                              <div className="flex items-center gap-3 mb-3">
                                <feature.icon className={`h-5 w-5 ${feature.color}`} />
                                <span className="font-mono font-bold text-white tracking-wider">{feature.title}</span>
                              </div>
                              <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Room Selection Interface */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="flex gap-3 p-3 bg-black/80 rounded-2xl border border-primary-glow/20 backdrop-blur-xl">
                    {rooms.map((room) => {
                      const IconComponent = room.icon;
                      return (
                        <Button
                          key={room.id}
                          size="sm"
                          variant={activeRoom === room.id ? "default" : "outline"}
                          className={`rounded-xl font-mono tracking-wider transition-all duration-300 ${
                            activeRoom === room.id 
                              ? "bg-primary-glow text-black shadow-glow animate-led-pulse" 
                              : "bg-transparent border-primary-glow/30 text-primary-glow hover:bg-primary-glow/10"
                          }`}
                          onClick={() => setActiveRoom(room.id)}
                        >
                          <IconComponent className="h-4 w-4 mr-2" />
                          {room.name.toUpperCase()}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Neural Model Selection Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {capsuleModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, rotateX: 30 }}
                animate={isInView ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: 30 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className={`holographic-card overflow-hidden led-border cursor-pointer transition-all duration-500 ${
                  selectedModel === index ? 'animate-glow-pulse scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setSelectedModel(index)}
              >
                <div className="bg-black/90 backdrop-blur-xl">
                  {/* Model Image */}
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover animate-hologram"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-primary-glow/10" />
                  </div>
                  
                  {/* Neural Info Panel */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="bg-primary-glow/10 border-primary-glow/40 text-primary-glow font-mono">
                        {model.codename}
                      </Badge>
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-led-pulse" />
                    </div>
                    
                    <h4 className="font-bold text-xl mb-2 text-white font-mono tracking-wide">
                      {model.name}
                    </h4>
                    
                    <div className="text-sm text-muted-foreground mb-4 font-mono">
                      <p className="mb-1">{model.layout} • {model.size}</p>
                    </div>
                    
                    {/* Neural Specs */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {model.specs.map((spec) => (
                        <Badge 
                          key={spec} 
                          variant="secondary" 
                          className="bg-muted/20 text-primary-glow/80 border border-primary-glow/20 font-mono text-xs"
                        >
                          {spec}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full bg-transparent border-primary-glow/40 text-primary-glow hover:bg-primary-glow/10 font-mono tracking-wider group"
                      onClick={() => scrollToSection('#booking')}
                    >
                      NEURAL_LINK
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Quantum Progress Matrix */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-6 p-4 bg-black/80 rounded-2xl border border-primary-glow/20 backdrop-blur-xl">
              <div className="font-mono text-primary-glow tracking-wider">MATRIX_01</div>
              <div className="flex gap-1">
                {[...Array(8)].map((_, i) => ( 
                ))}
              </div>
              <div className="font-mono text-primary-glow tracking-wider">MATRIX_08</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};