import "./AgendaPage.css";
import imgMenuVoltar from "../assets/menu_voltar.png";

const AgendaPage = ({ setOpenAgendaPage }) => {
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

        <button>Continuar</button>
      </div>
    </div>
  );
};

export default AgendaPage;
