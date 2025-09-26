import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText, Eye, Share2 } from "lucide-react";
import brochureImage from "@/assets/qcapsule-brochure.png";

export const BrochureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = brochureImage;
    link.download = "Q-Capsules-Brochure.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(brochureImage, "_blank");
  };

  return (
    <section id="brochure" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5">
          <div className="absolute top-1/3 left-1/5 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Product Brochure</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get all the details on our Q Capsules models and specifications.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-12">
            {/* Brochure Preview */}
            <motion.div
              className="relative group w-56 mx-auto"
              initial={{ opacity: 0, y: -30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-glow transition-all duration-500">
                <img
                  src={brochureImage}
                  alt="Q Capsules Brochure"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay with view button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    onClick={handleView}
                    className="glass-card px-6 py-3 rounded-2xl text-white font-medium hover:bg-primary/20 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye className="w-5 h-5 inline mr-2" />
                    View Full Size
                  </motion.button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </motion.div>

            {/* Content and Actions */}
            <motion.div
              className="space-y-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-gradient mb-4">
                  Download Our Brochure
                </h3>
                <p className="text-muted-foreground">
                  View specifications, designs, and customization options for
                  all Q Capsule models.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={handleDownload}
                  className="flex-1 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-glow transition-all duration-500 border border-primary/20 hover:border-primary/40 flex items-center justify-center gap-3"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 50px hsl(var(--primary) / 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </motion.button>

                <motion.button
                  onClick={handleView}
                  className="flex-1 glass-card text-foreground px-8 py-4 rounded-2xl font-bold text-lg hover:bg-accent/10 transition-all duration-300 border border-border/50 hover:border-accent/30 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="w-5 h-5" />
                  View Online
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
