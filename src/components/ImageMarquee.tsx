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
          x: ["0%", "-50%"],
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
            className={`relative ${image.aspectRatio} h-80 rounded-2xl overflow-hidden shadow-lg`}
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

  const row4Images = [
    { src: "/src/assets/retail-capsule.jpg", aspectRatio: "w-72" },
    { src: "/src/assets/healthcare-capsule.jpg", aspectRatio: "w-60" },
    { src: "/src/assets/disaster-relief-capsule.jpg", aspectRatio: "w-80" },
  ];

  const row5Images = [
    { src: "/src/assets/secure-banking-capsule.jpg", aspectRatio: "w-64" },
    { src: "/src/assets/q56x-capsule.png", aspectRatio: "w-56" },
    { src: "/src/assets/q75x-capsule.png", aspectRatio: "w-72" },
  ];

  const row6Images = [
    { src: "/src/assets/q95x-capsule.png", aspectRatio: "w-80" },
    { src: "/src/assets/q115x-capsule.png", aspectRatio: "w-96" },
    { src: "/src/assets/living-room1.png", aspectRatio: "w-64" },
  ];

  return (
    <div className="relative h-full w-[120%] -ml-[20%] flex flex-col justify-center gap-6">
      <ImageMarqueeRow images={row1Images} speed={30} />
      <ImageMarqueeRow images={row2Images} speed={35} />
      <ImageMarqueeRow images={row3Images} speed={32} />
      <ImageMarqueeRow images={row4Images} speed={28} />
      <ImageMarqueeRow images={row5Images} speed={33} />
      <ImageMarqueeRow images={row6Images} speed={31} />
    </div>
  );
};
