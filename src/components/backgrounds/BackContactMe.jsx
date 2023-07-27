import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import React from "react";

const BackContactMe = () => {
  const map = useTexture("/contactMe.jpg");
  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={0.5}
        enableZoom={false}
      />
      <mesh>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh>
    </>
  );
};

export default BackContactMe;
