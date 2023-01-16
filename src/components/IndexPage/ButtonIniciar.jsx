import "../IndexPage/style.css";
import "../../components/parts/buttons.css";
import HomePage from "../HomePage";
import IndexPage from ".";
import { useState } from "react";

function Button({ onClick, className, title }) {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
}
export default Button;
