const MenuInicio = () => {
  {
    /* Função para do Menu Início */
  }
  const [isOpenInicio, setIsOpenInicio] = useState(false);
  const ToggleMenuInicio = () => {
    setIsOpenInicio(!isOpenInicio);
  };

  return (
    <div>
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
    </div>
  );
};

export default MenuInicio;
