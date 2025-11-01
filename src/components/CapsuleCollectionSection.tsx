import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect, forwardRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { capsules } from "@/data/capsules";

export const CapsuleCollectionSection = forwardRef<HTMLElement>(
  (props, ref) => {
    const [currentCapsuleIndex, setCurrentCapsuleIndex] = useState(1); // Start with Q75X (index 1)
    const currentCapsule = capsules[currentCapsuleIndex];

    // Check for return capsule on component mount
    useEffect(() => {
      const returnToCapsule = localStorage.getItem("returnToCapsule");
      if (returnToCapsule) {
        const capsuleIndex = capsules.findIndex(
          (capsule) =>
            capsule.name.toLowerCase() === returnToCapsule.toLowerCase()
        );
        if (capsuleIndex !== -1) {
          setCurrentCapsuleIndex(capsuleIndex);
        }
        // Clear the stored capsule after using it
        localStorage.removeItem("returnToCapsule");
      }
    }, []);

    const [direction, setDirection] = useState(0);

    const nextCapsule = useCallback(() => {
      setDirection(1);
      setCurrentCapsuleIndex((prev) => (prev + 1) % capsules.length);
    }, []);

    const prevCapsule = useCallback(() => {
      setDirection(-1);
      setCurrentCapsuleIndex(
        (prev) => (prev - 1 + capsules.length) % capsules.length
      );
    }, []);

    const selectCapsule = useCallback(
      (index: number) => {
        setDirection(index > currentCapsuleIndex ? 1 : -1);
        setCurrentCapsuleIndex(index);
      },
      [currentCapsuleIndex]
    );

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

    const navigateToCapsulePage = (capsuleName: string) => {
      const route = `/capsules/${capsuleName.toLowerCase()}?from=${capsuleName.toLowerCase()}`;
      window.location.href = route;
    };

    return (
      <section
        ref={ref}
        id="capsule-collection"
        className="relative h-[100vh] flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background Images */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentCapsule.id}
            custom={direction}
            initial={{
              opacity: 0,
              x: direction > 0 ? 100 : -100,
              scale: 1.05,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              x: direction > 0 ? -100 : 100,
              scale: 0.95,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1], // Custom easing curve
            }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${currentCapsule.images[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </AnimatePresence>

        {/* Subtle Background Overlay */}
        <div className="absolute inset-0 bg-black/5 z-0"></div>

        {/* Top Left Capsule Type */}
        <motion.div
          className="parallax-element absolute top-20 left-8 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p
            key={`top-left-${currentCapsule.id}`}
            className="text-white text-2xl lg:text-4xl font-bold drop-shadow-lg mb-4"
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

          {/* Learn More Button */}
          <motion.div
            key={`learn-more-${currentCapsule.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative z-30"
          >
            <Button
              onClick={() => navigateToCapsulePage(currentCapsule.name)}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 transition-all duration-300 flex items-center gap-2 relative z-30 px-6 py-3 text-lg font-medium"
            >
              Learn More
              <ExternalLink className="h-4 w-4" />
            </Button>
          </motion.div>
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
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 lg:p-3 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
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
