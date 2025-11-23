import { forwardRef, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import desertOasisImage from "@/assets/desert-oasis-capsules.png";

export const VisionSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const visionMissionData = [
    {
      title: "Our Vision",
      content:
        "We envision a world where sustainable living is not just a choice, but a seamless reality. Our vision is to create modular living solutions that harmonize with nature while providing unparalleled comfort and luxury. Through innovative design and cutting-edge technology, we're building the foundation for communities that thrive in harmony with their environment.",
    },
    {
      title: "Our Mission",
      content:
        "Our mission is to revolutionize the way people think about home and community. We are committed to delivering modular capsule solutions that combine sustainability, innovation, and luxury in perfect harmony. Every capsule we create is designed with the future in mind – using eco-friendly materials, smart technology, and adaptable spaces that grow with your family's needs.",
    },
  ];

  return (
    <section
      ref={ref}
      id="vision"
      className="relative overflow-hidden py-32 bg-background"
    >
      <div
        className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl"
        ref={containerRef}
      >
        {/* Header Pattern */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <span className="text-2xl text-foreground">✦</span>
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              Vision
            </span>
            <span className="text-2xl text-foreground">✦</span>
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              +
            </span>
            <span className="text-2xl text-foreground">✦</span>
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              Mission
            </span>
            <span className="text-2xl text-foreground">✦</span>
          </div>
        </motion.div>

        {/* Main Content - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Vision & Mission Text */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Vision Paragraph */}
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                Vision
              </h3>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-justify">
                {visionMissionData[0].content}
              </p>
            </div>

            {/* Mission Paragraph */}
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                Mission
              </h3>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-justify">
                {visionMissionData[1].content}
              </p>
            </div>
          </motion.div>

          {/* Right - Large Image */}
          <motion.div
            className="relative h-[500px] lg:h-[600px]"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="h-full w-full relative overflow-hidden rounded-2xl">
              <img
                src={desertOasisImage}
                alt="Vision"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

VisionSection.displayName = "VisionSection";
