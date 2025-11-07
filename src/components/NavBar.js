import imgInMind from "./files/InMind_page-0001.png";
import styles from "./NavBar.css"

const iconHome =
  "https://img.icons8.com/?size=100&id=vSCcbxMrzsbl&format=png&color=000000";

const NavBar = () => {
  return (
    <div>
      <nav className="nav-bar">
        <img src={imgInMind} alt="Foto da logo" className="imgInMind" />
        <div className="menu">
          <a href="a">Início</a>
          <img src={iconHome} alt="logo saduiche" className="iconHome" />
          <a href="">Quem Somos</a>
          <img src={iconHome} alt="logo saduiche" className="iconHome" />
        </div>
        <button className="buttonEnter">Entrar</button>
      </nav>
    </div>
  );
};

export default NavBar;
