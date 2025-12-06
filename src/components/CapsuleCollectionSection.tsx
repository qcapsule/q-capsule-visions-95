import { motion } from "framer-motion";
import { useState, useEffect, forwardRef, useRef } from "react";
import { useInView } from "framer-motion";
import q56xCapsuleImage from "@/assets/q56x-capsule2.png";
import q75xCapsuleImage from "@/assets/q75x-capsule2.png";
import q95xCapsuleImage from "@/assets/q95-capsule1.png";
import q115xCapsuleImage from "@/assets/q115x-capsule1.png";

// Complete capsule catalog data
const allCapsules = [
  {
    id: "q56x",
    name: "Q56X",
    size: "18m²",
    dimensions: "3.2 x 3.2 x 5.6m",
    rooms: "1 Room",
    description:
      "Compact and efficient, perfect for single occupancy or intimate spaces",
    image: q56xCapsuleImage,
  },
  {
    id: "q75x",
    name: "Q75X",
    size: "24m²",
    dimensions: "3.2 x 3.2 x 7.5m",
    rooms: "2 Rooms",
    description: "Spacious two-room design ideal for couples or small families",
    image: q75xCapsuleImage,
  },
  {
    id: "q95x",
    name: "Q95X",
    size: "30m²",
    dimensions: "3.2 x 3.2 x 9.5m",
    rooms: "2 Rooms + Deck",
    description:
      "Premium living with additional deck space for outdoor relaxation",
    image: q95xCapsuleImage,
  },
  {
    id: "q115x",
    name: "Q115X",
    size: "38m²",
    dimensions: "3.2 x 3.2 x 11.5m",
    rooms: "3 Rooms",
    description:
      "Luxurious three-room configuration for maximum comfort and space",
    image: q115xCapsuleImage,
  },
];

// Mobile Component - Simple grid with always visible content
const MobileCapsuleGrid = ({
  capsules,
  isInView,
}: {
  capsules: typeof allCapsules;
  isInView: boolean;
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:hidden">
      {capsules.map((capsule, index) => (
        <motion.div
          key={capsule.id}
          className="relative h-[350px] sm:h-[400px] overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
          }}
        >
          {/* Capsule Image */}
          <div className="absolute inset-0">
            <img
              src={capsule.image}
              alt={capsule.name}
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30"></div>
          </div>

          {/* Content Overlay - Always visible */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1 + 0.2,
              }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {capsule.name}
              </h3>
              <div className="mb-2">
                <p className="text-lg sm:text-xl text-white font-medium mb-1">
                  {capsule.size}
                </p>
                <p className="text-sm sm:text-base text-white/90 mb-2">
                  {capsule.rooms}
                </p>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {capsule.description}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Desktop Component - 2x2 grid with hover expand effect
const DesktopCapsuleGrid = ({
  capsules,
  isInView,
}: {
  capsules: typeof allCapsules;
  isInView: boolean;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="hidden md:flex flex-col gap-1 lg:gap-2">
      {/* First Row */}
      <div className="flex flex-row gap-1 lg:gap-2">
        {capsules.slice(0, 2).map((capsule, index) => {
          const isHovered = hoveredIndex === index;
          const isRowHovered = hoveredIndex !== null && hoveredIndex < 2;
          const flexBasis = isHovered
            ? "60%"
            : isRowHovered && !isHovered
            ? "40%"
            : "50%";

          return (
            <motion.div
              key={capsule.id}
              className="group relative h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      flexBasis: flexBasis,
                    }
                  : { opacity: 0, y: 50 }
              }
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{
                flexGrow: isHovered ? 1 : 0,
                flexShrink: isHovered ? 0 : 1,
                zIndex: isHovered ? 10 : 1,
              }}
              transition={{
                opacity: { duration: 0.6, delay: index * 0.1 },
                y: { duration: 0.6, delay: index * 0.1 },
                flexBasis: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                },
              }}
            >
              {/* Capsule Image */}
              <div className="absolute inset-0">
                <motion.img
                  src={capsule.image}
                  alt={capsule.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30 group-hover:from-black/60 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-300"></div>
              </div>

              {/* Content Overlay - Visible on hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView && isHovered
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: isHovered ? 0.4 : 0,
                    delay: isHovered ? 0.4 : 0,
                    ease: "easeOut",
                  }}
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {capsule.name}
                  </h3>
                  <div className="mb-2">
                    <p className="text-lg lg:text-xl text-white font-medium mb-1">
                      {capsule.size}
                    </p>
                    <p className="text-sm lg:text-base text-white/90 mb-2">
                      {capsule.rooms}
                    </p>
                    <p className="text-sm lg:text-base text-white/80 leading-relaxed">
                      {capsule.description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Second Row */}
      <div className="flex flex-row gap-1 lg:gap-2">
        {capsules.slice(2, 4).map((capsule, index) => {
          const actualIndex = index + 2;
          const isHovered = hoveredIndex === actualIndex;
          const isRowHovered = hoveredIndex !== null && hoveredIndex >= 2;
          const flexBasis = isHovered
            ? "60%"
            : isRowHovered && !isHovered
            ? "40%"
            : "50%";

          return (
            <motion.div
              key={capsule.id}
              className="group relative h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      flexBasis: flexBasis,
                    }
                  : { opacity: 0, y: 50 }
              }
              onHoverStart={() => setHoveredIndex(actualIndex)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{
                flexGrow: isHovered ? 1 : 0,
                flexShrink: isHovered ? 0 : 1,
                zIndex: isHovered ? 10 : 1,
              }}
              transition={{
                opacity: { duration: 0.6, delay: actualIndex * 0.1 },
                y: { duration: 0.6, delay: actualIndex * 0.1 },
                flexBasis: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                },
              }}
            >
              {/* Capsule Image */}
              <div className="absolute inset-0">
                <motion.img
                  src={capsule.image}
                  alt={capsule.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30 group-hover:from-black/60 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-300"></div>
              </div>

              {/* Content Overlay - Visible on hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView && isHovered
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: isHovered ? 0.4 : 0,
                    delay: isHovered ? 0.4 : 0,
                    ease: "easeOut",
                  }}
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {capsule.name}
                  </h3>
                  <div className="mb-2">
                    <p className="text-lg lg:text-xl text-white font-medium mb-1">
                      {capsule.size}
                    </p>
                    <p className="text-sm lg:text-base text-white/90 mb-2">
                      {capsule.rooms}
                    </p>
                    <p className="text-sm lg:text-base text-white/80 leading-relaxed">
                      {capsule.description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export const CapsuleCollectionSection = forwardRef<HTMLElement>(
  (props, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
      <section
        ref={ref}
        id="capsule-collection"
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
                Capsule
              </span>
              <span className="text-4xl lg:text-6xl font-bold text-foreground">
                Collection
              </span>
            </div>
            <p className="text-md lg:text-lg text-muted-foreground text-center mt-4 leading-relaxed max-w-3xl mx-auto">
              Modern modular capsule technology at the peak of innovation,
              designed for sustainable living and exceptional comfort.
            </p>
          </motion.div>

          {/* Mobile and Desktop Components */}
          <MobileCapsuleGrid capsules={allCapsules} isInView={isInView} />
          <DesktopCapsuleGrid capsules={allCapsules} isInView={isInView} />
        </div>
      </section>
    );
  }
);

CapsuleCollectionSection.displayName = "CapsuleCollectionSection";
