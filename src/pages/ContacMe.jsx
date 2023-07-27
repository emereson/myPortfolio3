import React from "react";
import Groot from "../components/models3d/Groot";
import "./pagesStyle/contactMe.css";
import Moon from "../components/models3d/Moon";
import BackContactMe from "../components/backgrounds/BackContactMe";
import { Canvas } from "@react-three/fiber";

const ContacMe = ({ pagetranslate }) => {
  return (
    <div
      className={
        pagetranslate === 4 ? "contacMe__container" : "contacMe__Animation"
      }
    >
      <div className="contacMe__data">
        <h2>Contactame</h2>
        <p>
          Si te gustaron algunos de mis proyectos y nesecita ayuda para
          desarrollar una pagina web, por favor pongase en contacto conmigo
          mediante los links que estaran aqui abajo.
        </p>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100087974955688"
              target="_blank"
            >
              <i className="bx bxl-facebook-circle"></i>
            </a>
          </li>
          <li>
            <a href="https://wa.link/ohedux" target="_blank">
              <i className="bx bxl-whatsapp"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/emerson-yujra-997b52260"
              target="_blank"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="mailto:escanorrosa123@gmail.com" target="_blank">
              <i className="bx bxl-gmail"></i>
            </a>
          </li>
        </ul>
      </div>
      <Groot />
      <Moon />
      <div className="contacMe__canvas">
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 20 }}>
          <BackContactMe />
        </Canvas>
        <span></span>
      </div>
    </div>
  );
};

export default ContacMe;
