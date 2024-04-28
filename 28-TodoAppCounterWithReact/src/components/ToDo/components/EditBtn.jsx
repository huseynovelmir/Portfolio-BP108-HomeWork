import React from "react";
import { FaPen } from "react-icons/fa6";
import "../index.css";
const EditBtn = ({ id }) => {
  function click() {
    let arr = todos.filter((el) => el.id != id);
    console.log(arr);
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !completed } : item
      )
    );
  }
  return (
    <button onClick={click} className="button">
      <FaPen />
    </button>
  );
};

export default EditBtn;
