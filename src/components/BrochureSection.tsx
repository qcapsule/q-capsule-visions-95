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
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card text-sm font-medium mb-8 border border-accent/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <FileText className="w-4 h-4 text-accent" />
            <span className="text-gradient">Digital Brochure</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Explore Our Brochure</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the complete Q Capsules experience. Our comprehensive
            brochure showcases all models, specifications, and customization
            options in beautiful detail.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Brochure Preview */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
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
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gradient">
                  Complete Product Guide
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">
                        Detailed Specifications:
                      </strong>{" "}
                      Technical details, dimensions, and performance metrics for
                      all capsule models.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">
                        Design Gallery:
                      </strong>{" "}
                      High-quality images showcasing different configurations
                      and interior options.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-glow rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">
                        Customization Options:
                      </strong>{" "}
                      Comprehensive guide to personalizing your Q Capsule
                      experience.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">
                        Sustainability Features:
                      </strong>{" "}
                      Learn about our eco-friendly materials and
                      energy-efficient systems.
                    </p>
                  </div>
                </div>
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
                  Download Brochure
                </motion.button>

                <motion.button
                  onClick={handleView}
                  className="flex-1 glass-card text-foreground px-8 py-4 rounded-2xl font-bold text-lg hover:bg-accent/10 transition-all duration-300 border border-border/50 hover:border-accent/30 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="w-5 h-5" />
                  Preview Online
                </motion.button>
              </div>

              {/* Share Options */}
              <motion.div
                className="glass-card p-6 rounded-2xl border border-border/30"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Share2 className="w-5 h-5 text-accent" />
                  <h4 className="font-semibold text-foreground">
                    Share with Your Team
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Perfect for architects, contractors, and project stakeholders.
                  Share the vision and technical details with everyone involved
                  in your project.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    PDF Format
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                    High Resolution
                  </span>
                  <span className="px-3 py-1 bg-success/10 text-success text-xs rounded-full font-medium">
                    Print Ready
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <h3 className="text-xl font-bold mb-4 text-gradient">
              Need a Custom Quote?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our brochure covers standard configurations. For custom projects
              or bulk orders, let's discuss your specific requirements.
            </p>
            <motion.button
              className="glass-card text-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/10 transition-all duration-300 border border-primary/30 hover:border-primary/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
