import React, { useState } from "react";
import "./AgendaPage.css";
import imgMenuVoltar from "../assets/menu_voltar.png";
import ButtonContinue from "../components/ButtonContinue";
import Home from "./Home.jsx";

const AgendaPage = ({ setOpenAgendaPage, setOpenFormPage }) => {
  return (
    <div className="backPage">
      <div className="agendaPage">
        <img
          src={imgMenuVoltar}
          alt="foto_menu_voltar"
          onClick={setOpenAgendaPage}
        />
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ05eU4U0QlBn6sV-LMEHJ2rnU0THM09H48BMbMntYLhmNPQchDpPL1SM_7RORMqshK4Xjwb5_D_?gv=true"
          className="agendaGoogle"
        ></iframe>
        <ButtonContinue className="buttonContinue" toClick={setOpenFormPage} />
      </div>
    </div>
  );
};

export default AgendaPage;
