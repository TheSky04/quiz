import React from "react";
import logo from "../logo.svg";
import "../css/Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>React Quiz</h2>
    </header>
  );
}

export default Header;
