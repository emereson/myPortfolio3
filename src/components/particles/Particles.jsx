import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const Particles1 = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 40,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 3,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "##02dbbb",
          },
          links: {
            color: "#3610ff",
            distance: 150,
            enable: true,
            opacity: 1,
            width: 1.2,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 300,
            },
            value: 20,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "star",
            star: {
              nb_sides: 6,
            },
          },
          size: {
            value: { min: 2, max: 8 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
export default Particles1;
