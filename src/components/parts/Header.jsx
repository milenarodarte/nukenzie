import "./header.css";
import Button from "../IndexPage/ButtonIniciar.jsx";
import logo from "../../assets/logo.svg";

function Header({ onClickIndex }) {
  return (
    <div className="header-container">
      <div className="header">
        <img src={logo} alt="logo da kenzie"></img>
        <Button className="button-grey" onClick={onClickIndex} title="Inicio" />
      </div>
    </div>
  );
}
export default Header;
