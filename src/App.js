import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/ApplicationJourney/index";
import Login from "./Pages/AuthenticationJourney/Login/Login";
import Signup from "./Pages/AuthenticationJourney/Signup/Signup";
import ForgetPassword from "./Pages/AuthenticationJourney/ForgotPassword/ForgetPassword";
import NotFound from "./Pages/404";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const navigator = useNavigate();

  function renderRoutes(authenticated = false) {
    if (authenticated) {
      return <Route path="/dashboard" Component={Dashboard} />;
    } else {
      return (
        <React.Fragment>
          <Route path="/" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/resetPassword" Component={ForgetPassword} />
        </React.Fragment>
      );
    }
  }

  function renderLink(authenticated = false) {
    if (authenticated) {
      return <Link to="/dashboard">Dashboard</Link>;
    } else {
      return (
        <React.Fragment>
          <Link to="/">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/resetPassword">Forgot password</Link>
          <button
            onClick={() => {
              setAuthenticated(true);
              navigator("/dashboard");
            }}
          >
            Login
          </button>
        </React.Fragment>
      );
    }
  }

  return (
    <div className="App">
      <div>{renderLink(authenticated)}</div>
      <Routes>
        {renderRoutes(authenticated)}
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
