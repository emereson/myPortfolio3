import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";

const Eart = ({ setpagetranslate }) => {
  const [eartAnimation, seteartAnimation] = useState(false);
  const { scene } = useGLTF("/eart.glb");
  const zoom = 0.5;
  const cameraPosition = [100, -80, 100];
  scene.receiveShadow = true;
  scene.castShadow = true;

  const handleMouseEnter = () => {
    seteartAnimation(true);
  };

  const handleMouseLeave = () => {
    seteartAnimation(false);
  };
  return (
    <div
      className="eart__contianer"
      style={
        eartAnimation
          ? { background: "none" }
          : {
              background: `linear-gradient(
                75deg,
                rgba(226, 6, 255, 0.491),
                rgba(91, 0, 228, 0.426)
      )`,
            }
      }
    >
      <div
        onMouseEnter={handleMouseEnter}
        className="eart__animation"
        style={eartAnimation ? { scale: "1" } : { scale: "0" }}
        onClick={() => setpagetranslate(3)}
      >
        <p>Mis Proyectos</p>
        <span></span>
      </div>
      <Canvas
        camera={{ zoom, position: cameraPosition }}
        style={
          eartAnimation
            ? { opacity: "0", transition: "1s" }
            : { opacity: "1", transition: "1s" }
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ambientLight intensity={2} />
        <OrbitControls
          target={[-5, 10, -500]}
          autoRotate={true}
          enableZoom={true}
        />
        <Suspense fallback={null}>
          <primitive object={scene} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Eart;
