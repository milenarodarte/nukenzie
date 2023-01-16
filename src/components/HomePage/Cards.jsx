import bin from "../../assets/bin.svg";

function Cards({ arrayCards, handleRemoveCard }) {
  const handleDeleteCard = (idx) => {
    handleRemoveCard(idx);
  };

  function generateHashId(idx, value, description) {
    return `${idx}-${value}-${description}`;
  }

  function cardsGreen(idx, value, description) {
    return (
      <div key={generateHashId(idx, value, description)} className="card-green">
        <div className="card-left">
          <p className="p-card-bold">{description}</p>
          <p className="p-card-light">Entradas</p>
        </div>
        <div className="card-right">
          <p className="p-card-light width102px">R$ {value}</p>
          <button
            type="button"
            className="btn-bin"
            onClick={() => handleDeleteCard(idx)}
          >
            <img src={bin} alt="botao lixo"></img>
          </button>
        </div>
      </div>
    );
  }
  function cardsGrey(idx, value, description) {
    return (
      <div key={generateHashId(idx, value, description)} className="card-grey">
        <div className="card-left">
          <p className="p-card-bold">{description}</p>
          <p className="p-card-light">Despesas</p>
        </div>
        <div className="card-right">
          <p className="p-card-light width102px">R$ {value}</p>
          <button
            type="button"
            className="btn-bin"
            onClick={() => handleDeleteCard(idx)}
          >
            <img src={bin} alt="botao lixo"></img>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cards-list">
      {arrayCards.map((card, idx) =>
        card.type === "Entradas"
          ? cardsGreen(idx, card.value, card.description)
          : cardsGrey(idx, card.value, card.description)
      )}
    </div>
  );
}
export default Cards;
