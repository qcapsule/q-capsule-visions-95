import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import q56xImage from '@/assets/q56x-capsule.png';
import q75xImage from '@/assets/q75x-capsule.png';
import q95xImage from '@/assets/q95x-capsule.png';
import q115xImage from '@/assets/q115x-capsule.png';

export const CustomizationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const capsuleStyles = [
    {
      id: 'q56x',
      name: 'Q56X',
      size: '18m²',
      capacity: '1-2 People',
      layout: '1 Room',
      image: q56xImage
    },
    {
      id: 'q75x',
      name: 'Q75X',
      size: '24m²',
      capacity: '2-3 People',
      layout: '2 Rooms',
      image: q75xImage
    },
    {
      id: 'q95x',
      name: 'Q95X',
      size: '30m²',
      capacity: '2-4 People',
      layout: '2 Rooms + Deck',
      image: q95xImage
    },
    {
      id: 'q115x',
      name: 'Q115X',
      size: '38m²',
      capacity: '4-6 People',
      layout: '3 Rooms',
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
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            CAPSULE COLLECTION
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Choose Your Perfect
            <span className="text-gradient block">Living Space</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From compact efficiency to luxury living, our Q Capsule collection offers modular 
            solutions designed for every lifestyle and budget.
          </p>
        </motion.div>

        {/* Capsules Carousel */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">Our Models</h3>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={scrollPrev}
                className="h-10 w-10 p-0 border-primary/20 hover:border-primary hover:bg-primary/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={scrollNext}
                className="h-10 w-10 p-0 border-primary/20 hover:border-primary hover:bg-primary/10"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {capsuleStyles.map((capsule, index) => (
                <div
                  key={capsule.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] pl-6 first:pl-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="mr-6"
                  >
                    <Card className="group hover:shadow-xl transition-all duration-500 border-border hover:border-primary/50 h-full">
                      <div className="relative">
                        <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                          <img 
                            src={capsule.image} 
                            alt={capsule.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </div>
                      
                      <CardContent className="p-6 text-center">
                        <h4 className="text-2xl font-bold mb-6 text-gradient">{capsule.name}</h4>
                        
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center justify-between py-2 border-b border-border/50">
                            <span className="text-muted-foreground">Size</span>
                            <span className="font-semibold">{capsule.size}</span>
                          </div>
                          <div className="flex items-center justify-between py-2 border-b border-border/50">
                            <span className="text-muted-foreground">Capacity</span>
                            <span className="font-semibold">{capsule.capacity}</span>
                          </div>
                          <div className="flex items-center justify-between py-2">
                            <span className="text-muted-foreground">Layout</span>
                            <span className="font-semibold">{capsule.layout}</span>
                          </div>
                        </div>
                        
                        <Button 
                          className="w-full bg-gradient-primary text-primary-foreground border-none hover:shadow-glow"
                          onClick={() => scrollToSection('#booking')}
                        >
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};