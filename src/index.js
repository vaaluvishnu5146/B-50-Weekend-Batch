import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PropertyContextProvider from "./Context/Products.context";
import CartContextProvider from "./Context/Cart.Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <PropertyContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </PropertyContextProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
