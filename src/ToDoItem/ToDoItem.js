import React from "react";
import "./ToDoItem.css";

function ToDoItem({ task, dispatch }) {
  return (
    <div className="todo-item">
      <div className="description-wrapper">
        <input
          onChange={() => dispatch({ type: "complete", id: task.id })}
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
        {/* Replace input with button */}
        <input type="button" value="•••" />
      </div>
    </div>
  );
}

export default ToDoItem;
