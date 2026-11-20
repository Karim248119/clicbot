"use client";
import { JSX, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing"; // 1. Import postprocessing
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
        <Environment preset="studio" environmentIntensity={0.4} />
        {/* <ContactShadows
          position={[0, -1.6, 0]}
          opacity={0.25}
          scale={6}
          blur={2.5}
          far={4}
          color="#aaaaaa"
        /> */}
        <Model />

        {/* 2. Add EffectComposer with Bloom */}
        <EffectComposer>
          <Bloom
            intensity={0.012} // Strength of the glow (adjust as needed)
            luminanceThreshold={20} // How bright a surface needs to be to start glowing
            luminanceSmoothing={0.05} // Smooth transition for the bloom
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

function Model(): JSX.Element {
  const { scene } = useGLTF("/models/cb1.glb");
  const modelRef = useRef<THREE.Object3D>(null!);
  const headRef = useRef<THREE.Object3D | null>(null);
  const initialHeadRotation = useRef<THREE.Euler | null>(null);

  useEffect(() => {
    if (!scene) return;

    const headNode = scene.getObjectByName("head");
    if (headNode) {
      headRef.current = headNode;
      initialHeadRotation.current = headNode.rotation.clone();
    }

    // 3. Upgraded eye material for maximum glow
    const eyeMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#00f5ff"),
      emissive: new THREE.Color("#00f5ff"),
      emissiveIntensity: 500, // Increased intensity
      roughness: 0.1,
      metalness: 0.1,
      toneMapped: false, // Essential to allow HDR bright colors
    });

    const apply = () => {
      scene.traverse((obj) => {
        if (obj.name === "lens") {
          (obj as THREE.Mesh).material = eyeMat;
        }
      });
    };

    apply();
    const t = setTimeout(apply, 100);
    return () => clearTimeout(t);
  }, [scene]);
  useFrame((state) => {
    if (!modelRef.current || !headRef.current) return;

    const { mouse } = state;

    const targetY = mouse.x;
    const targetX = -mouse.y * 0.3;

    // Smoothly interpolate towards the target rotation
    headRef.current.rotation.y = THREE.MathUtils.lerp(
      headRef.current.rotation.y,
      targetY,
      0.1,
    );
    headRef.current.rotation.x = THREE.MathUtils.lerp(
      headRef.current.rotation.x,
      targetX,
      0.1,
    );
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1}
      position={[0, -0.4, 0]}
      rotation={[0, 0, 0]}
    />
  );
}
