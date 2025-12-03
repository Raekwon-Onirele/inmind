import "./FormPage.css";
import imgMenuVoltar from "../assets/menu_voltar.png";
import { IMaskInput } from "react-imask";
import React, { useState, useEffect } from "react";
import AgendaPage from "./AgendaPage";

const FormPage = ({ setOpenFormPage }) => {
  // < Controle de dados do Form
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [telphone, setTelphone] = useState();
  const [dateBirth, setDateBirth] = useState();

  const [isButtonOn, setIsButtonOn] = useState(false);

  const validateForm = () => {
    return name.trim() !== "" && email.trim();
  };

  useEffect(() => {
    setIsButtonOn(validateForm());
  }, [name, email, telphone, dateBirth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isButtonOn) {
      alert("${name}, ${email}, ${telphone}, ${dateBirth}");
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  // </ Controle de dados do Form

  // Função para o botão Submit abrir outra pag
  const [agendaPageOn, setAgendaPageOn] = useState(false);

  const openAgendaPage = () => {
    setAgendaPageOn((prevAgendaPage) => !prevAgendaPage);
  };

  return (
    <div className="backPage">
      <div className="formPage">
        <img
          src={imgMenuVoltar}
          alt="foto_menu_voltar"
          onClick={setOpenFormPage}
        />

        <h1 className="titleForm">Preencha o Formulário: </h1>

        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name"> Nome Completo: </label>
          <input
            type="text"
            placeholder="Digite seu nome completo"
            required
            minLength={4}
            onChange={handleName}
          />

          <label htmlFor=""> Email: </label>
          <input type="email" placeholder="Digite seu email" required />

          <label htmlFor=""> Telefone para Contato: </label>
          <IMaskInput
            mask="(00) 00000-0000"
            placeholder="(00) 00000-0000"
            required
          />

          <label htmlFor=""> Data de Nascimento: </label>
          <input type="date" placeholder="00/00/0000" required id="date" />

          <button
            type="submit"
            onClick={openAgendaPage}
            value="Continuar"
            className="buttonSubmit"
            disabled={!isButtonOn}
          >
            Continuar
          </button>
          {!isButtonOn && <p>aaa</p>}
          {agendaPageOn && (
            <AgendaPage
              setOpenAgendaPage={() => setAgendaPageOn(!agendaPageOn)}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default FormPage;
