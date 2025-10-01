import { motion } from "framer-motion";

interface ImageMarqueeRowProps {
  images: { src: string }[];
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
            className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-lg"
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
    { src: "/src/assets/modern-interior-capsule.png" },
    { src: "/src/assets/desert-oasis-capsules.png" },
    { src: "/src/assets/residential-capsule.jpg" },
    { src: "/src/assets/snowy-forest-capsules.png" },
  ];

  const row2Images = [
    { src: "/src/assets/island-paradise-capsules.png" },
    { src: "/src/assets/creative-studio-capsule.jpg" },
    { src: "/src/assets/eco-resort-capsule.jpg" },
    { src: "/src/assets/office-capsule.jpg" },
  ];

  const row3Images = [
    { src: "/src/assets/educational-capsule.jpg" },
    { src: "/src/assets/disaster-relief-capsule.jpg" },
    { src: "/src/assets/healthcare-capsule.jpg" },
    { src: "/src/assets/retail-capsule.jpg" },
  ];

  const row4Images = [
    { src: "/src/assets/secure-banking-capsule.jpg" },
    { src: "/src/assets/modern-interior-capsule.png" },
    { src: "/src/assets/desert-oasis-capsules.png" },
    { src: "/src/assets/residential-capsule.jpg" },
  ];

  return (
    <div className="relative h-full w-[120%] -ml-[20%] flex flex-col justify-center gap-6 -z-10">
      <ImageMarqueeRow images={row1Images} speed={30} />
      <ImageMarqueeRow images={row2Images} speed={35} />
      <ImageMarqueeRow images={row3Images} speed={32} />
      <ImageMarqueeRow images={row4Images} speed={38} />
    </div>
  );
};
