import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useMemo, useRef } from "react";
import SpacecraftAnimation from "../modelsAnimation/SpacecraftAnimation";

const Spacecraft = () => {
  const { scene, animations } = useGLTF("/galaxy.glb");
  const zoom = 6.5;
  const cameraPosition = [-8, 15, 10];
  scene.receiveShadow = true;
  scene.castShadow = true;

  return (
    <div className="spaceCraft__container">
      <Canvas camera={{ zoom, position: cameraPosition }}>
        <ambientLight intensity={5} />
        <pointLight intensity={10} position={[-2, -5, 10]} color="purple" />
        <OrbitControls target={[0, 0, 0]} enableZoom={false} />
        <Suspense fallback={null}>
          <SpacecraftAnimation scene={scene} animations={animations} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Spacecraft;
