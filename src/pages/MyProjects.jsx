import React from "react";
import { Canvas } from "@react-three/fiber";
import "./pagesStyle/myProjects.css";
import BackMyProjects from "../components/backgrounds/BackMyProjects";
import MyProjectSlider from "../components/models3d/MyProjectSlider";
import Portal from "../components/models3d/Portal";

const MyProjects = ({ pagetranslate, setpagetranslate }) => {
  return (
    <div
      className={
        pagetranslate === 3 ? "myProjects__container" : " myProjects__Animation"
      }
    >
      <h2>Mis Proyectos</h2>
      <MyProjectSlider pagetranslate={pagetranslate} />
      <div className="myProjects__canvas">
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
          <BackMyProjects />
        </Canvas>
      </div>
      <Portal setpagetranslate={setpagetranslate} />
    </div>
  );
};

export default MyProjects;
