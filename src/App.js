import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products/Products";
import ProductDescription from "./pages/ProductDescription";
import Groceries from "./pages/Groceries";
import Cart from "./pages/Cart";

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
