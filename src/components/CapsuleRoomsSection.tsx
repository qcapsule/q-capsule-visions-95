import { forwardRef, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import livingRoomImage from "@/assets/living-room1.png";
import kitchenImage from "@/assets/kitchen-2.png";
import bathroomImage from "@/assets/bathroom-1.png";
import healthcareCapsuleImage from "@/assets/healthcare-capsule.jpg";
import bedroomImage from "@/assets/bedroom-1.png";

type Room = {
  title: string;
  description: string;
  image: string;
};

const rooms: Room[] = [
  {
    title: "Living Room",
    description:
      "Spacious and comfortable living areas designed for relaxation and entertainment",
    image: livingRoomImage,
  },
  {
    title: "Kitchen",
    description:
      "Modern, fully-equipped kitchens with premium appliances and smart storage",
    image: kitchenImage,
  },
  {
    title: "Bathroom",
    description: "Luxurious bathrooms with premium fixtures and elegant design",
    image: bathroomImage,
  },
  {
    title: "Bedroom",
    description: "Peaceful bedrooms designed for rest and rejuvenation",
    image: bedroomImage,
  },
];

// Mobile Component - Simple grid with always visible content
const MobileRoomsGrid = ({
  rooms,
  isInView,
}: {
  rooms: Room[];
  isInView: boolean;
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:hidden">
      {rooms.map((room, index) => (
        <motion.div
          key={index}
          className="relative h-[350px] sm:h-[400px] overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
          }}
        >
          {/* Room Image */}
          <div className="absolute inset-0">
            <img
              src={room.image}
              alt={room.title}
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
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {room.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                {room.description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Desktop Component - Horizontal row with expand effect
const DesktopRoomsGrid = ({
  rooms,
  isInView,
}: {
  rooms: Room[];
  isInView: boolean;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="hidden md:flex flex-row gap-1 lg:gap-2">
      {rooms.map((room, index) => {
        const isHovered = hoveredIndex === index;
        const flexBasis = isHovered
          ? "35%"
          : hoveredIndex !== null
          ? "21.67%"
          : "25%";

        return (
          <motion.div
            key={index}
            className="group relative h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl"
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
              flexBasis: { type: "spring", stiffness: 300, damping: 30 },
            }}
          >
            {/* Room Image */}
            <div className="absolute inset-0">
              <motion.img
                src={room.image}
                alt={room.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/60 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-300"></div>
            </div>

            {/* Content Overlay - Only visible on hover */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 z-10 overflow-visible">
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
                className="overflow-visible"
              >
                <div className="flex items-center gap-3 mb-2 overflow-visible">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white flex-shrink-0">
                    {room.title}
                  </h3>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <div className="w-12 lg:w-20 h-px bg-white"></div>
                    <ArrowRight
                      className="w-4 h-4 lg:w-6 lg:h-6 text-white flex-shrink-0"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <p className="text-sm lg:text-base text-white/90 leading-relaxed">
                  {room.description}
                </p>
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
  );
};

export const CapsuleRoomsSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="capsule-rooms"
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
          <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
            <span className="text-2xl text-foreground">✦</span>
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              Modular
            </span>
            <span className="text-2xl text-foreground">✦</span>
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              Customizable
            </span>
            <span className="text-2xl text-foreground">✦</span>
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              Limitless
            </span>
            <span className="text-2xl text-foreground">✦</span>
          </div>
          <p className="text-md lg:text-lg text-muted-foreground text-center mt-4 leading-relaxed max-w-3xl mx-auto">
            Neutral and sleek, the interior and exterior can be fully
            customized: wrapped, branded, or kept minimalist
          </p>
        </motion.div>

        {/* Mobile and Desktop Components */}
        <MobileRoomsGrid rooms={rooms} isInView={isInView} />
        <DesktopRoomsGrid rooms={rooms} isInView={isInView} />
      </div>
    </section>
  );
});

CapsuleRoomsSection.displayName = "CapsuleRoomsSection";
