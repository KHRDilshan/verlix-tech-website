"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function CameraModel() {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/camera.glb");

  scene.scale.set(0.8, 0.8,0.8);
  scene.position.set(0, -0.8, 0);

  scene.traverse((child: any) => {
    if (child.isMesh && child.material) {
      child.material.needsUpdate = true;
    }
  });

  useFrame(() => {
    if (!ref.current) return;

    const progress =
      window.scrollY /
      (document.body.scrollHeight - window.innerHeight);

    ref.current.rotation.y = progress * Math.PI * 2;
    ref.current.rotation.x = progress * Math.PI * 0.3;
  });

  return <primitive ref={ref} object={scene} />;
}

export default function CameraScene() {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 3], fov: 55 }}
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1,
      }}
    >

      <Suspense fallback={null}>
        <CameraModel />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}
