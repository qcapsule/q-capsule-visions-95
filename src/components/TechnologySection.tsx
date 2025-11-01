import { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Thermometer, CheckCircle } from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function CapsuleStructureModel() {
  const meshRef = useRef<THREE.Group>(null);

  // Load the GLB model
  const { scene } = useGLTF("/capsulestructure.glb");

  useFrame((state) => {
    if (meshRef.current) {
      // Smooth continuous rotation on X axis
      meshRef.current.rotation.x += 0.002;
    }
  });

  if (!scene) {
    console.log("GLB model not loaded yet...");
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

interface TechnologySectionProps {
  className?: string;
}

export const TechnologySection = ({ className }: TechnologySectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const modelContainerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !modelContainerRef.current) return;

    // Animate 3D model on scroll - scale and fade in
    gsap.fromTo(
      modelContainerRef.current,
      {
        opacity: 0,
        scale: 0.85,
        y: 80,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );

    // Title animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Cards staggered animation
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".tech-card");
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          x: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate golden glow pulse
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0.3,
        scale: 1.2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const techCards = [
    {
      icon: Building2,
      title: "Exceptional Durability",
      description:
        "Resistant to structural stress, weather damage, and long-term wear, ensuring decades of reliable service.",
    },
    {
      icon: Thermometer,
      title: "Superior Insulation",
      description:
        "Advanced thermal management systems provide rapid heating and maintain optimal temperatures efficiently.",
    },
    {
      icon: CheckCircle,
      title: "Immediate Occupancy",
      description:
        "Pre-fabricated modular design allows for immediate use upon installation with no settling period required.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative py-32 overflow-hidden ${className || ""}`}
    >
      {/* Dark Golden Brown Background */}
      <div
        className="fixed inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(135deg, #2a1f14 0%, #3d2e1f 50%, #2a1f14 100%)",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: `url(/src/assets/q56x-capsule2sections.png)`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary-glow/5 rounded-full blur-2xl animate-float"></div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
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

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-8 border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-foreground">Advanced Technology</span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Building Capsules with Advanced Technology
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Q-Capsules built using cutting-edge modular technology have gained
            widespread recognition worldwide, with some structures serving
            communities for decades with exceptional reliability and
            performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Section - 3D Model */}
          <div className="lg:col-span-2">
            <div ref={modelContainerRef} className="w-full h-[600px] relative">
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
                <div
                  ref={glowRef}
                  className="golden-glow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-glow/10 rounded-full blur-3xl"
                ></div>
              </div>
            </div>
          </div>

          {/* Right Section - Technology Cards */}
          <div ref={cardsRef} className="space-y-6 lg:col-span-1">
            {techCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="tech-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
              >
                {/* Golden Divider */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-50"></div>

                <div className="flex items-start space-x-4 relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-all duration-300">
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
