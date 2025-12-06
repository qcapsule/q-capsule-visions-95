import { motion } from "framer-motion";
import { forwardRef, useRef, useEffect } from "react";
import heroSectionBgVid from "@/assets/herosection-bg-vid.mp4";
import q115xCapsule1 from "@/assets/q115x-capsule1.png";
import q75xCapsule2 from "@/assets/q75x-capsule2.png";
import q95Capsule1 from "@/assets/q95-capsule1.png";
import transparentCapsule from "@/assets/transparent-capsule.png";

export const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
    }
  }, []);

  return (
    <div className="relative h-[100vh] w-full">
      <section
        ref={ref}
        id="hero"
        className="relative h-[100vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #f5e6d3, #faf5ef, #f5e6d3)",
        }}
      >
        {/* Floating Capsule Images - Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.img
            src={q115xCapsule1}
            alt=""
            className="absolute top-10 right-5 w-24 lg:w-40 opacity-10 blur-md"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={q75xCapsule2}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 left-5 w-20 lg:w-32 opacity-10 blur-md"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -8, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={q95Capsule1}
            alt=""
            className="absolute bottom-20 right-1/4 w-28 lg:w-44 opacity-10 blur-md"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 12, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pt-20 lg:pt-24">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Title Section - Left */}
            <motion.div
              className="space-y-6 flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-5xl lg:text-7xl xl:text-8xl font-bold text-foreground">
                  Luxury
                </span>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-5xl lg:text-7xl xl:text-8xl font-bold text-foreground">
                  living
                </span>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-5xl lg:text-7xl xl:text-8xl font-bold text-foreground relative inline-block">
                  anywhere...
                  {/* Golden Underline Animation */}
                  <motion.span
                    className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                    style={{
                      boxShadow:
                        "0 0 10px rgba(251, 191, 36, 0.8), 0 0 20px rgba(251, 191, 36, 0.5), 0 0 30px rgba(251, 191, 36, 0.3)",
                    }}
                  />
                  {/* Shimmer Effect */}
                  <motion.span
                    className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 2,
                      delay: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                    style={{ width: "50%" }}
                  />
                </span>
              </div>
              <motion.p
                className="text-md lg:text-lg text-muted-foreground leading-relaxed mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Experience modular luxury that adapts to your lifestyle,
                wherever you are.
              </motion.p>
            </motion.div>

            {/* Video Card - Right */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Video Card */}
              <div className="relative group w-full h-full">
                {/* Animated Glow Effect */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-amber-400/30 via-amber-500/20 to-amber-400/30 rounded-3xl blur-2xl"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Video Card Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-amber-400/20 backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5 w-full h-full">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={heroSectionBgVid} type="video/mp4" />
                  </video>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>

                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl"></div>
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-amber-400/40 rounded-tl-xl"></div>
                <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-amber-400/40 rounded-tr-xl"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-amber-400/40 rounded-bl-xl"></div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-amber-400/40 rounded-br-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
      </section>
    </div>
  );
});

HeroSection.displayName = "HeroSection";
