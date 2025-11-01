import { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import floorplanBgImage from "@/assets/floorplan-bg.jpg";

function CapsuleStructureModel() {
  const meshRef = useRef<THREE.Group>(null);
  
  // Load the GLB model
  const { scene } = useGLTF('/capsulestructure.glb');
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  if (!scene) {
    console.log('GLB model not loaded yet...');
    return (
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    );
  }

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.5}
      floatingRange={[-0.05, 0.05]}
    >
      <group ref={meshRef} position={[0, 0, 0]}>
        <primitive object={scene} scale={[30, 30, 30]}>
          <meshStandardMaterial color="white" />
        </primitive>
      </group>
    </Float>
  );
}

interface TechnologySectionProps {
  className?: string;
}

export const TechnologySection = ({ className }: TechnologySectionProps) => {
  return (
    <section 
      className={`py-20 px-4 min-h-screen relative ${className}`}
      style={{
        backgroundImage: `url(${floorplanBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Section - Main Content */}
            <div className="space-y-8 lg:col-span-2">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                Building Capsules with Advanced Technology
              </h2>
              <p className="text-lg text-white/90 leading-relaxed drop-shadow-md">
                Q-Capsules built using cutting-edge modular technology have gained widespread recognition worldwide, 
                with some structures serving communities for decades with exceptional reliability and performance.
              </p>
            </div>
            
            {/* 3D Model Display */}
            <div className="w-full h-[600px]">
              <Canvas
                camera={{ position: [35, 18, 35], fov: 50 }}
                style={{ background: 'transparent' }}
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
                <Suspense fallback={
                  <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color="gray" />
                  </mesh>
                }>
                  <CapsuleStructureModel />
                </Suspense>
                <OrbitControls 
                  enablePan={false}
                  enableZoom={false}
                  autoRotate
                  autoRotateSpeed={0.8}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 4}
                />
              </Canvas>
            </div>
          </div>

          {/* Right Section - Features/Benefits */}
          <div className="space-y-6 lg:col-span-1 mt-36">
            {/* High Strength Card */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 relative overflow-hidden group hover:border-white/40 transition-all duration-500">
              {/* Ambient LED Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-amber-100/5 via-amber-50/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-amber-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-amber-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="flex items-start space-x-4 relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Exceptional Durability</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Resistant to structural stress, weather damage, and long-term wear, ensuring decades of reliable service.
                  </p>
                </div>
              </div>
            </div>

            {/* Thermal Insulation Card */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 relative overflow-hidden group hover:border-white/40 transition-all duration-500">
              {/* Ambient LED Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-amber-100/5 via-amber-50/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-amber-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-amber-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="flex items-start space-x-4 relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Superior Insulation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Advanced thermal management systems provide rapid heating and maintain optimal temperatures efficiently.
                  </p>
                </div>
              </div>
            </div>

            {/* No Shrinkage Card */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 relative overflow-hidden group hover:border-white/40 transition-all duration-500">
              {/* Ambient LED Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-amber-100/5 via-amber-50/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-amber-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-amber-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="flex items-start space-x-4 relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Immediate Occupancy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Pre-fabricated modular design allows for immediate use upon installation with no settling period required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
