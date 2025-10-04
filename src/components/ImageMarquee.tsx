import React from "react";
import { motion } from "framer-motion";
import { memo } from "react";
import modernInterior from "@/assets/modern-interior-capsule.png";
import desertOasis from "@/assets/desert-oasis-capsules.png";
import residential from "@/assets/residential-capsule.jpg";
import snowyForest from "@/assets/snowy-forest-capsules.png";
import islandParadise from "@/assets/island-paradise-capsules.png";
import creativeStudio from "@/assets/creative-studio-capsule.jpg";
import ecoResort from "@/assets/eco-resort-capsule.jpg";
import office from "@/assets/office-capsule.jpg";
import educational from "@/assets/educational-capsule.jpg";
import retail from "@/assets/retail-capsule.jpg";
import healthcare from "@/assets/healthcare-capsule.jpg";
import disasterRelief from "@/assets/disaster-relief-capsule.jpg";
import secureBanking from "@/assets/secure-banking-capsule.jpg";
import q56x from "@/assets/q56x-capsule.png";
import q75x from "@/assets/q75x-capsule.png";
import q95x from "@/assets/q95x-capsule.png";
import q115x from "@/assets/q115x-capsule.png";
import livingRoom from "@/assets/living-room1.png";

const row1Images = [
  { src: modernInterior, aspectRatio: "w-60 h-40" },
  { src: desertOasis, aspectRatio: "w-80 h-40" },
  { src: residential, aspectRatio: "w-56 h-40" },
];

const row2Images = [
  { src: snowyForest, aspectRatio: "w-72 h-40" },
  { src: islandParadise, aspectRatio: "w-60 h-40" },
  { src: creativeStudio, aspectRatio: "w-96 h-40" },
];

const row3Images = [
  { src: ecoResort, aspectRatio: "w-56 h-40" },
  { src: office, aspectRatio: "w-80 h-40" },
  { src: educational, aspectRatio: "w-64 h-40" },
];

const row4Images = [
  { src: retail, aspectRatio: "w-72 h-36" },
  { src: healthcare, aspectRatio: "w-60 h-36" },
  { src: disasterRelief, aspectRatio: "w-80 h-36" },
];

interface ImageMarqueeRowProps {
  images: { src: string; aspectRatio: string; customClass?: string }[];
  speed?: number;
}

const ImageMarqueeRow = memo(({ images, speed = 40 }: ImageMarqueeRowProps) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        style={{
          animation: `marquee ${speed}s linear infinite`,
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
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
});

ImageMarqueeRow.displayName = "ImageMarqueeRow";

export const ImageMarquee = memo(() => {
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
});

ImageMarquee.displayName = "ImageMarquee";
