"use client";

import { Canvas } from "@react-three/fiber";
import { Sphere, Decal, useTexture, OrbitControls } from "@react-three/drei";

const iconData = [
  { name: "Modular", url: "/icons/modular.png" },
  { name: "Pre-Setup", url: "/icons/pre-setup.png" },
  { name: "Smart AI", url: "/icons/smart-ai.png" },
  { name: "STEM Learning", url: "/icons/stem-learning.png" },
  { name: "Community", url: "/icons/comunity.png" },
  { name: "Free Code", url: "/icons/free-code.png" },
];

function IconBall({ url }: { url: string }) {
  const decalTexture = useTexture(url);
  return (
    <Sphere args={[1, 32, 32]} scale={0.8}>
      <meshStandardMaterial color="#fff" roughness={10} metalness={0} />
      <Decal position={[0, 0, 1]} rotation={[0, 0, 0]} scale={0.8}>
        <meshStandardMaterial
          map={decalTexture}
          transparent
          depthWrite={false}
          polygonOffset
          polygonOffsetFactor={-1}
        />
      </Decal>
    </Sphere>
  );
}

function SphereCanvas({ url }: { url: string }) {
  return (
    <Canvas
      className="w-40! "
      camera={{ position: [0, 0, 3], fov: 40 }}
      gl={{ alpha: true }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-3, -2, -3]} intensity={0.3} />
      <IconBall url={url} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

export default function IconSpheres() {
  return (
    <div className="flex flex-wrap  p-6">
      {iconData.map((icon) => (
        <div key={icon.name} className="flex flex-col items-center gap-1 ">
          <SphereCanvas url={icon.url} />
          <span className="text-xs font-semibold text-clicbot-accent">
            {icon.name}
          </span>
        </div>
      ))}
    </div>
  );
}
