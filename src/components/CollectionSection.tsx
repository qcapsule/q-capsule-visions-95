"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { capsules } from "@/data/capsules";

export default function CollectionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % capsules.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + capsules.length) % capsules.length);
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-32"
      style={{
        backgroundImage: `url(${capsules[currentIndex].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/5 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-8 border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-white">Capsule Collection</span>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Capsule Collection
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore our complete range of innovative capsule living solutions.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Capsule Cards Carousel */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl">
              {/* Main Capsule Card */}
              <motion.div
                key={currentIndex}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-video relative">
                  <img
                    src={capsules[currentIndex].image}
                    alt={capsules[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
                    {capsules[currentIndex].name}
                  </h3>
                  <p className="text-lg text-white/90 mb-6 drop-shadow-md">
                    {capsules[currentIndex].description}
                  </p>

                  {/* Capsule Features */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        {capsules[currentIndex].size}
                      </div>
                      <div className="text-sm text-white/80">Size</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        {capsules[currentIndex].capacity}
                      </div>
                      <div className="text-sm text-white/80">Capacity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        {capsules[currentIndex].price}
                      </div>
                      <div className="text-sm text-white/80">
                        Starting Price
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Glass Navigation Arrows */}
          <motion.button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 rounded-full p-4 z-20"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 rounded-full p-4 z-20"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {capsules.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
