import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useScroll, useTransform } from 'framer-motion';

// Capsule 3D Model Component
function CapsuleModel({ rotation }: { rotation: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null);
  const [targetRotation, setTargetRotation] = useState(rotation);

  useEffect(() => {
    setTargetRotation(rotation);
  }, [rotation]);

  useFrame(() => {
    if (meshRef.current) {
      // Smooth rotation transition
      meshRef.current.rotation.x += (targetRotation[0] - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetRotation[1] - meshRef.current.rotation.y) * 0.05;
      meshRef.current.rotation.z += (targetRotation[2] - meshRef.current.rotation.z) * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Main Capsule Body */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.8, 2.5, 32, 64]} />
        <meshStandardMaterial 
          color="#d4a574"
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Windows */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const x = Math.cos(angle) * 0.85;
        const z = Math.sin(angle) * 0.85;
        const y = -0.5 + (i % 2) * 0.8;
        
        return (
          <mesh key={i} position={[x, y, z]} rotation={[0, -angle, 0]}>
            <boxGeometry args={[0.3, 0.4, 0.05]} />
            <meshStandardMaterial 
              color="#87ceeb"
              metalness={0.9}
              roughness={0.1}
              transparent
              opacity={0.7}
            />
          </mesh>
        );
      })}

      {/* Door */}
      <mesh position={[0.85, -1, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.1, 1.2, 0.6]} />
        <meshStandardMaterial 
          color="#8b6914"
          metalness={0.5}
          roughness={0.4}
        />
      </mesh>

      {/* Deck/Platform */}
      <mesh position={[0, -2.2, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 0.2, 32]} />
        <meshStandardMaterial 
          color="#654321"
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>
    </group>
  );
}

// Main Scrolling Capsule Component
export const ScrollingCapsule3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [currentRotation, setCurrentRotation] = useState<[number, number, number]>([0, 0, 0]);

  // Define rotation angles for each section
  const sectionRotations: { [key: string]: [number, number, number] } = {
    hero: [0.2, 0, 0],
    customization: [0.3, Math.PI / 3, 0.1],
    floorplan: [-0.2, Math.PI / 2, 0],
    environments: [0.4, Math.PI, -0.1],
    useCases: [-0.3, Math.PI * 1.5, 0.2],
    statistics: [0.1, Math.PI * 2, 0],
    brochure: [0.5, Math.PI / 4, 0.3],
    about: [-0.4, Math.PI * 1.2, -0.2],
    booking: [0, Math.PI * 2.5, 0],
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'customization',
        'floorplan',
        'environments',
        'use-cases',
        'statistics',
        'brochure',
        'about',
        'booking',
      ];

      // Find current section
      let currentSection = 'hero';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          // Check if section is in the middle of viewport
          if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // Update rotation based on current section
      const rotation = sectionRotations[currentSection] || [0, 0, 0];
      setCurrentRotation(rotation);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Transform scroll progress to vertical position
  const y = useTransform(scrollYProgress, [0, 1], ['10vh', '90vh']);

  return (
    <motion.div
      ref={containerRef}
      style={{
        position: 'fixed',
        right: '5vw',
        top: 0,
        y,
        width: '300px',
        height: '400px',
        zIndex: 40,
        pointerEvents: 'none',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#ffd700" />

        {/* Capsule Model */}
        <CapsuleModel rotation={currentRotation} />

        {/* Optional: Allow user interaction */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>

      {/* Subtle glow effect */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle, rgba(212, 165, 116, 0.3) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(20px)',
        }}
      />
    </motion.div>
  );
};
