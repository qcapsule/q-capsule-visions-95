import React from "react";
import { motion } from "framer-motion";

interface ImageMarqueeRowProps {
  images: { src: string; aspectRatio: string }[];
  speed?: number;
}

const ImageMarqueeRow = ({ images, speed }: ImageMarqueeRowProps) => {
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
        {[...images, ...images, ...images].map((image, index) => (
          <img
            key={`${image.src}-${index}`}
            src={image.src}
            alt={`Capsule ${index}`}
            className={`${image.aspectRatio} rounded-2xl overflow-hidden shadow-lg`}
            loading="eager"
            decoding="async"
            style={{
              contentVisibility: "auto",
              containIntrinsicSize: "300px 200px",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

const row1Images = [
  {
    src: "/src/assets/modern-interior-capsule.png",
    aspectRatio: "w-56 h-40",
  },
  { src: "/src/assets/desert-oasis-capsules.png", aspectRatio: "w-52 h-40" },
  { src: "/src/assets/residential-capsule.jpg", aspectRatio: "w-60 h-40" },
];

const row2Images = [
  { src: "/src/assets/snowy-forest-capsules.png", aspectRatio: "w-56 h-40" },
  { src: "/src/assets/island-paradise-capsules.png", aspectRatio: "w-52 h-40" },
  { src: "/src/assets/creative-studio-capsule.jpg", aspectRatio: "w-52 h-40" },
];

const row3Images = [
  { src: "/src/assets/eco-resort-capsule.jpg", aspectRatio: "w-60 h-40" },
  { src: "/src/assets/office-capsule.jpg", aspectRatio: "w-52 h-40" },
  { src: "/src/assets/educational-capsule.jpg", aspectRatio: "w-80 h-40" },
];

const row4Images = [
  { src: "/src/assets/retail-capsule.jpg", aspectRatio: "w-60 h-36  " },
  { src: "/src/assets/healthcare-capsule.jpg", aspectRatio: "w-52 h-36" },
  { src: "/src/assets/disaster-relief-capsule.jpg", aspectRatio: "w-60 h-36" },
];

export const ImageMarquee = () => {
  // Preload all images to prevent loading delays on loop
  React.useEffect(() => {
    const allImages = [
      ...row1Images,
      ...row2Images,
      ...row3Images,
      ...row4Images,
    ];
    allImages.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  }, []);

  return (
    <div className="relative h-full w-[150%] -ml-[20%] flex flex-col justify-center gap-4">
      <ImageMarqueeRow images={row1Images} speed={25} />
      <ImageMarqueeRow images={row2Images} speed={28} />
      <ImageMarqueeRow images={row3Images} speed={31} />
      <ImageMarqueeRow images={row4Images} speed={34} />
      {/* <ImageMarqueeRow images={row5Images} speed={37} />
      <ImageMarqueeRow images={row6Images} speed={40} /> */}
    </div>
  );
};
