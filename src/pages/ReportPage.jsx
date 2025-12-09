import "./ReportPage.css";
import imgMenuVoltar from "../assets/menu_voltar.png";


const ReportPage = ( {setOpenReportPage} ) => {
  return (
    <div className="backPage">
      <div className="reportPage">
        <img
          src={imgMenuVoltar}
          alt="foto_menu_voltar"
          onClick={setOpenReportPage}
        />
        <table>

        </table>
      </div>
    </div>
  );
};

export default ReportPage;
