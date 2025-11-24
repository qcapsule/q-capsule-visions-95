import { forwardRef, useRef } from "react";
import {
  Download,
  Eye,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import brochureImage from "@/assets/qcapsule-brochure.png";

export const BrochureSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // PDF brochure path (should be in public folder)
  const brochurePdfPath = "/q-capsules-brochure.pdf";

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
    <section ref={ref} id="brochure" className="relative overflow-hidden py-20 lg:py-32">
      <div
        className="container mx-auto px-6 relative z-10 max-w-6xl"
        ref={containerRef}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-4 leading-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Download Our Brochure
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore our complete collection and discover everything Q Capsules has to offer.
          </motion.p>
        </motion.div>

        {/* Main Content - Centered */}
        <div className="flex flex-col items-center">
          {/* Brochure Cover Image */}
          <motion.div
            className="mb-8 max-w-md w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl group">
              <img
                src={brochureImage}
                alt="Q Capsules Brochure"
                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={handleDownload}
              className="bg-gradient-to-r from-[#8b6f47] to-[#6b5233] hover:from-[#9b7f57] hover:to-[#7b6243] text-white font-semibold text-base lg:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Download</span>
            </motion.button>
            <motion.button
              onClick={handleView}
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 text-foreground transition-all duration-300 rounded-xl px-8 py-4 text-base lg:text-lg font-semibold flex items-center justify-center gap-3 flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-5 h-5" />
              <span>Preview</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

BrochureSection.displayName = "BrochureSection";
