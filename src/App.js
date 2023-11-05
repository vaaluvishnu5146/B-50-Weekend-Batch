import React from "react";
import ButtonComponent from "./Components/Buttons/Button";
import "./App.css";
import TextField from "./Components/TextField/TextField";
import { Routes, Route, Link } from "react-router-dom";
import home from "./pages/home";
import contact from "./pages/contact";
import Todo from "./pages/Todo";

function App() {
  return (
    <div className="App">
      <div>
        <Link to={"/home"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/trip"}>Diwali Trip</Link>
      </div>
      <Routes>
        <Route path="/home" Component={home} />
        <Route path="/contact" Component={contact} />
        <Route path="/trip" Component={Todo} />
      </Routes>
    </div>
  );
}

export default App;
