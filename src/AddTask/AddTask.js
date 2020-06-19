import React, { useState } from "react";
import "./AddTask.css";

function AddTask({ dispatch }) {
  const [description, setDescription] = useState("");
  const updateInput = (e) => {
    setDescription(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };
  function addTask() {
    dispatch({ type: "add", description: description });
    setDescription("");
  }

  return (
    <div className="add-task-wrapper">
      <input
        type="text"
        value={description}
        onChange={updateInput}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addTask}>Submit</button>
    </div>
  );
}

export default AddTask;
