import React, { useState } from "react";
import "./css/calculator.css";

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (val) => {
    setExpression((prevExpression) => prevExpression + val);
  };

  const calculateResult = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (err) {
      setExpression("Error");
    }
  };

  const resetInput = () => {
    setExpression("");
  };

  return (
    <div className="calculator">
      <div className="input">{expression}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("/")}>/</button>

        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("*")}>*</button>

        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>

        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleButtonClick("-")}>-</button>

        <button onClick={resetInput} className="span-two">
          AC
        </button>
      </div>
    </div>
  );
};

export default Calculator;