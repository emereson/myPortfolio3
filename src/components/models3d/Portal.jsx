import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";

const Portal = ({ setpagetranslate }) => {
  const [eartAnimation, seteartAnimation] = useState(false);
  const { scene } = useGLTF("/portal.glb");
  const zoom = 5;
  const cameraPosition = [10, 5, 10];
  scene.receiveShadow = true;
  scene.castShadow = true;

  const handleMouseEnter = () => {
    seteartAnimation(true);
  };

  const handleMouseLeave = () => {
    seteartAnimation(false);
  };
  return (
    <div className="portal__contianer">
      <div
        onMouseEnter={handleMouseEnter}
        className="portal__animation"
        style={eartAnimation ? { scale: "1" } : { scale: "0" }}
        onClick={() => setpagetranslate(4)}
      >
        <p>Contactame</p>
        <span></span>
      </div>
      <Canvas
        camera={{ zoom, position: cameraPosition }}
        style={
          eartAnimation
            ? { opacity: "0.8", transition: "1s" }
            : { opacity: "1", transition: "0.5s" }
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ambientLight intensity={0.5} color="purple" />
        <pointLight position={[0, 0.1, 0]} intensity={0.5} />
        <pointLight position={[0, 0.3, 0]} intensity={4} color="turquoise" />
        <OrbitControls target={[0, 0, 0]} autoRotate={true} enableZoom={true} />
        <Suspense fallback={null}>
          <primitive object={scene} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Portal;
