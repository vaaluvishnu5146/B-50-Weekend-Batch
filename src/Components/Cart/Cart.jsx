import React from "react";
import ProductListView from "../Cards/ProductListView";
import { useSelector } from "react-redux";

export default function Cart() {
  const { cart = [] } = useSelector((store) => store.cartReducer);
  return (
    <React.Fragment>
      <h4 className="mb-5">Current Orders</h4>
      {cart &&
        cart.map((item, index) => (
          <ProductListView key={`${item.name}-cart-${index}`} data={item} />
        ))}
    </React.Fragment>
  );
}
