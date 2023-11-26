import React from "react";
import Counter from "../Counter/Counter";

export default function ProductListView({ data = {} }) {
  return (
    <div className="row product-list-card">
      <div className="col-3 product-card-head">
        <img
          src={data.image}
          className="card-img-top mb-3 product-image"
          alt={data.name}
        />
      </div>
      <div className="col-9 product-card-body">
        <h5 className="product-title">{data.name}</h5>
        <div className="product-pricing-row">
          <p>${data.price}</p>
          <Counter data={data} />
        </div>
      </div>
    </div>
  );
}
