import { useRef, Suspense } from "react";
import { forwardRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { motion, useInView } from "framer-motion";
import { Box, Shield, Thermometer, LucideIcon } from "lucide-react";
import structureImage from "@/assets/Structure.jpeg";
import insulationImage from "@/assets/insulation.png";
import exteriorShellImage from "@/assets/exterior-shell.png";

type StructureFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  iconColor: string;
  image: string;
};

const structureFeatures: StructureFeature[] = [
  {
    icon: Box,
    title: "STRUCTURE",
    description:
      "Reinforced, fully welded steel frame built for long-term stability, safe lifting, and smooth transportation.",
    color: "from-primary/20 to-primary/10",
    iconColor: "text-primary",
    image: structureImage,
  },
  {
    icon: Shield,
    title: "EXTERIOR SHELL",
    description:
      "Aluminum panel façade with PVDF coating and insulated core for durability, fire resistance, and all-climate performance.",
    color: "from-primary/20 to-primary/10",
    iconColor: "text-primary",
    image: exteriorShellImage,
  },
  {
    icon: Thermometer,
    title: "INSULATION & COMFORT",
    description:
      "Multi-layer eco insulation with Rockwool, PIR, and XPS, paired with premium interior cladding and SPC flooring for quiet, stable, climate-controlled living.",
    color: "from-primary-glow/20 to-primary-glow/10",
    iconColor: "text-primary-glow",
    image: insulationImage,
  },
];

// Mobile Component - Simple vertical stack with always visible content
const MobileStructureFeatures = ({
  features,
  isInView,
}: {
  features: StructureFeature[];
  isInView: boolean;
}) => {
  return (
    <div className="md:hidden space-y-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          className="relative h-[300px] sm:h-[350px] overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30"></div>
          </div>

          {/* Content Overlay - Always visible */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
            >
              <div className="mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

function CapsuleStructureModel() {
  const meshRef = useRef<THREE.Group>(null);

  // Load the GLB model
  const { scene } = useGLTF("/capsulestructure.glb");

  useFrame(() => {
    if (meshRef.current) {
      // Rotate from left to right on Y axis
      meshRef.current.rotation.y += 0.002;
    }
  });

  if (!scene) {
    return (
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    );
  }

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      <primitive object={scene} scale={[24, 24, 24]}>
        <meshStandardMaterial color="white" />
      </primitive>
    </group>
  );
}

export const CapsuleStructure3DSection = forwardRef<HTMLElement>(
  (props, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
      <section
        ref={ref}
        id="capsule-structure"
        className="relative overflow-hidden py-32"
        style={{
          background: "linear-gradient(to bottom, #f5e6d3, #faf5ef, #f5e6d3)",
        }}
      >
        <div
          className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl"
          ref={containerRef}
        >
          {/* Header Pattern */}
          <motion.div
            className="mb-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4">
              <span className="text-4xl lg:text-6xl font-bold text-foreground">
                Engineered
              </span>
              <span className="text-4xl lg:text-6xl font-bold text-foreground">
                Luxury
              </span>
            </div>
            <p className="text-md lg:text-lg text-muted-foreground leading-relaxed text-center mt-4">
              Experience the engineering excellence behind every Q Capsule. Our
              3D structure showcases the precision and innovation that makes
              modular living possible.
            </p>
          </motion.div>

          {/* Main Content - Canvas centered with cards below */}
          <div className="relative">
            {/* Desktop Layout */}
            <div className="hidden md:block">
              {/* 3D Model - Centered */}
              <motion.div
                className="w-full max-w-5xl mx-auto h-[300px] lg:h-[350px] relative flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.95 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Canvas
                  camera={{ position: [50, 5, 0], fov: 50 }}
                  style={{
                    background: "transparent",
                    display: "block",
                    margin: "0 auto",
                  }}
                >
                  <ambientLight intensity={0.6} />
                  <directionalLight
                    position={[10, 10, 5]}
                    intensity={1}
                    color="#ffffff"
                    castShadow
                  />
                  <pointLight
                    position={[0, -2, 0]}
                    intensity={0.8}
                    color="#ffffff"
                    distance={10}
                  />
                  <Suspense
                    fallback={
                      <mesh>
                        <boxGeometry args={[2, 2, 2]} />
                        <meshStandardMaterial color="gray" />
                      </mesh>
                    }
                  >
                    <CapsuleStructureModel />
                  </Suspense>
                </Canvas>
              </motion.div>

              {/* Bottom Row - Three cards in a row */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6 mt-1">
                {structureFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="group relative h-[180px] lg:h-[200px] overflow-hidden rounded-2xl cursor-pointer shadow-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                    }
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/60 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-300"></div>
                    </div>

                    {/* Content Overlay - Only visible on hover */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6 z-10 overflow-visible">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{
                          duration: 0.4,
                          delay: 0.4,
                          ease: "easeOut",
                        }}
                        className="overflow-visible opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div className="mb-2 overflow-visible">
                          <h3 className="text-lg lg:text-xl font-bold text-white">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-xs lg:text-sm text-white/90 leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              {/* 3D Model */}
              <motion.div
                className="w-full h-[400px] sm:h-[500px] relative mb-6 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.95 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Canvas
                  camera={{ position: [50, 5, 0], fov: 50 }}
                  style={{
                    background: "transparent",
                    display: "block",
                    margin: "0 auto",
                  }}
                >
                  <ambientLight intensity={0.6} />
                  <directionalLight
                    position={[10, 10, 5]}
                    intensity={1}
                    color="#ffffff"
                    castShadow
                  />
                  <pointLight
                    position={[0, -2, 0]}
                    intensity={0.8}
                    color="#ffffff"
                    distance={10}
                  />
                  <Suspense
                    fallback={
                      <mesh>
                        <boxGeometry args={[2, 2, 2]} />
                        <meshStandardMaterial color="gray" />
                      </mesh>
                    }
                  >
                    <CapsuleStructureModel />
                  </Suspense>
                </Canvas>
              </motion.div>

              {/* Mobile Cards */}
              <MobileStructureFeatures
                features={structureFeatures}
                isInView={isInView}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
);

CapsuleStructure3DSection.displayName = "CapsuleStructure3DSection";
