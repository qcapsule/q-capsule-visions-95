import { forwardRef } from "react";
import { Target, Lightbulb, Heart, Shield } from "lucide-react";
import visionBgImage from "@/assets/eco-resort-capsule.jpg";

export const VisionSection = forwardRef<HTMLElement>((props, ref) => {
  const visionMissionData = [
    {
      icon: Target,
      title: "Our Vision",
      content: "We envision a world where sustainable living is not just a choice, but a seamless reality. Our vision is to create modular living solutions that harmonize with nature while providing unparalleled comfort and luxury. We see a future where every family can live in a space that adapts to their needs, grows with their dreams, and leaves a positive footprint on our planet. Through innovative design and cutting-edge technology, we're building the foundation for communities that thrive in harmony with their environment, creating lasting legacies for generations to come."
    },
    {
      icon: Lightbulb,
      title: "Our Mission",
      content: "Our mission is to revolutionize the way people think about home and community. We are committed to delivering modular capsule solutions that combine sustainability, innovation, and luxury in perfect harmony. Every capsule we create is designed with the future in mind – using eco-friendly materials, smart technology, and adaptable spaces that grow with your family's needs. We believe that everyone deserves a home that not only shelters but inspires, connects, and empowers. Through our dedication to quality, sustainability, and customer satisfaction, we're building more than structures – we're creating the foundation for better living."
    }
  ];

  return (
    <section
      ref={ref}
      id="vision"
      className="relative min-h-screen py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${visionBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Our <span className="text-amber-300">Vision & Mission</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Discover the principles that drive our commitment to sustainable, innovative living solutions
          </p>
        </div>

        {/* Vision & Mission Content */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {visionMissionData.map((item, index) => (
            <div
              key={item.title}
              className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 lg:p-12 hover:bg-white/10 hover:border-white/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* LED Ambient Light Effect - Always Visible */}
              <div className="absolute inset-0 bg-gradient-radial from-yellow-100/6 via-yellow-50/4 to-transparent opacity-100"></div>
              
              {/* LED Strip Borders - Always Visible */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-300/90 to-transparent opacity-100 shadow-[0_0_8px_rgba(251,191,36,0.6)]"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-300/90 to-transparent opacity-100 shadow-[0_0_8px_rgba(251,191,36,0.6)]"></div>
              <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-yellow-300/90 to-transparent opacity-100 shadow-[0_0_8px_rgba(251,191,36,0.6)]"></div>
              <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-yellow-300/90 to-transparent opacity-100 shadow-[0_0_8px_rgba(251,191,36,0.6)]"></div>
              
              {/* Enhanced LED Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-radial from-yellow-100/10 via-yellow-50/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-start space-x-6 relative z-10">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-amber-100 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <blockquote className="text-2xl lg:text-3xl text-white/90 italic max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            "Building the future of sustainable living, one capsule at a time."
          </blockquote>
          <cite className="text-amber-300 text-lg font-medium mt-4 block">
            — Q Capsules Team
          </cite>
        </div>
      </div>
    </section>
  );
});

VisionSection.displayName = "VisionSection";
