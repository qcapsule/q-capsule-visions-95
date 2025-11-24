import { forwardRef, useState, useEffect } from "react";
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
import { ImageWithTransition } from "@/components/ImageWithTransition";
import { capsules } from "@/data/capsules";

// Get Q75X capsule data
const q75xCapsule =
  capsules.find((capsule) => capsule.name === "Q75X") || capsules[1];

export const Q75XCapsulePage = forwardRef<HTMLElement>((props, ref) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fromCapsule = searchParams.get("from") || "q75x";
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsNavVisible(false);
      } else {
        // Scrolling up
        setIsNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
      {/* Auto-hiding Navigation Header */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isNavVisible ? 0 : -100,
          opacity: isNavVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          opacity: { duration: 0.3 },
        }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            onClick={handleBack}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-3 px-10 py-5 text-lg font-medium rounded-2xl shadow-lg"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Collection
          </Button>

          <div className="flex items-center gap-4">
            <Button
              onClick={handleDownload}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-3 px-6 py-3 text-lg font-medium rounded-2xl shadow-lg"
            >
              <Download className="h-5 w-5" />
              Download Specs
            </Button>
            <Button
              onClick={handleShare}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-3 px-6 py-3 text-lg font-medium rounded-2xl shadow-lg"
            >
              <Share2 className="h-5 w-5" />
              Share
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Main Background Image */}
        <ImageWithTransition
          src={q75xCapsule.images[0]}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
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
              {q75xCapsule.blurb}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative" style={{ backgroundColor: "#2a1f14" }}>
        {/* Dark Golden Brown Gradient Overlay */}
        <div
          className="fixed inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(135deg, #2a1f14 0%, #3d2e1f 50%, #2a1f14 100%)",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Single Background Image for All Sections */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: `url(/src/assets/q56x-capsule2sections.png)`,
            backgroundAttachment: "fixed",
          }}
        />

        {/* Specifications Section */}
        <section className="relative py-32">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                Specifications
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Detailed technical specifications and dimensions for the Q75X
                capsule
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Key Specs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Golden Divider */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-50"></div>

                <div className="w-12 h-12 mb-4 bg-white/20 rounded-xl flex items-center justify-center">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Total Area
                </h3>
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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Golden Divider */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-50"></div>

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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Golden Divider */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-50"></div>

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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Golden Divider */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-50"></div>

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
        <section className="relative py-32">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                Key Features
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Advanced features and technologies integrated into the Q75X
                design
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {q75xCapsule.features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Golden Divider */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-50"></div>

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
        <section className="relative py-32">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                Floor Plan
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
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
        <section className="relative py-32">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to Experience Q75X?
              </h2>
              <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
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
                  size="lg"
                  className="bg-gradient-to-r from-[#8b6f47] to-[#6b5233] hover:from-[#9b7f57] hover:to-[#7b6243] text-white font-semibold text-base lg:text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
});

Q75XCapsulePage.displayName = "Q75XCapsulePage";
