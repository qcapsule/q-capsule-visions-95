import { motion } from "framer-motion";

export const GoldenLEDSeparator = () => {
  return (
    <div className="relative w-full py-12 lg:py-16 overflow-hidden">
      {/* Main LED Strip Container */}
      <div className="relative w-full h-[4px] flex items-center justify-center">
        {/* Outer Glow Halo - Multiple Layers for Strong Glow */}
        <div 
          className="absolute inset-0 h-full bg-[#FFEED6] blur-[8px] opacity-60"
          style={{
            boxShadow: "0 0 30px rgba(255, 238, 214, 0.8), 0 0 60px rgba(255, 235, 205, 0.5), 0 0 90px rgba(255, 240, 215, 0.3)",
          }}
        />
        <div 
          className="absolute inset-0 h-full bg-[#FFF4E0] blur-[4px] opacity-70"
          style={{
            boxShadow: "0 0 20px rgba(255, 244, 224, 0.9), 0 0 40px rgba(255, 240, 210, 0.6)",
          }}
        />

        {/* Core LED Strip - Warm Golden White, Solid */}
        <motion.div
          className="absolute inset-0 h-full bg-[#FFEED6]"
          style={{
            boxShadow: "0 0 15px rgba(255, 238, 214, 1), 0 0 30px rgba(255, 235, 205, 0.8), 0 0 45px rgba(255, 230, 200, 0.6), inset 0 0 10px rgba(255, 245, 225, 0.5)",
          }}
          animate={{
            opacity: [0.95, 1, 0.95],
            boxShadow: [
              "0 0 15px rgba(255, 238, 214, 1), 0 0 30px rgba(255, 235, 205, 0.8), 0 0 45px rgba(255, 230, 200, 0.6), inset 0 0 10px rgba(255, 245, 225, 0.5)",
              "0 0 20px rgba(255, 238, 214, 1), 0 0 40px rgba(255, 235, 205, 0.9), 0 0 60px rgba(255, 230, 200, 0.7), inset 0 0 15px rgba(255, 245, 225, 0.6)",
              "0 0 15px rgba(255, 238, 214, 1), 0 0 30px rgba(255, 235, 205, 0.8), 0 0 45px rgba(255, 230, 200, 0.6), inset 0 0 10px rgba(255, 245, 225, 0.5)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Inner Bright Core */}
        <div 
          className="absolute inset-0 h-[2px] bg-[#FFF8E8] mx-auto"
          style={{
            boxShadow: "0 0 10px rgba(255, 248, 232, 1), 0 0 20px rgba(255, 238, 214, 0.8)",
          }}
        />
      </div>

      {/* Extended Glow Effect on Sides */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-[6px] bg-gradient-to-r from-[#FFEED6] to-transparent opacity-80 blur-[3px]" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-[6px] bg-gradient-to-l from-[#FFEED6] to-transparent opacity-80 blur-[3px]" />
    </div>
  );
};

