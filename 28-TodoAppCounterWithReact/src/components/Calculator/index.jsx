import "./index.css";
import React, { useState } from "react";
import "@fontsource/roboto";
import Span from "./components/Span";
import Input from "./components/FirstInput";
import PlusButton from "./components/Plus";
import MinusButton from "./components/Minus";
import Multiplication from "./components/Multiplication";
import Division from "./components/Division";
import SecondInput from "./components/SecondInput";
const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operator) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res;

    switch (operator) {
      case "+":
        res = number1 + number2;
        break;
      case "-":
        res = number1 - number2;
        break;
      case "*":
        res = number1 * number2;
        break;
      case "/":
        if (number2 === 0) {
          res = "0-a bölmə yoxdur.";
        } else {
          res = number1 / number2;
        }
        break;
      default:
        res = "Error";
    }

    setResult(res);
  };

  return (
    <div className="calcSection">
      <h1>Calculator App</h1>
      <div className="calc">
        <Span result={result} />
        <div className="buttonsAndInput">
          <Input num1={num1} setNum1={setNum1} />
          <SecondInput num2={num2} setNum2={setNum2} />
          <PlusButton calculate={calculate} />
          <MinusButton calculate={calculate} />
          <Multiplication calculate={calculate} />
          <Division calculate={calculate} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
