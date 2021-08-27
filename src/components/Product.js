import React from "react";

import CartDrawer from "../components/CartDrawer";

export default function Product({ product, currency }) {
  return (
    <div className="product">
      <div>
        <img src={product.image_url} alt={product.title} />
      </div>
      <div>
        {/* <h5> {product.title}</h5>
        <p>
          {currency === "USD" ? "$" : null}
          {product.price}
        </p>

        <CartDrawer product={product} /> */}
      </div>
    </div>
  );
}
