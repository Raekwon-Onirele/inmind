import imgInMind from "../assets/InMind_page-0001.png";
import imgSchedule from "../assets/2506262-perfil-com-quebra-cabeca-gratis-vetor.png";
import ButtonsHome from "./buttons-home/ButtonsHome";
import ButtonEnter from "../components/ButtonEnter";
import ButtonAgendeWhatsapp from "../components/ButtonAgendeWhatsapp";
import ButtonAgendeAqui from "../components/ButtonAgendeAqui"
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Nav-Bar da página */}
      <nav className="nav-bar">
        {/* Logo da marca no Nav-bar */}
        <img src={imgInMind} alt="Foto da logo" className="imgInMind" />

        <ButtonsHome />

        <ButtonEnter className="buttonEnter" />
      </nav>
      {/* Nav-Bar da página */}

      <div className="body">
        <div className="schedule">
          <h1>Agende Sua Consulta</h1>

          <div>
            <ButtonAgendeAqui />
            <ButtonAgendeWhatsapp />
          </div>
        </div>
        <img src={imgSchedule} alt="Quebra-Cabeça" className="imgSchedule" />
      </div>
    </div>
  );
};

export default Home;
