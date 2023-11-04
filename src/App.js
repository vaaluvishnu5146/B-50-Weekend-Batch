import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import FormikPlayground from "./Pages/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/formik" Component={FormikPlayground} />
      </Routes>
    </div>
  );
}

export default App;
