import React, { useRef, useState } from "react";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import { FaPen } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";

import "../index.css";
const TodoItem = ({ todos, setTodos, id, todo, completed }) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo);
  function handleToggle() {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !completed } : item
      )
    );
  }
  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSave = () => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, todo: editedText } : item
      )
    );
    setEditing(false);
  };

  return (
    <li
      style={{ textDecoration: completed ? "line-through" : "none" }}
      key={id}
    >
      <div className="inputDiv">
        <input
          type="checkbox"
          name="check"
          id="check"
          className="checkbox"
          onChange={handleToggle}
          checked={completed}
        />
        {editing ? (
          <>
          <input
            type="text"
            value={editedText}
            onChange={handleChange}
            className="inp"
            style={{ width: "100%" }}
          />
              <button onClick={handleSave} className="button">
          <MdOutlineDone />
        </button>
          </>
        ) : (
          <p>{todo}</p>
        )}
      </div>
      <div>
    
        <DeleteBtn todos={todos} setTodos={setTodos} id={id} />
        <button className="button" onClick={handleEdit}>
          <FaPen />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
