import React from "react";
import TodoItem from "./TodoItem";
import "../index.css";

const Footer = ({ todos, setTodos }) => {
  return (
    <ul className="todos">
      {todos.map((elem) => {
        return (
          <TodoItem
            todos={todos}
            setTodos={setTodos}
            key={elem.id}
            id={elem.id}
            todo={elem.todo}
            completed={elem.completed}
          />
        );
      })}
    </ul>
  );
};

export default Footer;
