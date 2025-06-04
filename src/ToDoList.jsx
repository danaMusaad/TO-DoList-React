import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function HandleInputChange(e) {
    setNewTask(e.target.value);
  }

  function AddTasks() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function DeletTask(index) {
    const upDateTasks = tasks.filter((_, i) => i !== index);
    setTasks(upDateTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const upDateTasks = [...tasks];
      [upDateTasks[index], upDateTasks[index - 1]] =
        [upDateTasks[index - 1], upDateTasks[index]];
      setTasks(upDateTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const upDateTasks = [...tasks];
      [upDateTasks[index], upDateTasks[index + 1]] =
        [upDateTasks[index + 1], upDateTasks[index]];
      setTasks(upDateTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>TO-DO-LIST</h1>
      <div>
        <div  className="input-container">
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={HandleInputChange}
        />

        <button className="add-button" onClick={AddTasks}>
          Add task
        </button>
        </div>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <div className="buttons">
              <button className="Delet-button" onClick={() => DeletTask(index)}>
                ❌
              </button>
              <button className="move-button-up" onClick={() => moveTaskUp(index)}>
                ☝️
              </button>
              <button className="move-button-down" onClick={() => moveTaskDown(index)}>
                👇
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
