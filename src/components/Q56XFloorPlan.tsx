import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize2,
  Minimize2,
  RotateCcw,
  Bed,
  Bath,
  Utensils,
  Home,
  DoorOpen,
  X,
} from "lucide-react";
import residentialImage from "@/assets/residential-capsule.jpg";
import livingRoomImage from "@/assets/living-room1.png";
import officeImage from "@/assets/office-capsule.jpg";
import healthcareImage from "@/assets/healthcare-capsule.jpg";
import retailImage from "@/assets/retail-capsule.jpg";

interface FloorPlanProps {
  className?: string;
}

interface RoomInfo {
  id: string;
  name: string;
  area: string;
  image: string;
  description: string;
}

export const Q56XFloorPlan = ({ className = "" }: FloorPlanProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<RoomInfo | null>(null);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const resetRotation = () => {
    setRotation(0);
  };

  const rotatePlan = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const rooms: RoomInfo[] = [
    {
      id: "bedroom1",
      name: "Bedroom 1",
      area: "9 m²",
      image: residentialImage,
      description: "Spacious bedroom with comfortable sleeping arrangements",
    },
    {
      id: "bathroom",
      name: "Bathroom",
      area: "4 m²",
      image: healthcareImage,
      description: "Modern bathroom with all essential facilities",
    },
    {
      id: "corridor",
      name: "Corridor",
      area: "4 m²",
      image: retailImage,
      description: "Central corridor connecting all living spaces",
    },
    {
      id: "kitchen",
      name: "Kitchen",
      area: "2 m²",
      image: officeImage,
      description: "Compact kitchen with modern appliances",
    },
    {
      id: "living",
      name: "Living Area",
      area: "28 m²",
      image: livingRoomImage,
      description:
        "Spacious living area perfect for relaxation and entertainment",
    },
    {
      id: "balcony",
      name: "Balcony",
      area: "4 m²",
      image: residentialImage,
      description: "Outdoor balcony space with beautiful views",
    },
  ];

  const handleRoomClick = (roomId: string) => {
    const room = rooms.find((r) => r.id === roomId);
    if (room) {
      setSelectedRoom(room);
    }
  };

  const FloorPlanContent = () => (
    <div className="relative w-full h-full bg-gray-800/30 rounded-2xl overflow-hidden">
      <style>{`
        .room-rect {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .room-rect:hover {
          fill-opacity: 0.4 !important;
          stroke-width: 3 !important;
          filter: drop-shadow(0 0 12px currentColor) brightness(1.2) !important;
        }
      `}</style>
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
          className="room-rect cursor-pointer transition-all duration-300"
          style={{ filter: "drop-shadow(0 0 0 rgba(168, 85, 247, 0))" }}
          onClick={() => handleRoomClick("bedroom1")}
        />
        <text
          x="150"
          y="200"
          textAnchor="middle"
          className="fill-white text-sm font-bold"
        >
          BED ROOM 1
        </text>
        <text
          x="150"
          y="220"
          textAnchor="middle"
          className="fill-white/80 text-xs"
        >
          9 m²
        </text>

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
          className="room-rect cursor-pointer transition-all duration-300"
          style={{ filter: "drop-shadow(0 0 0 rgba(249, 115, 22, 0))" }}
          onClick={() => handleRoomClick("bathroom")}
        />
        <text
          x="350"
          y="140"
          textAnchor="middle"
          className="fill-white text-sm font-bold"
        >
          BATH
        </text>
        <text
          x="350"
          y="160"
          textAnchor="middle"
          className="fill-white/80 text-xs"
        >
          4 m²
        </text>

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
          className="room-rect cursor-pointer transition-all duration-300"
          style={{ filter: "drop-shadow(0 0 0 rgba(107, 114, 128, 0))" }}
          onClick={() => handleRoomClick("corridor")}
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

        {/* Entrance Door */}
        <rect
          x="380"
          y="320"
          width="40"
          height="8"
          fill="rgba(200, 200, 200, 0.6)"
          stroke="rgba(255, 255, 255, 0.8)"
          strokeWidth="1.5"
          rx="2"
        />
        <path
          d="M 400 320 A 20 20 0 0 1 400 328"
          fill="none"
          stroke="rgba(255, 255, 255, 0.8)"
          strokeWidth="1.5"
        />
        <text
          x="400"
          y="345"
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
          className="room-rect cursor-pointer transition-all duration-300"
          style={{ filter: "drop-shadow(0 0 0 rgba(34, 197, 94, 0))" }}
          onClick={() => handleRoomClick("kitchen")}
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
          className="room-rect cursor-pointer transition-all duration-300"
          style={{ filter: "drop-shadow(0 0 0 rgba(59, 130, 246, 0))" }}
          onClick={() => handleRoomClick("living")}
        />
        <text
          x="740"
          y="200"
          textAnchor="middle"
          className="fill-white text-sm font-bold"
        >
          LIVING AREA
        </text>
        <text
          x="740"
          y="220"
          textAnchor="middle"
          className="fill-white/80 text-xs"
        >
          28 m²
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
          className="room-rect cursor-pointer transition-all duration-300"
          style={{ filter: "drop-shadow(0 0 0 rgba(20, 184, 166, 0))" }}
          onClick={() => handleRoomClick("balcony")}
        />
        <text
          x="910"
          y="200"
          textAnchor="middle"
          className="fill-white text-sm font-bold"
        >
          BALCONY
        </text>
        <text
          x="910"
          y="220"
          textAnchor="middle"
          className="fill-white/80 text-xs"
        >
          4 m²
        </text>

        {/* Title Label */}
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

      {/* Room Image Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedRoom(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image */}
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedRoom.name}
                  </h3>
                  <p className="text-white/90 text-lg mb-1">
                    {selectedRoom.area}
                  </p>
                  <p className="text-white/70 text-sm">
                    {selectedRoom.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
