import React, { useState } from "react";
import "./index.css";
import "@fontsource/roboto";
import Span from "./components/span";
import Input from "./components/input";
import PlusButton from "./components/plusButton";
import MinusButton from "./components/minusButton";
import ZeroButton from "./components/zeroButton";

function Counter() {
  let [counter, SetCounter] = useState(0);
  let [inputvalue, setInputValue] = useState("");

  function inputValue(e) {
    let newnum = e.target.value;
    setInputValue(e.target.value);
    if (newnum == "") {
      SetCounter(0);
    } else {
      SetCounter(newnum);
    }
  }

  function plus() {
    SetCounter(++counter);
    setInputValue("");
  }

  function minus() {
    SetCounter(--counter);
    setInputValue("");
  }

  function defaultNumb() {
    SetCounter(0);
    setInputValue("");
  }

  return (
    <div className="counterSection">
      <h1>Counter App</h1>
      <div className="counter">
        <Span counter={counter} />
        <div className="buttonsAndInput">
          <Input inputValue={inputValue} inputvalue={inputvalue} />
          <PlusButton plus={plus} />
          <MinusButton minus={minus} />
          <ZeroButton defaultNumb={defaultNumb} />
        </div>
      </div>
    </div>
  );
}

export default Counter;
