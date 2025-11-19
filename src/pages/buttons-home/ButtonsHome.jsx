import React, { useState } from "react";
import ButtonInicio from "./buttons/MenuInicio";
import ButtonQuemSomos from "./buttons/MenuQuemSomos";
import "./ButtonsHome.css"

const ButtonInicioA = "Button-Inicio";
const ButtonQuemSomosB = "Button-QuemSomos";
const Nenhum = null;

const ButtonsHome = () => {
  const [menuAberto, setMenuAberto] = useState(Nenhum);
  const toggleMenu = (menuId) => {
    setMenuAberto(menuAberto === menuId ? Nenhum : menuId);
  }

  return (
    <div className="buttonsMenu">
      <ButtonInicio 
        menuId = {ButtonInicioA}
        isOpen = {menuAberto === ButtonInicioA}
        onToggle = {toggleMenu}
      />
      <ButtonQuemSomos 
        menuId = {ButtonQuemSomosB}
        isOpen = {menuAberto === ButtonQuemSomosB}
        onToggle = {toggleMenu}
      />
    </div>
  )

};

export default ButtonsHome;
