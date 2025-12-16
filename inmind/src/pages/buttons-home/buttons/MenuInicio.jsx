import imgInicioArrow from "../../../assets/logo-inicio-seta.png";
import imgInicioHome from "../../../assets/logo-inicio-hamburguer.png";
import "./MenuInicio.css";

const MenuInicio = ({ menuId, isOpen, onToggle, scrollPageAgende }) => {
  /* Função para quando clicar chamar a função do elemento pai */
  const handleClick = () => {
    onToggle(menuId);
  };

  return (
    <div>
      {/* < Função para quando clicar no botão mudar para outra img */}
      <div className="menuButtonInicio" onClick={handleClick}>
        {isOpen ? (
          /* img que vai aparecer após o clique */
          <img
            src={imgInicioArrow}
            alt="logo inicio seta"
            className="imgInicioArrow"
          />
        ) : (
          /* img que vai aparecer antes do clique */
          <img
            src={imgInicioHome}
            alt="logo inicio home"
            className="imgInicioHome"
          />
        )}
      </div>
      {/* </ Função para quando clicar no botão mudar para outra img */}

      {/* O que vai aparecer no menu após o clique */}
      <div className={`menu-dropdown-inicio ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <p onClick={scrollPageAgende}>Agende Sua Consulta</p>
          </li>
          <li>
            <p onClick={scrollPageAgende}>Nosso Whatsapp</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuInicio;
