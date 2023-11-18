import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDescription from "./Pages/ProductDescription";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/products" Component={Products} />
        <Route path="/product" Component={ProductDescription} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </div>
  );
}

export default App;
