import styles from "./MenuQuemSomos.css"
import imgQuemSomosArrow from "../../../assets/logo-quemsomos-arrow.png";
import imgQuemSomosHome from "../../../assets/logo-quemsomos-home.png";

const MenuQuemSomos = ({ menuId, isOpen, onToggle}) => {
  {
    /* Função para do Menu Quem Somos */
  }
  const handleClick = () => {
    onToggle(menuId);
  };

  return (
    <div>
      <div className="menuButtonQuemSomos" onClick={handleClick}>
        {isOpen ? (
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
      <div className={`menu-dropdown-quem-somos ${isOpen ? "open" : ""}`}>
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
  );
};

export default MenuQuemSomos;
