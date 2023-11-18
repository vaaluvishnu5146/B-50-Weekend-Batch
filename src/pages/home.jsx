import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
      Home page
    </div>
  );
}
