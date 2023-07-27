import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import DemondAnimation from "../modelsAnimation/DemondAnimation";

const Demond = () => {
  const { scene, animations } = useGLTF("/demond.glb");
  const zoom = 0.6;
  const cameraPosition = [-10, 8, 18];

  return (
    <div className="demond__contianer">
      <Canvas camera={{ zoom, position: cameraPosition }}>
        <ambientLight intensity={0.5} />
        <OrbitControls target={[0, 0, 0]} enableZoom={false} />
        <Suspense fallback={<div>Loading...</div>}>
          <DemondAnimation scene={scene} animations={animations} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Demond;
