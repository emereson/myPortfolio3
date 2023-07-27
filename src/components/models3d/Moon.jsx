import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const Moon = () => {
  const { scene } = useGLTF("/moon.glb");
  const zoom = 14;
  const cameraPosition = [10, 60, 30];

  return (
    <div className="moon__container">
      <Canvas camera={{ zoom, position: cameraPosition }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[0, 50, 0]} intensity={0.3} color="turquoise" />
        <OrbitControls
          target={[0, 6, 0]}
          autoRotate={true}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotateSpeed={0.5}
        />
        <Suspense fallback={null}>
          <primitive object={scene} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Moon;
