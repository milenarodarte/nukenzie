import ilustration from "../../assets/ilustration.svg";
import logoNoturno from "../../assets/logoNoturno.svg";
import Button from "./ButtonIniciar.jsx";
function IndexPage({ onClickIniciar }) {
  return (
    <div className="index-container">
      <div className="left-container">
        <img src={logoNoturno} alt="logo kenzie" className="logo-index"></img>
        <h1 className="h1-index-page">
          Centralize o controle de suas finanças
        </h1>
        <p className="p-index-page">de forma rápida e segura</p>
        <Button
          onClick={onClickIniciar}
          className="button-red button-index"
          title="Iniciar"
        />
      </div>
      <div className="right-container">
        <img
          className="ilustracao"
          src={ilustration}
          alt="ilustração de dados do app"
        ></img>
      </div>
    </div>
  );
}
export default IndexPage;
