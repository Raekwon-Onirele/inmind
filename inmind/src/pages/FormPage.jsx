import "./FormPage.css";
import imgMenuVoltar from "../assets/menu_voltar.png";
import { IMaskInput } from "react-imask";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AgendaPage from "./AgendaPage";

const FormPage = ({ setOpenFormPage }) => {
  // < Controle de dados do Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    openAgendaPage();
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

        <form className="form" onSubmit={handleSubmit(onSubmit)} >
          <label htmlFor="name"> Nome Completo: </label>
          <input
            type="text"
            {...register("name", { required: true, minLength: 10 })}
            placeholder="Digite seu nome completo"
            style={{
              border: `2px solid ${errors.name ? "red" : "none"}`,
            }}
          />
          {errors.name && (
            <span className="msgErrorForm">Este campo é obrigatório</span>
          )}

          <label htmlFor=""> Email: </label>
          <input
            {...register("email", {
              required: true,
              pattern: {
                value: /@/,
                message: "mensagem ",
              },
            })}
            placeholder="Digite seu email"
            style={{
              border: `2px solid ${errors.email ? "red" : "none"}`,
            }}
          />
          {errors.email && (
            <span className="msgErrorForm">Este campo o @ é obrigatório</span>
          )}

          <label htmlFor=""> Telefone para Contato: </label>
          <IMaskInput
            mask="(00) 00000-0000"
            placeholder="(00) 00000-0000"
            {...register("telphone")}
            
          />

          <label htmlFor=""> Data de Nascimento: </label>
          <input
            type="date"
            id="date"
            placeholder="00/00/0000"
            {...register("date", {
              required: true,
            })}
            style={{
              border: `2px solid ${errors.date ? "red" : "none"}`,
            }}
          />
          {errors.date && (
            <span className="msgErrorForm">Este campo é obrigatório</span>
          )}

          <button type="submit" value="Continuar" className="buttonSubmit">
            Continuar
          </button>

          {agendaPageOn && (
            <AgendaPage
              setOpenFormPage={setOpenFormPage}
              setOpenAgendaPage={() => setAgendaPageOn(!agendaPageOn)}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default FormPage;
