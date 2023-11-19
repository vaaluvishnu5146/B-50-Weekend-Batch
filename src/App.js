import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Store";
import Products from "./pages/Products/Products";
import ProductDescription from "./pages/ProductDescription";
import Groceries from "./pages/Groceries";
import Cart from "./pages/Cart";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import Notfound from "./pages/Notfound";
import { useAuthentication } from "./Contexts/Authentication.context";

function App() {
  const { loggedIn } = useAuthentication();
  /**
   *
   * @param {boolean} flag
   * @returns
   */
  function renderRoutes(flag = false) {
    if (flag) {
      return (
        <React.Fragment>
          <Route path="/home" Component={Home} />
          <Route path="/products/:type" Component={Products} />
          <Route path="/groceries/:type" Component={Groceries} />
          <Route path="/product" Component={ProductDescription} />
          <Route path="/cart" Component={Cart} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Route path="/" Component={Login} />
          <Route path="/signup" Component={Signup} />
        </React.Fragment>
      );
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {renderRoutes(loggedIn)}
        <Route path="*" Component={Notfound} />
      </Routes>
    </div>
  );
}

export default App;
