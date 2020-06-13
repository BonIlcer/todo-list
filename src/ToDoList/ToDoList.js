import React, { useReducer } from "react";
import todosData from "../todosData";
import ToDoItem from "../ToDoItem/ToDoItem";
import AddTask from "../AddTask/AddTask";

function reducer(state, action) {
  const index = state.map((item) => item.id).indexOf(action.id);
  let changedState = state.slice();
  switch (action.type) {
    case "change":
      changedState[index] = {
        ...state[index],
        completed: !state[index].completed,
      };
      return changedState;
    default:
      throw new Error();
  }
}

function taskToItem(task, dispatch) {
  return <ToDoItem key={task.id} task={task} dispatch={dispatch} />;
}

function ToDoList() {
  const [data, dispatch] = useReducer(reducer, todosData);
  const activeTasks = data.filter((task) => task.completed === false);
  const completedTasks = data.filter((task) => task.completed === true);
  const activeList = activeTasks.map((item) => taskToItem(item, dispatch));
  const completedList = completedTasks.map((item) =>
    taskToItem(item, dispatch)
  );
  const tasksList = [activeList, <hr key="hr" />, completedList];
  return (
    <div className="todo-list">
      <AddTask dispatch={dispatch} />
      {tasksList}
    </div>
  );
}

export default ToDoList;
