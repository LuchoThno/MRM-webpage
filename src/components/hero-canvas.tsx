"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";

function pseudoRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function ParticleField() {
  const group = useRef<Group>(null);
  const points = useMemo(() => {
    const values = new Float32Array(1800);
    for (let i = 0; i < values.length; i += 3) {
      values[i] = (pseudoRandom(i + 1) - 0.5) * 14;
      values[i + 1] = (pseudoRandom(i + 2) - 0.5) * 10;
      values[i + 2] = (pseudoRandom(i + 3) - 0.5) * 10;
    }
    return values;
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.025;
    group.current.rotation.x = Math.sin(performance.now() * 0.00015) * 0.1;
  });

  return (
    <group ref={group}>
      <Points positions={points} stride={3} frustumCulled>
        <PointMaterial color="#7dd3fc" size={0.035} transparent opacity={0.75} sizeAttenuation depthWrite={false} />
      </Points>
      <Float speed={0.8} rotationIntensity={0.18} floatIntensity={0.35}>
        <mesh position={[2.1, -0.4, -0.5]} rotation={[0.25, 0.9, -0.05]}>
          <torusGeometry args={[1.15, 0.02, 24, 120]} />
          <meshBasicMaterial color="#00AEEF" transparent opacity={0.18} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.25}>
        <mesh position={[-2.4, 1.2, -1.4]} rotation={[1.2, 0.25, 0.3]}>
          <ringGeometry args={[1.1, 1.16, 64]} />
          <meshBasicMaterial color="#FFC72C" transparent opacity={0.12} side={2} />
        </mesh>
      </Float>
    </group>
  );
}

export function HeroCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-90">
      <Canvas camera={{ position: [0, 0, 6], fov: 52 }}>
        <color attach="background" args={["#03111f"]} />
        <fog attach="fog" args={["#03111f", 4, 16]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 4]} color="#7dd3fc" intensity={1.2} />
        <ParticleField />
      </Canvas>
    </div>
  );
}
