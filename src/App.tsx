import React, { useState, useEffect } from "react";
import "./Calculator.css";

function App() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleEqualClick = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClearClick = () => {
    setInput("");
    setResult("");
  };

  const convertBase = (base: number) => {
    try {
      const decimalValue = parseInt(input, 10);
      const convertedValue = decimalValue.toString(base);
      setResult(convertedValue);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="App">
      <div className={`calculator ${isLoading ? "loading" : ""}`}>
        {/* {isLoading && <div className="loading-animation">Loading...</div>} */}
        {isLoading && <div className="loading-animation"></div>}
        <div className="calculator-header">Best Calculator</div>
        <div className="calculator-display">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>
        <div className="calculator-buttons">
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
          <button onClick={() => handleButtonClick("-")}>-</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button onClick={handleEqualClick}>=</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
          <button onClick={handleClearClick}>C</button>
          <button onClick={() => convertBase(2)}>to 2</button>
          <button onClick={() => convertBase(8)}>to 8</button>
          <button onClick={() => convertBase(16)}>to 16</button>
        </div>
      </div>
    </div>
  );
}

export default App;
