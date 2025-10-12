import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect, forwardRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { capsules } from "@/data/capsules";

export const CapsuleCollectionSection = forwardRef<HTMLElement>(
  (props, ref) => {
    const [currentCapsuleIndex, setCurrentCapsuleIndex] = useState(1); // Start with Q75X (index 1)
    const currentCapsule = capsules[currentCapsuleIndex];

    const nextCapsule = useCallback(() => {
      setCurrentCapsuleIndex((prev) => (prev + 1) % capsules.length);
    }, []);

    const prevCapsule = useCallback(() => {
      setCurrentCapsuleIndex(
        (prev) => (prev - 1 + capsules.length) % capsules.length
      );
    }, []);

    const selectCapsule = useCallback((index: number) => {
      setCurrentCapsuleIndex(index);
    }, []);

    // Handle keyboard navigation
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
          prevCapsule();
        } else if (e.key === "ArrowRight") {
          nextCapsule();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextCapsule, prevCapsule]);

    const scrollToSection = (id: string) => {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <section
        ref={ref}
        id="capsule-collection"
        className="relative h-[100vh] flex items-center justify-center overflow-hidden sticky top-0"
        style={{
          backgroundImage: `url(${currentCapsule.images[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Subtle Background Overlay */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>

        {/* Top Left Capsule Type */}
        <motion.div
          className="parallax-element absolute top-20 left-8 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p
            key={`top-left-${currentCapsule.id}`}
            className="text-white text-2xl lg:text-4xl font-bold drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {currentCapsule.name}
            <br />
            <span className="text-white/90 text-lg lg:text-xl font-medium">
              {currentCapsule.sizeLabel} • {currentCapsule.dimensions}
            </span>
          </motion.p>
        </motion.div>

        {/* Top Right Collection Info */}
        <motion.div
          className="parallax-element absolute top-20 right-8 z-20 text-right"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            key={`top-right-${currentCapsule.id}`}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 lg:p-6 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-white text-sm lg:text-base font-medium">
              Capsule Collection
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content - Centered */}
        <div className="container mx-auto px-6 relative z-10 flex items-center justify-center h-full">
          {/* Empty container to maintain layout structure */}
        </div>

        {/* Bottom Content - All in One Flex Row */}
        <motion.div
          className="parallax-element absolute bottom-8 left-8 right-8 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Left Tagline */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
            >
              <p className="text-white text-lg lg:text-xl font-medium drop-shadow-lg">
                {currentCapsule.name === "Q56X" && (
                  <>
                    Minimalist Living—
                    <br />
                    Maximum Freedom
                  </>
                )}
                {currentCapsule.name === "Q75X" && (
                  <>
                    Modern Comfort—
                    <br />
                    Sustainable Luxury
                  </>
                )}
                {currentCapsule.name === "Q95X" && (
                  <>
                    Nature Connected—
                    <br />
                    Urban Sophisticated
                  </>
                )}
                {currentCapsule.name === "Q115X" && (
                  <>
                    Family Harmony—
                    <br />
                    Premium Living
                  </>
                )}
              </p>
            </motion.div>

            {/* Navigator */}
            <div className="flex gap-6 items-center">
              {capsules.map((capsule, index) => (
                <div key={index} className="flex flex-col items-center gap-3">
                  <button
                    onClick={() => selectCapsule(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentCapsuleIndex
                        ? "bg-white scale-125"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                  <span
                    className={`text-sm font-semibold transition-all duration-300 ${
                      index === currentCapsuleIndex
                        ? "text-white"
                        : "text-white/60 hover:text-white/80"
                    }`}
                  >
                    {capsule.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Center Stats */}
            <motion.div
              className="flex gap-4 lg:gap-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.div
                key={`stat-1-${currentCapsule.id}`}
                className="bg-white/10 backdrop-blur-md rounded-full px-4 lg:px-6 py-3 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="text-xl lg:text-2xl font-bold text-white">
                  {currentCapsule.dimensions}
                </div>
                <div className="text-xs lg:text-sm text-white/80">
                  Total Area
                </div>
              </motion.div>
              <motion.div
                key={`stat-2-${currentCapsule.id}`}
                className="bg-white/10 backdrop-blur-md rounded-full px-4 lg:px-6 py-3 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                <div className="text-xl lg:text-2xl font-bold text-white">
                  {currentCapsule.sizeLabel}
                </div>
                <div className="text-xs lg:text-sm text-white/80">
                  Room Count
                </div>
              </motion.div>
              <motion.div
                key={`stat-3-${currentCapsule.id}`}
                className="bg-white/10 backdrop-blur-md rounded-full px-4 lg:px-6 py-3 border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <div className="text-xl lg:text-2xl font-bold text-white">
                  100%
                </div>
                <div className="text-xs lg:text-sm text-white/80">
                  Sustainable
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="flex-shrink-0 text-right"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
            >
              <div className="flex flex-col items-end gap-4">
                {/* Right Description */}
                <motion.p
                  key={`bottom-right-${currentCapsule.id}`}
                  className="text-white/90 text-sm lg:text-base drop-shadow-md max-w-xs"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {currentCapsule.features[0]} and{" "}
                  {currentCapsule.features[1].toLowerCase()}—
                  <br />
                  Perfect for {currentCapsule.rooms.toLowerCase()} living.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Arrows - Left and Right */}
        <motion.button
          onClick={prevCapsule}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={nextCapsule}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </section>
    );
  }
);

CapsuleCollectionSection.displayName = "CapsuleCollectionSection";
