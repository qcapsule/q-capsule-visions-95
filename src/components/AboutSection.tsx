import { forwardRef } from "react";
import {
  Award,
  Users,
  Zap,
  Globe,
  Sparkles,
  Building2,
  Heart,
  Target,
} from "lucide-react";
import dohaSkylineImage from "@/assets/doha-skyline.png";

export const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const aboutItems = [
    {
      icon: Building2,
      title: "Qatar Heritage",
      description:
        "Born in Qatar, built for the world. We're proud to be part of Qatar's innovative future while honoring our rich cultural heritage.",
      stat: "100%",
      statLabel: "Made in Qatar",
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description:
        "Every capsule we create is infused with passion, precision, and purpose. We believe in crafting spaces that inspire and transform lives.",
      stat: "500+",
      statLabel: "Dreams Realized",
    },
    {
      icon: Target,
      title: "Excellence Focus",
      description:
        "Committed to delivering exceptional quality and service. Our attention to detail ensures every project exceeds expectations.",
      stat: "99%",
      statLabel: "Client Satisfaction",
    },
    {
      icon: Sparkles,
      title: "Innovation First",
      description:
        "Pioneering the future of modular living with cutting-edge technology and sustainable design principles.",
      stat: "24/7",
      statLabel: "Innovation",
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="h-[100vh] flex items-center justify-center overflow-hidden sticky top-0"
      style={{
        backgroundImage: `url(${dohaSkylineImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background for GSAP */}
      <div
        className="about-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${dohaSkylineImage})`,
        }}
      ></div>

      {/* Subtle Background Overlay */}
      <div className="about-overlay absolute inset-0 bg-black/40 z-0"></div>

      {/* Main Content - Centered */}
      <div className="about-content container mx-auto px-6 relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-6xl">
          <h2 className="text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg mb-6">
            About <span className="text-white drop-shadow-lg">Q Capsules</span>
          </h2>

          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md mb-8">
            Born from Qatar's vision for the future, we're pioneering modular
            living solutions that combine innovation, sustainability, and luxury
            in every capsule we create.
          </p>

          {/* About Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutItems.map((item, index) => (
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
              Made in Qatar—Built for the World
            </p>
          </div>

          {/* Center Quote */}
          <div className="flex-1 text-center max-w-2xl mx-8">
            <blockquote className="text-white/90 text-sm lg:text-base drop-shadow-md italic">
              "We don't just build homes, we craft experiences that connect
              people with nature, innovation, and each other."
            </blockquote>
            <cite className="text-white/70 text-xs lg:text-sm font-medium mt-2 block">
              — Q Capsules Founders
            </cite>
          </div>

          {/* Right Description */}
          <div className="text-center lg:text-right">
            <p className="text-white/90 text-sm lg:text-base drop-shadow-md max-w-xs">
              From the heart of Doha—
              <br />
              to homes around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
