import { forwardRef, useRef } from "react";
import { motion, useInView } from "framer-motion";
import glassCapsuleImage from "@/assets/glass-capsule.png";
import glassCornersImage from "@/assets/glass-corners.png";
import glassTitleImage from "@/assets/glass-title.png";

type GlassFeature = {
  title: string;
  subtitle: string;
  position: "left" | "right";
  top: string;
};

const glassFeatures: GlassFeature[] = [
  {
    title: "Grade A safety glass",
    subtitle: "ANSI Z97.1 / IBC Compliant ISO 12150 / ASTM C1048",
    position: "right",
    top: "21%",
  },
  {
    title: "Glass skylight with electric blinds",
    subtitle: "Remote-controlled privacy and natural light management",
    position: "left",
    top: "35%",
  },
  {
    title: "Thermal + Sound insulation",
    subtitle: "Energy-efficient climate control and acoustic privacy",
    position: "right",
    top: "51%",
  },
  {
    title: "Panoramic glass balcony",
    subtitle: "Unobstructed views with seamless connection to nature",
    position: "left",
    top: "66%",
  },
];

// Mobile Component - Simple vertical stack
const MobileGlassFeatures = ({
  features,
  isInView,
}: {
  features: GlassFeature[];
  isInView: boolean;
}) => {
  return (
    <div className="md:hidden space-y-6 mb-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div
            className="relative backdrop-blur-xl rounded-2xl p-6 shadow-2xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(180, 130, 70, 0.3) 0%, rgba(200, 150, 90, 0.2) 50%, rgba(160, 110, 60, 0.15) 100%)",
              boxShadow:
                "0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 1px 0 rgba(220, 170, 110, 0.3)",
            }}
          >
            {/* Shine Effect */}
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 30%, transparent 60%)",
                mixBlendMode: "overlay",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              {feature.subtitle && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.subtitle}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Desktop Component - Original layout with glass corners
const DesktopGlassFeatures = ({
  features,
  isInView,
}: {
  features: GlassFeature[];
  isInView: boolean;
}) => {
  return (
    <div className="hidden md:block relative flex flex-1 flex-wrap font-medium min-h-[800px] lg:min-h-[1000px] -mt-32 z-0">
      {/* Glass Corners Element - Center */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 z-0"
        style={{ height: "calc(100% - 2rem)" }}
      >
        <motion.div
          className="h-full flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={glassCornersImage}
            alt="Glass Corners"
            className="h-full w-auto object-contain opacity-70"
          />
        </motion.div>
      </div>

      {/* Connection line extending from bottom of glass-corners to capsule */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-amber-200/40 via-amber-200/30 to-transparent z-0"
        style={{
          bottom: "-2rem",
          height: "2rem",
        }}
      ></div>

      {/* Features positioned around the glass element */}
      {features.map((feature, index) => {
        const isLeft = feature.position === "left";
        const connectionWidth = isLeft
          ? "calc(50% - 3rem)"
          : "calc(50% - 3rem)";

        return (
          <motion.div
            key={index}
            className={`absolute ${
              isLeft ? "left-0 lg:left-[8%]" : "right-0 lg:right-[8%]"
            } w-[42%] lg:w-[38%]`}
            style={{ top: feature.top }}
            initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isLeft ? -30 : 30 }
            }
            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
          >
            {/* Connection Line */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 h-px ${
                isLeft
                  ? "left-full bg-gradient-to-r from-foreground/40 via-foreground/20 to-transparent"
                  : "right-full bg-gradient-to-l from-foreground/40 via-foreground/20 to-transparent"
              }`}
              style={{
                width: connectionWidth,
              }}
            ></div>

            {/* Feature Card */}
            <div
              className="relative backdrop-blur-xl rounded-full p-4 lg:p-6 shadow-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(180, 130, 70, 0.3) 0%, rgba(200, 150, 90, 0.2) 50%, rgba(160, 110, 60, 0.15) 100%)",
                boxShadow:
                  "0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 1px 0 rgba(220, 170, 110, 0.3)",
              }}
            >
              {/* Shine Effect */}
              <div
                className="absolute inset-0 pointer-events-none rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 30%, transparent 60%)",
                  mixBlendMode: "overlay",
                }}
              ></div>
              <div className="relative z-10">
                <h3 className="text-base lg:text-lg font-bold text-foreground mb-1">
                  {feature.title}
                </h3>
                {feature.subtitle && (
                  <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                    {feature.subtitle}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export const GlassFeaturesSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="glass-features"
      className="relative overflow-hidden py-32 pb-8 lg:pb-12"
      style={{
        background: "linear-gradient(to bottom, #f5e6d3, #faf5ef, #f5e6d3)",
      }}
    >
      <div
        className="container mx-auto  relative z-10 max-w-7xl flex flex-col"
        ref={containerRef}
      >
        {/* Header Pattern */}
        <motion.div
          className="mb-12 relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glass Title Background */}
          <div
            className="absolute inset-0 rounded-full opacity-80"
            style={{
              backgroundImage: `url(${glassTitleImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="relative z-10 flex items-center justify-center w-full gap-4 px-4 py-8">
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              Glass
            </span>
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              Features
            </span>
          </div>
        </motion.div>

        {/* Mobile and Desktop Components */}
        <MobileGlassFeatures features={glassFeatures} isInView={isInView} />
        <DesktopGlassFeatures features={glassFeatures} isInView={isInView} />

        {/* Capsule Image at Bottom - Centered */}
        <motion.div
          className="relative w-full max-w-3xl mx-auto mt-8 md:-mt-16 lg:-mt-40"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="w-full relative overflow-hidden rounded-2xl">
            <img
              src={glassCapsuleImage}
              alt="Glass Capsule Features"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
});

GlassFeaturesSection.displayName = "GlassFeaturesSection";
