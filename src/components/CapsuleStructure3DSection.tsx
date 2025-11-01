import { useRef, Suspense, useEffect } from "react";
import { forwardRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { motion, useInView, useAnimation } from "framer-motion";
import { Sparkles, Box, Layers } from "lucide-react";

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
    const controls = useAnimation();

    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);

    const structureFeatures = [
      {
        icon: Box,
        title: "Modular Design",
        description:
          "Pre-fabricated components that assemble seamlessly for rapid deployment and maximum efficiency.",
        color: "from-primary/20 to-primary/10",
        iconColor: "text-primary",
      },
      {
        icon: Layers,
        title: "Advanced Engineering",
        description:
          "Cutting-edge structural technology ensures durability, stability, and long-lasting performance.",
        color: "from-primary/20 to-primary/10",
        iconColor: "text-primary",
      },
      {
        icon: Sparkles,
        title: "Precision Manufacturing",
        description:
          "Factory-controlled production guarantees consistent quality and superior craftsmanship in every capsule.",
        color: "from-primary-glow/20 to-primary-glow/10",
        iconColor: "text-primary-glow",
      },
    ];

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    };

    const cardVariants = {
      hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring" as const,
          damping: 20,
          stiffness: 300,
        },
      },
    };

    return (
      <section
        ref={ref}
        id="capsule-structure"
        className="relative overflow-hidden py-32"
      >
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary-glow/5 rounded-full blur-2xl animate-float"></div>

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

        <div
          className="container mx-auto px-6 relative z-10 max-w-7xl"
          ref={containerRef}
        >
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
              <span className="text-foreground">Advanced Structure</span>
            </motion.div>

            <motion.h2
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Revolutionary Capsule Structure
            </motion.h2>

            <motion.p
              className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Experience the engineering excellence behind every Q Capsule. Our
              3D structure showcases the precision and innovation that makes
              modular living possible.
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - 3D Model */}
            <motion.div
              className="w-full h-[600px] relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 1, delay: 0.8 }}
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
                <OrbitControls
                  enablePan={false}
                  enableZoom={false}
                  autoRotate={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 4}
                />
              </Canvas>

              {/* Golden glow effect around model */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-glow/10 rounded-full blur-3xl"></div>
              </div>
            </motion.div>

            {/* Right Side - Feature Cards */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {structureFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative h-full"
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    z: 50,
                  }}
                >
                  <div className="glass-card p-8 relative overflow-hidden border border-border/50 group-hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                    {/* Dynamic background effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                    ></div>

                    {/* Golden Divider */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-50"></div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className="w-16 h-16 mb-6 bg-card/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-500 border border-border/30 group-hover:border-primary/30"
                        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon
                          className={`h-8 w-8 ${feature.iconColor} group-hover:drop-shadow-glow transition-all duration-500`}
                        />
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-all duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
);

CapsuleStructure3DSection.displayName = "CapsuleStructure3DSection";
