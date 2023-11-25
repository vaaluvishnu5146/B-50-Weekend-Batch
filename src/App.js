import React, { useRef } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { addTodo } from "./Redux/Reducers/tasks.reducer";
import Lists from "./Components/List/Lists";

function App() {
  const dispatcher = useDispatch();
  const inputRef = useRef(null);

  function addtask() {
    dispatcher(addTodo(inputRef.current.value));
    inputRef.current.value = "";
  }

  return (
    <div className="App">
      <div className="form-body">
        <input ref={inputRef} placeholder="Enter your task" />
        <button onClick={addtask}>Add</button>
      </div>
      <Lists />
    </div>
  );
}

export default App;
