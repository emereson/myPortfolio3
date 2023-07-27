import React from "react";
import "./pagesStyle/mySkillsStyle.css";
import Spacecraft from "../components/models3d/Spacecraft";
import Eart from "../components/models3d/Eart";

const MySkills = ({ pagetranslate, setpagetranslate }) => {
  return (
    <div
      className={
        pagetranslate === 2 ? "mySkills__container" : "  mySkills__Animation"
      }
    >
      <img src="./skills.png" alt="" />
      <span className="mySkills__span"> </span>
      <Spacecraft />
      <Eart setpagetranslate={setpagetranslate} />

      <div className="skills__data" id="skill">
        <h2>Mis Habilidades</h2>
        <ul className="skills__ul">
          <li className="skills__li javascript">
            <span></span>
            <i className="bx bxl-javascript"></i>
            <p>JavaScript</p>
          </li>
          <li className="skills__li html5">
            <span></span>
            <i className="bx bxl-html5"></i>
            <p>Html</p>
          </li>
          <li className="skills__li css3">
            <span></span>
            <i className="bx bxl-css3"></i>
            <p>Css</p>
          </li>
          <li className="skills__li react">
            <span></span>
            <i className="bx bxl-react"></i>
            <p>React js</p>
          </li>
          <li className="skills__li angular">
            <span></span>
            <i className="bx bxl-angular"></i>
            <p>Angular</p>
          </li>
          <li className="skills__li bootstrap">
            <span></span>
            <i className="bx bxl-bootstrap"></i>
            <p>Bootstrap</p>
          </li>
          <li className="skills__li nodejs">
            <span></span>
            <i className="bx bxl-nodejs"></i>
            <p>Node Js</p>
          </li>
          <li className="skills__li postgresql">
            <span></span>
            <i className="bx bxl-postgresql"></i>
            <p>Postgre SQL</p>
          </li>
          <li className="skills__li blender">
            <span></span>
            <i className="bx bxl-blender"></i>
            <p>Blender</p>
          </li>
          <li className="skills__li php">
            <span></span>
            <i className="bx bxl-php"></i>
            <p>php</p>
          </li>
          <li className="skills__li postgresql">
            <span></span>
            <i className="bx bxl-wordpress"></i>
            <p>Wordpress</p>
          </li>
          <li className="skills__li css3">
            <span></span>
            <img src="/nestJs.png" alt="" />
            <p>Nest js</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MySkills;
