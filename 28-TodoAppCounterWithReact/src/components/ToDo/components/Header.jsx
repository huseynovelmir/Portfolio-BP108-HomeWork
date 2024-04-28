import React from "react";
import "../index.css";
import { v4 as uuidv4 } from "uuid";

const Header = ({ inpValue, setInpValue, todos, setTodos }) => {
  function change(e) {
    setInpValue(e.target.value);
  }

  function click() {
    let obj = {
      id: uuidv4(),
      todo: inpValue,
      completed: false,
    };
    setTodos([...todos, obj]);
    setInpValue("");
  }
  return (
    <div action="" className="inputArea">
      <input
        type="text"
        placeholder="Write what you want to do..."
        value={inpValue}
        onChange={change}
      />
      <button onClick={click}>Add Task</button>
    </div>
  );
};

export default Header;
