import "./FormPage.css";
import imgMenuVoltar from "../assets/menu_voltar.png";

const FormPage = ({ setOpenFormPage }) => {
  return (
    <div className="backPage">
      <div className="formPage">
          <img
            src={imgMenuVoltar}
            alt="foto_menu_voltar"
            onClick={setOpenFormPage}
          />

          <h1 className="titleForm">Preencha o Formulário: </h1>

          <form className="form">
            <label htmlFor="">
              <span>Nome: </span>
              <input type="text" placeholder="Nome Completo" />
            </label>
          </form>
      </div>
    </div>
  );
};

export default FormPage;
