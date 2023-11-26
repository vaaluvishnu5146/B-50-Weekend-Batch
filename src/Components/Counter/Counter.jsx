import React from "react";
import "./counter.css";

export default function Counter({ data = {} }) {
  return (
    <div className="counter-cta-container">
      <button className="btn btn-sm">-</button>
      <p>{data.quantitySelected}</p>
      <button className="btn btn-sm">+</button>
    </div>
  );
}
