import React from "react";
import { FaTrash } from "react-icons/fa";
import "../index.css";
const DeleteBtn = ({ todos, setTodos, id }) => {
  function click() {
    let arr = todos.filter((el) => el.id != id);

    setTodos(arr);
  }
  return (
    <button onClick={click} className="button">
      <FaTrash />
    </button>
  );
};

export default DeleteBtn;
