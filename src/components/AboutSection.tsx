import { forwardRef, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import qcapsuleLogo from "@/assets/qcapsule-logo.png";
import q95xCapsule from "@/assets/q95x-capsule.png";

export const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref} 
      id="about" 
      className="relative overflow-hidden py-16 lg:py-24"
      style={{
        background: "linear-gradient(to bottom, #f5e6d3, #faf5ef, #f5e6d3)",
      }}
    >
      <div
        className="container mx-auto px-8 lg:px-16 relative z-10 max-w-6xl"
        ref={containerRef}
      >
        {/* Top Section - Branding */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          {/* "About" Text */}
          <motion.p
            className="text-2xl lg:text-3xl italic font-medium mb-4"
            style={{ color: "#8b6f47" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About
          </motion.p>

          {/* Q CAPSULE Logo */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={qcapsuleLogo}
              alt="Q CAPSULE"
              className="h-16 lg:h-24 mx-auto"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xl lg:text-2xl italic font-medium"
            style={{ color: "#8b6f47" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Luxury living, limitless locations
          </motion.p>
        </motion.div>

        {/* Middle Section - Descriptive Text */}
        <motion.div
          className="mb-12 lg:mb-16 max-w-4xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-base lg:text-lg leading-relaxed" style={{ color: "#2d1f15" }}>
            QCapsules is a luxury smart-living concept born at the intersection of engineering and imagination. 
            Our fully-equipped modular capsules are designed to thrive in diverse environments, from deserts to 
            coastal and beach environments.
          </p>
          <p className="text-base lg:text-lg leading-relaxed" style={{ color: "#2d1f15" }}>
            Every QCapsule is designed with panoramic glass walls, smart controls and high-end living systems. 
            Each capsule is a seamless blend of architecture, technology, and lifestyle.
          </p>
        </motion.div>

        {/* Bottom Section - Capsule Image with LED Strips */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative w-full">
            <img
              src={q95xCapsule}
              alt="Q Capsule Modular Living Unit"
              className="w-full h-auto object-contain"
            />
            
            {/* Golden-White LED Strip Overlays */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top LED Strip - Along top edge */}
              <div 
                className="absolute top-8 left-1/4 right-1/4 h-[4px] bg-[#FFEED6] rounded-full opacity-90"
                style={{
                  boxShadow: "0 0 20px rgba(255, 238, 214, 1), 0 0 40px rgba(255, 238, 214, 0.8), 0 0 60px rgba(255, 238, 214, 0.5)",
                }}
              />
              
              {/* Entrance LED Frame - Octagonal */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Octagonal LED frame around entrance */}
                <div 
                  className="absolute w-32 h-32 border-2 border-[#FFEED6] rounded-lg opacity-90"
                  style={{
                    boxShadow: "0 0 20px rgba(255, 238, 214, 1), 0 0 40px rgba(255, 238, 214, 0.8), inset 0 0 20px rgba(255, 238, 214, 0.3)",
                    transform: "rotate(45deg)",
                  }}
                />
              </div>
              
              {/* Window LED Frames - Left and Right */}
              <div 
                className="absolute top-1/3 left-1/6 w-24 h-24 border-2 border-[#FFEED6] rounded-lg opacity-90"
                style={{
                  boxShadow: "0 0 20px rgba(255, 238, 214, 1), 0 0 40px rgba(255, 238, 214, 0.8), inset 0 0 20px rgba(255, 238, 214, 0.3)",
                }}
              />
              <div 
                className="absolute top-1/3 right-1/6 w-24 h-24 border-2 border-[#FFEED6] rounded-lg opacity-90"
                style={{
                  boxShadow: "0 0 20px rgba(255, 238, 214, 1), 0 0 40px rgba(255, 238, 214, 0.8), inset 0 0 20px rgba(255, 238, 214, 0.3)",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Company Profile Button */}
        <motion.div
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#8b6f47] to-[#6b5233] hover:from-[#9b7f57] hover:to-[#7b6243] text-white font-semibold text-base lg:text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a
              href="/company-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <FileText className="w-5 h-5" />
              <span>View Company Profile</span>
              <Download className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
