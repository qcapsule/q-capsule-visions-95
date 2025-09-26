import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Float, Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function CapsuleGeometry() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.8}
      floatingRange={[-0.1, 0.1]}
    >
      <group ref={meshRef}>
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
    </Float>
  );
}

interface CapsuleModel3DProps {
  className?: string;
}

export const CapsuleModel3D = ({ className }: CapsuleModel3DProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [8, 2, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Environment preset="night" />
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
        <CapsuleGeometry />
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};