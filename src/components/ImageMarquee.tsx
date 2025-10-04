import React from "react";
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
            className={`relative ${image.aspectRatio} h-80 rounded-2xl overflow-hidden shadow-lg bg-gray-200`}
          >
            <img
              src={image.src}
              alt={`Capsule ${index}`}
              className="w-full h-full object-cover transition-opacity duration-500"
              loading="lazy"
              decoding="async"
              style={{
                contentVisibility: "auto",
                containIntrinsicSize: "300px 200px",
              }}
              onLoad={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              onError={(e) => {
                e.currentTarget.parentElement?.classList.add("bg-gray-300");
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const row1Images = [
  {
    src: "/src/assets/modern-interior-capsule.png",
    aspectRatio: "w-60 h-40",
  },
  { src: "/src/assets/desert-oasis-capsules.png", aspectRatio: "w-80 h-30" },
  { src: "/src/assets/residential-capsule.jpg", aspectRatio: "w-56 h-30" },
];

const row2Images = [
  { src: "/src/assets/snowy-forest-capsules.png", aspectRatio: "w-72 h-30" },
  {
    src: "/src/assets/island-paradise-capsules.png",
    aspectRatio: "w-60 h-30",
  },
  {
    src: "/src/assets/creative-studio-capsule.jpg",
    aspectRatio: "w-96 h-30",
  },
];

const row3Images = [
  { src: "/src/assets/eco-resort-capsule.jpg", aspectRatio: "w-56 h-40" },
  { src: "/src/assets/office-capsule.jpg", aspectRatio: "w-80 h-40" },
  { src: "/src/assets/educational-capsule.jpg", aspectRatio: "w-64 h-40" },
];

const row4Images = [
  { src: "/src/assets/retail-capsule.jpg", aspectRatio: "w-72 h-36  " },
  { src: "/src/assets/healthcare-capsule.jpg", aspectRatio: "w-60 h-36" },
  {
    src: "/src/assets/disaster-relief-capsule.jpg",
    aspectRatio: "w-80 h-36",
  },
];

export const ImageMarquee = () => {
  // Preload critical images for faster loading
  React.useEffect(() => {
    const criticalImages = [
      "/src/assets/modern-interior-capsule.png",
      "/src/assets/desert-oasis-capsules.png",
      "/src/assets/residential-capsule.jpg",
      "/src/assets/snowy-forest-capsules.png",
      "/src/assets/island-paradise-capsules.png",
      "/src/assets/creative-studio-capsule.jpg",
    ];

    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="relative h-full w-[150%] -ml-[20%] flex flex-col justify-center gap-4">
      <ImageMarqueeRow images={row1Images} speed={30} />
      <ImageMarqueeRow images={row2Images} speed={35} />
      <ImageMarqueeRow images={row3Images} speed={32} />
      <ImageMarqueeRow images={row4Images} speed={28} />
      {/* <ImageMarqueeRow images={row5Images} speed={33} />
      <ImageMarqueeRow images={row6Images} speed={31} /> */}
    </div>
  );
};
