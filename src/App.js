import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Products from "./Pages/Products/Products";
import ProductDescription from "./Pages/ProductDescription";
import Cart from "./Pages/Cart";
import Groceries from "./Pages/Groceries";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/products/:type" Component={Products} />
        <Route path="/groceries/:type" Component={Groceries} />
        <Route path="/product" Component={ProductDescription} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </div>
  );
}

export default App;
