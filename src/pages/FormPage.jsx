import "./FormPage.css";
import imgMenuVoltar from "../assets/menu_voltar.png";
import { IMaskInput } from "react-imask";
import React, { useState, useEffect } from "react";
import AgendaPage from "./AgendaPage";

const FormPage = ({ setOpenFormPage }) => {
  // < Controle de dados do Form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telphone, setTelphone] = useState("");
  const [dateBirth, setDateBirth] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      telphone.trim() !== "" &&
      dateBirth.trim() !== ""
    );
  };

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [name, email, telphone, dateBirth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log({ name, email, telphone, dateBirth });
      openAgendaPage();
    }
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
            value={name}
            placeholder="Digite seu nome completo"
            required
            minLength={10}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor=""> Email: </label>
          <input
            value={email}
            type="email"
            placeholder="Digite seu email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor=""> Telefone para Contato: </label>
          <IMaskInput
            mask="(00) 00000-0000"
            placeholder="(00) 00000-0000"
            onChange={(e) => setTelphone(e.target.value)}
          />

          <label htmlFor=""> Data de Nascimento: </label>
          <input
            type="date"
            placeholder="00/00/0000"
            required
            id="date"
            onChange={(e) => setDateBirth(e.target.value)}
          />

          <button
            type="submit"
            value="Continuar"
            className="buttonSubmit"
            disabled={!isFormValid}
          >
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
