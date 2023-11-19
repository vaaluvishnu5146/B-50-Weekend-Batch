import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/Cart.Context";

export default function Navbar() {
  const { cart } = useCart();
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Express Cart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/products/toys">
                    Toys
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products/perfumes">
                    Perfumes
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Groceries
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/groceries/fruits">
                    Fruits
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/groceries/vegetables">
                    Vegetables
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/groceries/meat">
                    Meat
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/groceries/oil">
                    Oil
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/cart">Cart({cart.length})</Link>
      </div>
    </nav>
  );
}
