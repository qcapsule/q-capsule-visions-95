import { forwardRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Leaf, CheckCircle, Sprout } from 'lucide-react';
import certificationsImage from '@/assets/certifications.png';
import constructionImage from '@/assets/construction-capsule.png';

export const CertificationsSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const isoCertifications = [
    {
      number: "9001",
      title: "Quality Management System",
      color: "#0066CC",
    },
    {
      number: "14001",
      title: "Environmental Management",
      color: "#00AA44",
    },
    {
      number: "45001",
      title: "Health and Safety",
      color: "#FF6600",
    },
  ];

  return (
    <section
      ref={ref}
      id="certifications"
      className="relative overflow-hidden py-16 lg:py-24"
      style={{
        background: "linear-gradient(to bottom, #f5e6d3, #faf5ef, #f5e6d3)",
      }}
    >
      <div
        className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl"
        ref={containerRef}
      >
        {/* Main Title */}
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6" style={{ color: "#2d1f15" }}>
            Certified excellence: Built to global standards
          </h2>
          <p className="text-base lg:text-lg leading-relaxed max-w-4xl" style={{ color: "#2d1f15" }}>
            All materials are tested and certified to meet international standards, conforming to ASTM, EN, and ISO specifications for fire resistance, thermal insulation, and structural integrity. This ensures every installation delivers safety, sustainability, and superior build quality in every detail.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Left Side - Construction Image */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={constructionImage}
                alt="Capsule Construction"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Eco-Conscious Section */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-[#8b6f47]/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#8b6f47]/20 flex items-center justify-center flex-shrink-0">
                  <Sprout className="w-6 h-6" style={{ color: "#8b6f47" }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: "#2d1f15" }}>
                    Eco-Conscious by Design
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Minimal land disruption (no foundations needed)",
                      "Solar panels, water tanks, and off-grid readiness",
                      "Sustainable and recyclable materials",
                      "Light footprint, long life",
                    ].map((item, index) => (
                      <motion.li
                        key={item}
                        className="flex items-start gap-3 text-base lg:text-lg"
                        style={{ color: "#2d1f15" }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      >
                        <span className="text-[#8b6f47] mt-1">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Worker Image */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <img
                src={certificationsImage}
                alt="Quality Manufacturing"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section - Health & Management and Quality Management */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Health & Management */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-[#8b6f47]/20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#8b6f47]/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6" style={{ color: "#8b6f47" }} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: "#2d1f15" }}>
                  Health & Management
                </h3>
                <p className="text-base lg:text-lg leading-relaxed" style={{ color: "#2d1f15" }}>
                  Each capsule is engineered with strict safety standards to protect occupants and stored systems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quality Management */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-[#8b6f47]/20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#8b6f47]/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6" style={{ color: "#8b6f47" }} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: "#2d1f15" }}>
                  Quality Management
                </h3>
                <p className="text-base lg:text-lg leading-relaxed" style={{ color: "#2d1f15" }}>
                  Each capsule is manufactured under strict, ISO-aligned quality processes to deliver consistent performance and durable construction that withstands all seasons, climates, and deployment environments.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ISO Certifications */}
        <motion.div
          className="flex flex-wrap justify-center lg:justify-end gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {isoCertifications.map((iso, index) => (
            <motion.div
              key={iso.number}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              <div
                className="w-24 h-24 lg:w-28 lg:h-28 rounded-full mx-auto mb-3 flex items-center justify-center border-4 shadow-lg"
                style={{
                  borderColor: iso.color,
                  background: "white",
                }}
              >
                <div className="text-center">
                  <div className="text-xs lg:text-sm font-bold" style={{ color: iso.color }}>
                    ISO
                  </div>
                  <div className="text-lg lg:text-xl font-bold" style={{ color: iso.color }}>
                    {iso.number}
                  </div>
                </div>
              </div>
              <p className="text-sm lg:text-base font-medium" style={{ color: "#2d1f15" }}>
                {iso.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

CertificationsSection.displayName = "CertificationsSection";