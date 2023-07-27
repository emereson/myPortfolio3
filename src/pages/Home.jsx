import React from "react";
import "./pagesStyle/homeStyle.css";
import RobotModel from "../components/models3d/RobotModel";
import MiniRobot from "../components/models3d/MiniRobot";
import Particles from "../components/particles/Particles";
const Home = ({ pagetranslate, setpagetranslate }) => {
  return (
    <div
      className={pagetranslate === 0 ? "home__container" : " home__Animation"}
    >
      <div id="particles-js">
        <Particles />
      </div>
      <img src="./49736.jpg" alt="" />
      <span className="home__span"> </span>
      <div className="home__date">
        <span></span>
        <div className="homeDate__text">
          <h2>Hola, mi nombre es Emerson!</h2>
          <p>Y</p>
          <h3>Soy desarrollador full-stack.</h3>
        </div>
      </div>
      <RobotModel />
      <MiniRobot setpagetranslate={setpagetranslate} />
    </div>
  );
};

export default Home;
