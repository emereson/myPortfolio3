import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { AnimationMixer, LoopRepeat } from "three";

const MiniRobotAnimation = ({ scene, animations }) => {
  const miniRobotAnimation = animations[0];
  const mixerRef = useRef();

  if (miniRobotAnimation && scene) {
    mixerRef.current = mixerRef.current || new AnimationMixer(scene);
    const mixer = mixerRef.current;
    const action = mixer.clipAction(miniRobotAnimation);

    if (!action.isRunning()) {
      action.setLoop(LoopRepeat, Infinity);
      action.play();
      action.timeScale = 1.2;
    }

    useFrame((state, delta) => {
      mixer.update(delta);
    });
  }

  return <primitive object={scene} animations={animations} />;
};

export default MiniRobotAnimation;
