import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Thermometer,
  Zap,
  Shield,
  Wifi,
  Home,
  Wind,
  Sun,
  Droplets,
} from "lucide-react";

export const CrossSectionDiagram = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeHotspot, setActiveHotspot] = useState(0);

  const hotspots = [
    {
      id: 1,
      icon: Shield,
      title: "Advanced Insulation",
      description:
        "Triple-layer insulation system with R-30 value for optimal temperature control",
      position: { top: "20%", left: "15%" },
      details: [
        "Aerogel insulation",
        "Vapor barrier",
        "Thermal bridge elimination",
      ],
    },
    {
      id: 2,
      icon: Thermometer,
      title: "Climate Control",
      description: "Smart HVAC system with AI-powered temperature regulation",
      position: { top: "35%", left: "75%" },
      details: [
        "Auto temperature adjustment",
        "Air quality monitoring",
        "Energy optimization",
      ],
    },
    {
      id: 3,
      icon: Sun,
      title: "Solar Integration",
      description: "Integrated solar panels with battery storage system",
      position: { top: "10%", left: "50%" },
      details: [
        "High-efficiency panels",
        "Battery backup",
        "Grid-tie capability",
      ],
    },
    {
      id: 4,
      icon: Zap,
      title: "Smart Electrical",
      description: "Intelligent electrical system with IoT integration",
      position: { top: "60%", left: "45%" },
      details: ["Smart outlets", "LED lighting", "USB-C charging ports"],
    },
    {
      id: 5,
      icon: Droplets,
      title: "Water System",
      description: "Efficient plumbing with water recycling capabilities",
      position: { top: "70%", left: "25%" },
      details: ["Greywater recycling", "Low-flow fixtures", "Tank monitoring"],
    },
    {
      id: 6,
      icon: Wifi,
      title: "Connectivity Hub",
      description: "Built-in networking and smart home integration",
      position: { top: "45%", left: "85%" },
      details: ["5G/WiFi 6", "Smart home hub", "Remote monitoring"],
    },
  ];

  return (
    <section
      id="cross-section"
      className="py-24 relative overflow-hidden bg-muted/20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm text-primary font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Inside Q Capsules
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Advanced Engineering</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every Q Capsule is a masterpiece of engineering, combining
            cutting-edge materials and smart technology for unmatched
            performance and comfort.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Cross-Section Diagram */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-card p-8 relative">
              <div className="relative w-full h-96 bg-gradient-to-br from-muted/30 to-muted/50 rounded-2xl overflow-hidden">
                {/* Capsule Outline */}
                <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-xl">
                  {/* Interior divisions */}
                  <div className="absolute top-1/4 left-0 right-0 h-px bg-primary/20"></div>
                  <div className="absolute bottom-1/4 left-0 right-0 h-px bg-primary/20"></div>
                  <div className="absolute left-1/3 top-0 bottom-0 w-px bg-primary/20"></div>
                  <div className="absolute right-1/3 top-0 bottom-0 w-px bg-primary/20"></div>

                  {/* Room Labels */}
                  <div className="absolute top-1/3 left-1/6 text-center text-xs text-muted-foreground">
                    Living
                    <br />
                    Area
                  </div>
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center text-xs text-muted-foreground">
                    Kitchen
                  </div>
                  <div className="absolute top-1/3 right-1/6 text-center text-xs text-muted-foreground">
                    Bathroom
                  </div>
                </div>

                {/* Interactive Hotspots */}
                {hotspots.map((hotspot, index) => (
                  <motion.button
                    key={hotspot.id}
                    className={`absolute w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                      activeHotspot === index
                        ? "bg-primary border-primary shadow-glow scale-125"
                        : "bg-background border-primary/50 hover:border-primary hover:scale-110"
                    }`}
                    style={hotspot.position}
                    onClick={() => setActiveHotspot(index)}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      isInView
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0, opacity: 0 }
                    }
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <hotspot.icon className="w-4 h-4 mx-auto text-primary" />
                  </motion.button>
                ))}

                {/* Legend */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs text-muted-foreground mb-2">
                    Click hotspots to explore
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {hotspots.slice(0, 3).map((hotspot, index) => (
                      <Badge
                        key={hotspot.id}
                        variant="secondary"
                        className="text-xs bg-background/80 backdrop-blur"
                      >
                        <hotspot.icon className="w-3 h-3 mr-1" />
                        {hotspot.title}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Details Panel */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Card className="glass-card">
              <CardContent className="p-6">
                <motion.div
                  key={activeHotspot}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      {hotspots[activeHotspot] &&
                        React.createElement(hotspots[activeHotspot].icon, {
                          className: "h-6 w-6 text-primary-foreground",
                        })}
                    </div>
                    <h3 className="text-xl font-bold text-gradient">
                      {hotspots[activeHotspot]?.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {hotspots[activeHotspot]?.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Features:</h4>
                    {hotspots[activeHotspot]?.details.map((detail) => (
                      <div key={detail} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>

            {/* Technical Specs */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 text-gradient">
                  Technical Specifications
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Insulation Rating:
                    </span>
                    <span className="font-medium">R-30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Energy Efficiency:
                    </span>
                    <span className="font-medium">Net Zero</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Materials:</span>
                    <span className="font-medium">Premium Grade</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lifespan:</span>
                    <span className="font-medium">50+ Years</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
