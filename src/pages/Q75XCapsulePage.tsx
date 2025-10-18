import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Share2,
  Home,
  Bed,
  Bath,
  Car,
  Wifi,
  Leaf,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Q75XFloorPlan } from "@/components/Q75XFloorPlan";
import { capsules } from "@/data/capsules";

// Get Q75X capsule data
const q75xCapsule =
  capsules.find((capsule) => capsule.name === "Q75X") || capsules[1];

export const Q75XCapsulePage = forwardRef<HTMLElement>((props, ref) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fromCapsule = searchParams.get("from") || "q75x";

  const handleBack = () => {
    // Store the capsule to return to in localStorage
    localStorage.setItem("returnToCapsule", fromCapsule);
    // Navigate to the main page and scroll to capsule collection section
    navigate("/");
    // Use setTimeout to ensure the page loads before scrolling
    setTimeout(() => {
      const element = document.querySelector("#capsule-collection");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleDownload = () => {
    // Download brochure or specifications
    console.log("Download Q75X specifications");
  };

  const handleShare = () => {
    // Share functionality
    console.log("Share Q75X page");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation Header */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="text-white hover:bg-white/10 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Collection
          </Button>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={handleDownload}
              className="text-white hover:bg-white/10 flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download Specs
            </Button>
            <Button
              variant="ghost"
              onClick={handleShare}
              className="text-white hover:bg-white/10 flex items-center gap-2"
            >
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${q75xCapsule.images[0]})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg">
              {q75xCapsule.name}
            </h1>
            <p className="text-2xl lg:text-3xl text-white/90 mb-8 drop-shadow-md">
              {q75xCapsule.sizeLabel} • {q75xCapsule.dimensions}
            </p>
            <p className="text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              {q75xCapsule.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Specifications
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Detailed technical specifications and dimensions for the Q75X
              capsule
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Key Specs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-4 bg-white/20 rounded-xl flex items-center justify-center">
                <Home className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Total Area</h3>
              <p className="text-3xl font-bold text-white mb-2">
                {q75xCapsule.dimensions}
              </p>
              <p className="text-white/70 text-sm">Living space</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-4 bg-white/20 rounded-xl flex items-center justify-center">
                <Bed className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Bedrooms</h3>
              <p className="text-3xl font-bold text-white mb-2">2</p>
              <p className="text-white/70 text-sm">Master + guest</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-4 bg-white/20 rounded-xl flex items-center justify-center">
                <Bath className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Bathroom</h3>
              <p className="text-3xl font-bold text-white mb-2">1</p>
              <p className="text-white/70 text-sm">Full bathroom</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-4 bg-white/20 rounded-xl flex items-center justify-center">
                <Car className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Parking</h3>
              <p className="text-3xl font-bold text-white mb-2">1</p>
              <p className="text-white/70 text-sm">Covered space</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Key Features
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Advanced features and technologies integrated into the Q75X design
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {q75xCapsule.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
                  {index === 0 && <Wifi className="h-8 w-8 text-white" />}
                  {index === 1 && <Leaf className="h-8 w-8 text-white" />}
                  {index === 2 && <Zap className="h-8 w-8 text-white" />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {index === 0 &&
                    "High-speed internet connectivity with smart home integration for seamless digital living."}
                  {index === 1 &&
                    "Eco-friendly materials and energy-efficient systems for sustainable living."}
                  {index === 2 &&
                    "Advanced electrical systems with smart controls and energy monitoring."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Floor Plan
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Interactive floor plan showing the layout and dimensions of the
              Q75X capsule
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <Q75XFloorPlan />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Experience Q75X?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Schedule a consultation to learn more about the Q75X capsule and
              how it can fit your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-4 text-lg"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
});

Q75XCapsulePage.displayName = "Q75XCapsulePage";
