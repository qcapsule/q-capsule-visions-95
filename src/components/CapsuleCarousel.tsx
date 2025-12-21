"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Capsule = {
  id: string;
  name: string; // e.g., "Q75X"
  sizeLabel: string; // e.g., "3 Rooms"
  dimensions: string; // e.g., "30m² Total"
  rooms: string; // e.g., "Bed/Living/Bath"
  blurb: string; // 1–2 sentence description
  features: string[]; // bullet list
  images: string[]; // URLs for inner carousel
};

interface CapsuleCarouselProps {
  items: Capsule[];
}

// Inner Image Carousel Component
const ImageCarousel = ({
  images,
  capsuleName,
}: {
  images: string[];
  capsuleName: string;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className="relative group will-change-transform h-full">
      {/* Main Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={`${capsuleName}-${currentImageIndex}`}
          src={images[currentImageIndex]}
          alt={`${capsuleName} – image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover will-change-transform"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          style={{
            transform: "translateZ(0)", // Force GPU layer
            backfaceVisibility: "hidden",
          }}
          loading="lazy"
        />
      </AnimatePresence>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 will-change-transform"
            style={{
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 will-change-transform"
            style={{
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Image Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// New Carousel Navigation Component
const CarouselNavigation = ({
  items,
  currentIndex,
  onSelect,
}: {
  items: Capsule[];
  currentIndex: number;
  onSelect: (index: number) => void;
}) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Circular Indicators */}
      <div className="flex space-x-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 scale-110"
                : "bg-white/20 border border-white/30 hover:bg-white/30"
            }`}
            aria-label={`Go to capsule ${index + 1}`}
          />
        ))}
      </div>

      {/* Pill-shaped Container */}
      <div className="relative">
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 shadow-lg">
          <div className="flex space-x-6">
            {items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => onSelect(index)}
                className={`text-sm font-semibold transition-all duration-300 ${
                  index === currentIndex
                    ? "text-gradient glow-text"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CapsuleCarousel({ items }: CapsuleCarouselProps) {
  const [currentCapsuleIndex, setCurrentCapsuleIndex] = useState(0);
  const currentCapsule = items[currentCapsuleIndex];

  const nextCapsule = useCallback(() => {
    setCurrentCapsuleIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevCapsule = useCallback(() => {
    setCurrentCapsuleIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const selectCapsule = useCallback((index: number) => {
    setCurrentCapsuleIndex(index);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevCapsule();
      } else if (e.key === "ArrowRight") {
        nextCapsule();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextCapsule, prevCapsule]);

  if (!items.length) return null;

  return (
    <div className="space-y-3 mb-12">
      {/* Desktop Layout: Two Columns */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
        {/* Left Column - Content */}
        <div className="space-y-8">
          {/* Capsule Name */}
          <div className="relative">
            <motion.h2
              key={currentCapsule.id}
              className="text-6xl lg:text-8xl font-black italic leading-none relative z-10 mt-2 will-change-transform text-gradient glow-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              style={{
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                willChange: "transform, opacity",
              }}
            >
              {currentCapsule.name}
            </motion.h2>

            {/* Specifications Row */}
            <motion.div
              className="flex justify-between mt-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  Size
                </div>
                <div className="text-lg font-semibold text-foreground mt-1">
                  {currentCapsule.sizeLabel}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  Dimensions
                </div>
                <div className="text-lg font-semibold text-foreground mt-1">
                  {currentCapsule.dimensions}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  Rooms
                </div>
                <div className="text-lg font-semibold text-foreground mt-1">
                  {currentCapsule.rooms}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            key={`desc-${currentCapsule.id}`}
            className="text-xl text-muted-foreground leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {currentCapsule.blurb}
          </motion.p>

          {/* Features */}
          <motion.div
            key={`features-${currentCapsule.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              Premium Features
            </h3>
            <div className="space-y-3">
              {currentCapsule.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center space-x-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-1 h-1 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-muted-foreground font-light tracking-wide">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Image Carousel */}
        <div className="relative">
          {/* Image Container - blends with background */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/20 bg-gradient-to-br from-background/10 via-transparent to-background/10 backdrop-blur-sm will-change-transform">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCapsule.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.8,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="h-full will-change-transform"
                style={{
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              >
                <ImageCarousel
                  images={currentCapsule.images}
                  capsuleName={currentCapsule.name}
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Mobile Layout: Stacked */}
      <div className="lg:hidden space-y-6">
        {/* Image First on Mobile */}
        <div className="relative">
          <div className="absolute top-4 left-4 z-20 glass-card p-3 backdrop-blur-xl border border-white/20 rounded-2xl">
            <div className="text-white text-xs font-semibold">
              Q Capsule {currentCapsule.name}
            </div>
          </div>

          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl border border-border/20 bg-gradient-to-br from-background/10 via-transparent to-background/10 backdrop-blur-sm will-change-transform">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCapsule.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.8,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="h-full will-change-transform"
                style={{
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              >
                <ImageCarousel
                  images={currentCapsule.images}
                  capsuleName={currentCapsule.name}
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Content Below Image */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-foreground mb-2">
              {currentCapsule.name}
            </h3>
            <div className="flex justify-center space-x-6 text-sm">
              <span className="text-muted-foreground">
                {currentCapsule.sizeLabel}
              </span>
              <span className="text-muted-foreground">
                {currentCapsule.dimensions}
              </span>
              <span className="text-muted-foreground">
                {currentCapsule.rooms}
              </span>
            </div>
          </div>

          <p className="text-muted-foreground text-center leading-relaxed">
            {currentCapsule.blurb}
          </p>

          <div className="text-center">
            <h4 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Premium Features
            </h4>
            <div className="space-y-2">
              {currentCapsule.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center justify-center space-x-2"
                >
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={nextCapsule}
              className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:shadow-glow transition-all duration-300"
            >
              Explore Collection
            </button>
          </div>
        </div>
      </div>

      {/* New Carousel Navigation */}
      <CarouselNavigation
        items={items}
        currentIndex={currentCapsuleIndex}
        onSelect={selectCapsule}
      />
    </div>
  );
}
