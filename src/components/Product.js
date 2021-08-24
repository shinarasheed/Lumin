import React from "react";

export default function Product({ title, image_url, price }) {
  return (
    <div className="product">
      <div className="product-imageurl-container">
        <img className="product-imageurl" src={image_url} alt={title} />
      </div>
      <div>
        <h5 className="product-title"> {title}</h5>
        <p className="product-price">From {price}</p>
        <button className="product-btn">Add to Cart</button>
      </div>
    </div>
  );
}
