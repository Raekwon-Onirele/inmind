import imgInMind from "../assets/InMind_page-0001.png";
import imgSchedule from "../assets/2506262-perfil-com-quebra-cabeca-gratis-vetor.png";
import ButtonsHome from "./buttons-home/ButtonsHome";
import ButtonEnter from "../components/ButtonEnter";
import ButtonAgendeWhatsapp from "../components/ButtonAgendeWhatsapp";
import ButtonAgendeAqui from "../components/ButtonAgendeAqui";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* < Nav-Bar da página */}
      <nav className="nav-bar">
        {/* Logo da marca no Nav-bar */}
        <img src={imgInMind} alt="Foto da logo" className="imgInMind" />

        {/* Botões Quem Somos e Início */}
        <ButtonsHome />

        {/* Botão Enter */}
        <ButtonEnter className="buttonEnter" />
      </nav>
      {/* </ Nav-Bar da página */}

      <div className="body">
        {/* < Parte do Agende Sua Consula */}
        <div className="schedule">
          <h1>Agende Sua Consulta</h1>

          {/* Botões Agende Aqui e Agende pelo Whatsapp */}
          <div>
            <ButtonAgendeAqui />
            <ButtonAgendeWhatsapp />
          </div>
        </div>
        {/* Imagem Quebra Cabeça */}
        <img src={imgSchedule} alt="Quebra-Cabeça" className="imgSchedule" />
        {/* </ Parte do Agende Sua Consula */}

        {/* Parte do Quem Somos */}
        <div className="whoWeAre">
          <h2>Quem Somos</h2>
          <p className="textWhoWeAre">Seja bem-vindo(a) à nossa clínica de psicologia. Somos um espaço dedicado ao cuidado integral da sua saúde mental e bem-estar emocional. Entendemos que a jornada da vida é repleta de desafios e transformações, e ter um suporte profissional e acolhedor faz toda a diferença.</p>

          <div className="cards">
            <div className="mission">
              <p>Missão</p>
              <p>Promover o autoconhecimento, o desenvolvimento pessoal e a qualidade de vida dos pacientes, oferecendo suporte profissional para superar obstáculos e construir uma vida plena.</p>
            </div>
            <div className="mission">
              <p>Missão</p>
              <p>Promover o autoconhecimento, o desenvolvimento pessoal e a qualidade de vida dos pacientes, oferecendo suporte profissional para superar obstáculos e construir uma vida plena.</p>
            </div>
            <div className="mission">
              <p>Missão</p>
              <p>Promover o autoconhecimento, o desenvolvimento pessoal e a qualidade de vida dos pacientes, oferecendo suporte profissional para superar obstáculos e construir uma vida plena.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
