"use client";

import { JSX, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";

export default function Robot() {
  return (
    <div className="relative h-screen w-full">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.8} color="#ffffff" />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.4}
          castShadow
          shadow-mapSize={[2048, 2048]}
          color="#ffffff"
        />
        <directionalLight
          position={[-4, 2, -3]}
          intensity={0.1}
          color="#ddeeff"
        />
        <Environment preset="studio" environmentIntensity={0.6} />
        <ContactShadows
          position={[0, -1.6, 0]}
          opacity={0.25}
          scale={6}
          blur={2.5}
          far={4}
          color="#aaaaaa"
        />
        <OrbitControls enableZoom={false} enablePan={false} />
        <Model />
      </Canvas>
    </div>
  );
}

function Model(): JSX.Element {
  const { scene } = useGLTF("/models/bic.glb");
  const modelRef = useRef<THREE.Object3D>(null!);

  return <primitive ref={modelRef} object={scene} scale={1} />;
}
