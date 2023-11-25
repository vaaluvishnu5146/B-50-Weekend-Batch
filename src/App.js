import React, { useRef } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./Redux/Reducers/TaskReducers.slice";

function App() {
  const dispatcher = useDispatch();
  const { tasks = [] } = useSelector((state) => state.tasksReducer);
  console.log(tasks);
  const inputRef = useRef(null);

  function handleSaveTask(e) {
    dispatcher(addTodo(inputRef.current.value));
    inputRef.current.value = "";
  }

  return (
    <div className="App">
      <div className="container">
        <input placeholder="Enter your task" ref={inputRef} />
        <button onClick={handleSaveTask}>Save</button>
      </div>
      <div>
        <ul>
          {tasks.map((d, i) => (
            <li ket={i}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
