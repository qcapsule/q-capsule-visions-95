import { forwardRef } from "react";
import { Leaf, Globe, Zap, Users } from "lucide-react";
import visionBgImage from "@/assets/desert-oasis-capsules.png";

export const VisionSection = forwardRef<HTMLElement>((props, ref) => {
  const visionItems = [
    {
      icon: Globe,
      title: "Global Vision",
      description:
        "Redefining housing with modular capsules that can be deployed anywhere, creating sustainable communities worldwide.",
      stat: "50+",
      statLabel: "Countries",
    },
    {
      icon: Leaf,
      title: "Sustainable Mission",
      description:
        "Pioneering eco-friendly construction with minimal environmental impact and maximum energy efficiency.",
      stat: "100%",
      statLabel: "Eco-Friendly",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "Leveraging cutting-edge technology to create smart, adaptive living spaces for the modern world.",
      stat: "24/7",
      statLabel: "Smart Tech",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "Building more than homes – creating connected communities that foster collaboration and well-being.",
      stat: "1000+",
      statLabel: "Happy Families",
    },
  ];

  return (
    <section
      ref={ref}
      id="vision"
      className="relative h-[100vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${visionBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Subtle Background Overlay */}
      <div className="vision-overlay absolute inset-0 bg-black/5 z-0"></div>

      {/* Main Content - Centered */}
      <div className="vision-content container mx-auto px-6 relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-6xl">
          <h2 className="text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg mb-6">
            Vision & <span className="text-white drop-shadow-lg">Mission</span>
          </h2>

          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md mb-8">
            We envision a future where sustainable, modular living solutions
            enable people to live anywhere while maintaining luxury, comfort,
            and environmental responsibility.
          </p>

          {/* Vision Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visionItems.map((item, index) => (
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

                <p className="text-white/80 group-hover:text-white text-center text-sm leading-relaxed transition-all duration-300 mb-3">
                  {item.description}
                </p>

                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    {item.stat}
                  </div>
                  <div className="text-xs text-white/70">{item.statLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Content Row */}
      <div className="absolute bottom-8 left-0 right-0 z-20 px-8">
        <div className="flex flex-row items-center justify-between gap-2 lg:gap-8">
          {/* Left Tagline */}
          <div className="flex-shrink-0">
            <p className="text-white text-sm lg:text-lg font-medium drop-shadow-lg whitespace-nowrap">
              Building Tomorrow's Communities Today
            </p>
          </div>

          {/* Center Quote */}
          <div className="flex-1 text-center max-w-2xl mx-8">
            <blockquote className="text-white/90 text-sm lg:text-base drop-shadow-md italic">
              "The future of living is not about building bigger houses, but
              about creating smarter, more sustainable spaces that adapt to our
              evolving needs."
            </blockquote>
            <cite className="text-white/70 text-xs lg:text-sm font-medium mt-2 block">
              — Q Capsules Team
            </cite>
          </div>

          {/* Right Description */}
          <div className="text-center lg:text-right">
            <p className="text-white/90 text-sm lg:text-base drop-shadow-md max-w-xs">
              Join us in revolutionizing—
              <br />
              how the world lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

VisionSection.displayName = "VisionSection";
