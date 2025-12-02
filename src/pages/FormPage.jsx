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
          <label htmlFor=""> Nome Completo: </label>
          <input type="text" placeholder="Digite seu nome completo" required minLength={4}/>

          <label htmlFor=""> Email: </label>
          <input type="email" placeholder="Digite seu email" required />

          <label htmlFor=""> Telefone para Contato: </label>
          <input type="text" placeholder="(00) 00000-0000" maxLength="15" required />

          <label htmlFor=""> Data de Nascimento: </label>
          <input type="date" placeholder="Nome Completo" required />

          <button>Continuar</button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
