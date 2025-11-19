import React from 'react'
import imgInicioArrow from '../../../assets/logo-inicio-seta.png'
import imgInicioHome from '../../../assets/logo-inicio-hamburguer.png'
import styles from "./MenuInicio.css";

const MenuInicio = ({ menuId, isOpen, onToggle}) => {
  {
    /* Função para do Menu Início */
  }
  const handleClick = () => {
    onToggle(menuId);
  };

  return (
    <div>
      {/* Menu Início */}
      <div className="menuButtonInicio" onClick={handleClick}>
        {isOpen ? (
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
      <div className={`menu-dropdown-inicio ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="a">Agende Sua Consulta</a>
          </li>
          <li>
            <a href="a">Nosso Whatsapp</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuInicio;
