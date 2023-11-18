import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/ApplicationJourney/index";
import Login from "./Pages/AuthenticationJourney/Login/Login";
import Signup from "./Pages/AuthenticationJourney/Signup/Signup";
import ForgetPassword from "./Pages/AuthenticationJourney/ForgotPassword/ForgetPassword";
import NotFound from "./Pages/404";
import AppointmentJourney from "./Pages/ApplicationJourney/AppointmentJourney/AppointmentJourney";
import PatientJourney from "./Pages/ApplicationJourney/PatientJourney/PatientJourney";
import Labtest from "./Pages/LabtestJourney/Labtest";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const navigator = useNavigate();

  function renderRoutes(authenticated = false) {
    if (authenticated) {
      return (
        <Route path="/dashboard" Component={Dashboard}>
          <Route index Component={AppointmentJourney} />
          <Route path="/dashboard/patients" Component={PatientJourney} />
          <Route path="/dashboard/labtests" Component={Labtest} />
        </Route>
      );
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
      return null;
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
