import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import MiniRobotAnimation from "../modelsAnimation/MiniRobotAnimation";

const MiniRobot = ({ setpagetranslate }) => {
  const { scene, animations } = useGLTF("/miniRobot.glb");
  const [linkAnimations, setLinkAnimations] = useState(false);
  const zoom = 6.5;
  const cameraPosition = [20, -5, 0];

  const handleMouseEnter = () => {
    setLinkAnimations(true);
  };

  const handleMouseLeave = () => {
    setLinkAnimations(false);
  };

  return (
    <div className="miniRobot__container">
      <div className="miniRobot__canvas" onClick={() => setpagetranslate(1)}>
        <Canvas
          camera={{ zoom, position: cameraPosition }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[1, 4, 4]} intensity={50} color="purple" />
          <OrbitControls target={[0, 0, 0]} enableZoom={false} />
          <Suspense fallback={<div>Loading...</div>}>
            <MiniRobotAnimation scene={scene} animations={animations} />
          </Suspense>
        </Canvas>
      </div>
      <div
        className="miniRobot__divLink"
        style={linkAnimations ? { scale: "1" } : { scale: "0" }}
      >
        <p>Sobre Mi</p>
        <span></span>
      </div>
    </div>
  );
};

export default MiniRobot;
