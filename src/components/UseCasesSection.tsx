import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import { Building2, TreePine, Heart, Shield, ArrowRight } from "lucide-react";

// Import use case images
import officeImage from "@/assets/office-capsule.jpg";
import ecoResortImage from "@/assets/eco-resort-capsule.jpg";
import healthcareImage from "@/assets/healthcare-capsule.jpg";
import secureBankingImage from "@/assets/secure-banking-capsule.jpg";
import islandParadiseImage from "@/assets/island-paradise-capsules.png";

export const UseCasesSection = forwardRef<HTMLElement>((props, ref) => {
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
      tagline: "Work Anywhere—Thrive Everywhere",
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
      tagline: "Nature First—Luxury Always",
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
      tagline: "Care Everywhere—Healing Always",
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
      tagline: "Secure Banking—Anywhere Access",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      id="use-cases"
      className="h-[200vh] flex items-center justify-center overflow-hidden sticky top-0"
      style={{
        backgroundImage: `url(${islandParadiseImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background for GSAP */}
      <div
        className="use-cases-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${islandParadiseImage})`,
        }}
      ></div>

      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center h-full">
        <div className="w-full max-w-7xl">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h2
              className="text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Built for Every{" "}
              <span className="text-white drop-shadow-lg">Vision</span>
            </motion.h2>

            <motion.p
              className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Discover how Q Capsules transform ideas into reality across
              industries and applications.
            </motion.p>
          </motion.div>

          {/* Cool Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 hover:bg-white/20 hover:scale-105 cursor-pointer"
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                style={{ minHeight: "400px" }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Card Image */}
                <div className="relative overflow-hidden h-40">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                      <useCase.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-xl border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                      {useCase.stats}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bold text-white text-xl leading-tight group-hover:text-white transition-all duration-300">
                      {useCase.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <p className="text-white/80 mb-4 leading-relaxed text-sm flex-1 group-hover:text-white transition-all duration-300">
                    {useCase.description}
                  </p>

                  {/* Tagline */}
                  <div className="mb-4">
                    <p className="text-white font-medium text-sm group-hover:text-white transition-all duration-300">
                      {useCase.tagline}
                    </p>
                  </div>

                  {/* Applications */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wide group-hover:text-white/80 transition-all duration-300">
                      Applications
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {useCase.applications.map((app, i) => (
                        <span
                          key={app}
                          className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-lg border border-white/20 hover:bg-white/20 hover:text-white hover:border-white/40 transition-all duration-200 group-hover:bg-white/20 group-hover:text-white"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-lg group-hover:bg-white/30 transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/10 via-transparent to-white/10"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 max-w-4xl mx-auto border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300">
              <motion.h3
                className="text-3xl lg:text-4xl font-bold mb-6 text-white"
                whileHover={{ scale: 1.05 }}
              >
                Ready to Bring Your Vision to Life?
              </motion.h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Every project is unique. Let's collaborate to create a Q Capsule
                solution tailored specifically to your needs and vision.
              </p>
              <motion.div
                className="flex justify-center"
                whileHover={{ scale: 1.02 }}
              >
                <motion.button
                  className="bg-white/20 backdrop-blur-md text-white px-12 py-4 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-500 border border-white/30 hover:border-white/50"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 50px rgba(255, 255, 255, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discuss Your Project
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

UseCasesSection.displayName = "UseCasesSection";
