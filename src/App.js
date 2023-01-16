import logo from "./logo.svg";

import "./App.css";
import "./components/parts/Header";
import Header from "./components/parts/Header";
import IndexPage from "./components/IndexPage";
import HomePage from "./components/HomePage";
import { useState } from "react";
function App() {
  const [currentPage, setCurrentPage] = useState("index");

  function onClickIniciar() {
    setCurrentPage("home");
  }
  function onClickIndex() {
    setCurrentPage("index");
  }

  const renderPageContent = () => {
    return currentPage === "index" ? (
      <IndexPage onClickIniciar={onClickIniciar} />
    ) : (
      <HomePage onClickIndex={onClickIndex} />
    );
  };

  return (
    <div className="App">
      <div className="container">{renderPageContent()}</div>
    </div>
  );
}

export default App;
