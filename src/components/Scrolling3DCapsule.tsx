import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll, useTransform, motion } from 'framer-motion';
import * as THREE from 'three';

// Simple Capsule 3D Mesh
function Capsule3D({ targetRotation }: { targetRotation: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Smooth rotation lerp
      groupRef.current.rotation.x += (targetRotation[0] - groupRef.current.rotation.x) * 0.1;
      groupRef.current.rotation.y += (targetRotation[1] - groupRef.current.rotation.y) * 0.1;
      groupRef.current.rotation.z += (targetRotation[2] - groupRef.current.rotation.z) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main capsule body */}
      <mesh castShadow>
        <capsuleGeometry args={[1, 3, 32, 64]} />
        <meshStandardMaterial
          color="#c9a068"
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>

      {/* Windows - side panels */}
      <mesh position={[1.05, 0, 0]} castShadow>
        <boxGeometry args={[0.05, 2, 1.5]} />
        <meshStandardMaterial
          color="#4a9eff"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.6}
        />
      </mesh>

      <mesh position={[-1.05, 0, 0]} castShadow>
        <boxGeometry args={[0.05, 2, 1.5]} />
        <meshStandardMaterial
          color="#4a9eff"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Base platform */}
      <mesh position={[0, -2.5, 0]} castShadow>
        <cylinderGeometry args={[1.3, 1.3, 0.3, 32]} />
        <meshStandardMaterial
          color="#8b7355"
          metalness={0.4}
          roughness={0.6}
        />
      </mesh>
    </group>
  );
}

export const Scrolling3DCapsule = () => {
  const { scrollYProgress } = useScroll();
  const [rotation, setRotation] = useState<[number, number, number]>([0.2, 0, 0]);

  // Map sections to rotations
  const rotationMap: Record<string, [number, number, number]> = {
    hero: [0.2, 0, 0],
    customization: [0.3, Math.PI / 2, 0],
    floorplan: [-0.2, Math.PI, 0.1],
    environments: [0.4, Math.PI * 1.5, -0.1],
    'use-cases': [0, Math.PI * 2, 0],
    statistics: [0.5, Math.PI / 3, 0.2],
    brochure: [-0.3, Math.PI * 1.2, 0],
    about: [0.1, Math.PI * 1.8, 0.1],
    booking: [0.3, Math.PI * 2.5, 0],
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(rotationMap);
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportMiddle = window.innerHeight / 2;
          
          // Section is in the middle third of viewport
          if (rect.top < viewportMiddle && rect.bottom > viewportMiddle) {
            setRotation(rotationMap[sectionId]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Position follows scroll
  const y = useTransform(scrollYProgress, [0, 1], ['15%', '85%']);

  return (
    <motion.div
      style={{
        position: 'fixed',
        right: '8%',
        top: y,
        width: '280px',
        height: '350px',
        zIndex: 30,
        pointerEvents: 'none',
      }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 0.9, x: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 35 }}>
        {/* Lights */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.2}
          castShadow
        />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#ffd700" />
        
        {/* 3D Capsule */}
        <Capsule3D targetRotation={rotation} />
      </Canvas>

      {/* Subtle background glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(201, 160, 104, 0.15) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
    </motion.div>
  );
};
