import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import RobotAnimation from "../modelsAnimation/RobotAnimation";

const RobotModel = () => {
  const { scene, animations } = useGLTF("/robot.gltf");
  const zoom = 8;
  const cameraPosition = [1, 1, 20];

  return (
    <div className="robotModel__contianer">
      <Canvas camera={{ zoom, position: cameraPosition }}>
        <ambientLight intensity={1} color="purple" />
        <pointLight position={[-8, 0, -15]} intensity={20} color="black" />
        <pointLight position={[8, 0, 15]} intensity={20} color="purple" />
        <OrbitControls target={[0, 1.3, 0]} enableZoom={false} />
        <Suspense fallback={<div>Loading...</div>}>
          <RobotAnimation scene={scene} animations={animations} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default RobotModel;
