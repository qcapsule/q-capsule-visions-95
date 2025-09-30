import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

// Capsule Geometry - same design as CapsuleModel3D
function CapsuleGeometry({ targetRotation }: { targetRotation: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Smooth rotation transition
      groupRef.current.rotation.x += (targetRotation[0] - groupRef.current.rotation.x) * 0.1;
      groupRef.current.rotation.y += (targetRotation[1] - groupRef.current.rotation.y) * 0.1;
      groupRef.current.rotation.z += (targetRotation[2] - groupRef.current.rotation.z) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Capsule Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 1.2, 1.5]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#ffb84d"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Rounded Ends */}
      <mesh position={[2, 0, 0]}>
        <cylinderGeometry args={[0.75, 0.75, 1.2, 16]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#ffb84d"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      <mesh position={[-2, 0, 0]}>
        <cylinderGeometry args={[0.75, 0.75, 1.2, 16]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#ffb84d"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Windows */}
      <mesh position={[0.5, 0.1, 0.76]}>
        <boxGeometry args={[2, 0.8, 0.02]} />
        <meshStandardMaterial 
          color="#87ceeb" 
          transparent 
          opacity={0.3}
          emissive="#87ceeb"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* LED Strip Lighting */}
      <mesh position={[0, -0.6, 0]}>
        <boxGeometry args={[4.2, 0.05, 1.6]} />
        <meshStandardMaterial 
          color="#ffb84d" 
          transparent 
          opacity={0.8}
          emissive="#ffb84d"
          emissiveIntensity={1}
        />
      </mesh>
      
      {/* Support Pillars */}
      <mesh position={[1.5, -1.2, 0.5]}>
        <cylinderGeometry args={[0.05, 0.05, 0.8, 8]} />
        <meshStandardMaterial color="#444" metalness={0.9} roughness={0.1} />
      </mesh>
      
      <mesh position={[-1.5, -1.2, 0.5]}>
        <cylinderGeometry args={[0.05, 0.05, 0.8, 8]} />
        <meshStandardMaterial color="#444" metalness={0.9} roughness={0.1} />
      </mesh>
      
      <mesh position={[1.5, -1.2, -0.5]}>
        <cylinderGeometry args={[0.05, 0.05, 0.8, 8]} />
        <meshStandardMaterial color="#444" metalness={0.9} roughness={0.1} />
      </mesh>
      
      <mesh position={[-1.5, -1.2, -0.5]}>
        <cylinderGeometry args={[0.05, 0.05, 0.8, 8]} />
        <meshStandardMaterial color="#444" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

export const Scrolling3DCapsule = () => {
  const { scrollYProgress } = useScroll();
  const [rotation, setRotation] = useState<[number, number, number]>([0.2, 0, 0]);
  const [position, setPosition] = useState({ x: 80, y: 15 });

  // Map sections to rotations and positions
  const sectionSettings: Record<string, { rotation: [number, number, number]; position: { x: number; y: number } }> = {
    hero: { rotation: [0.2, 0, 0], position: { x: 80, y: 20 } },
    customization: { rotation: [0.3, Math.PI / 2, 0], position: { x: 15, y: 30 } },
    floorplan: { rotation: [-0.2, Math.PI, 0.1], position: { x: 75, y: 40 } },
    environments: { rotation: [0.4, Math.PI * 1.5, -0.1], position: { x: 20, y: 50 } },
    'use-cases': { rotation: [0, Math.PI * 2, 0], position: { x: 70, y: 60 } },
    statistics: { rotation: [0.5, Math.PI / 3, 0.2], position: { x: 25, y: 70 } },
    brochure: { rotation: [-0.3, Math.PI * 1.2, 0], position: { x: 75, y: 75 } },
    about: { rotation: [0.1, Math.PI * 1.8, 0.1], position: { x: 20, y: 82 } },
    booking: { rotation: [0.3, Math.PI * 2.5, 0], position: { x: 50, y: 90 } },
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(sectionSettings);
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportMiddle = window.innerHeight / 2;
          
          // Section is in the middle third of viewport
          if (rect.top < viewportMiddle && rect.bottom > viewportMiddle) {
            setRotation(sectionSettings[sectionId].rotation);
            setPosition(sectionSettings[sectionId].position);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: '280px',
        height: '350px',
        zIndex: 30,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: 0.9, 
        scale: 1,
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      transition={{ 
        opacity: { duration: 1.2 },
        scale: { duration: 1.2 },
        left: { duration: 0.8, ease: 'easeInOut' },
        top: { duration: 0.8, ease: 'easeInOut' },
      }}
    >
      <Canvas shadows camera={{ position: [8, 2, 8], fov: 50 }}>
        <Environment preset="night" />
        {/* Lights */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          color="#ffb84d"
          castShadow
        />
        <pointLight
          position={[0, -2, 0]}
          intensity={2}
          color="#ffb84d"
          distance={10}
        />
        
        {/* 3D Capsule */}
        <CapsuleGeometry targetRotation={rotation} />
      </Canvas>

      {/* Subtle background glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(255, 184, 77, 0.15) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
    </motion.div>
  );
};
