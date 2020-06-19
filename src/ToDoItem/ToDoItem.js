import React, { useState } from "react";
import "./ToDoItem.css";

function ToDoItem({ task, dispatch }) {
  const [isEdit, setEdit] = useState(false);
  const [description, setDescription] = useState(task.description);

  const updateText = (e) => {
    setDescription(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") editDescription();
  };
  function editDescription() {
    if (!isEdit) {
      setEdit(true);
    } else {
      dispatch({
        type: "changeDescription",
        id: task.id,
        description: description,
      });
      setEdit(false);
    }
  }

  return (
    <div className="todo-item">
      <div className="description-wrapper">
        <input
          onChange={() => dispatch({ type: "complete", id: task.id })}
          id={task.id}
          type="checkbox"
          checked={task.completed}
        />
        {!isEdit ? (
          <label
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
            htmlFor={task.id}
          >
            {description}
          </label>
        ) : (
          <input
            className="text-input"
            onChange={updateText}
            type="text"
            value={description}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        )}
      </div>
      <div className="button-wrapper">
        <button onClick={editDescription}>•••</button>
      </div>
    </div>
  );
}

export default ToDoItem;
