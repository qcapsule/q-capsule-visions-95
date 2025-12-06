import { forwardRef, useRef } from "react";
import { motion, useInView } from "framer-motion";
import visionMissionImage from "@/assets/visionmission.png";

export const VisionSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const visionMissionData = [
    {
      title: "Our Vision",
      content:
        "To lead the global shift toward intelligent, modular living: where architectural beauty meets sustainability, and mobility meets true luxury.",
    },
    {
      title: "Our Mission",
      content:
        "To design and manufacture modular living capsules that integrate smart technology, resilient engineering, and refined interiors. Enabling luxury living experiences anywhere...",
    },
  ];

  return (
    <section
      ref={ref}
      id="vision"
      className="relative overflow-hidden py-32"
      style={{
        background: "linear-gradient(to bottom, #f5e6d3, #faf5ef, #f5e6d3)",
      }}
    >
      <div
        className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl"
        ref={containerRef}
      >
        {/* Header Pattern */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              Vision
            </span>
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              Mission
            </span>
          </div>
          <p className="text-md lg:text-lg text-muted-foreground text-center mt-4 leading-relaxed max-w-3xl mx-auto">
            Driving innovation in modular living through intelligent design,
            sustainable practices, and uncompromising luxury.
          </p>
        </motion.div>

        {/* Main Content - Image Left, Cards Right */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Side - Capsule Image */}
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={visionMissionImage}
                alt="Luxury Modular Living Capsule"
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Golden LED Glow Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-4 left-4 right-4 h-[3px] bg-[#FFEED6] rounded-full opacity-80 blur-[2px]"
                  style={{
                    boxShadow:
                      "0 0 20px rgba(255, 238, 214, 0.8), 0 0 40px rgba(255, 238, 214, 0.5)",
                  }}
                />
                <div
                  className="absolute bottom-4 left-4 right-4 h-[3px] bg-[#FFEED6] rounded-full opacity-80 blur-[2px]"
                  style={{
                    boxShadow:
                      "0 0 20px rgba(255, 238, 214, 0.8), 0 0 40px rgba(255, 238, 214, 0.5)",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Vision & Mission Cards in Column */}
          <div className="space-y-6 lg:space-y-8 h-full flex flex-col">
            {visionMissionData.map((item, index) => (
              <motion.div
                key={item.title}
                className="group relative flex-1"
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                }}
              >
                <div className="relative backdrop-blur-xl rounded-2xl p-6 lg:p-8 shadow-2xl overflow-hidden h-full border border-border/50 group-hover:border-primary/30 transition-all duration-500">
                  {/* Background gradient */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(180, 130, 70, 0.15) 0%, rgba(200, 150, 90, 0.1) 50%, rgba(160, 110, 60, 0.08) 100%)",
                      boxShadow:
                        "0 8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 1px 0 rgba(220, 170, 110, 0.2)",
                    }}
                  ></div>

                  {/* Shine Effect */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 30%, transparent 60%)",
                      mixBlendMode: "overlay",
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-base lg:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-all duration-300">
                      {item.content}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

VisionSection.displayName = "VisionSection";
