import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, Building2, Store, TreePine, Palette, Maximize, Zap, Shield } from 'lucide-react';
import q56xImage from '@/assets/q56x-capsule.png';
import q75xImage from '@/assets/q75x-capsule.png';
import q95xImage from '@/assets/q95x-capsule.png';
import q115xImage from '@/assets/q115x-capsule.png';

export const CustomizationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const capsuleStyles = [
    {
      id: 'q56x',
      name: 'Q56X',
      size: '18m²',
      dimensions: '3.2 x 3.2 x 5.6m',
      rooms: '1 Room',
      description: 'Perfect starter capsule for individuals or couples seeking minimalist living with maximum efficiency.',
      image: q56xImage
    },
    {
      id: 'q75x',
      name: 'Q75X',
      size: '24m²',
      dimensions: '3.2 x 3.2 x 7.5m',
      rooms: '2 Rooms',
      description: 'Expanded living space with separate bedroom and living area, ideal for small families or remote work.',
      image: q75xImage
    },
    {
      id: 'q95x',
      name: 'Q95X',
      size: '30m²',
      dimensions: '3.2 x 3.2 x 9.5m',
      rooms: '2 Rooms + Deck',
      description: 'Enhanced comfort with outdoor deck space, perfect for those who want indoor-outdoor living experience.',
      image: q95xImage
    },
    {
      id: 'q115x',
      name: 'Q115X',
      size: '38m²',
      dimensions: '3.2 x 3.2 x 11.5m',
      rooms: '3 Rooms',
      description: 'Maximum space and luxury with three distinct areas, designed for larger families or premium experiences.',
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
    <section id="customization" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Featured Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
              <div className="bg-gradient-to-br from-background via-accent/10 to-background rounded-3xl p-8 lg:p-16 shadow-xl holographic-card neural-border">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div>
                <Badge className="mb-6 bg-primary-glow/20 text-primary-glow border-primary-glow/40 font-mono uppercase tracking-wider">
                  FEATURED
                </Badge>
                
                <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-mono">
                  WHY CHOOSE <br />
                  <span className="text-gradient">Q CAPSULES?</span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-mono">
                  Discover the future of modular living with our innovative Q Capsule collection. 
                  Each unit combines cutting-edge design with sustainable technology, offering 
                  unparalleled flexibility and comfort for modern lifestyles. From compact efficiency 
                  to spacious luxury, find your perfect space solution.
                </p>
                
                <Button 
                  size="lg"
                  className="bg-gradient-primary text-primary-foreground border-none hover:shadow-glow font-mono tracking-wider"
                  onClick={() => scrollToSection('#booking')}
                >
                  ENGAGE NOW
                </Button>
              </div>
              
                  {/* Right Image */}
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden holographic-card neural-border">
                      <img 
                        src={q95xImage} 
                        alt="Featured Q95X Capsule"
                        className="w-full h-full object-cover animate-hologram"
                      />
                    </div>
                  </div>
            </div>
          </div>
        </motion.div>

        {/* Capsule Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {capsuleStyles.map((capsule, index) => (
            <Card key={capsule.id} className="group hover:shadow-lg transition-all duration-300 holographic-card neural-border">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src={capsule.image} 
                  alt={capsule.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 animate-hologram"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 font-mono tracking-wider">{capsule.name}</h3>
                
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground font-mono">
                  <span>{capsule.size}</span>
                  <span>•</span>
                  <span>{capsule.rooms}</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 font-mono">
                  {capsule.description}
                </p>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground font-mono tracking-wider"
                    onClick={() => scrollToSection('#booking')}
                  >
                    VISIT TODAY
                  </Button>
                  {index === 1 && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-primary text-primary-foreground border-none hover:shadow-glow font-mono tracking-wider"
                      onClick={() => scrollToSection('#booking')}
                    >
                      MOST POPULAR
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};