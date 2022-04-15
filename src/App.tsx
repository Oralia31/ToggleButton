import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ToggleButton from "./common/ToggleButton";
import { Title } from "./common/ToggleButton/styles";

function App() {
  const [isActive, setIsActive] = useState('Desactivado');

  const handleChange = (value: boolean) => {
    if (value) {
      setIsActive("Activado");
    } else {
      setIsActive("Desactivado");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Title>Hola soy un Toggle {isActive}</Title>
        <img src={logo} className="App-logo" alt="logo" />
        <ToggleButton onChange={(value) => handleChange(value)} />
      </header>
    </div>
  );
}

export default App;
