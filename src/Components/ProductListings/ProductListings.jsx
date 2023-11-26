import React from "react";
import ProductCard from "../Cards/ProductCard";
import "./productlistingscontainer.css";

export default function ProductListings({ data = [] }) {
  return (
    <div className="row product-listings-container">
      {data &&
        data.map((data, index) => (
          <ProductCard key={`${data.name}-${index}`} data={data} />
        ))}
    </div>
  );
}
