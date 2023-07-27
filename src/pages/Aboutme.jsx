import React from "react";
import Demond from "../components/models3d/Demond";
import "./pagesStyle/aboutmeStyle.css";
import Sword from "../components/models3d/Sword";

const Aboutme = ({ pagetranslate, setpagetranslate }) => {
  return (
    <div
      className={
        pagetranslate === 1
          ? "aboutMe__container"
          : " aboutMe__containerAnimation"
      }
    >
      <img src="./aboutme.jpg" alt="" />
      <span className="aboutMe__span"> </span>
      <Sword setpagetranslate={setpagetranslate} />

      <div className="aboutMe__date">
        <section>
          <span></span>
          <h2>Sobre Mí</h2>
          <p>
            Hola, mi nombre es Emerson, pero mis amigos me llaman "Reizor". Soy
            una persona autodidacta. Desde que conocí el mundo de la
            programación, se ha convertido en mi pasatiempo favorito junto al
            deporte de contacto "mma".
          </p>
          <p>
            Tengo excelentes habilidades de comunicación. Me encanta colaborar y
            trabajar en equipo. Actualmente, estoy buscando un trabajo de tiempo
            completo como desarrollador full-stack , front-end o back-end ,donde
            pueda aplicar mis conocimientos y habilidades para seguir
            mejorando..
          </p>
        </section>
      </div>
      <Demond />
    </div>
  );
};

export default Aboutme;
