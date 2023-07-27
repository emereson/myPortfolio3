import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import SwordAnimation from "../modelsAnimation/SwordAnimation";

const Sword = ({ setpagetranslate }) => {
  const [swordAnimation, setswordAnimation] = useState(false);
  const { scene, animations } = useGLTF("/sword.glb");
  const zoom = 8;
  const cameraPosition = [10, 40, 20];
  scene.receiveShadow = true;
  scene.castShadow = true;
  scene.children[0].receiveShadow = true;
  scene.children[0].castShadow = true;

  const handleMouseEnter = () => {
    setswordAnimation(true);
  };

  const handleMouseLeave = () => {
    setswordAnimation(false);
  };

  return (
    <div className="sword__contianer">
      <div
        onMouseEnter={handleMouseEnter}
        className="sword__animation"
        style={swordAnimation ? { scale: "1" } : { scale: "0" }}
        onClick={() => setpagetranslate(2)}
      >
        <p>Mis Habilidades</p>
        <span></span>
      </div>
      <Canvas
        style={
          swordAnimation
            ? { opacity: "0", transition: "1s" }
            : { opacity: "1", transition: "1s" }
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        camera={{ zoom, position: cameraPosition }}
      >
        <directionalLight intensity={10} color="blue" />
        <pointLight intensity={10} position={[2, 8, 20]} color="darkred" />
        <pointLight intensity={10} position={[-2, -8, -20]} color="red" />
        <OrbitControls target={[12, 5, 1]} enableZoom={false} />
        <Suspense fallback={null}>
          <SwordAnimation scene={scene} animations={animations} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Sword;
