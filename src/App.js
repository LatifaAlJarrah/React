import React from "react";
import Calculator from "./component/calculator.js";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>React Calculator</h1>
      <Calculator />
    </div>
  );
};

export default App;