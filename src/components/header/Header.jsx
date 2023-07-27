import React, { useState } from "react";
import "./headerStyle.css";

const Header = ({ setpagetranslate, pagetranslate }) => {
  const [linkAnimations, setLinkAnimations] = useState({});

  const handleMouseEnter = (id) => {
    setLinkAnimations((prevAnimations) => ({ ...prevAnimations, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setLinkAnimations((prevAnimations) => ({ ...prevAnimations, [id]: false }));
  };

  return (
    <header className="header__contianer">
      <ul className={`headerContainer__ul headerContainer__ul${pagetranslate}`}>
        <li
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
          <a onClick={() => setpagetranslate(0)}>
            <i
              className={`headerContainer__i headerContainer__i${pagetranslate} bx bxs-home`}
            >
              <span
                className={`headerContainerUl__span headerContainerUl__span${pagetranslate}`}
              ></span>
            </i>
          </a>

          <div
            className={`linkAnimations linkAnimations${pagetranslate}`}
            style={linkAnimations[1] ? { scale: "1" } : { scale: "0" }}
          >
            <a
              className={`linkAnimations__a linkAnimations__a${pagetranslate}`}
              onClick={() => setpagetranslate(0)}
            >
              Inicio
            </a>{" "}
            <span
              className={`linkAnimations__span linkAnimations__span${pagetranslate}`}
            ></span>
          </div>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          <a onClick={() => setpagetranslate(1)}>
            <i
              className={`headerContainer__i headerContainer__i${pagetranslate} bx bxs-user`}
            >
              <span></span>
            </i>
          </a>
          <div
            className={`linkAnimations linkAnimations${pagetranslate}`}
            style={linkAnimations[2] ? { scale: "1" } : { scale: "0" }}
          >
            <a
              className={`linkAnimations__a linkAnimations__a${pagetranslate}`}
              onClick={() => setpagetranslate(1)}
            >
              Sobre Mi
            </a>{" "}
            <span
              className={`linkAnimations__span linkAnimations__span${pagetranslate}`}
            ></span>
          </div>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
        >
          <a onClick={() => setpagetranslate(2)}>
            <i
              className={`headerContainer__i headerContainer__i${pagetranslate} bx bxl-sketch`}
            >
              <span></span>
            </i>
          </a>
          <div
            className={`linkAnimations linkAnimations${pagetranslate}`}
            style={linkAnimations[3] ? { scale: "1" } : { scale: "0" }}
          >
            <a
              className={`linkAnimations__a linkAnimations__a${pagetranslate}`}
              onClick={() => setpagetranslate(2)}
            >
              Mis Habilidades
            </a>{" "}
            <span
              className={`linkAnimations__span linkAnimations__span${pagetranslate}`}
            ></span>
          </div>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave(4)}
        >
          <a onClick={() => setpagetranslate(3)}>
            <i
              className={`headerContainer__i headerContainer__i${pagetranslate} bx bxs-slideshow`}
            >
              <span></span>
            </i>
          </a>
          <div
            className={`linkAnimations linkAnimations${pagetranslate}`}
            style={linkAnimations[4] ? { scale: "1" } : { scale: "0" }}
          >
            <a
              className={`linkAnimations__a linkAnimations__a${pagetranslate}`}
              onClick={() => setpagetranslate(3)}
            >
              MiS Proyectos
            </a>{" "}
            <span
              className={`linkAnimations__span linkAnimations__span${pagetranslate}`}
            ></span>
          </div>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={() => handleMouseLeave(5)}
        >
          <a onClick={() => setpagetranslate(4)}>
            <i
              className={`headerContainer__i headerContainer__i${pagetranslate} bx bxs-contact`}
            >
              <span></span>
            </i>
          </a>
          <div
            className={`linkAnimations linkAnimations${pagetranslate}`}
            style={linkAnimations[5] ? { scale: "1" } : { scale: "0" }}
          >
            <a
              className={`linkAnimations__a linkAnimations__a${pagetranslate}`}
              onClick={() => setpagetranslate(4)}
            >
              Contactame
            </a>{" "}
            <span
              className={`linkAnimations__span linkAnimations__span${pagetranslate}`}
            ></span>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
