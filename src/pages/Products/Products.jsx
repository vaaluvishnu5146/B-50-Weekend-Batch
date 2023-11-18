import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <div>
        <Link to="/products/toys">Toys</Link>
        <Link to="/products/groceries">Groceries</Link>
        <Link to="/products/perfumes">Perfumes</Link>
      </div>
      <Outlet />
    </div>
  );
}
