import imgInMind from "../assets/InMind_page-0001.png";
import ButtonEnter from "../components/ButtonEnter";
import styles from "./Home.css";

const iconHome =
  "https://img.icons8.com/?size=100&id=vSCcbxMrzsbl&format=png&color=000000";

const Home = () => {
  return (
    <div>
      {/* Nav-Bar da página */}
      <nav className="nav-bar">
        <img src={imgInMind} alt="Foto da logo" className="imgInMind" />
        <div className="menu">
          <a href="a" className="textMenu">
            Início
          </a>
          <img src={iconHome} alt="logo saduiche" className="iconHome" />
          <a href="" className="textMenu">
            Quem Somos
          </a>
          <img src={iconHome} alt="logo saduiche" className="iconHome" />
        </div>
        <ButtonEnter className="buttonEnter"/>
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
