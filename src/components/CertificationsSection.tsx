import { forwardRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Shield, CheckCircle, Sprout, X } from "lucide-react";
import structureImage from "@/assets/Structure.jpeg";
import constructionImage from "@/assets/construction_capsule.jpeg";
import iso9001Image from "@/assets/iso-9001.png";
import iso14001Image from "@/assets/iso-14001.png";
import iso45001Image from "@/assets/iso-45001.png";
import iso9001Cert from "@/assets/iso-9001-cert.jpeg";
import iso14001Cert from "@/assets/iso-14001-cert.jpeg";
import iso45001Cert from "@/assets/iso-45001-cert.jpeg";

export const CertificationsSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const isoCertifications = [
    {
      id: "iso-9001",
      image: iso9001Image,
      cert: iso9001Cert,
      alt: "ISO 9001 Certification",
    },
    {
      id: "iso-14001",
      image: iso14001Image,
      cert: iso14001Cert,
      alt: "ISO 14001 Certification",
    },
    {
      id: "iso-45001",
      image: iso45001Image,
      cert: iso45001Cert,
      alt: "ISO 45001 Certification",
    },
  ];

  return (
    <section
      ref={ref}
      id="certifications"
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
              Certified
            </span>
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              Excellence
            </span>
          </div>
          <p className="text-md lg:text-lg text-muted-foreground text-center mt-4 leading-relaxed max-w-4xl mx-auto">
            All materials are tested and certified to meet international
            standards, conforming to ASTM, EN, and ISO specifications for fire
            resistance, thermal insulation, and structural integrity. This
            ensures every installation delivers safety, sustainability, and
            superior build quality in every detail.
          </p>
        </motion.div>

        {/* Section 1: Text Left, Picture Right - Eco-Conscious by Design */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-16">
          {/* Left Side - Eco-Conscious Card */}
          <motion.div
            className="relative w-full h-[300px]"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative backdrop-blur-xl rounded-2xl p-6 lg:p-8 shadow-2xl overflow-hidden h-full border border-border/50 group hover:border-primary/30 transition-all duration-500">
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
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Sprout className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-all duration-300">
                    Eco-Conscious by Design
                  </h3>
                </div>
                <motion.p
                  className="text-base lg:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Designed with minimal land disruption and no foundations required. Each unit features solar panels, water tanks, and off-grid readiness. Built with sustainable, recyclable materials for a light footprint and long life span.
                </motion.p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Construction Image */}
          <motion.div
            className="relative w-full h-[300px]"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={constructionImage}
                alt="Capsule Construction"
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
        </div>

        {/* Section 2: Text Left, Picture Right - Health & Management */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-16">
          {/* Left Side - Health & Management Card */}
          <motion.div
            className="relative w-full h-[300px] order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative backdrop-blur-xl rounded-2xl p-6 lg:p-8 shadow-2xl overflow-hidden h-full border border-border/50 group hover:border-primary/30 transition-all duration-500">
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
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-all duration-300">
                    Health & Management
                  </h3>
                </div>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-all duration-300 mb-4">
                  Each capsule is engineered with strict safety standards to
                  protect occupants and stored systems. Our health and safety
                  protocols ensure compliance with international regulations
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Structure Image */}
          <motion.div
            className="relative w-full h-[300px] order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={structureImage}
                alt="Capsule Structure"
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
        </div>

        {/* Section 3: Text Left, ISO Image Right - Quality Management */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-16">
          {/* Left Side - Quality Management Card */}
          <motion.div
            className="relative w-full h-[300px] order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="relative backdrop-blur-xl rounded-2xl p-6 lg:p-8 shadow-2xl overflow-hidden h-full border border-border/50 group hover:border-primary/30 transition-all duration-500">
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
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-all duration-300">
                    Quality Management
                  </h3>
                </div>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-all duration-300">
                  Each capsule is manufactured under strict, ISO-aligned quality
                  processes to deliver consistent performance and durable
                  construction that withstands all seasons, climates, and
                  deployment environments.
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - ISO Certifications Images */}
          <motion.div
            className="relative w-full h-[300px] order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="grid grid-cols-3 gap-4 h-full">
              {isoCertifications.map((iso, index) => (
                <motion.div
                  key={iso.id}
                  className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer group backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-500"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + index * 0.1,
                  }}
                  onClick={() => setSelectedCert(iso.cert)}
                >
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

                  <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                    <img
                      src={iso.image}
                      alt={iso.alt}
                      className="max-w-full max-h-full object-contain rounded-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cert Image Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            {/* Close Button - Outside the picture */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCert(null);
              }}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:border-white/50 transition-all duration-300 shadow-lg"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cert Image */}
              <div className="relative w-full">
                <img
                  src={selectedCert}
                  alt="ISO Certification"
                  className="w-full h-auto object-contain rounded-3xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

CertificationsSection.displayName = "CertificationsSection";
