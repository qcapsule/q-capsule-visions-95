import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Building2,
  TreePine,
  Tent,
  Heart,
  Shield,
} from "lucide-react";

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
        "Modern workspaces that adapt to your business needs.",
      applications: [
        "Remote Offices",
        "Startup Hubs",
        "Meeting Spaces",
        "Co-working",
      ],
      image: officeImage,
      stats: "50+ Deployments",
    },
    {
      icon: TreePine,
      title: "Eco Resorts",
      description:
        "Sustainable luxury retreats blending with nature.",
      applications: [
        "Glamping",
        "Safari Lodges",
        "Eco Hotels",
        "Wellness Retreats",
      ],
      image: ecoResortImage,
      stats: "Zero Carbon",
    },
    {
      icon: Tent,
      title: "Emergency Relief",
      description:
        "Rapid deployment shelters for crisis situations.",
      applications: [
        "Disaster Housing",
        "Medical Units",
        "Command Centers",
        "Refugee Support",
      ],
      image: disasterReliefImage,
      stats: "15 Min Setup",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description:
        "Mobile medical facilities for underserved communities.",
      applications: [
        "Mobile Clinics",
        "Telemedicine",
        "Emergency Care",
        "Wellness Centers",
      ],
      image: healthcareImage,
      stats: "Medical Grade",
    },
    {
      icon: Shield,
      title: "Secure Banking",
      description:
        "Fortified financial facilities with cutting-edge technology.",
      applications: [
        "Private Banking",
        "Secure Vaults",
        "Consulting",
        "Digital Banking",
      ],
      image: secureBankingImage,
      stats: "Bank-Grade",
    },
  ];

  return (
    <section id="use-cases" className="relative overflow-hidden py-32 bg-black">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
              USE CASES
            </span>
          </h2>

          <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed font-light">
            Discover how Q Capsules transform ideas into reality across industries
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -4 }}
              style={{ minHeight: "320px" }}
            >
              {/* Image Header */}
              <div className="relative overflow-hidden h-32">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>

                {/* Icon */}
                <div className="absolute top-3 left-3">
                  <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20">
                    <useCase.icon className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-medium rounded-md border border-white/20">
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

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <p className="text-white/60 mb-3 leading-relaxed text-xs flex-1 font-light">
                  {useCase.description}
                </p>

                {/* Applications */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider">
                    Applications
                  </h4>

                  <div className="flex flex-wrap gap-1">
                    {useCase.applications.map((app) => (
                      <span
                        key={app}
                        className="px-2 py-1 bg-white/5 text-white/70 text-xs rounded-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
