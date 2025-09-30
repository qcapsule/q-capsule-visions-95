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
  const [rotation, setRotation] = useState<[number, number, number]>([0.15, Math.PI / 4, 0]);
  const [position, setPosition] = useState({ x: '50%', y: '50%', scale: 1 });

  // Map sections to rotations and positions
  const sectionSettings: Record<string, { 
    rotation: [number, number, number]; 
    position: { x: string; y: string; scale: number } 
  }> = {
    hero: { rotation: [0.15, Math.PI / 4, 0], position: { x: '50%', y: '50%', scale: 1.5 } },
    customization: { rotation: [-0.1, Math.PI / 1.5, 0.05], position: { x: '75%', y: '30%', scale: 1 } },
    floorplan: { rotation: [0.2, Math.PI, -0.05], position: { x: '20%', y: '40%', scale: 0.9 } },
    environments: { rotation: [-0.15, Math.PI * 1.3, 0.1], position: { x: '80%', y: '55%', scale: 1.1 } },
    'use-cases': { rotation: [0.25, Math.PI * 1.7, -0.1], position: { x: '15%', y: '35%', scale: 0.95 } },
    statistics: { rotation: [-0.2, Math.PI / 5, 0.15], position: { x: '70%', y: '60%', scale: 1 } },
    brochure: { rotation: [0.1, Math.PI * 1.1, -0.05], position: { x: '25%', y: '50%', scale: 0.9 } },
    about: { rotation: [-0.1, Math.PI * 1.6, 0.08], position: { x: '75%', y: '45%', scale: 1 } },
    booking: { rotation: [0.2, Math.PI * 2, 0], position: { x: '50%', y: '55%', scale: 1.1 } },
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(sectionSettings);
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportMiddle = window.innerHeight / 2;
          
          // Section is in the middle of viewport
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
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        width: '450px',
        height: '550px',
        zIndex: 30,
        pointerEvents: 'none',
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: 1, 
        scale: position.scale,
        left: position.x,
        top: position.y,
      }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
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
