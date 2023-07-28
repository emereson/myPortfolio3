import "./App.css";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Aboutme from "./pages/Aboutme";
import { useEffect, useState } from "react";
import MySkills from "./pages/MySkills";
import MyProjects from "./pages/MyProjects";
import ContacMe from "./pages/ContacMe";

function App() {
  const [pagetranslate, setpagetranslate] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setAnimationStarted(true);

    const timeout = setTimeout(() => {
      setAnimationStarted(false);
    }, 1500);
  }, [pagetranslate]);

  return (
    <div className="app__container">
      <Header
        setpagetranslate={setpagetranslate}
        pagetranslate={pagetranslate}
      />
      <div className={animationStarted ? "pageAnimations" : ""}></div>
      <Home pagetranslate={pagetranslate} setpagetranslate={setpagetranslate} />
      <Aboutme
        pagetranslate={pagetranslate}
        animationStarted={animationStarted}
        setpagetranslate={setpagetranslate}
      />
      <MySkills
        pagetranslate={pagetranslate}
        setpagetranslate={setpagetranslate}
      />
      <MyProjects
        pagetranslate={pagetranslate}
        setpagetranslate={setpagetranslate}
      />
      <ContacMe
        pagetranslate={pagetranslate}
        setpagetranslate={setpagetranslate}
      />
    </div>
  );
}

export default App;
