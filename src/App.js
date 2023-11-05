import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import RefPlayground from "./pages/RefPlayground";
import RefForm from "./pages/RefForm";
import Todo from "./pages/Todo";

function App() {
  return (
    <div className="App">
      <div>
        <Link to={"/ref"}>Use Ref Playground</Link>
        <Link to={"/refform"}>Use Ref Form</Link>
        <Link to={"/todo"}>Todo</Link>
      </div>
      <Routes>
        <Route path="/ref" Component={RefPlayground} />
        <Route path="/refform" Component={RefForm} />
        <Route path="/todo" Component={Todo} />
      </Routes>
    </div>
  );
}

export default App;
