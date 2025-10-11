import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

// Import capsule images
import residentialImage from "@/assets/residential-capsule.jpg";
import officeImage from "@/assets/office-capsule.jpg";
import healthcareImage from "@/assets/healthcare-capsule.jpg";
import retailImage from "@/assets/retail-capsule.jpg";
import creativeStudioImage from "@/assets/creative-studio-capsule.jpg";
import qCapsuleHeroImage from "@/assets/q-capsule-hero.png";
import floorplanBgImage from "@/assets/floorplan-bg.jpg";
import livingRoomImage from "@/assets/living-room1.png";

interface FloorPlanArea {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  dimensions: string;
  capacity: string;
}

interface FloorPlanSpotlightProps {
  areas: FloorPlanArea[];
  className?: string;
}

export const FloorPlanSpotlight = ({
  areas,
  className = "",
}: FloorPlanSpotlightProps) => {
  const [activeArea, setActiveArea] = useState<FloorPlanArea>(areas[0]);
  const [focusedHotspot, setFocusedHotspot] = useState<string | null>(null);
  const hotspotRefs = useRef<{ [key: string]: SVGRectElement | null }>({});
  const thumbnailRef = useRef<HTMLButtonElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, areaId: string) => {
    const currentIndex = areas.findIndex((area) => area.id === areaId);

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        setActiveArea(areas[currentIndex]);
        break;
      case "ArrowRight":
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % areas.length;
        const nextArea = areas[nextIndex];
        setFocusedHotspot(nextArea.id);
        hotspotRefs.current[nextArea.id]?.focus();
        break;
      case "ArrowLeft":
        e.preventDefault();
        const prevIndex =
          currentIndex === 0 ? areas.length - 1 : currentIndex - 1;
        const prevArea = areas[prevIndex];
        setFocusedHotspot(prevArea.id);
        hotspotRefs.current[prevArea.id]?.focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        // Move to thumbnail rail
        thumbnailRef.current?.focus();
        break;
    }
  };

  // Handle thumbnail navigation
  const handleThumbnailKeyDown = (e: React.KeyboardEvent) => {
    const currentIndex = areas.findIndex((area) => area.id === activeArea.id);

    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % areas.length;
        setActiveArea(areas[nextIndex]);
        break;
      case "ArrowLeft":
        e.preventDefault();
        const prevIndex =
          currentIndex === 0 ? areas.length - 1 : currentIndex - 1;
        setActiveArea(areas[prevIndex]);
        break;
      case "ArrowDown":
        e.preventDefault();
        // Move to first hotspot
        const firstArea = areas[0];
        setFocusedHotspot(firstArea.id);
        hotspotRefs.current[firstArea.id]?.focus();
        break;
    }
  };

  // Auto-scroll thumbnail into view
  useEffect(() => {
    if (thumbnailRef.current) {
      thumbnailRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeArea]);

  return (
    <section
      className={`relative overflow-hidden my-32 ${className} min-h-[100vh]`}
      style={{
        transform: "translateZ(0)",
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary-glow/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, -50, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card text-sm font-medium mb-8 border border-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-gradient">Floor Plan Explorer</span>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-gradient glow-text">Explore Every Space</span>
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Click on any area of the floor plan to discover the features and
            details of each space in our Q Capsule design.
          </motion.p>
        </motion.div>

        {/* Desktop Layout - Column Layout */}
        <div className="space-y-6 mb-16 max-w-4xl mx-auto">
          {/* Area Image */}
          <div className="w-full">
            <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeArea.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-full"
                >
                  <img
                    src={activeArea.image}
                    alt={activeArea.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Area Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1.5 shadow-lg">
                    <div className="text-xs font-semibold text-gray-900">
                      {activeArea.title}
                    </div>
                    <div className="text-xs text-gray-600">
                      {activeArea.dimensions}
                    </div>
                  </div>

                  {/* Glass reflection effect */}
                  <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl"></div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Floor Plan Section */}
          <div className="w-full">
            {/* Floor Plan Container */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 h-[300px] rounded-2xl shadow-2xl">
              <div className="relative w-full h-full bg-gradient-to-br from-muted/5 to-muted/10 rounded-lg overflow-hidden border border-white/5">
                <svg
                  viewBox="0 0 1200 400"
                  className="w-full h-full"
                  role="img"
                  aria-label="Interactive floor plan"
                >
                  {/* Floor Plan Background */}
                  <rect
                    width="1200"
                    height="400"
                    fill="hsl(var(--muted))"
                    className="opacity-10"
                  />

                  {/* Main Unit Outline with Rounded Corners */}
                  <rect
                    x="50"
                    y="50"
                    width="1100"
                    height="300"
                    fill="none"
                    stroke="hsl(var(--foreground))"
                    strokeWidth="2"
                    rx="30"
                    ry="30"
                  />

                  {/* Room Areas - Matching the Blueprint Layout */}
                  {areas.map((area, index) => {
                    const positions = [
                      {
                        x: 50,
                        y: 50,
                        width: 300,
                        height: 300,
                        label: "BED ROOM 1",
                        area: "9 m²",
                      }, // Bedroom 1 (left)
                      {
                        x: 350,
                        y: 50,
                        width: 115,
                        height: 300,
                        label: "BATH",
                        area: "4 m²",
                      }, // Bathroom
                      {
                        x: 465,
                        y: 50,
                        width: 90,
                        height: 300,
                        label: "COR",
                        area: "4 m²",
                      }, // Corridor
                      {
                        x: 555,
                        y: 50,
                        width: 149,
                        height: 300,
                        label: "KIT",
                        area: "2 m²",
                      }, // Kitchen
                      {
                        x: 704,
                        y: 50,
                        width: 146,
                        height: 300,
                        label: "LIVING",
                        area: "Living Area",
                      }, // Living/Dining
                      {
                        x: 850,
                        y: 50,
                        width: 148,
                        height: 300,
                        label: "BALCONY",
                        area: "4 m²",
                      }, // Balcony
                    ];

                    const pos = positions[index] || positions[0];

                    return (
                      <g key={area.id} className="group">
                        {/* Room Background */}
                        <rect
                          x={pos.x}
                          y={pos.y}
                          width={pos.width}
                          height={pos.height}
                          fill={
                            activeArea.id === area.id
                              ? "hsl(var(--primary))"
                              : "hsl(var(--muted))"
                          }
                          fillOpacity={activeArea.id === area.id ? 0.15 : 0.05}
                          stroke={
                            activeArea.id === area.id
                              ? "hsl(var(--primary))"
                              : "hsl(var(--border))"
                          }
                          strokeWidth={activeArea.id === area.id ? "2" : "1"}
                          rx="4"
                          ry="4"
                          className="transition-all duration-300 group-hover:fill-primary/10 group-hover:stroke-primary"
                        />

                        {/* Room Label */}
                        <text
                          x={pos.x + pos.width / 2}
                          y={pos.y + pos.height / 2 - 10}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="text-sm font-bold fill-foreground transition-all duration-300 group-hover:fill-primary"
                          style={{ fontSize: "12px" }}
                        >
                          {pos.label}
                        </text>

                        {/* Area Size */}
                        <text
                          x={pos.x + pos.width / 2}
                          y={pos.y + pos.height / 2 + 10}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="text-xs fill-muted-foreground transition-all duration-300 group-hover:fill-primary"
                          style={{ fontSize: "10px" }}
                        >
                          {pos.area}
                        </text>

                        {/* Room Number Indicator */}
                        <circle
                          cx={pos.x + pos.width - 15}
                          cy={pos.y + 15}
                          r="8"
                          fill={
                            activeArea.id === area.id
                              ? "hsl(var(--primary))"
                              : "hsl(var(--muted-foreground))"
                          }
                          className="transition-all duration-300 group-hover:fill-primary"
                        />
                        <text
                          x={pos.x + pos.width - 15}
                          y={pos.y + 15}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="text-xs font-bold fill-background"
                          style={{ fontSize: "10px" }}
                        >
                          {index + 1}
                        </text>

                        {/* Clickable Area */}
                        <rect
                          x={pos.x}
                          y={pos.y}
                          width={pos.width}
                          height={pos.height}
                          fill="transparent"
                          className="cursor-pointer transition-all duration-300"
                          onClick={() => setActiveArea(area)}
                          onKeyDown={(e) => handleKeyDown(e, area.id)}
                          tabIndex={0}
                          role="button"
                          aria-label={`Select ${area.title}`}
                          ref={(el) => (hotspotRefs.current[area.id] = el)}
                          data-hotspot={area.id}
                        />
                      </g>
                    );
                  })}

                  {/* Interior Walls */}
                  <g className="opacity-80">
                    {/* Vertical walls separating rooms */}
                    <line
                      x1="350"
                      y1="50"
                      x2="350"
                      y2="350"
                      stroke="hsl(var(--foreground))"
                      strokeWidth="2"
                    />
                    <line
                      x1="465"
                      y1="50"
                      x2="465"
                      y2="350"
                      stroke="hsl(var(--foreground))"
                      strokeWidth="2"
                    />
                    <line
                      x1="555"
                      y1="50"
                      x2="555"
                      y2="350"
                      stroke="hsl(var(--foreground))"
                      strokeWidth="2"
                    />
                    <line
                      x1="704"
                      y1="50"
                      x2="704"
                      y2="350"
                      stroke="hsl(var(--foreground))"
                      strokeWidth="2"
                    />
                    <line
                      x1="850"
                      y1="50"
                      x2="850"
                      y2="350"
                      stroke="hsl(var(--foreground))"
                      strokeWidth="2"
                    />
                  </g>

                  {/* Doors */}
                  <g className="opacity-80">
                    {/* Door from corridor to bedroom */}
                    <rect
                      x="350"
                      y="200"
                      width="8"
                      height="20"
                      fill="hsl(var(--foreground))"
                      rx="2"
                    />
                    {/* Door from corridor to bathroom */}
                    <rect
                      x="350"
                      y="120"
                      width="8"
                      height="20"
                      fill="hsl(var(--foreground))"
                      rx="2"
                    />
                    {/* Door from corridor to kitchen */}
                    <rect
                      x="555"
                      y="200"
                      width="8"
                      height="20"
                      fill="hsl(var(--foreground))"
                      rx="2"
                    />
                    {/* Door from living to balcony */}
                    <rect
                      x="850"
                      y="200"
                      width="8"
                      height="20"
                      fill="hsl(var(--foreground))"
                      rx="2"
                    />
                  </g>

                  {/* Furniture and Fixtures */}
                  <g className="opacity-60">
                    {/* Bed in Bedroom 1 */}
                    <rect
                      x="80"
                      y="200"
                      width="200"
                      height="80"
                      fill="hsl(var(--primary))"
                      fillOpacity="0.3"
                      rx="4"
                    />

                    {/* Closet in Bedroom 1 */}
                    <rect
                      x="300"
                      y="80"
                      width="30"
                      height="200"
                      fill="hsl(var(--primary))"
                      fillOpacity="0.3"
                      rx="2"
                    />

                    {/* Toilet and Shower in Bathroom */}
                    <circle
                      cx="400"
                      cy="150"
                      r="15"
                      fill="hsl(var(--primary))"
                      fillOpacity="0.3"
                    />
                    <rect
                      x="420"
                      y="130"
                      width="30"
                      height="40"
                      fill="hsl(var(--primary))"
                      fillOpacity="0.3"
                      rx="2"
                    />

                    {/* Kitchen sink and appliances */}
                    <rect
                      x="580"
                      y="200"
                      width="60"
                      height="40"
                      fill="hsl(var(--primary))"
                      fillOpacity="0.3"
                      rx="2"
                    />
                    <circle
                      cx="600"
                      cy="180"
                      r="8"
                      fill="hsl(var(--primary))"
                      fillOpacity="0.3"
                    />
                    <circle
                      cx="620"
                      cy="180"
                      r="8"
                      fill="hsl(var(--primary))"
                      fillOpacity="0.3"
                    />

                    {/* Living room furniture */}
                    <rect
                      x="750"
                      y="250"
                      width="120"
                      height="60"
                      fill="hsl(var(--primary))"
                      fillOpacity="0.3"
                      rx="4"
                    />
                    <circle
                      cx="780"
                      cy="200"
                      r="20"
                      fill="hsl(var(--primary))"
                      fillOpacity="0.3"
                    />
                    <rect
                      x="760"
                      y="180"
                      width="40"
                      height="20"
                      fill="hsl(var(--primary))"
                      fillOpacity="0.3"
                      rx="2"
                    />

                    {/* Balcony furniture */}
                    <circle
                      cx="920"
                      cy="200"
                      r="20"
                      fill="hsl(var(--primary))"
                      fillOpacity="0.3"
                    />
                  </g>

                  {/* Main Entrance */}
                  <g className="opacity-80">
                    <rect
                      x="500"
                      y="350"
                      width="40"
                      height="8"
                      fill="hsl(var(--foreground))"
                      rx="2"
                    />
                    <text
                      x="520"
                      y="375"
                      textAnchor="middle"
                      className="text-xs fill-foreground"
                      style={{ fontSize: "10px" }}
                    >
                      ENTRANCE
                    </text>
                  </g>
                </svg>

                {/* Focus indicator */}
                {focusedHotspot && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {(() => {
                      const focusedIndex = areas.findIndex(
                        (a) => a.id === focusedHotspot
                      );
                      const positions = [
                        { x: 50, y: 50, width: 300, height: 300 },
                        { x: 350, y: 50, width: 115, height: 300 },
                        { x: 465, y: 50, width: 90, height: 300 },
                        { x: 555, y: 50, width: 149, height: 300 },
                        { x: 704, y: 50, width: 146, height: 300 },
                        { x: 850, y: 50, width: 148, height: 300 },
                      ];
                      const pos = positions[focusedIndex] || positions[0];
                      return (
                        <div
                          className="absolute border-2 border-primary rounded-lg animate-pulse"
                          style={{
                            left: pos.x,
                            top: pos.y,
                            width: pos.width,
                            height: pos.height,
                          }}
                        />
                      );
                    })()}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-4">
          {/* Thumbnail Rail */}
          <div className="relative">
            <h3 className="text-lg font-light text-white mb-3">
              Floor Plan Areas
            </h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {areas.map((area) => (
                <motion.button
                  key={area.id}
                  ref={area.id === activeArea.id ? thumbnailRef : null}
                  onClick={() => setActiveArea(area)}
                  onKeyDown={handleThumbnailKeyDown}
                  tabIndex={0}
                  className={`flex-shrink-0 w-28 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeArea.id === area.id
                      ? "border-primary shadow-lg"
                      : "border-border/50 hover:border-primary/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-1 left-2 right-2">
                    <p className="text-xs font-medium text-white truncate">
                      {area.title}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Active Area Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArea.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-4 border border-border/50"
              >
                <div className="relative mb-3 rounded-lg overflow-hidden h-full">
                  <img
                    src={activeArea.image}
                    alt={activeArea.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 left-2 text-white">
                    <h2 className="text-xl font-light">{activeArea.title}</h2>
                    <p className="text-xs opacity-90 font-light">
                      {activeArea.dimensions}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-white/80 text-xs leading-relaxed font-light">
                    {activeArea.description}
                  </p>

                  <div>
                    <h4 className="font-light mb-2 text-white text-sm">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {activeArea.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-xs"
                        >
                          <div className="w-1 h-1 bg-white rounded-full" />
                          <span className="font-light text-white/90">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/20">
                    <div>
                      <p className="text-xs text-white/70 font-light">
                        Dimensions
                      </p>
                      <p className="text-xs font-light text-white">
                        {activeArea.dimensions}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-white/70 font-light">
                        Capacity
                      </p>
                      <p className="text-xs font-light text-white">
                        {activeArea.capacity}
                      </p>
                    </div>
                  </div>

                  <button className="w-full bg-white text-black px-3 py-2 rounded-lg font-light hover:bg-gray-200 transition-all duration-300 text-xs">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// Example usage with sample data
export const FloorPlanSpotlightExample = () => {
  const sampleAreas: FloorPlanArea[] = [
    {
      id: "bedroom-1",
      title: "Bedroom 1",
      description:
        "Spacious bedroom with a large bed and built-in closet. Features natural lighting and a peaceful environment for rest and relaxation.",
      image: residentialImage,
      features: [
        "Large bed",
        "Built-in closet",
        "Natural lighting",
        "Peaceful environment",
      ],
      dimensions: "9 m²",
      capacity: "2 people",
    },
    {
      id: "bathroom",
      title: "Bathroom",
      description:
        "Modern bathroom with contemporary fixtures and efficient layout. Features a toilet, sink, and shower area with clean, functional design.",
      image: healthcareImage,
      features: [
        "Toilet and sink",
        "Shower area",
        "Modern fixtures",
        "Efficient layout",
      ],
      dimensions: "4 m²",
      capacity: "1 person",
    },
    {
      id: "corridor",
      title: "Corridor",
      description:
        "Central corridor providing access to all areas of the capsule. Features efficient circulation and connects all living spaces seamlessly.",
      image: retailImage,
      features: [
        "Central access",
        "Efficient circulation",
        "Seamless connection",
        "Main entrance",
      ],
      dimensions: "4 m²",
      capacity: "1-2 people",
    },
    {
      id: "kitchen",
      title: "Kitchen",
      description:
        "Compact yet fully functional kitchen with modern appliances and efficient layout. Features a sink with dual basins and cooktop for meal preparation.",
      image: officeImage,
      features: [
        "Dual basin sink",
        "Cooktop with burners",
        "Efficient layout",
        "Modern appliances",
      ],
      dimensions: "2 m²",
      capacity: "1-2 people",
    },
    {
      id: "living-room",
      title: "Living Area",
      description:
        "Spacious living and dining area with modern finishes and natural lighting. Features comfortable seating and dining space perfect for relaxation and socializing.",
      image: residentialImage,
      features: [
        "Open concept design",
        "Dining area",
        "Modern finishes",
        "Entertainment space",
      ],
      dimensions: "Living Area",
      capacity: "4-6 people",
    },
    {
      id: "balcony",
      title: "Balcony",
      description:
        "Outdoor balcony space with seating area. Features a table and chairs for outdoor dining and relaxation with beautiful views.",
      image: creativeStudioImage,
      features: [
        "Outdoor seating",
        "Dining table",
        "Fresh air access",
        "Scenic views",
      ],
      dimensions: "4 m²",
      capacity: "2-4 people",
    },
  ];

  return <FloorPlanSpotlight areas={sampleAreas} />;
};
