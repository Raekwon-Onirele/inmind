import React, { useState } from "react";
import ButtonInicio from "./buttons/MenuInicio";
import ButtonQuemSomos from "./buttons/MenuQuemSomos";
import "./ButtonsHome.css"

// Variáveis para identificação dos botões
const ButtonInicioA = "Button-Inicio";
const ButtonQuemSomosB = "Button-QuemSomos";
const Nenhum = null;

// Função para quando um menu estiver aberto o outro fechar
const ButtonsHome = ({scrollDestinationQuemSomos, scrollDestinationMissao, scrollDestinationAgende}) => {
  const [menuAberto, setMenuAberto] = useState(Nenhum);
  const toggleMenu = (menuId) => {
    setMenuAberto(menuAberto === menuId ? Nenhum : menuId);
  }

  return (
    <div className="buttonsMenu">
      {/* Import dos botões definindo o Id do menu, se ele está aberto ou não e chamando a função*/}
      <ButtonInicio 
        menuId = {ButtonInicioA}
        isOpen = {menuAberto === ButtonInicioA}
        onToggle = {toggleMenu}
        scrollPageAgende = {scrollDestinationAgende}
      />
      <ButtonQuemSomos 
        menuId = {ButtonQuemSomosB}
        isOpen = {menuAberto === ButtonQuemSomosB}
        onToggle = {toggleMenu}
        scrollPageQuemSomos = { scrollDestinationQuemSomos }
        scrollPageMissao = {scrollDestinationMissao}
      />
    </div>
  )

};

export default ButtonsHome;
