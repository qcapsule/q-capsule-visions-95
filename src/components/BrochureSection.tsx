import { forwardRef } from "react";
import {
  Download,
  FileText,
  Eye,
  Share2,
  Sparkles,
  CheckCircle,
  Star,
  Award,
  Users,
} from "lucide-react";
import brochureImage from "@/assets/qcapsule-brochure.png";
import constructionCapsuleImage from "@/assets/construction-capsule.png";

export const BrochureSection = forwardRef<HTMLElement>((props, ref) => {
  const brochureItems = [
    {
      icon: CheckCircle,
      title: "Complete Specifications",
      description:
        "Detailed technical specifications, dimensions, and performance metrics for all Q Capsule models.",
      stat: "100%",
      statLabel: "Detailed",
    },
    {
      icon: Star,
      title: "Design Gallery",
      description:
        "High-quality images showcasing different configurations, interior options, and customization possibilities.",
      stat: "50+",
      statLabel: "Designs",
    },
    {
      icon: Award,
      title: "Customization Guide",
      description:
        "Comprehensive guide to personalizing your Q Capsule experience with premium materials and finishes.",
      stat: "24/7",
      statLabel: "Support",
    },
  ];

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
    <section
      ref={ref}
      id="brochure"
      className="h-[100vh] flex items-center justify-center overflow-hidden sticky top-0"
      style={{
        backgroundImage: `url(${constructionCapsuleImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background for GSAP */}
      <div
        className="brochure-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${constructionCapsuleImage})`,
        }}
      ></div>

      {/* Subtle Background Overlay */}
      <div className="brochure-overlay absolute inset-0 bg-black/40 z-0"></div>

      {/* Main Content - Centered */}
      <div className="brochure-content container mx-auto px-6 relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-6xl">
          <h2 className="text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg mb-6">
            Explore Our{" "}
            <span className="text-white drop-shadow-lg">Brochure</span>
          </h2>

          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md mb-8">
            Discover the complete Q Capsules experience. Our comprehensive
            brochure showcases all models, specifications, and customization
            options in beautiful detail.
          </p>

          {/* Brochure Items Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            {brochureItems.map((item, index) => (
              <div
                key={item.title}
                className="parallax-element bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 mb-4 mx-auto bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-lg font-bold mb-2 text-center text-white group-hover:text-white transition-all duration-300">
                  {item.title}
                </h3>

                <p className="text-white/80 group-hover:text-white text-center text-sm leading-relaxed transition-all duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleDownload}
              className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 rounded-full px-8 py-4 text-lg font-medium flex items-center justify-center gap-3"
            >
              <Download className="h-5 w-5" />
              Download Brochure
            </button>
            <button
              onClick={handleView}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 rounded-full px-8 py-4 text-lg font-medium flex items-center justify-center gap-3"
            >
              <Eye className="h-5 w-5" />
              Preview Online
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Content Row */}
      <div className="absolute bottom-8 left-0 right-0 z-20 px-8">
        <div className="flex flex-row items-center justify-between gap-2 lg:gap-8">
          {/* Left Tagline */}
          <div className="flex-shrink-0">
            <p className="text-white text-sm lg:text-lg font-medium drop-shadow-lg whitespace-nowrap">
              Complete Product Guide
            </p>
          </div>

          {/* Center Quote */}
          <div className="flex-1 text-center max-w-2xl mx-8">
            <blockquote className="text-white/90 text-sm lg:text-base drop-shadow-md italic">
              "Perfect for architects, contractors, and project stakeholders to
              share vision and technical details."
            </blockquote>
            <cite className="text-white/70 text-xs lg:text-sm font-medium mt-2 block">
              — Q Capsules Team
            </cite>
          </div>

          {/* Right Description */}
          <div className="text-center lg:text-right">
            <p className="text-white/90 text-sm lg:text-base drop-shadow-md max-w-xs">
              Share with your team—
              <br />
              architects and contractors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

BrochureSection.displayName = "BrochureSection";
