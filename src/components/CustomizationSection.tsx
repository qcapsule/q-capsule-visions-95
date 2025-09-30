import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Home,
  Building2,
  Store,
  TreePine,
  Palette,
  Maximize,
  Zap,
  Shield,
} from "lucide-react";
import q56xImage from "@/assets/q56x-capsule.png";
import q75xImage from "@/assets/q75x-capsule.png";
import q95xImage from "@/assets/q95x-capsule.png";
import q115xImage from "@/assets/q115x-capsule.png";
import floorplanBgImage from "@/assets/floorplan-bg.jpg";
import mostAttractiveThumbnail from "@/assets/Most_Attractive_Youtube_Thumbnail.png";

export const CustomizationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  const capsuleStyles = [
    {
      id: "q56x",
      name: "Q56X",
      size: "18m²",
      dimensions: "3.2 x 3.2 x 5.6m",
      rooms: "1 Room",
      image: q56xImage,
    },
    {
      id: "q75x",
      name: "Q75X",
      size: "24m²",
      dimensions: "3.2 x 3.2 x 7.5m",
      rooms: "2 Rooms",
      image: q75xImage,
    },
    {
      id: "q95x",
      name: "Q95X",
      size: "30m²",
      dimensions: "3.2 x 3.2 x 9.5m",
      rooms: "2 Rooms + Deck",
      image: q95xImage,
    },
    {
      id: "q115x",
      name: "Q115X",
      size: "38m²",
      dimensions: "3.2 x 3.2 x 11.5m",
      rooms: "3 Rooms",
      image: q115xImage,
    },
    {
      id: "premium",
      name: "Premium",
      size: "45m²",
      dimensions: "4.0 x 4.0 x 12.0m",
      rooms: "3 Rooms + Terrace",
      image: mostAttractiveThumbnail,
    },
  ];

  const customizationOptions = [
    {
      icon: Palette,
      title: "Interior Design",
      description: "Choose from curated design themes",
    },
    {
      icon: Maximize,
      title: "Space Configuration",
      description: "Flexible layouts for any need",
    },
    {
      icon: Zap,
      title: "Smart Technology",
      description: "Integrated IoT and automation",
    },
    {
      icon: Shield,
      title: "Security Features",
      description: "Advanced security systems",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % capsuleStyles.length);
    }, 9000);

    return () => clearInterval(timer);
  }, [capsuleStyles.length]);

  return (
    <section id="customization" className="py-16 relative overflow-hidden">

      <div
        className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl"
        ref={ref}
      >
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8">
            <span className="text-gradient">The Capsule Collection</span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto px-4">
            Every Q Capsule is designed to your exact specifications. Choose
            from our signature styles or create something completely unique.
          </p>
        </motion.div>

        {/* Center Image with Surrounding Text Carousel */}
        <div className="relative mb-12 sm:mb-16 lg:mb-20 max-w-full mx-auto">
          <div className="relative">
            {/* Center Capsule Image */}
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={capsuleStyles[currentSlide].id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
                    <img
                      src={capsuleStyles[currentSlide].image}
                      alt={capsuleStyles[currentSlide].name}
                      className="w-full h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] 2xl:h-[450px] object-cover"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Surrounding Text Labels */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top Left - Model */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`model-${currentSlide}`}
                  className="absolute top-2 left-2 sm:top-4 sm:left-4 lg:top-8 lg:left-8"
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24 flex flex-col items-center justify-center">
                    <div className="text-xs sm:text-sm text-white/80 font-light text-center">
                      Model
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg text-white font-bold text-center">
                      {capsuleStyles[currentSlide].name}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Top Right - Dimensions */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`dimensions-${currentSlide}`}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:top-8 lg:right-8"
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24 flex flex-col items-center justify-center">
                    <div className="text-xs sm:text-sm text-white/80 font-light text-center">
                      Dimensions
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg text-white font-bold text-center">
                      {capsuleStyles[currentSlide].dimensions}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Left - Size */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`size-${currentSlide}`}
                  className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 lg:bottom-8 lg:left-8"
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24 flex flex-col items-center justify-center">
                    <div className="text-xs sm:text-sm text-white/80 font-light text-center">
                      Size
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg text-white font-bold text-center">
                      {capsuleStyles[currentSlide].size}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Right - Rooms */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`rooms-${currentSlide}`}
                  className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 lg:bottom-8 lg:right-8"
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24 flex flex-col items-center justify-center">
                    <div className="text-xs sm:text-sm text-white/80 font-light text-center">
                      Rooms
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg text-white font-bold text-center">
                      {capsuleStyles[currentSlide].rooms}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center -ml-8 sm:-ml-12 lg:-ml-16">
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? capsuleStyles.length - 1 : prev - 1
                )
              }
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center -mr-8 sm:-mr-12 lg:-mr-16">
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % capsuleStyles.length)
              }
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Bottom Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
            {capsuleStyles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 backdrop-blur-xl border ${
                  currentSlide === index
                    ? "bg-primary scale-125 border-primary/50 shadow-lg shadow-primary/50"
                    : "bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30"
                }`}
              />
            ))}
          </div>

          {/* Model Names Bar */}
          <div className="flex justify-center mt-4 sm:mt-6">
            <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4 rounded-full">
              {capsuleStyles.map((style, index) => (
                <button
                  key={style.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`text-xs sm:text-sm font-medium transition-all duration-300 ${
                    currentSlide === index
                      ? "text-primary font-bold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {style.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
