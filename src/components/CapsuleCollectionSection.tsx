import { motion } from "framer-motion";
import { useState, useCallback, useEffect, forwardRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import q56xCapsuleImage from "@/assets/q56x-capsule2.png";
import q75xCapsuleImage from "@/assets/q75x-capsule2.png";
import q95xCapsuleImage from "@/assets/q95x-capsule.png";
import q115xCapsuleImage from "@/assets/q115x-capsule1.png";

// Complete capsule catalog data
const allCapsules = [
  {
    id: "q56x",
    name: "Q56X",
    size: "18m²",
    dimensions: "3.2 x 3.2 x 5.6m",
    rooms: "1 Room",
    image: q56xCapsuleImage,
  },
  {
    id: "q75x",
    name: "Q75X",
    size: "24m²",
    dimensions: "3.2 x 3.2 x 7.5m",
    rooms: "2 Rooms",
    image: q75xCapsuleImage,
  },
  {
    id: "q95x",
    name: "Q95X",
    size: "30m²",
    dimensions: "3.2 x 3.2 x 9.5m",
    rooms: "2 Rooms + Deck",
    image: q95xCapsuleImage,
  },
  {
    id: "q115x",
    name: "Q115X",
    size: "38m²",
    dimensions: "3.2 x 3.2 x 11.5m",
    rooms: "3 Rooms",
    image: q115xCapsuleImage,
  },
];

export const CapsuleCollectionSection = forwardRef<HTMLElement>(
  (props, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(4); // Show 4 cards at once

    // Check for return capsule on component mount
    useEffect(() => {
      const returnToCapsule = localStorage.getItem("returnToCapsule");
      if (returnToCapsule) {
        const capsuleIndex = allCapsules.findIndex(
          (capsule) =>
            capsule.name.toLowerCase() === returnToCapsule.toLowerCase()
        );
        if (capsuleIndex !== -1) {
          setCurrentIndex(capsuleIndex);
        }
        localStorage.removeItem("returnToCapsule");
      }
    }, []);

    // Responsive: show fewer cards on smaller screens
    useEffect(() => {
      const updateVisibleCards = () => {
        if (window.innerWidth < 768) {
          setVisibleCards(1);
        } else if (window.innerWidth < 1024) {
          setVisibleCards(2);
        } else {
          setVisibleCards(4);
        }
      };
      updateVisibleCards();
      window.addEventListener("resize", updateVisibleCards);
      return () => window.removeEventListener("resize", updateVisibleCards);
    }, []);

    const nextCapsule = useCallback(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, allCapsules.length - visibleCards);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, [visibleCards]);

    const prevCapsule = useCallback(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, allCapsules.length - visibleCards);
        return prev <= 0 ? maxIndex : prev - 1;
      });
    }, [visibleCards]);

    const navigateToCapsulePage = (capsuleName: string) => {
      const route = `/capsules/${capsuleName.toLowerCase()}?from=${capsuleName.toLowerCase()}`;
      window.location.href = route;
    };

    const scrollToSection = (id: string) => {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Get visible capsules based on current index
    const visibleCapsules = allCapsules.slice(
      currentIndex,
      currentIndex + visibleCards
    );

    return (
      <section
        ref={ref}
        id="capsule-collection"
        className="relative min-h-screen flex flex-col py-16 lg:py-24 bg-gray-100"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 lg:mb-16">
            {/* Top Left - Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 lg:mb-0"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Catalog of Our Capsules
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                for 2024
              </p>
            </motion.div>

            {/* Top Right - Description */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:max-w-md lg:text-right"
            >
              <p className="text-base sm:text-lg text-gray-700">
                Modern modular capsule technology at the peak of innovation,
                designed for sustainable living and exceptional comfort.
              </p>
            </motion.div>
          </div>

          {/* Capsule Cards Grid */}
          <div className="relative mb-12">
            {/* Desktop: Show all capsules */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-6 lg:gap-8">
              {allCapsules.map((capsule, idx) => (
                <motion.div
                  key={capsule.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => navigateToCapsulePage(capsule.name)}
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/* Capsule Image */}
                    <div className="relative h-64 lg:h-80 overflow-hidden bg-gray-200">
                      <img
                        src={capsule.image}
                        alt={capsule.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Capsule Info */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                        {capsule.name}
                      </h3>
                      <p className="text-lg text-gray-700 mb-2 font-medium">
                        {capsule.size}
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        {capsule.rooms}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile/Tablet: Carousel view */}
            <div className="lg:hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {visibleCapsules.map((capsule, idx) => (
                  <motion.div
                    key={capsule.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => navigateToCapsulePage(capsule.name)}
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      {/* Capsule Image */}
                      <div className="relative h-64 md:h-72 overflow-hidden bg-gray-200">
                        <img
                          src={capsule.image}
                          alt={capsule.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Capsule Info */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {capsule.name}
                        </h3>
                        <p className="text-lg text-gray-700 mb-2 font-medium">
                          {capsule.size}
                        </p>
                        <p className="text-sm text-gray-600 mb-4">
                          {capsule.rooms}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="flex items-center justify-between">
            {/* Bottom Left - View Catalog Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Button
                onClick={() => {
                  // Scroll to booking section or show more info
                  const bookingSection = document.querySelector("#booking");
                  if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center gap-2"
              >
                Explore Collection
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>

            {/* Bottom Right - Navigation Arrows (only on mobile/tablet) */}
            {visibleCards < allCapsules.length && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3"
              >
                <button
                  onClick={prevCapsule}
                  className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-sm"
                  aria-label="Previous capsules"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                  onClick={nextCapsule}
                  className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-sm"
                  aria-label="Next capsules"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    );
  }
);

CapsuleCollectionSection.displayName = "CapsuleCollectionSection";
