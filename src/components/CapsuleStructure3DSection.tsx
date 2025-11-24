import { useRef, Suspense } from "react";
import { forwardRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { motion, useInView } from "framer-motion";
import { Box, Shield, Thermometer } from "lucide-react";
import structureImage from "@/assets/Structure.jpeg";
import insulationImage from "@/assets/insulation.png";
import exteriorShellImage from "@/assets/exterior-shell.png";

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
      <primitive object={scene} scale={[18, 18, 18]}>
        <meshStandardMaterial color="white" />
      </primitive>
    </group>
  );
}

export const CapsuleStructure3DSection = forwardRef<HTMLElement>(
  (props, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const structureFeatures = [
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

    return (
      <section
        ref={ref}
        id="capsule-structure"
        className="relative overflow-hidden py-16 lg:py-24"
        style={{
          background: "linear-gradient(to bottom, #f5e6d3, #faf5ef, #f5e6d3)",
        }}
      >
        <div
          className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl"
          ref={containerRef}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
              style={{ color: "#2d1f15" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Art of Engineered Luxury
            </motion.h2>

            <motion.p
              className="text-base lg:text-lg leading-relaxed max-w-4xl mx-auto"
              style={{ color: "#2d1f15" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Experience the engineering excellence behind every Q Capsule. Our
              3D structure showcases the precision and innovation that makes
              modular living possible.
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - 3D Model */}
            <motion.div
              className="w-full h-[500px] lg:h-[600px] relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Canvas
                camera={{ position: [35, 18, 35], fov: 50 }}
                style={{ background: "transparent" }}
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

            {/* Right Side - Feature Cards */}
            <div className="space-y-8 lg:space-y-10">
              {structureFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                    {/* Image */}
                    <div className="flex-shrink-0 w-full lg:w-40 h-40 rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      {/* Title with Icon */}
                      <div className="flex items-center gap-3">
                        <feature.icon
                          className="h-6 w-6 flex-shrink-0"
                          style={{ color: "#8b6f47" }}
                        />
                        <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: "#2d1f15" }}>
                          {feature.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-base lg:text-lg leading-relaxed" style={{ color: "#2d1f15" }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle divider line */}
                  {index < structureFeatures.length - 1 && (
                    <div className="mt-8 lg:mt-10 h-px bg-gradient-to-r from-transparent via-[#8b6f47]/20 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

CapsuleStructure3DSection.displayName = "CapsuleStructure3DSection";
