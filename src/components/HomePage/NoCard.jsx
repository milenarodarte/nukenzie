import noCard from "../../assets/noCard.svg";
function NoCard() {
  return (
    <div className="div-no-card">
      <p className="p-no-card">Você ainda não possui nenhum lançamento</p>
      <img className="img-no-card" src={noCard} alt="sem card"></img>
    </div>
  );
}
export default NoCard;
