import { useState } from "react";
import imgInMind from "../assets/InMind_page-0001.png";
import ButtonEnter from "../components/ButtonEnter";
import styles from "./Home.css";

const iconHome =
  "https://img.icons8.com/?size=100&id=vSCcbxMrzsbl&format=png&color=000000";

const Home = () => {
  {
    /* Função para do Menu Início e Quem Somos */
  }
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };

  return (
    <div>
      {/* Nav-Bar da página */}
      <nav className="nav-bar">
        {/* Logo da marca no Nav-bar */}
        <img src={imgInMind} alt="Foto da logo" className="imgInMind" />

        {/* Barra menu Início e Quem Somos */}
        <div className="menu">
          <div className="menuButton" onClick={ToggleMode}>
            {active ? "Fechar X" : "Menu"}
            <a href="a" className="textMenu">
              Início
            </a>
            <img src={iconHome} alt="logo saduiche" className="iconHome" />
          </div>
          <div className={"menu-dropdown ${active"}>aaaa
            <ul>
              <li>
                <a href="a">Agende Sua Consulta</a>
              </li>
              <li>
                <a href="a">Nosso Whatsapp</a>
              </li>
            </ul>
          </div>

          <a href="" className="textMenu">
            Quem Somos
          </a>
          <img src={iconHome} alt="logo saduiche" className="iconHome" />
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
