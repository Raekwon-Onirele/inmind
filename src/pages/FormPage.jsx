import "./FormPage.css";
import imgMenuVoltar from "../assets/menu_voltar.png";
import { IMaskInput } from "react-imask";
import React, { useState } from "react";
import AgendaPage from "./AgendaPage";

const FormPage = ({ setOpenFormPage }) => {
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

        <form className="form">
          <label htmlFor=""> Nome Completo: </label>
          <input
            type="text"
            placeholder="Digite seu nome completo"
            required
            minLength={4}
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

          <button type="submit" onClick={openAgendaPage}>
            Continuar
          </button>
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
