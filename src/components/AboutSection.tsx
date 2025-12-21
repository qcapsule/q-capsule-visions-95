import { forwardRef, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import qcapsuleLogo from "@/assets/qcapsule-logo.png";
import aboutUsImage from "@/assets/about us.jpeg";

export const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden py-32"
      style={{
        background: "linear-gradient(to bottom, #f5e6d3, #faf5ef, #f5e6d3)",
      }}
    >
      <div
        className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl"
        ref={containerRef}
      >
        {/* Header Pattern */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              About Us
            </span>
          </div>
        </motion.div>

        {/* Main Content - Image Left, Content Right */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-12 lg:mb-16">
          {/* Left Side - About Us Image */}
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={aboutUsImage}
                alt="Luxury Capsule in Desert Landscape"
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Golden LED Glow Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-4 left-4 right-4 h-[3px] bg-[#FFEED6] rounded-full opacity-80 blur-[2px]"
                  style={{
                    boxShadow:
                      "0 0 20px rgba(255, 238, 214, 0.8), 0 0 40px rgba(255, 238, 214, 0.5)",
                  }}
                />
                <div
                  className="absolute bottom-4 left-4 right-4 h-[3px] bg-[#FFEED6] rounded-full opacity-80 blur-[2px]"
                  style={{
                    boxShadow:
                      "0 0 20px rgba(255, 238, 214, 0.8), 0 0 40px rgba(255, 238, 214, 0.5)",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Logo, Tagline, and Content Cards */}
          <div className="space-y-6 lg:space-y-8 h-full flex flex-col">
            {/* Q CAPSULE Logo */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src={qcapsuleLogo}
                alt="Q CAPSULE"
                className="h-16 lg:h-24"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-xl lg:text-2xl font-medium text-center lg:text-left text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Luxury living, limitless locations
            </motion.p>

            {/* Content Cards */}
            <motion.div
              className="group relative flex-1"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="relative backdrop-blur-xl rounded-2xl p-6 lg:p-8 shadow-2xl overflow-hidden h-full border border-border/50 group-hover:border-primary/30 transition-all duration-500">
                {/* Background gradient */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(180, 130, 70, 0.15) 0%, rgba(200, 150, 90, 0.1) 50%, rgba(160, 110, 60, 0.08) 100%)",
                    boxShadow:
                      "0 8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 1px 0 rgba(220, 170, 110, 0.2)",
                  }}
                ></div>

                {/* Shine Effect */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 30%, transparent 60%)",
                    mixBlendMode: "overlay",
                  }}
                ></div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-all duration-300">
                    QCapsules is a luxury smart-living concept born at the
                    intersection of engineering and imagination. Our
                    fully-equipped modular capsules are designed to thrive in
                    diverse environments, from deserts to coastal and beach
                    environments.
                  </p>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-all duration-300">
                    Every QCapsule is designed with panoramic glass walls, smart
                    controls and high-end living systems. Each capsule is a
                    seamless blend of architecture, technology, and lifestyle.
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Company Profile Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#8b6f47] to-[#6b5233] hover:from-[#9b7f57] hover:to-[#7b6243] text-white font-semibold text-base lg:text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a
              href="/QCapsules-Company-Profile.pdf"
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
