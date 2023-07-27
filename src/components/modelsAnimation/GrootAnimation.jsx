import { useRef } from "react";
import { AnimationMixer, LoopRepeat } from "three";
import { useFrame } from "@react-three/fiber";

const GrootAnimation = ({ scene, animations }) => {
  const groodAnimation = animations[0];
  const mixerRef = useRef();

  if (groodAnimation && scene) {
    mixerRef.current = mixerRef.current || new AnimationMixer(scene);
    const mixer = mixerRef.current;
    const action = mixer.clipAction(groodAnimation);

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

export default GrootAnimation;
