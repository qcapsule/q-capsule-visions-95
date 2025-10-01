import { motion } from "framer-motion";

interface ImageMarqueeRowProps {
  images: { src: string; aspectRatio: string }[];
  speed?: number;
}

const ImageMarqueeRow = ({ images, speed = 40 }: ImageMarqueeRowProps) => {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        animate={{
          x: ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: speed,
          ease: "linear",
        }}
        className="flex gap-4 w-max"
      >
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className={`relative ${image.aspectRatio} h-48 rounded-2xl overflow-hidden shadow-lg`}
          >
            <img
              src={image.src}
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
  const row1Images = [
    { src: "/src/assets/modern-interior-capsule.png", aspectRatio: "w-64" },
    { src: "/src/assets/desert-oasis-capsules.png", aspectRatio: "w-80" },
    { src: "/src/assets/residential-capsule.jpg", aspectRatio: "w-56" },
  ];

  const row2Images = [
    { src: "/src/assets/snowy-forest-capsules.png", aspectRatio: "w-72" },
    { src: "/src/assets/island-paradise-capsules.png", aspectRatio: "w-60" },
    { src: "/src/assets/creative-studio-capsule.jpg", aspectRatio: "w-96" },
  ];

  const row3Images = [
    { src: "/src/assets/eco-resort-capsule.jpg", aspectRatio: "w-56" },
    { src: "/src/assets/office-capsule.jpg", aspectRatio: "w-80" },
    { src: "/src/assets/educational-capsule.jpg", aspectRatio: "w-64" },
  ];

  return (
    <div className="relative h-full w-full flex flex-col justify-center gap-6">
      {/* Fade overlay on left */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      
      {/* Fade overlay on right */}
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <ImageMarqueeRow images={row1Images} speed={30} />
      <ImageMarqueeRow images={row2Images} speed={35} />
      <ImageMarqueeRow images={row3Images} speed={32} />
    </div>
  );
};
