import React from "react";
import { useParams } from "react-router";
import { useProducts } from "../../Context/Products.context";
import { useCart } from "../../Context/Cart.Context";

export default function Groceries() {
  const { type = "" } = useParams();
  const products = useProducts();
  const { handleAddToCart = () => {}, shouldDisable = () => {} } = useCart();

  return (
    <div
      className=""
      style={{
        background: type === "oil" ? "red" : "lightGreen",
      }}
    >
      <div className="container">
        <div className="row">
          {products[type]?.map((d, i) => (
            <div className="col-md-3" key={`${d.name}-${i}`}>
              <div class="card">
                <img src={d.picture} class="card-img-top" alt={d.name} />
                <div class="card-body">
                  <h5 class="card-title">{d.name}</h5>
                  <p class="card-text">{d.description}</p>
                  <button
                    onClick={() => handleAddToCart(d)}
                    class="btn btn-primary"
                    disabled={shouldDisable(d)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
