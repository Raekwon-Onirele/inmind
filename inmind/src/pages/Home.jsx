import React, { useRef, useState } from "react";
import imgInMind from "../assets/InMind_page-0001.png";
import imgSchedule from "../assets/2506262-perfil-com-quebra-cabeca-gratis-vetor.png";
import imgQrCode from "../assets/Captura de tela 2025-11-25 102602.png";
import ButtonsHome from "./buttons-home/ButtonsHome";
import ButtonEnter from "../components/ButtonEnter";
import ButtonAgendeWhatsapp from "../components/ButtonAgendeWhatsapp";
import ButtonAgendeAqui from "../components/ButtonAgendeAqui";
import FormPage from "./FormPage";
import "./Home.css";
import ReportPage from "./ReportPage";

const Home = () => {
  // < Função Scroll da página
  const secaoQuemSomos = useRef(null);
  const secaoMissao = useRef(null);
  const secaoAgende = useRef(null);

  const scrollDestinationQuemSomos = () => {
    if (secaoQuemSomos.current) {
      secaoQuemSomos.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollDestinationMissao = () => {
    if (secaoMissao.current) {
      secaoMissao.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollDestinationAgende = () => {
    if (secaoAgende.current) {
      secaoAgende.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  // </ Função Scroll da página

  //Função para Abrir a FormPage
  const [formPageOn, setformPageOn] = useState(false);

  const openFormPage = () => {
    setformPageOn((prevFormPage) => !prevFormPage);
  };

  const [reportPage, setReportPage] = useState(false);

  const openReportPage = () => {
    setReportPage((prevReportPage) => !prevReportPage);
  }

  return (
    <div>
      {/* < Nav-Bar da página */}
      <nav className="nav-bar">
        {/* Logo da marca no Nav-bar */}
        <img
          src={imgInMind}
          alt="Foto da logo"
          className="imgInMind"
          href="a"
        />

        {/* Botões Quem Somos e Início 
        <ButtonsHome
          scrollDestinationQuemSomos={scrollDestinationQuemSomos}
          scrollDestinationMissao={scrollDestinationMissao}
          scrollDestinationAgende={scrollDestinationAgende}
        />*/ }

        {/* Botão Enter */}
        <ButtonEnter className="buttonEnter" toClick={openReportPage}/>
        {reportPage && (
          <ReportPage setOpenReportPage={() => setReportPage(!reportPage)}/>
        )}
      </nav>
      {/* </ Nav-Bar da página */}

      <div className="body" ref={secaoAgende}>
        {/* < Parte do Agende Sua Consula */}
        <div className="schedule">
          <h1>Agende Sua Consulta</h1>

          {/* Botões Agende Aqui e Agende pelo Whatsapp */}
          <div ref={secaoQuemSomos}>
            <ButtonAgendeAqui toClick={openFormPage} />
            {formPageOn && (
              <FormPage setOpenFormPage={() => setformPageOn(!formPageOn)} />
            )}
            <ButtonAgendeWhatsapp />
          </div>
        </div>
        {/* Imagem Quebra Cabeça */}
        <img src={imgSchedule} alt="Quebra-Cabeça" className="imgSchedule" />
        {/* </ Parte do Agende Sua Consula */}

        {/* Parte do Quem Somos */}

        <div className="whoWeAre">
          <h2>Quem Somos</h2>
          <p className="textWhoWeAre">
            Seja bem-vindo(a) à nossa clínica de psicologia. Somos um espaço
            dedicado ao cuidado integral da sua saúde mental e bem-estar
            emocional. Entendemos que a jornada da vida é repleta de desafios e
            transformações, e ter um suporte profissional e acolhedor faz toda a
            diferença.
          </p>

          <p ref={secaoMissao}></p>

          {/* Cards missão, valores e abordagem */}
          <div className="cards">
            {/* Card Missão */}
            <div className="cardsLower">
              <div className="cardsSuperior">
                <p className="cardTitle">Missão</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  quae ut ratione eos qui odio, facere, consectetur cupiditate
                  vitae est at porro fugiat, magni id unde tempora? Expedita,
                  natus aliquid.
                </p>
              </div>
            </div>
            {/* Card Valores */}
            <div className="cardsLower">
              <div className="cardsSuperior">
                <p className="cardTitle">Valores</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  quae ut ratione eos qui odio, facere, consectetur cupiditate
                  vitae est at porro fugiat, magni id unde tempora? Expedita,
                  natus aliquid.
                </p>
              </div>
            </div>
            {/* Card Abordagem */}
            <div className="cardsLower">
              <div className="cardsSuperior">
                <p className="cardTitle">Abordagem</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  quae ut ratione eos qui odio, facere, consectetur cupiditate
                  vitae est at porro fugiat, magni id unde tempora? Expedita,
                  natus aliquid.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé da Página */}
        <footer>
          <img src={imgInMind} alt="imgFoot" className="imgInMindFoot" />

          <div className="contats">
            <p>Telefone para Contato: (11) 11111-1111</p>
            <p>Email para Contato: contato.raekwon@gmail.com</p>
          </div>

          <div className="github">
            <a href="https://github.com/Raekwon-Onirele">
              Github: https://github.com/Raekwon-Onirele
            </a>
          </div>

          <img src={imgQrCode} alt="QrCode" className="imgQrCode" />
        </footer>
      </div>
    </div>
  );
};

export default Home;
