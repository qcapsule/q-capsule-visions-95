import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import livingRoomImage from "@/assets/living-room1.png";
import kitchen1 from "@/assets/kitchen-1.png";
import kitchen2 from "@/assets/kitchen-honeystone.png";
import kitchen3 from "@/assets/kitchen-sunstone.png";
import bathroom1 from "@/assets/bathroom-espresso.png";
import bathroom2 from "@/assets/bathroom-flatwhite.png";
import residentialCapsuleImage from "@/assets/residential-capsule.jpg";
import healthcareCapsuleImage from "@/assets/healthcare-capsule.jpg";
import q75xCapsule2 from "@/assets/q75x-capsule2.png";
import q75xCapsule3 from "@/assets/q75x-capsule3.png";
import q95Capsule1 from "@/assets/q95-capsule1.png";
import q115xCapsule1 from "@/assets/q115x-capsule1.png";
import retailCapsuleImage from "@/assets/retail-capsule.jpg";
import officeCapsuleImage from "@/assets/office-capsule.jpg";
import ecoResortCapsuleImage from "@/assets/eco-resort-capsule.jpg";

interface RoomVariation {
  id: string;
  name: string;
  image: string;
}

interface RoomVariationsCarouselProps {
  roomType: "Living Room" | "Kitchen" | "Bathroom" | "Bedroom" | null;
  isOpen: boolean;
  onClose: () => void;
}

const roomVariations: Record<string, RoomVariation[]> = {
  "Living Room": [
    {
      id: "living-1",
      name: "The Classic Living",
      image: livingRoomImage,
    },
    {
      id: "living-2",
      name: "The Modern Lounge",
      image: q75xCapsule2,
    },
    {
      id: "living-3",
      name: "The Cozy Space",
      image: q75xCapsule3,
    },
  ],
  Kitchen: [
    // {
    //   id: "kitchen-1",
    //   name: "Sandstone",
    //   image: kitchen1,
    // },
    {
      id: "kitchen-2",
      name: "Honeystone",
      image: kitchen2,
    },
    {
      id: "kitchen-3",
      name: "Sunstone",
      image: kitchen3,
    },
  ],
  Bathroom: [
    {
      id: "bathroom-1",
      name: "The Luxury Bath",
      image: bathroom1,
    },
    {
      id: "bathroom-2",
      name: "The Modern Spa",
      image: bathroom2,
    },
  ],
  Bedroom: [
    {
      id: "bedroom-1",
      name: "The Master Suite",
      image: healthcareCapsuleImage,
    },
    {
      id: "bedroom-2",
      name: "The Peaceful Rest",
      image: officeCapsuleImage,
    },
    {
      id: "bedroom-3",
      name: "The Cozy Haven",
      image: ecoResortCapsuleImage,
    },
  ],
};

export const RoomVariationsCarousel = ({
  roomType,
  isOpen,
  onClose,
}: RoomVariationsCarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const variations = roomType ? roomVariations[roomType] || [] : [];

  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
  };

  const getCardRotation = (index: number) => {
    return 0; // No rotation - cards are straight
  };

  const getCardScale = (index: number) => {
    const centerIndex = 1; // Middle card
    const offset = Math.abs(index - centerIndex);
    return 1 - offset * 0.15; // Scale down by 15% for each card away from center
  };

  const getCardZIndex = (index: number) => {
    const centerIndex = 1;
    const offset = Math.abs(index - centerIndex);
    return 5 - offset; // Higher z-index for center card
  };

  const getCardTranslateX = (index: number) => {
    const centerIndex = 1;
    const offset = index - centerIndex;
    return offset * 240; // 240px spacing between cards for better spread
  };

  if (!roomType || !isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white/20 backdrop-blur-xl z-[9998]"
            onClick={onClose}
          />

          {/* Carousel Container */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-7xl mx-auto px-8 pointer-events-auto"
            >
              {/* Title with Back Button */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative mb-12"
              >
                <div className="flex items-center justify-center gap-4">
                  {/* Left Arrow Button */}
                  <button
                    onClick={onClose}
                    className="absolute left-0 text-foreground/80 hover:text-foreground transition-colors z-10 flex items-center"
                    aria-label="Close carousel"
                  >
                    <ArrowLeft size={32} strokeWidth={1.5} />
                  </button>

                  <span className="text-4xl lg:text-6xl font-bold text-foreground">
                    {roomType} Variations
                  </span>
                </div>
              </motion.div>

              {/* Cards Container */}
              <div className="relative h-[600px] lg:h-[700px] flex items-center justify-center perspective-1000">
                {variations.map((variation, index) => {
                  const rotation = getCardRotation(index);
                  const scale = getCardScale(index);
                  const zIndex = getCardZIndex(index);
                  const translateX = getCardTranslateX(index);
                  const isSelected = selectedIndex === index;

                  return (
                    <motion.div
                      key={variation.id}
                      className="absolute cursor-pointer"
                      style={{
                        zIndex: isSelected ? 10 : zIndex,
                        transformStyle: "preserve-3d",
                      }}
                      initial={{
                        opacity: 0,
                        y: 100,
                        rotate: rotation,
                        scale: 0.8,
                        x: translateX,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        rotate: rotation,
                        scale: isSelected ? 1.1 : scale,
                        x: translateX,
                      }}
                      transition={{
                        duration: 0.4,
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      onClick={() => handleCardClick(index)}
                      whileHover={{
                        scale: isSelected ? 1.15 : scale * 1.1,
                        y: -10,
                        z: 50,
                      }}
                    >
                      {/* Card */}
                      <div className="relative w-auto h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                        {/* Bottom Border */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                        {/* Image */}
                        <div className="relative w-full h-full">
                          <motion.img
                            src={variation.image}
                            alt={variation.name}
                            className="w-auto h-full object-contain"
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                          />
                          {/* Gradient Overlay - lighter for jewelry card style */}
                          <div className="absolute inset-0  to-transparent" />
                        </div>

                        {/* Content */}
                        {/* <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-xl lg:text-2xl font-semibold text-white tracking-wide uppercase"
                            style={{ fontFamily: "sans-serif" }}
                          >
                            {variation.name}
                          </motion.h3>
                        </div> */}

                        {/* Selection Indicator - bottom border highlight */}
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
                          />
                        )}

                        {/* Shine Effect */}
                        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Navigation Dots */}
              <div className="flex items-center justify-center gap-3 mt-8">
                {variations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleCardClick(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      selectedIndex === index
                        ? "bg-foreground w-8"
                        : "bg-foreground/30 hover:bg-foreground/50"
                    }`}
                    aria-label={`Go to variation ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
