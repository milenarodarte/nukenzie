import Header from "../parts/Header.jsx";
import "./home.css";
import NoCard from "./NoCard.jsx";
import { useEffect, useState } from "react";
import Cards from "./Cards.jsx";
import Total from "./Total.jsx";
import ButtonFilter from "./Filter.jsx";

function HomePage({ onClickIndex }) {
  const [valueAppear, setValueAppear] = useState(false);
  const [arrayValuesCards, setArrayValuesCards] = useState([]);
  const [descriptionValue, setDescriptionValue] = useState("");
  const [valorValue, setValorValue] = useState("");
  const [typeValue, setTypeValue] = useState("Entradas");
  const [isFiltering, setIsFiltering] = useState(false);
  const [arrayFilter, setArrayFilter] = useState([]);
  const handleRemoveCard = (idx) => {
    const result = [
      ...arrayValuesCards.slice(0, idx),
      ...arrayValuesCards.slice(idx + 1),
    ];

    setArrayValuesCards(result);
  };

  const renderCards = () => {
    if (isFiltering === false) {
      return valueAppear === false ? (
        <NoCard></NoCard>
      ) : (
        <Cards
          arrayCards={arrayValuesCards}
          handleRemoveCard={handleRemoveCard}
        />
      );
    } else {
      return valueAppear === false ? (
        <NoCard></NoCard>
      ) : (
        <Cards arrayCards={arrayFilter} handleRemoveCard={handleRemoveCard} />
      );
    }
  };

  const renderTotal = () => {
    return valueAppear === false ? null : (
      <Total array={arrayValuesCards}></Total>
    );
  };

  const handleClickButton = () => {
    if (descriptionValue.length > 0 && valorValue.length > 0) {
      const valuesCards = {
        description: descriptionValue,
        value: parseFloat(valorValue),
        type: typeValue,
      };
      setArrayValuesCards([...arrayValuesCards, valuesCards]);

      const inputs = document.querySelectorAll("input");
      const arrayInputs = Array.from(inputs);
      arrayInputs.forEach((input) => (input.value = ""));
    }
  };

  useEffect(() => {
    if (arrayValuesCards.length > 0) {
      setValueAppear(true);
    } else {
      setValueAppear(false);
    }
  }, [arrayValuesCards]);

  return (
    <div>
      <Header onClickIndex={onClickIndex} />
      <main className="main-container">
        <div className="main-left">
          <form
            className="box-description"
            onSubmit={(event) => handleClickButton(event.preventDefault())}
          >
            <p className="p-inputs">Descrição</p>
            <input
              required
              type="text"
              className="input-description"
              placeholder="Digite aqui a sua descrição"
              onChange={(e) => setDescriptionValue(e.target.value)}
            ></input>
            <p className="p-description"> Ex: Compra de roupas</p>
            <div className="flex">
              <div className="div-value">
                <p className="p-inputs">Valor</p>
                <input
                  required
                  type="number"
                  className="inputs-grey responsividade"
                  placeholder="Valor"
                  onChange={(e) => setValorValue(e.target.value)}
                ></input>
              </div>
              <div className="div-value-type">
                <p className="p-inputs">Tipo de valor</p>
                <select
                  required
                  id="input-value-type"
                  className="inputs-grey"
                  onChange={(e) => setTypeValue(e.target.value)}
                >
                  <option value="Entradas">Entradas</option>
                  <option value="Despesas">Despesas</option>
                </select>
              </div>
            </div>
            <button
              type="button"
              className="button-red height3rem"
              onClick={handleClickButton}
            >
              Inserir Valor
            </button>
          </form>

          {renderTotal()}
        </div>
        <div className="main-right">
          <div className="main-right-2">
            <div className="header-main-right">
              <p className="p-bold">Resumo financeiro</p>
              <div className="buttons-colection">
                <ButtonFilter
                  array={arrayValuesCards}
                  setFiltering={setIsFiltering}
                  setArray={setArrayFilter}
                  className="button-header"
                  name="Todos"
                ></ButtonFilter>
                <ButtonFilter
                  array={arrayValuesCards}
                  setFiltering={setIsFiltering}
                  setArray={setArrayFilter}
                  className="button-header"
                  name="Entradas"
                ></ButtonFilter>
                <ButtonFilter
                  array={arrayValuesCards}
                  setFiltering={setIsFiltering}
                  setArray={setArrayFilter}
                  className="button-header"
                  name="Despesas"
                ></ButtonFilter>
              </div>
            </div>
            {renderCards()}
          </div>
        </div>
      </main>
    </div>
  );
}
export default HomePage;
