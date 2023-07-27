import { useRef } from "react";
import { AnimationMixer, LoopRepeat } from "three";
import { useFrame } from "@react-three/fiber";
const SpacecraftAnimation = ({ scene, animations }) => {
  const robotAnimation = animations[0];
  const mixerRef = useRef();

  if (robotAnimation && scene) {
    mixerRef.current = mixerRef.current || new AnimationMixer(scene);
    const mixer = mixerRef.current;
    const action = mixer.clipAction(robotAnimation);

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

export default SpacecraftAnimation;
