import React from "react";
import "./ToDoItem.css";

function ToDoItem({ task, dispatch }) {
  return (
    <div className="todo-item">
      <div className="description-wrapper">
        <input
          onChange={() => dispatch({ type: "change", id: task.id })}
          id={task.id}
          type="checkbox"
          checked={task.completed}
        />
        <label
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
          htmlFor={task.id}
        >
          {task.description}
        </label>
      </div>
      <div className="button-wrapper">
        <input type="button" value="click me" />
      </div>
    </div>
  );
}

export default ToDoItem;
