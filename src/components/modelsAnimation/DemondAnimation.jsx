import { useRef } from "react";
import { AnimationMixer, LoopRepeat } from "three";
import { useFrame } from "@react-three/fiber";

const DemondAnimation = ({ scene, animations }) => {
  const demondAnimation = animations[0];
  const mixerRef = useRef();

  if (demondAnimation && scene) {
    mixerRef.current = mixerRef.current || new AnimationMixer(scene);
    const mixer = mixerRef.current;
    const action = mixer.clipAction(demondAnimation);

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

export default DemondAnimation;
