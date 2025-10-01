import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ImageMarqueeProps {
  images: string[];
  direction?: "up" | "down";
  speed?: number;
}

const ImageMarqueeColumn = ({ images, direction = "up", speed = 30 }: ImageMarqueeProps) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, speed * 1000);
    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className="relative h-full overflow-hidden">
      <motion.div
        key={key}
        animate={{
          y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: speed,
          ease: "linear",
        }}
        className="flex flex-col gap-4"
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm"
          >
            <img
              src={image}
              alt={`Capsule ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const ImageMarquee = () => {
  const column1Images = [
    "/src/assets/modern-interior-capsule.png",
    "/src/assets/desert-oasis-capsules.png",
    "/src/assets/residential-capsule.jpg",
  ];

  const column2Images = [
    "/src/assets/snowy-forest-capsules.png",
    "/src/assets/island-paradise-capsules.png",
    "/src/assets/creative-studio-capsule.jpg",
  ];

  const column3Images = [
    "/src/assets/eco-resort-capsule.jpg",
    "/src/assets/office-capsule.jpg",
    "/src/assets/educational-capsule.jpg",
  ];

  return (
    <div className="relative h-full w-full">
      {/* Fade overlay on left */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      
      {/* Fade overlay on top */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      
      {/* Fade overlay on bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      <div className="grid grid-cols-3 gap-4 h-full">
        <ImageMarqueeColumn images={column1Images} direction="up" speed={20} />
        <ImageMarqueeColumn images={column2Images} direction="down" speed={25} />
        <ImageMarqueeColumn images={column3Images} direction="up" speed={22} />
      </div>
    </div>
  );
};
