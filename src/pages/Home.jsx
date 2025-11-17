import React, { useState } from "react";
import imgInMind from "../assets/InMind_page-0001.png";
import imgInicioArrow from "../assets/logo-inicio-seta.png";
import imgInicioHome from "../assets/logo-inicio-hamburguer.png";
import imgQuemSomosArrow from "../assets/logo-quemsomos-arrow.png";
import imgQuemSomosHome from "../assets/logo-quemsomos-home.png";
import ButtonEnter from "../components/ButtonEnter";
import styles from "./Home.css";

const Home = () => {
  {
    /* Função para do Menu Início */
  }
  const [isOpenInicio, setIsOpenInicio] = useState(false);
  const ToggleMenuInicio = () => {
    setIsOpenInicio(!isOpenInicio);
  };

  {
    /* Função para do Menu Quem Somos */
  }
  const [isOpenQuemSomos, setIsOpenQuemSomos] = useState(false);
  const ToggleMenuQuemSomos = () => {
    setIsOpenQuemSomos(!isOpenQuemSomos);
  };

  return (
    <div>
      {/* Nav-Bar da página */}
      <nav className="nav-bar">
        {/* Logo da marca no Nav-bar */}
        <img src={imgInMind} alt="Foto da logo" className="imgInMind" />

        {/* Barra menu Início e Quem Somos */}
        <div className="menu">
          {/* Menu Início */}
          <div className="menuButtonInicio" onClick={ToggleMenuInicio}>
            {isOpenInicio ? (
              <img
                src={imgInicioArrow}
                alt="logo inicio seta"
                className="imgInicioArrow"
              />
            ) : (
              <img
                src={imgInicioHome}
                alt="logo inicio home"
                className="imgInicioHome"
              />
            )}
          </div>
          <div className={`menu-dropdown-inicio ${isOpenInicio ? "open" : ""}`}>
            <ul>
              <li>
                <a href="a">Agende Sua Consulta</a>
              </li>
              <li>
                <a href="a">Nosso Whatsapp</a>
              </li>
            </ul>
          </div>

          {/* Menu Quem Somos */}

          <div className="menuButtonQuemSomos" onClick={ToggleMenuQuemSomos}>
            {isOpenQuemSomos ? (
              <img
                src={imgQuemSomosArrow}
                alt="logo inicio seta"
                className="imgInicioArrow"
              />
            ) : (
              <img
                src={imgQuemSomosHome}
                alt="logo inicio home"
                className="imgInicioHome"
              />
            )}
          </div>
          <div
            className={`menu-dropdown-quem-somos ${
              isOpenQuemSomos ? "open" : ""
            }`}
          >
            <ul>
              <li>
                <a href="a">Quem Somos</a>
              </li>
              <li>
                <a href="a">Missão, Valores, Abordagem</a>
              </li>
            </ul>
          </div>
        </div>
        <ButtonEnter className="buttonEnter" />
      </nav>
      {/* Nav-Bar da página */}

      <div className="body">
        <div className="schedule">
          <h1>Agende</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
