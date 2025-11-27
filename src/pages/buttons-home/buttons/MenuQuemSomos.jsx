import "./MenuQuemSomos.css";
import imgQuemSomosArrow from "../../../assets/logo-quemsomos-arrow.png";
import imgQuemSomosHome from "../../../assets/logo-quemsomos-home.png";

const MenuQuemSomos = ({ menuId, isOpen, onToggle, scrollPageQuemSomos, scrollPageMissao }) => {
  /* Função para quando clicar chamar a função do elemento pai */
  const handleClick = () => {
    onToggle(menuId);
  };

  return (
    <div>
      {/* < Função para quando clicar no botão mudar para outra img */}
      <div className="menuButtonQuemSomos" onClick={handleClick}>
        {isOpen ? (
          /* img que vai aparecer após o clique */
          <img
            src={imgQuemSomosArrow}
            alt="logo inicio seta"
            className="imgInicioArrow"
          />
        ) : (
          /* img que vai aparecer antes do clique */
          <img
            src={imgQuemSomosHome}
            alt="logo inicio home"
            className="imgInicioHome"
          />
        )}
      </div>
      {/* </ Função para quando clicar no botão mudar para outra img */}

      {/* O que vai aparecer no menu após o clique */}
      <div className={`menu-dropdown-quem-somos ${isOpen ? "open" : ""}`}>
        <ul>
          <li >
            <p className="quemSomos" onClick={scrollPageQuemSomos}>Quem Somos</p>
          </li>
          <li>
            <p onClick={scrollPageMissao}>Missão, Valores, Abordagem</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuQuemSomos;
