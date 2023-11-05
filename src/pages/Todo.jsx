import React, { useState, useRef, useReducer } from "react";

const INITIAL_TASK_MOCK = {
  id: 0,
  title: "",
  completed: false,
};

const INITIAL_COMPONENT_STATE = {
  tasks: [],
};

function reducer(state, action) {
  if (action.type === "HANDLE_ADD_TASK") {
    let tasksCopy = [...state.tasks];
    tasksCopy.push({
      ...INITIAL_TASK_MOCK,
      id: state.tasks.length + 1,
      title: action.payload,
    });
    return {
      tasks: tasksCopy,
    };
  } else if (action.type === "HANDLE_TASK_UPDATE") {
    const tasksCopy = [...state.tasks];
    let matchedData = tasksCopy.find((task) => task.id === action.payload);
    matchedData.completed = !matchedData.completed;
    return {
      tasks: tasksCopy,
    };
  } else if (action.type === "HANDLE_DELETE_TASK") {
    const tasksCopy = [...state.tasks];
    const filteredData = tasksCopy.filter((task) => task.id !== action.payload);
    return {
      tasks: filteredData,
    };
  }
}

export default function Todo() {
  const taskRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, INITIAL_COMPONENT_STATE);

  function handleAddTask(e) {
    dispatch({ type: "HANDLE_ADD_TASK", payload: taskRef.current.value });
    taskRef.current.value = "";
  }

  function handleTaskUpdate(e, taskId) {
    if (e && taskId) {
      dispatch({ type: "HANDLE_TASK_UPDATE", payload: taskId });
    }
  }

  function handleDelete(e, taskId) {
    if (e && taskId) {
      dispatch({ type: "HANDLE_DELETE_TASK", payload: taskId });
    }
  }

  return (
    <div>
      <h1>Todo</h1>
      <div className="todo-container">
        <input ref={taskRef} placeholder="Enter Task" />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div className="tasks-listing-container">
        <ul>
          {state.tasks.map((task, index) => (
            <li key={`task=${index}`}>
              <p
                style={{
                  textDecoration: task.completed ? "line-through" : "auto",
                }}
              >
                {task.title}
                <button onClick={(e) => handleTaskUpdate(e, task.id)}>
                  {!task.completed ? "Mark done" : "Mark Active"}
                </button>
                <button onClick={(e) => handleDelete(e, task.id)}>
                  Delete
                </button>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
