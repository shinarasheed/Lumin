import React from "react";
import { useQuery } from "@apollo/client";

import Product from "../components/Product";
import { FETCH_PRODUCT_QUERY } from "../queries/product";

function Products() {
  const { error, loading, data } = useQuery(FETCH_PRODUCT_QUERY);
  console.log(data);

  if (loading)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h5>"Loading..."</h5>
      </div>
    );
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {data.products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </>
  );
}

export default Products;
