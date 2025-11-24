import { forwardRef, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import visionMissionImage from "@/assets/visionmission.png";

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
"To lead the global shift toward intelligent, modular living : where architectural beauty meets sustainability, and mobility meets true luxury."   },
    {
      title: "Our Mission",
      content:
"To design and manufacture modular living capsules that integrate smart technology, resilient engineering, and refined interiors. Enabling luxury living experiences anywhere..."    },
  ];

  return (
    <section
      ref={ref}
      id="vision"
      className="relative overflow-hidden min-h-screen"
    >
      {/* Subtle Beach Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#e8d5b7] via-[#d4c4a8] to-[#c9b896]"
          style={{
            backgroundImage: `url(${visionMissionImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(8px) opacity(0.3)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5e6d3]/40 via-transparent to-[#d4a574]/30" />
      </div>

      {/* Split Layout Container */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Large Capsule Image */}
        <motion.div
          className="lg:w-1/2 relative min-h-[50vh] lg:min-h-screen flex items-center justify-center p-8 lg:p-12"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-2xl">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={visionMissionImage}
                alt="Luxury Modular Living Capsule"
                className="w-full h-auto object-cover"
              />
              {/* Golden LED Glow Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div 
                  className="absolute top-4 left-4 right-4 h-[3px] bg-[#FFEED6] rounded-full opacity-80 blur-[2px]"
                  style={{
                    boxShadow: "0 0 20px rgba(255, 238, 214, 0.8), 0 0 40px rgba(255, 238, 214, 0.5)",
                  }}
                />
                <div 
                  className="absolute bottom-4 left-4 right-4 h-[3px] bg-[#FFEED6] rounded-full opacity-80 blur-[2px]"
                  style={{
                    boxShadow: "0 0 20px rgba(255, 238, 214, 0.8), 0 0 40px rgba(255, 238, 214, 0.5)",
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <div
          className="lg:w-1/2 flex flex-col justify-center p-8 lg:p-16 lg:pl-12"
          ref={containerRef}
        >
          {/* Heading */}
          <motion.div
            className="mb-12 lg:mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-[#3d2817] dark:text-[#5a3d2a] leading-tight">
              Vision & Mission
            </h2>
          </motion.div>

          {/* Vision & Mission Boxes - Stacked */}
          <div className="space-y-6 lg:space-y-8">
            {/* Vision Box */}
            <motion.div
              className="rounded-2xl p-6 lg:p-8 shadow-xl backdrop-blur-sm border border-white/10"
              style={{
                background: "linear-gradient(135deg, rgba(61, 40, 23, 0.65) 0%, rgba(45, 30, 18, 0.55) 50%, rgba(61, 40, 23, 0.65) 100%)",
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {visionMissionData[0].title}
              </h3>
              <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                {visionMissionData[0].content}
              </p>
            </motion.div>

            {/* Mission Box */}
            <motion.div
              className="rounded-2xl p-6 lg:p-8 shadow-xl backdrop-blur-sm border border-white/10"
              style={{
                background: "linear-gradient(135deg, rgba(61, 40, 23, 0.65) 0%, rgba(45, 30, 18, 0.55) 50%, rgba(61, 40, 23, 0.65) 100%)",
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {visionMissionData[1].title}
              </h3>
              <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                {visionMissionData[1].content}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

VisionSection.displayName = "VisionSection";
