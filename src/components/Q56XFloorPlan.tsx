import { useState } from "react";
import { motion } from "framer-motion";
import {
  Maximize2,
  Minimize2,
  RotateCcw,
  Bed,
  Bath,
  Utensils,
  Home,
  DoorOpen,
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
      id: "bedroom1",
      name: "Bedroom 1",
      area: "9 m²",
      icon: Bed,
      color: "bg-purple-500/20",
      borderColor: "border-purple-400/50",
    },
    {
      id: "bathroom",
      name: "Bathroom",
      area: "4 m²",
      icon: Bath,
      color: "bg-orange-500/20",
      borderColor: "border-orange-400/50",
    },
    {
      id: "corridor",
      name: "Corridor",
      area: "4 m²",
      icon: DoorOpen,
      color: "bg-gray-500/20",
      borderColor: "border-gray-400/50",
    },
    {
      id: "kitchen",
      name: "Kitchen",
      area: "2 m²",
      icon: Utensils,
      color: "bg-green-500/20",
      borderColor: "border-green-400/50",
    },
    {
      id: "living",
      name: "Living Area",
      area: "Variable",
      icon: Home,
      color: "bg-blue-500/20",
      borderColor: "border-blue-400/50",
    },
    {
      id: "balcony",
      name: "Balcony",
      area: "4 m²",
      icon: DoorOpen,
      color: "bg-teal-500/20",
      borderColor: "border-teal-400/50",
    },
  ];

  const FloorPlanContent = () => (
    <div className="relative w-full h-full bg-gray-800/30 rounded-2xl overflow-hidden">
      {/* Floor Plan SVG - Horizontal Layout */}
      <svg
        viewBox="0 0 1000 400"
        className="w-full h-full"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.5s ease",
        }}
      >
        {/* Outer Capsule Structure - Rounded Rectangle */}
        <rect
          x="20"
          y="60"
          width="960"
          height="280"
          fill="rgba(20, 20, 20, 0.3)"
          stroke="rgba(59, 130, 246, 0.6)"
          strokeWidth="3"
          rx="38"
          ry="38"
        />

        {/* Left End - Bedroom 1 (9 m²) */}
        <rect
          x="40"
          y="80"
          width="220"
          height="240"
          fill="rgba(168, 85, 247, 0.2)"
          stroke="rgba(168, 85, 247, 0.5)"
          strokeWidth="2"
          rx="8"
        />
        <text
          x="150"
          y="130"
          textAnchor="middle"
          className="fill-white text-sm font-bold"
        >
          BED ROOM 1
        </text>
        <text
          x="150"
          y="150"
          textAnchor="middle"
          className="fill-white/80 text-xs"
        >
          9 m²
        </text>
        {/* Bed in Bedroom */}
        <rect
          x="60"
          y="180"
          width="180"
          height="120"
          fill="rgba(59, 130, 246, 0.4)"
          stroke="rgba(59, 130, 246, 0.6)"
          strokeWidth="1.5"
          rx="4"
        />
        <text
          x="150"
          y="250"
          textAnchor="middle"
          className="fill-white/70 text-xs"
        >
          3000
        </text>
        {/* Door to Bedroom */}
        <path
          d="M 260 200 A 30 30 0 0 1 260 260"
          fill="none"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="2"
        />
        <line
          x1="260"
          y1="200"
          x2="260"
          y2="260"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="2"
        />

        {/* Bathroom (4 m²) */}
        <rect
          x="280"
          y="80"
          width="140"
          height="120"
          fill="rgba(249, 115, 22, 0.2)"
          stroke="rgba(249, 115, 22, 0.5)"
          strokeWidth="2"
          rx="8"
        />
        <text
          x="350"
          y="130"
          textAnchor="middle"
          className="fill-white text-sm font-bold"
        >
          BATH
        </text>
        <text
          x="350"
          y="150"
          textAnchor="middle"
          className="fill-white/80 text-xs"
        >
          4 m²
        </text>
        {/* Toilet */}
        <circle
          cx="310"
          cy="160"
          r="15"
          fill="rgba(255, 255, 255, 0.3)"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth="1"
        />
        {/* Shower Area */}
        <rect
          x="340"
          y="160"
          width="50"
          height="30"
          fill="rgba(59, 130, 246, 0.3)"
          stroke="rgba(59, 130, 246, 0.5)"
          strokeWidth="1"
          rx="2"
        />
        {/* Sink */}
        <rect
          x="330"
          y="100"
          width="25"
          height="20"
          fill="rgba(200, 200, 200, 0.3)"
          stroke="rgba(200, 200, 200, 0.5)"
          strokeWidth="1"
          rx="2"
        />
        {/* Door to Bathroom */}
        <path
          d="M 420 200 A 30 30 0 0 1 420 260"
          fill="none"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="2"
        />
        <line
          x1="420"
          y1="200"
          x2="420"
          y2="260"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="2"
        />

        {/* Central Corridor (4 m²) */}
        <rect
          x="280"
          y="220"
          width="220"
          height="100"
          fill="rgba(107, 114, 128, 0.2)"
          stroke="rgba(107, 114, 128, 0.5)"
          strokeWidth="2"
          rx="8"
        />
        <text
          x="390"
          y="265"
          textAnchor="middle"
          className="fill-white text-sm font-bold"
        >
          COR
        </text>
        <text
          x="390"
          y="285"
          textAnchor="middle"
          className="fill-white/80 text-xs"
        >
          4 m²
        </text>
        {/* Entrance Steps */}
        <rect
          x="480"
          y="300"
          width="60"
          height="20"
          fill="rgba(200, 200, 200, 0.4)"
          stroke="rgba(200, 200, 200, 0.6)"
          strokeWidth="1"
          rx="2"
        />
        <text
          x="510"
          y="315"
          textAnchor="middle"
          className="fill-white/70 text-xs"
        >
          ENTRANCE
        </text>

        {/* Kitchen (2 m²) */}
        <rect
          x="520"
          y="80"
          width="100"
          height="120"
          fill="rgba(34, 197, 94, 0.2)"
          stroke="rgba(34, 197, 94, 0.5)"
          strokeWidth="2"
          rx="8"
        />
        <text
          x="570"
          y="130"
          textAnchor="middle"
          className="fill-white text-sm font-bold"
        >
          KIT
        </text>
        <text
          x="570"
          y="150"
          textAnchor="middle"
          className="fill-white/80 text-xs"
        >
          2 m²
        </text>
        {/* Kitchen Counter */}
        <rect
          x="530"
          y="160"
          width="80"
          height="30"
          fill="rgba(200, 200, 200, 0.4)"
          stroke="rgba(200, 200, 200, 0.6)"
          strokeWidth="1"
          rx="2"
        />
        {/* Sink */}
        <circle
          cx="560"
          cy="175"
          r="6"
          fill="rgba(59, 130, 246, 0.4)"
          stroke="rgba(59, 130, 246, 0.6)"
          strokeWidth="1"
        />
        <circle
          cx="590"
          cy="175"
          r="6"
          fill="rgba(59, 130, 246, 0.4)"
          stroke="rgba(59, 130, 246, 0.6)"
          strokeWidth="1"
        />
        {/* Stove */}
        <circle
          cx="570"
          cy="185"
          r="5"
          fill="rgba(239, 68, 68, 0.4)"
          stroke="rgba(239, 68, 68, 0.6)"
          strokeWidth="1"
        />
        <circle
          cx="590"
          cy="185"
          r="5"
          fill="rgba(239, 68, 68, 0.4)"
          stroke="rgba(239, 68, 68, 0.6)"
          strokeWidth="1"
        />
        {/* Stools */}
        <circle
          cx="550"
          cy="210"
          r="8"
          fill="rgba(59, 130, 246, 0.3)"
          stroke="rgba(59, 130, 246, 0.5)"
          strokeWidth="1"
        />
        <circle
          cx="610"
          cy="210"
          r="8"
          fill="rgba(59, 130, 246, 0.3)"
          stroke="rgba(59, 130, 246, 0.5)"
          strokeWidth="1"
        />

        {/* Living Area */}
        <rect
          x="640"
          y="80"
          width="200"
          height="240"
          fill="rgba(59, 130, 246, 0.2)"
          stroke="rgba(59, 130, 246, 0.5)"
          strokeWidth="2"
          rx="8"
        />
        {/* Sofa */}
        <rect
          x="660"
          y="180"
          width="120"
          height="60"
          fill="rgba(168, 85, 247, 0.4)"
          stroke="rgba(168, 85, 247, 0.6)"
          strokeWidth="1.5"
          rx="4"
        />
        {/* Coffee Table */}
        <circle
          cx="740"
          cy="250"
          r="20"
          fill="rgba(34, 197, 94, 0.3)"
          stroke="rgba(34, 197, 94, 0.5)"
          strokeWidth="1.5"
        />
        {/* Convertible Bed Outline */}
        <rect
          x="700"
          y="280"
          width="120"
          height="30"
          fill="none"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        <line
          x1="710"
          y1="280"
          x2="710"
          y2="310"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1"
        />
        <line
          x1="720"
          y1="280"
          x2="720"
          y2="310"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1"
        />
        <text
          x="760"
          y="295"
          textAnchor="middle"
          className="fill-white/60 text-xs"
        >
          3000
        </text>

        {/* Right End - Balcony (4 m²) */}
        <rect
          x="860"
          y="80"
          width="100"
          height="240"
          fill="rgba(20, 184, 166, 0.2)"
          stroke="rgba(20, 184, 166, 0.5)"
          strokeWidth="2"
          rx="8"
        />
        <text
          x="910"
          y="130"
          textAnchor="middle"
          className="fill-white text-sm font-bold"
        >
          BALCONY
        </text>
        <text
          x="910"
          y="150"
          textAnchor="middle"
          className="fill-white/80 text-xs"
        >
          4 m²
        </text>
        {/* Table */}
        <circle
          cx="910"
          cy="200"
          r="25"
          fill="rgba(34, 197, 94, 0.3)"
          stroke="rgba(34, 197, 94, 0.5)"
          strokeWidth="1.5"
        />
        {/* Chairs */}
        <circle
          cx="880"
          cy="230"
          r="12"
          fill="rgba(59, 130, 246, 0.3)"
          stroke="rgba(59, 130, 246, 0.5)"
          strokeWidth="1"
        />
        <circle
          cx="940"
          cy="230"
          r="12"
          fill="rgba(59, 130, 246, 0.3)"
          stroke="rgba(59, 130, 246, 0.5)"
          strokeWidth="1"
        />
        {/* Door to Balcony */}
        <path
          d="M 860 200 A 30 30 0 0 0 860 260"
          fill="none"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="2"
        />
        <line
          x1="860"
          y1="200"
          x2="860"
          y2="260"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="2"
        />

        {/* Dimensions Labels */}
        <text
          x="150"
          y="45"
          textAnchor="middle"
          className="fill-white/60 text-xs font-medium"
        >
          3150
        </text>
        <text
          x="500"
          y="35"
          textAnchor="middle"
          className="fill-white/60 text-xs font-medium"
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
      <div className="absolute bottom-4 left-4 bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/20">
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
