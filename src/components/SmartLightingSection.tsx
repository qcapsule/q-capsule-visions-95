import { forwardRef, useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Lightbulb, Moon, Sun, Sparkles, Zap, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

type LightingMode = "day" | "night" | "ambient" | "party" | "reading";

export const SmartLightingSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [selectedMode, setSelectedMode] = useState<LightingMode>("day");
  const [lightsOn, setLightsOn] = useState(true);

  const lightingModes = [
    {
      id: "day" as LightingMode,
      name: "Day Mode",
      icon: Sun,
      color: "#FFD700",
      description: "Bright, natural daylight simulation",
    },
    {
      id: "night" as LightingMode,
      name: "Night Mode",
      icon: Moon,
      color: "#4169E1",
      description: "Soft, warm evening ambiance",
    },
    {
      id: "ambient" as LightingMode,
      name: "Ambient",
      icon: Sparkles,
      color: "#FF69B4",
      description: "Relaxing, mood-setting atmosphere",
    },
    {
      id: "party" as LightingMode,
      name: "Party",
      icon: Zap,
      color: "#00FF00",
      description: "Dynamic, vibrant party lighting",
    },
    {
      id: "reading" as LightingMode,
      name: "Reading",
      icon: Lightbulb,
      color: "#FFA500",
      description: "Focused, task-oriented lighting",
    },
  ];

  const currentMode = lightingModes.find((mode) => mode.id === selectedMode);

  return (
    <section
      ref={ref}
      id="smart-lighting"
      className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-[#1a1410] via-[#2d1f15] to-[#1a1410]"
    >
      {/* Animated Background Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {lightsOn && (
          <>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full opacity-20"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle, ${currentMode?.color || "#FFD700"}40, transparent)`,
                }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </>
        )}
      </div>

      <div
        className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl"
        ref={containerRef}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6 border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Lightbulb className="w-4 h-4 text-[#FFEED6]" />
            <span className="text-white">Smart Technology</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
            Intelligent Lighting System
          </h2>
          <p className="text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto">
            Experience the future of home lighting with our AI-powered smart system
            that adapts to your needs and creates the perfect ambiance.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Interactive Capsule Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative bg-gradient-to-br from-[#2d1f15] to-[#1a1410] rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl">
              {/* Capsule Structure */}
              <div className="relative h-[400px] lg:h-[500px]">
                {/* Main Capsule Body */}
                <div className="absolute inset-4 rounded-2xl bg-[#3d2817] border-2 border-white/20" />

                {/* LED Strips - Top */}
                <motion.div
                  className="absolute top-8 left-8 right-8 h-[3px] rounded-full"
                  style={{
                    background: lightsOn
                      ? `linear-gradient(90deg, transparent, ${currentMode?.color || "#FFEED6"}, transparent)`
                      : "transparent",
                    boxShadow: lightsOn
                      ? `0 0 20px ${currentMode?.color || "#FFEED6"}80, 0 0 40px ${currentMode?.color || "#FFEED6"}40`
                      : "none",
                  }}
                  animate={{
                    opacity: lightsOn ? [0.8, 1, 0.8] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                {/* LED Strips - Bottom */}
                <motion.div
                  className="absolute bottom-8 left-8 right-8 h-[3px] rounded-full"
                  style={{
                    background: lightsOn
                      ? `linear-gradient(90deg, transparent, ${currentMode?.color || "#FFEED6"}, transparent)`
                      : "transparent",
                    boxShadow: lightsOn
                      ? `0 0 20px ${currentMode?.color || "#FFEED6"}80, 0 0 40px ${currentMode?.color || "#FFEED6"}40`
                      : "none",
                  }}
                  animate={{
                    opacity: lightsOn ? [0.8, 1, 0.8] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />

                {/* Window Lights - Left */}
                <div className="absolute top-1/3 left-12 w-24 h-32 rounded-lg border-2 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: lightsOn
                        ? `radial-gradient(ellipse, ${currentMode?.color || "#FFEED6"}60, transparent)`
                        : "transparent",
                      boxShadow: lightsOn
                        ? `inset 0 0 30px ${currentMode?.color || "#FFEED6"}40`
                        : "none",
                    }}
                    animate={{
                      opacity: lightsOn ? [0.6, 0.9, 0.6] : 0,
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                  />
                </div>

                {/* Window Lights - Right */}
                <div className="absolute top-1/3 right-12 w-24 h-32 rounded-lg border-2 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: lightsOn
                        ? `radial-gradient(ellipse, ${currentMode?.color || "#FFEED6"}60, transparent)`
                        : "transparent",
                      boxShadow: lightsOn
                        ? `inset 0 0 30px ${currentMode?.color || "#FFEED6"}40`
                        : "none",
                    }}
                    animate={{
                      opacity: lightsOn ? [0.6, 0.9, 0.6] : 0,
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 0.8,
                    }}
                  />
                </div>

                {/* Entrance LED Frame */}
                <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-32 h-32 rounded-lg border-2 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: lightsOn
                        ? `radial-gradient(ellipse, ${currentMode?.color || "#FFEED6"}50, transparent)`
                        : "transparent",
                      boxShadow: lightsOn
                        ? `0 0 30px ${currentMode?.color || "#FFEED6"}60, inset 0 0 20px ${currentMode?.color || "#FFEED6"}30`
                        : "none",
                    }}
                    animate={{
                      opacity: lightsOn ? [0.7, 1, 0.7] : 0,
                      scale: lightsOn ? [1, 1.05, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>

                {/* Interior Ambient Glow */}
                <motion.div
                  className="absolute inset-8 rounded-2xl"
                  style={{
                    background: lightsOn
                      ? `radial-gradient(ellipse at center, ${currentMode?.color || "#FFEED6"}20, transparent 70%)`
                      : "transparent",
                  }}
                  animate={{
                    opacity: lightsOn ? [0.3, 0.5, 0.3] : 0,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </div>

              {/* Power Toggle Button */}
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={() => setLightsOn(!lightsOn)}
                  className={`${
                    lightsOn
                      ? "bg-gradient-to-r from-[#8b6f47] to-[#6b5233] hover:from-[#9b7f57] hover:to-[#7b6243]"
                      : "bg-gray-700 hover:bg-gray-600"
                  } text-white font-semibold px-8 py-6 rounded-xl shadow-lg transition-all duration-300`}
                >
                  {lightsOn ? (
                    <>
                      <Lightbulb className="w-5 h-5 mr-2" />
                      Lights On
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5 mr-2" />
                      Lights Off
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Lighting Modes */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Choose Your Lighting Mode
              </h3>
              <p className="text-white/70 mb-8">
                Select from our pre-configured lighting scenes or create your own
                custom ambiance.
              </p>
            </div>

            {/* Lighting Mode Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {lightingModes.map((mode) => {
                const Icon = mode.icon;
                const isSelected = selectedMode === mode.id;
                return (
                  <motion.button
                    key={mode.id}
                    onClick={() => setSelectedMode(mode.id)}
                    className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                      isSelected
                        ? "border-[#FFEED6] bg-white/10"
                        : "border-white/20 bg-white/5 hover:border-white/40"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: isSelected
                            ? `${mode.color}40`
                            : "rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{
                            color: isSelected ? mode.color : "#ffffff80",
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {mode.name}
                        </h4>
                        <p className="text-sm text-white/60">{mode.description}</p>
                      </div>
                    </div>
                    {isSelected && (
                      <motion.div
                        className="absolute top-2 right-2 w-3 h-3 rounded-full"
                        style={{ background: mode.color }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Features List */}
            <div className="mt-8 space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
              {[
                "Voice-activated controls",
                "Automated circadian rhythm adjustment",
                "Energy-efficient LED technology",
                "Customizable color temperature",
                "Smart scheduling and automation",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3 text-white/80"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: currentMode?.color || "#FFEED6" }}
                  />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

SmartLightingSection.displayName = "SmartLightingSection";

