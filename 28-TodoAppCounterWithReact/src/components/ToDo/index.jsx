import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
const ToDo = () => {
  const [inpValue, setInpValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="todoSection">
      <h1>Todo App</h1>
      <Header
        inpValue={inpValue}
        setInpValue={setInpValue}
        todos={todos}
        setTodos={setTodos}
      />
      <Footer todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default ToDo;
