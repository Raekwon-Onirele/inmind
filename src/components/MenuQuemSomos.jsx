const MenuQuemSomos = () => {
  {
    /* Função para do Menu Quem Somos */
  }
  const [isOpenQuemSomos, setIsOpenQuemSomos] = useState(false);
  const ToggleMenuQuemSomos = () => {
    setIsOpenQuemSomos(!isOpenQuemSomos);
  };

  return (
    <div>
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
      <div className={`menu-dropdown-quem-somos ${isOpenQuemSomos ? "open" : ""}`}>
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
