import { forwardRef, useRef } from "react";
import { Download, Eye } from "lucide-react";
import { motion, useInView } from "framer-motion";
import brochureImage from "@/assets/qcapsule-brochure.png";
import brochurePdf from "@/assets/qcapsule-brochure.pdf";

export const BrochureSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // PDF brochure path
  const brochurePdfPath = brochurePdf;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = brochurePdfPath;
    link.download = "Q-Capsules-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    // Open PDF in new tab for browser preview
    window.open(brochurePdfPath, "_blank");
  };

  return (
    <section
      ref={ref}
      id="brochure"
      className="relative overflow-hidden py-32 bg-background"
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
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="text-2xl text-foreground">✦</span>
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              Download
            </span>
            <span className="text-2xl text-foreground">✦</span>
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              Brochure
            </span>
            <span className="text-2xl text-foreground">✦</span>
          </div>
          <p className="text-md lg:text-lg text-muted-foreground text-center mt-4 leading-relaxed max-w-3xl mx-auto">
            Explore our complete collection and discover everything Q Capsules
            has to offer.
          </p>
        </motion.div>

        {/* Main Content - Column Structure */}
        <div className="flex flex-col items-center max-w-md mx-auto">
          {/* Brochure Image - Smaller */}
          <motion.div
            className="relative w-full mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={brochureImage}
                alt="Q Capsules Brochure"
                className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
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

          {/* Action Buttons - No Card */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              onClick={handleDownload}
              className="bg-gradient-to-r from-[#8b6f47] to-[#6b5233] hover:from-[#9b7f57] hover:to-[#7b6243] text-white font-semibold text-sm lg:text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 flex-1 whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </motion.button>
            <motion.button
              onClick={handleView}
              className="bg-white/10 backdrop-blur-sm border border-border/50 hover:bg-white/20 hover:border-primary/30 text-foreground transition-all duration-300 rounded-xl px-8 py-4 text-sm lg:text-base font-semibold flex items-center justify-center gap-3 flex-1 whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Eye className="w-4 h-4" />
              <span>Preview Online</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

BrochureSection.displayName = "BrochureSection";
