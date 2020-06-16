import React, { useState } from "react";
import "./AddTask.css";

function AddTask({ dispatch }) {
  const [description, setDescription] = useState("");
  const updateInput = (e) => {
    setDescription(e.target.value);
  };
  function addTask() {
    dispatch({ type: "add", description: description });
    setDescription("");
  }
  return (
    <div className="add-task-wrapper">
      <input type="text" value={description} onChange={updateInput} />
      <button onClick={addTask}>Submit</button>
    </div>
  );
}

export default AddTask;
