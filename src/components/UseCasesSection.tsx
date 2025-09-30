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
import {
  Building2,
  TreePine,
  Tent,
  Heart,
  Shield,
  Sparkles,
} from "lucide-react";
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
      description:
        "Modern workspaces that adapt to your business needs, from startups to enterprise operations.",
      applications: [
        "Remote Offices",
        "Startup Hubs",
        "Meeting Spaces",
        "Co-working",
      ],
      color: "from-blue-500 to-indigo-600",
      image: officeImage,
      stats: "50+ Deployments",
    },
    {
      icon: TreePine,
      title: "Eco Resorts",
      description:
        "Sustainable luxury retreats that blend seamlessly with natural environments.",
      applications: [
        "Glamping",
        "Safari Lodges",
        "Eco Hotels",
        "Wellness Retreats",
      ],
      color: "from-emerald-500 to-teal-600",
      image: ecoResortImage,
      stats: "Zero Carbon Footprint",
    },
    {
      icon: Tent,
      title: "Emergency Relief",
      description:
        "Rapid deployment shelters providing immediate safety and comfort in crisis situations.",
      applications: [
        "Disaster Housing",
        "Medical Units",
        "Command Centers",
        "Refugee Support",
      ],
      color: "from-red-500 to-orange-600",
      image: disasterReliefImage,
      stats: "15 Min Setup",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description:
        "Mobile medical facilities bringing advanced healthcare to underserved communities.",
      applications: [
        "Mobile Clinics",
        "Telemedicine",
        "Emergency Care",
        "Wellness Centers",
      ],
      color: "from-pink-500 to-rose-600",
      image: healthcareImage,
      stats: "Medical Grade",
    },
    {
      icon: Shield,
      title: "Secure Banking",
      description:
        "Fortified financial facilities providing secure, private banking services with cutting-edge technology.",
      applications: [
        "Private Banking",
        "Secure Vaults",
        "Financial Consulting",
        "Digital Banking",
      ],
      color: "from-purple-500 to-violet-600",
      image: secureBankingImage,
      stats: "Bank-Grade Security",
    },
  ];

  return (
    <section id="use-cases" className="relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card text-sm font-medium mb-8 border border-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-gradient">Use Cases</span>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-gradient glow-text">
              Built for Every Vision
            </span>
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Discover how Q Capsules transform ideas into reality across
            industries and applications.
          </motion.p>
        </motion.div>

        {/* Screen-Fit Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              className="group relative overflow-hidden rounded-2xl bg-card/80 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:bg-card/90"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -4 }}
              style={{ minHeight: "320px" }}
            >
              {/* Compact Image Header */}
              <div className="relative overflow-hidden h-32">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover"
                />

                {/* Light Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${useCase.color} opacity-40`}
                ></div>

                {/* Icon */}
                <div className="absolute top-3 left-3">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                    <useCase.icon className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-md border border-white/30">
                    {useCase.stats}
                  </span>
                </div>

                {/* Title */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-bold text-white text-lg leading-tight">
                    {useCase.title}
                  </h3>
                </div>
              </div>

              {/* Compact Content */}
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-3 leading-relaxed text-xs flex-1">
                  {useCase.description}
                </p>

                {/* Applications */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-foreground/60 uppercase tracking-wide">
                    Applications
                  </h4>

                  <div className="flex flex-wrap gap-1">
                    {useCase.applications.map((app, i) => (
                      <span
                        key={app}
                        className="px-2 py-1 bg-muted/40 text-muted-foreground text-xs rounded-sm border border-border/30 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-200"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-6 h-6 bg-primary/80 rounded-full flex items-center justify-center text-primary-foreground shadow-md">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="glass-card p-12 max-w-3xl mx-auto border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <motion.h3
              className="text-3xl lg:text-4xl font-bold mb-6 text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              Ready to Bring Your Vision to Life?
            </motion.h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Every project is unique. Let's collaborate to create a Q Capsule
              solution tailored specifically to your needs and vision.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <motion.button
                className="bg-gradient-primary text-primary-foreground px-12 py-4 rounded-2xl font-bold text-lg hover:shadow-glow transition-all duration-500 border border-primary/20 hover:border-primary/40"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 50px hsl(var(--primary) / 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Discuss Your Project
              </motion.button>
              <motion.button
                className="border border-primary text-primary px-12 py-4 rounded-2xl font-bold text-lg hover:bg-primary/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
