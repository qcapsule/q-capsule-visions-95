import { forwardRef, useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import livingRoomImage from "@/assets/living-room1.png";
import kitchenImage from "@/assets/kitchen-2.png";
import bathroomImage from "@/assets/bathroom-1.png";
import healthcareCapsuleImage from "@/assets/healthcare-capsule.jpg";
import bedroomImage from "@/assets/bedroom-1.png";
import { RoomVariationsCarousel } from "./RoomVariationsCarousel";

export const CapsuleRoomsSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedRoomType, setSelectedRoomType] = useState<
    "Living Room" | "Kitchen" | "Bathroom" | "Bedroom" | null
  >(null);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const rooms = [
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
      description:
        "Luxurious bathrooms with premium fixtures and elegant design",
      image: bathroomImage,
    },
    {
      title: "Bedroom",
      description: "Peaceful bedrooms designed for rest and rejuvenation",
      image: bedroomImage,
    },
  ];

  return (
    <section
      ref={ref}
      id="capsule-rooms"
      className="relative overflow-hidden py-32 bg-background"
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
          <div className="flex items-center justify-center gap-4">
            <span className="text-2xl text-foreground">✦</span>
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              Modular
            </span>
            <span className="text-2xl text-foreground">✦</span>
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              customizable
            </span>
            <span className="text-2xl text-foreground">✦</span>
            <span className="text-4xl lg:text-6xl font-bold text-foreground">
              limitless...
            </span>
            <span className="text-2xl text-foreground">✦</span>
          </div>
          <p className="text-md lg:text-lg text-muted-foreground leading-relaxed">
            Neutral and sleek, the interior and exterior can be fully
            customized: wrapped, branded, or kept minimalist
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="flex flex-col md:flex-row gap-1 lg:gap-2">
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
                className="group relative h-[500px] lg:h-[600px] overflow-hidden rounded-2xl cursor-pointer shadow-2xl"
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
                onClick={() => {
                  setSelectedRoomType(
                    room.title as
                      | "Living Room"
                      | "Kitchen"
                      | "Bathroom"
                      | "Bedroom"
                  );
                  setIsCarouselOpen(true);
                }}
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
      </div>

      {/* Room Variations Carousel Overlay */}
      <RoomVariationsCarousel
        roomType={selectedRoomType}
        isOpen={isCarouselOpen}
        onClose={() => {
          setIsCarouselOpen(false);
          setSelectedRoomType(null);
        }}
      />
    </section>
  );
});

CapsuleRoomsSection.displayName = "CapsuleRoomsSection";
