import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, Building2, Maximize, Users, Calendar, Star, ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import q56xImage from '@/assets/q56x-capsule.png';
import q75xImage from '@/assets/q75x-capsule.png';
import q95xImage from '@/assets/q95x-capsule.png';
import q115xImage from '@/assets/q115x-capsule.png';

export const CustomizationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCapsule, setSelectedCapsule] = useState('q75x');
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const capsuleStyles = [
    {
      id: 'q56x',
      name: 'Q56X',
      tagline: 'COMPACT EFFICIENCY',
      size: '18m²',
      dimensions: '3.2 × 3.2 × 5.6m',
      capacity: '1-2 People',
      rooms: '1 Room',
      price: 'From $89,000',
      rating: 4.6,
      reviews: 89,
      features: ['Smart Home Integration', 'Energy Efficient', 'Quick Setup', 'Compact Design'],
      description: 'Perfect starter capsule for individuals or couples seeking minimalist living with maximum efficiency.',
      image: q56xImage,
      popular: false,
      bestFor: 'Solo Living'
    },
    {
      id: 'q75x',
      name: 'Q75X',
      tagline: 'BALANCED LIVING',
      size: '24m²',
      dimensions: '3.2 × 3.2 × 7.5m',
      capacity: '2-3 People',
      rooms: '2 Rooms',
      price: 'From $119,000',
      rating: 4.8,
      reviews: 156,
      features: ['Separate Bedroom', 'Work Space', 'Premium Finishes', 'Climate Control'],
      description: 'Expanded living space with separate bedroom and living area, ideal for small families or remote work.',
      image: q75xImage,
      popular: true,
      bestFor: 'Small Families'
    },
    {
      id: 'q95x',
      name: 'Q95X',
      tagline: 'OUTDOOR LIVING',
      size: '30m²',
      dimensions: '3.2 × 3.2 × 9.5m',
      capacity: '2-4 People',
      rooms: '2 Rooms + Deck',
      price: 'From $149,000',
      rating: 4.9,
      reviews: 203,
      features: ['Outdoor Deck', 'Premium Materials', 'Advanced Tech', 'Extended Living'],
      description: 'Enhanced comfort with outdoor deck space, perfect for those who want indoor-outdoor living experience.',
      image: q95xImage,
      popular: false,
      bestFor: 'Luxury Living'
    },
    {
      id: 'q115x',
      name: 'Q115X',
      tagline: 'MAXIMUM LUXURY',
      size: '38m²',
      dimensions: '3.2 × 3.2 × 11.5m',
      capacity: '4-6 People', 
      rooms: '3 Rooms',
      price: 'From $189,000',
      rating: 5.0,
      reviews: 127,
      features: ['Three Zones', 'Premium Luxury', 'Advanced Systems', 'Maximum Space'],
      description: 'Maximum space and luxury with three distinct areas, designed for larger families or premium experiences.',
      image: q115xImage,
      popular: false,
      bestFor: 'Large Families'
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

        {/* Featured Capsule */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {capsuleStyles.filter(c => c.popular).map(capsule => (
            <div key={capsule.id} className="glass-card p-8 lg:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-6 right-6">
                <Badge className="bg-primary text-primary-foreground">
                  MOST POPULAR
                </Badge>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-4">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-2">{capsule.name}</h3>
                    <p className="text-lg text-primary font-semibold tracking-wider">{capsule.tagline}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < Math.floor(capsule.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {capsule.rating} ({capsule.reviews} reviews)
                    </span>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {capsule.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Maximize className="w-4 h-4 text-primary" />
                        <span>Size: {capsule.size}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Home className="w-4 h-4 text-primary" />
                        <span>{capsule.rooms}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{capsule.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span>{capsule.dimensions}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-gradient">{capsule.price}</p>
                      <p className="text-sm text-muted-foreground">Best for {capsule.bestFor}</p>
                    </div>
                    <Button 
                      size="lg"
                      className="bg-gradient-primary text-primary-foreground border-none hover:shadow-glow"
                      onClick={() => scrollToSection('#booking')}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={capsule.image} 
                      alt={capsule.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* All Capsules Carousel */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">All Models</h3>
            
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
                    <Card 
                      className={`group hover:shadow-xl transition-all duration-500 cursor-pointer border-2 h-full ${
                        selectedCapsule === capsule.id 
                          ? 'border-primary shadow-glow' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedCapsule(capsule.id)}
                    >
                      <div className="relative">
                        <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                          <img 
                            src={capsule.image} 
                            alt={capsule.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        
                        {capsule.popular && (
                          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                            POPULAR
                          </Badge>
                        )}
                        
                        <div className="absolute top-3 left-3">
                          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-white font-medium">{capsule.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <h4 className="text-xl font-bold mb-1">{capsule.name}</h4>
                          <p className="text-sm text-primary font-medium tracking-wide">{capsule.tagline}</p>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Size</span>
                            <span className="font-medium">{capsule.size}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Capacity</span>
                            <span className="font-medium">{capsule.capacity}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Layout</span>
                            <span className="font-medium">{capsule.rooms}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                            Key Features
                          </p>
                          <div className="space-y-1">
                            {capsule.features.slice(0, 2).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                            {capsule.features.length > 2 && (
                              <p className="text-xs text-muted-foreground">
                                +{capsule.features.length - 2} more features
                              </p>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className="text-lg font-bold text-gradient">{capsule.price}</p>
                            <p className="text-xs text-muted-foreground">{capsule.bestFor}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground">{capsule.reviews} reviews</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Button 
                            className="w-full bg-gradient-primary text-primary-foreground border-none hover:shadow-glow"
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollToSection('#booking');
                            }}
                          >
                            Configure & Order
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="w-full"
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollToSection('#booking');
                            }}
                          >
                            View Details
                          </Button>
                        </div>
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