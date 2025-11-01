import { useState } from "react";
import { motion } from "framer-motion";
import {
  Maximize2,
  Minimize2,
  RotateCcw,
  Home,
  Bed,
  Bath,
  Car,
  Utensils,
} from "lucide-react";

interface FloorPlanProps {
  className?: string;
}

export const Q56XFloorPlan = ({ className = "" }: FloorPlanProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [rotation, setRotation] = useState(0);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const resetRotation = () => {
    setRotation(0);
  };

  const rotatePlan = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const roomData = [
    {
      id: "living",
      name: "Living Area",
      area: "18.5 m²",
      icon: Home,
      color: "bg-blue-500/20",
      borderColor: "border-blue-400/50",
    },
    {
      id: "kitchen",
      name: "Kitchen",
      area: "8.2 m²",
      icon: Utensils,
      color: "bg-green-500/20",
      borderColor: "border-green-400/50",
    },
    {
      id: "bedroom",
      name: "Bedroom",
      area: "12.8 m²",
      icon: Bed,
      color: "bg-purple-500/20",
      borderColor: "border-purple-400/50",
    },
    {
      id: "bathroom",
      name: "Bathroom",
      area: "4.5 m²",
      icon: Bath,
      color: "bg-orange-500/20",
      borderColor: "border-orange-400/50",
    },
    {
      id: "storage",
      name: "Storage",
      area: "3.0 m²",
      icon: Car,
      color: "bg-gray-500/20",
      borderColor: "border-gray-400/50",
    },
  ];

  const FloorPlanContent = () => (
    <div className="relative w-full h-full bg-gray-800/30 rounded-2xl overflow-hidden">
      {/* Floor Plan SVG */}
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.5s ease",
        }}
      >
        {/* Living Area */}
        <rect
          x="50"
          y="50"
          width="200"
          height="120"
          fill="rgba(59, 130, 246, 0.2)"
          stroke="rgba(59, 130, 246, 0.5)"
          strokeWidth="2"
          rx="8"
        />
        <text
          x="150"
          y="110"
          textAnchor="middle"
          className="fill-white text-sm font-medium"
        >
          Living Area
        </text>
        <text
          x="150"
          y="125"
          textAnchor="middle"
          className="fill-white/70 text-xs"
        >
          18.5 m²
        </text>

        {/* Kitchen */}
        <rect
          x="50"
          y="180"
          width="90"
          height="70"
          fill="rgba(34, 197, 94, 0.2)"
          stroke="rgba(34, 197, 94, 0.5)"
          strokeWidth="2"
          rx="8"
        />
        <text
          x="95"
          y="210"
          textAnchor="middle"
          className="fill-white text-sm font-medium"
        >
          Kitchen
        </text>
        <text
          x="95"
          y="225"
          textAnchor="middle"
          className="fill-white/70 text-xs"
        >
          8.2 m²
        </text>

        {/* Bedroom */}
        <rect
          x="150"
          y="180"
          width="100"
          height="70"
          fill="rgba(168, 85, 247, 0.2)"
          stroke="rgba(168, 85, 247, 0.5)"
          strokeWidth="2"
          rx="8"
        />
        <text
          x="200"
          y="210"
          textAnchor="middle"
          className="fill-white text-sm font-medium"
        >
          Bedroom
        </text>
        <text
          x="200"
          y="225"
          textAnchor="middle"
          className="fill-white/70 text-xs"
        >
          12.8 m²
        </text>

        {/* Bathroom */}
        <rect
          x="260"
          y="50"
          width="60"
          height="80"
          fill="rgba(249, 115, 22, 0.2)"
          stroke="rgba(249, 115, 22, 0.5)"
          strokeWidth="2"
          rx="8"
        />
        <text
          x="290"
          y="90"
          textAnchor="middle"
          className="fill-white text-sm font-medium"
        >
          Bathroom
        </text>
        <text
          x="290"
          y="105"
          textAnchor="middle"
          className="fill-white/70 text-xs"
        >
          4.5 m²
        </text>

        {/* Storage */}
        <rect
          x="260"
          y="140"
          width="60"
          height="60"
          fill="rgba(107, 114, 128, 0.2)"
          stroke="rgba(107, 114, 128, 0.5)"
          strokeWidth="2"
          rx="8"
        />
        <text
          x="290"
          y="170"
          textAnchor="middle"
          className="fill-white text-sm font-medium"
        >
          Storage
        </text>
        <text
          x="290"
          y="185"
          textAnchor="middle"
          className="fill-white/70 text-xs"
        >
          3.0 m²
        </text>

        {/* Dimensions */}
        <text
          x="200"
          y="20"
          textAnchor="middle"
          className="fill-white/60 text-xs"
        >
          7.2m × 5.6m Total Area
        </text>
        <text
          x="200"
          y="280"
          textAnchor="middle"
          className="fill-white/60 text-xs"
        >
          Q56X Floor Plan
        </text>
      </svg>

      {/* Interactive Controls */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={rotatePlan}
          className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          title="Rotate Plan"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
        <button
          onClick={resetRotation}
          className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          title="Reset View"
        >
          <Minimize2 className="h-4 w-4" />
        </button>
        <button
          onClick={toggleFullscreen}
          className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          title="Toggle Fullscreen"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>

      {/* Room Legend */}
      <div className="absolute bottom-4 left-4 bg-black/20 backdrop-blur-sm rounded-lg p-4">
        <h4 className="text-white text-sm font-medium mb-3">Room Legend</h4>
        <div className="space-y-2">
          {roomData.map((room) => (
            <div key={room.id} className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded ${room.color} ${room.borderColor} border`}
              />
              <span className="text-white/80 text-xs">{room.name}</span>
              <span className="text-white/60 text-xs ml-auto">{room.area}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (isFullscreen) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={toggleFullscreen}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="w-full h-full max-w-6xl max-h-[90vh] bg-gray-900/50 backdrop-blur-md border border-white/20 rounded-3xl p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">
              Q56X Floor Plan - Fullscreen
            </h3>
            <button
              onClick={toggleFullscreen}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <Minimize2 className="h-4 w-4" />
            </button>
          </div>
          <FloorPlanContent />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div
      className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Q56X Floor Plan
          </h3>
          <p className="text-white/70">Interactive layout and dimensions</p>
        </div>
        <button
          onClick={toggleFullscreen}
          className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>
      <FloorPlanContent />
    </div>
  );
};
