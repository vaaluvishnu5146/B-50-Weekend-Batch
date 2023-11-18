import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Products from "./Pages/Products/Products";
import ProductDescription from "./Pages/ProductDescription";
import Cart from "./Pages/Cart";
import Groceries from "./Pages/Products/Groceries";
import Toys from "./Pages/Products/Toys";
import Perfumes from "./Pages/Products/Perfumes";

function App() {
  return (
    <div className="App">
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/products" Component={Products}>
          <Route path="/products/groceries" Component={Groceries} />
          <Route path="/products/toys" Component={Toys} />
          <Route path="/products/perfumes" Component={Perfumes} />
        </Route>
        <Route path="/product" Component={ProductDescription} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </div>
  );
}

export default App;
