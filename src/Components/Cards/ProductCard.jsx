import React from "react";
import "./cardstyle.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/Reducers/cart.reducer";

export default function ProductCard({ data = {} }) {
  const dispatcher = useDispatch();
  const { cart = [] } = useSelector((store) => store.cartReducer);

  const isProductDisabled = cart.find((product) => product.id === data.id);

  return (
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div class="card product-card">
        <div class="card-body">
          <img src={data.image} className="card-img-top mb-3" alt={data.name} />
          <h5 class="product-title">{data.name}</h5>
          <p class="product-description">{data.description}</p>
          <div className="row">
            <div className="col-6">
              <p class="product-pricing">
                ${data.price} <span>/{data.quantity}</span>
              </p>
            </div>
            <div className="col-6">
              <button
                className="btn btn-sm add-cta"
                onClick={() =>
                  dispatcher(addToCart({ ...data, quantitySelected: 1 }))
                }
                disabled={isProductDisabled}
              >
                {isProductDisabled ? "Added" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
