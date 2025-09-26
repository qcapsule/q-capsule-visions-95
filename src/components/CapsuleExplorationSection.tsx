import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  Plus
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

  const rooms = [
    { id: 'lounge', name: 'Lounge', icon: Home },
    { id: 'kitchen', name: 'Kitchen', icon: ChefHat },
    { id: 'bedroom', name: 'Bedroom', icon: Bed },
    { id: 'terrace', name: 'Terrace', icon: TreePine },
  ];

  const hotspots = [
    {
      id: 'custom-design',
      title: 'Custom Design',
      description: 'Tailored layouts to match your specific needs and preferences',
      icon: Palette,
      position: { top: '25%', left: '15%' }
    },
    {
      id: 'eco-materials',
      title: 'Eco Materials',
      description: 'Sustainable and environmentally friendly construction materials',
      icon: Recycle,
      position: { top: '15%', right: '25%' }
    },
    {
      id: 'smart-lighting',
      title: 'Smart Lighting',
      description: 'Intelligent lighting system that adapts to your daily routines',
      icon: Lightbulb,
      position: { bottom: '30%', left: '20%' }
    },
    {
      id: 'connectivity',
      title: 'Full Connectivity',
      description: 'High-speed internet and smart home integration throughout',
      icon: Wifi,
      position: { bottom: '25%', right: '30%' }
    }
  ];

  const capsuleModels = [
    {
      id: 'o18',
      name: 'Capsule O18 House',
      layout: 'Standard Layout',
      size: '36m²',
      image: q75xImage
    },
    {
      id: 'h40',
      name: 'Capsule H40 House', 
      layout: 'Standard Layout',
      size: '46m²',
      image: q95xImage
    },
    {
      id: 'x56',
      name: 'Capsule X56 House',
      layout: 'Standard Layout', 
      size: '36m²',
      image: q115xImage
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="exploration" className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            EXPLORE INTERIORS
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Step Inside the <br />
            <span className="text-gradient">Future of Living</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover every detail of our innovative capsule designs through our interactive exploration experience.
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Exploration Card */}
          <Card className="overflow-hidden bg-background/80 backdrop-blur-sm border-muted shadow-xl">
            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-muted">
                <h3 className="text-2xl font-bold">Capsule O18 House</h3>
                <Button variant="ghost" className="text-primary">
                  MORE INFO
                </Button>
              </div>

              {/* Main Image with Hotspots */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={modernInteriorImage}
                  alt="Capsule Interior"
                  className="w-full h-full object-cover"
                />
                
                {/* Interactive Hotspots */}
                {hotspots.map((hotspot) => (
                  <div
                    key={hotspot.id}
                    className="absolute cursor-pointer group"
                    style={hotspot.position}
                    onMouseEnter={() => setActiveHotspot(hotspot.id)}
                    onMouseLeave={() => setActiveHotspot(null)}
                  >
                    <div className="relative">
                      {/* Hotspot Button */}
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full w-10 h-10 p-0 shadow-lg bg-background/90 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 hover:scale-110 transition-all duration-300"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      
                      {/* Tooltip */}
                      {activeHotspot === hotspot.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute z-10 -top-2 left-12 bg-background/95 backdrop-blur-sm border border-muted rounded-lg p-3 shadow-xl min-w-[200px]"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <hotspot.icon className="h-4 w-4 text-primary" />
                            <span className="font-semibold text-sm">{hotspot.title}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{hotspot.description}</p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Room Navigation */}
              <div className="p-6">
                <div className="flex gap-2 justify-center">
                  {rooms.map((room) => {
                    const IconComponent = room.icon;
                    return (
                      <Button
                        key={room.id}
                        variant={activeRoom === room.id ? "default" : "outline"}
                        className={`rounded-full ${
                          activeRoom === room.id 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-muted/50 hover:bg-muted"
                        }`}
                        onClick={() => setActiveRoom(room.id)}
                      >
                        <IconComponent className="h-4 w-4 mr-2" />
                        {room.name}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Capsule Models Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {capsuleModels.map((model) => (
              <Card key={model.id} className="group hover:shadow-lg transition-all duration-300 bg-background/50 backdrop-blur-sm border-muted overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardContent className="p-4">
                  <h4 className="font-bold text-lg mb-1">{model.name}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{model.layout}</p>
                  <p className="text-sm text-muted-foreground mb-4">{model.size}</p>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full hover:bg-primary hover:text-primary-foreground group"
                    onClick={() => scrollToSection('#booking')}
                  >
                    View
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Progress Indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">01</span>
              <div className="w-32 h-1 bg-muted rounded-full">
                <div className="w-1/3 h-full bg-primary rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-muted-foreground">08</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};