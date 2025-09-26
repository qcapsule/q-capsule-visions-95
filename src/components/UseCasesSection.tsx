import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Building2, TreePine, Tent, Heart, Shield } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

// Import use case images
import officeImage from "@/assets/office-capsule.jpg";
import ecoResortImage from "@/assets/eco-resort-capsule.jpg";
import disasterReliefImage from "@/assets/disaster-relief-capsule.jpg";
import healthcareImage from "@/assets/healthcare-capsule.jpg";
import secureBankingImage from "@/assets/secure-banking-capsule.jpg";

export const UseCasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const useCases = [
    {
      icon: Building2,
      title: "Office Spaces",
      description: "Modern workspaces that adapt to your business needs, from startups to enterprise operations.",
      applications: ["Remote Offices", "Startup Hubs", "Meeting Spaces", "Co-working"],
      color: "from-blue-500 to-indigo-600",
      image: officeImage,
      stats: "50+ Deployments"
    },
    {
      icon: TreePine,
      title: "Eco Resorts",
      description: "Sustainable luxury retreats that blend seamlessly with natural environments.",
      applications: ["Glamping", "Safari Lodges", "Eco Hotels", "Wellness Retreats"],
      color: "from-emerald-500 to-teal-600",
      image: ecoResortImage,
      stats: "Zero Carbon Footprint"
    },
    {
      icon: Tent,
      title: "Emergency Relief",
      description: "Rapid deployment shelters providing immediate safety and comfort in crisis situations.",
      applications: ["Disaster Housing", "Medical Units", "Command Centers", "Refugee Support"],
      color: "from-red-500 to-orange-600",
      image: disasterReliefImage,
      stats: "15 Min Setup"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Mobile medical facilities bringing advanced healthcare to underserved communities.",
      applications: ["Mobile Clinics", "Telemedicine", "Emergency Care", "Wellness Centers"],
      color: "from-pink-500 to-rose-600",
      image: healthcareImage,
      stats: "Medical Grade"
    },
    {
      icon: Shield,
      title: "Secure Banking", 
      description: "Fortified financial facilities providing secure, private banking services with cutting-edge technology.",
      applications: ["Private Banking", "Secure Vaults", "Financial Consulting", "Digital Banking"],
      color: "from-purple-500 to-violet-600",
      image: secureBankingImage,
      stats: "Bank-Grade Security"
    },
  ];

  return (
    <section id="use-cases" className="py-32 relative overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Use Cases
          </motion.span>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Built for Every Vision</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how Q Capsules transform ideas into reality across industries and applications.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              className={`group relative overflow-hidden rounded-3xl bg-card border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -8 }}
              style={{ minHeight: index === 0 ? '500px' : '400px' }}
            >
              {/* Image Container */}
              <div className={`relative overflow-hidden ${index === 0 ? 'h-64' : 'h-48'}`}>
                <motion.img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${useCase.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Icon & Stats */}
                <div className="absolute top-6 left-6 flex items-center gap-4">
                  <motion.div 
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <useCase.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  
                  <motion.span 
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0.8, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {useCase.stats}
                  </motion.span>
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.h3 
                    className={`font-bold text-white mb-2 ${index === 0 ? 'text-4xl' : 'text-3xl'}`}
                    animate={{ y: hoveredIndex === index ? -5 : 0 }}
                  >
                    {useCase.title}
                  </motion.h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {useCase.description}
                </p>

                {/* Applications */}
                <motion.div
                  className="space-y-4"
                  animate={{ opacity: hoveredIndex === index ? 1 : 0.7 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">
                    Applications
                  </h4>
                  
                  <div className="flex flex-wrap gap-2">
                    {useCase.applications.map((app, i) => (
                      <motion.span
                        key={app}
                        className="px-3 py-2 bg-muted/50 text-muted-foreground text-sm rounded-lg border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 + 0.2 }}
                      >
                        {app}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Hover CTA */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-gradient">
              Have a Custom Vision?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Every project is unique. Let's collaborate to create a Q Capsule solution 
              tailored specifically to your needs and vision.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <button className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold hover:shadow-glow transition-all duration-300">
                Discuss Your Project
              </button>
              <button className="border border-primary text-primary px-8 py-4 rounded-2xl font-semibold hover:bg-primary/5 transition-all duration-300">
                View Portfolio
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
