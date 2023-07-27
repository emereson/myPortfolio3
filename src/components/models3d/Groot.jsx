import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import GrootAnimation from "../modelsAnimation/GrootAnimation";

const Groot = () => {
  const { scene, animations } = useGLTF("/groot.glb");
  const zoom = 10;
  const cameraPosition = [20, 0, 25];

  return (
    <div className="groot__container">
      <Canvas camera={{ zoom, position: cameraPosition }}>
        <ambientLight intensity={0.1} />
        <OrbitControls
          target={[0, 2, 0]}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <Suspense>
          <GrootAnimation scene={scene} animations={animations} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Groot;
