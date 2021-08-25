import React from "react";

import Sidebar from "./Sidebar";

export default function Product({ product, currency }) {
  return (
    <div className="product">
      <div className="product-imageurl-container">
        <img
          className="product-imageurl"
          src={product.image_url}
          alt={product.title}
        />
      </div>
      <div className="productbuttoncontainer">
        <h5 className="product-title"> {product.title}</h5>
        <p className="product-price">
          {currency === "USD" ? "$" : null}
          {product.price}
        </p>

        <Sidebar product={product} />
      </div>
    </div>
  );
}
