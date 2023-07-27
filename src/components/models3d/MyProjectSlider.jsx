import React, { useEffect, useState } from "react";

const MyProjectSlider = ({ pagetranslate }) => {
  const [imageQr, setImageQr] = useState(false);
  const [showProjects, setshowProjects] = useState(false);

  useEffect(() => {
    if (pagetranslate == 3) {
      setTimeout(() => {
        setshowProjects(true);
      }, 1000);
    } else {
      setshowProjects(false);
    }
  }, [pagetranslate]);

  return (
    <div className="projects__informationProjects">
      <div className="projects__oneProjects oneProjects1">
        <img src="./projectImg/qrPet.png" alt="" />
        <h3>Aquí Estoy</h3>
        <p>
          Esta página fue creada para una veterinaria donde tendrás que escanear
          el código QR que está en el collar de la mascota.
          <br />
          La persona que escanee el QR tendrá la información de la mascota junto
          con su ubicación actual, esto es posible gracias a la geolocalización
          de Google Maps. Además, tendrás la opción de compartir la ubicación
          actual.
        </p>
        <ul>
          <li>#Node.js</li>
          <li>#React.js</li>
          <li>#PostgreSQL</li>
          <li>#Google Maps</li>
        </ul>
        <a
          href="https://github.com/emereson/nodePetQR.git"
          target="_blank"
          className="projects__gitHub"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          className="projects_link"
          onClick={() => {
            setImageQr(true);
          }}
        >
          Probar QR
        </a>
        {imageQr ? (
          <div className="project__imageQr">
            <img src="./projectImg/qr.png" alt="" />
            <p
              onClick={() => {
                setImageQr(false);
              }}
            >
              cerrar imagen
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className="projects__oneProjects oneProjects2"
        style={{
          transform: showProjects ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 1s ease",
        }}
      >
        <img src="./projectImg/ligaPadel.png" alt="" />
        <h3>Liga Padel</h3>
        <p>
          Liga Padel fue mi primer proyecto como desarrollador freelance. Su
          función principal es permitir a mi cliente crear eventos como ligas,
          torneos y americanos. También se pueden agregar calendarios, imágenes
          de los jugadores, patrocinadores, entre otros elementos.
          <br />
          El usuario puede inscribirse a cualquier evento a través de la página.
        </p>
        <ul>
          <li>#Node Js</li>
          <li>#React Js</li>
          <li>#Postgre SQL</li>
        </ul>
        <a
          href="https://github.com/emereson/reactLigaPadel.git"
          target="_blank"
          className="projects__gitHub"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://strong-pixie-20867c.netlify.app/"
          target="_blank"
          className="projects_link"
        >
          ver pagina
        </a>
      </div>
      <div
        className="projects__oneProjects oneProjects3 "
        style={{
          transform: showProjects ? "translateX(0)" : "translateX(-200%)",
          transition: "transform 2s ease",
        }}
      >
        <img src="./projectImg/netflyx.png" alt="" />
        <h3>Netflyx</h3>
        <p>
          Este es un proyecto personal, es una página donde podrás ver todos los
          tráilers o adelantos de la película o serie que te interese, cuenta
          con la opción de buscar y filtrar la serie que desees por su nombre o
          género.
        </p>
        <ul>
          <li>#React Js</li>
        </ul>
        <a
          href="https://github.com/emereson/Metflix.git"
          target="_blank"
          className="projects__gitHub"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://dulcet-cucurucho-90d923.netlify.app/"
          target="_blank"
          className="projects_link"
        >
          ver pagina
        </a>
      </div>

      <div
        className="projects__oneProjects oneProjects3 "
        style={{
          transform: showProjects ? "translateX(0)" : "translateX(-200%)",
          transition: "transform 2s ease",
        }}
      >
        <img src="./projectImg/polyclinic.png" alt="" />
        <h3>Policlinico</h3>
        <p>
          En este proyecto fue realizado para un Policlinico de mi ciudad, En
          esta pagina el administrador podra ver la lista de us pacientes segun
          la fecha que elija , tambien podra buscar al paciete mediante el
          numero de su documento de indentidad , tendra la opcion de visualizar
          sus informes medicos junto con la ecografia{" "}
        </p>
        <ul>
          <li>#React Js</li>
          <li>#Nest Js</li>
        </ul>
        <a
          href="https://github.com/emereson/siamPoliclinicos.git"
          target="_blank"
          className="projects__gitHub"
        >
          <i className="bx bxl-github"></i>
        </a>
      </div>
    </div>
  );
};

export default MyProjectSlider;
