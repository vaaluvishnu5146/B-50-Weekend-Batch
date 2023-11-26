import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthenticatedRoutes, AutheticationRoutes } from "./Routes";
import app from "./Pages/app";

function App() {
  const { isLoggedIn } = useSelector((state) => state.authReducer);

  function renderRoutes(loggedIn = false) {
    if (!loggedIn) {
      return (
        <React.Fragment>
          {AutheticationRoutes.map((route, index) => (
            <Route key={index} path={route.path} Component={route.component} />
          ))}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Route Component={app}>
            {AuthenticatedRoutes.children.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                Component={route.component}
              />
            ))}
          </Route>
        </React.Fragment>
      );
    }
  }

  return (
    <div className="App">
      <Routes>{renderRoutes(isLoggedIn)}</Routes>
    </div>
  );
}

export default App;
