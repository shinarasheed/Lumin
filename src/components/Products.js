import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import Product from "../components/Product";
import { FETCH_PRODUCT_QUERY } from "../queries/product";

function Products() {
  const [currency, setCurrency] = useState("USD");
  const { error, loading, data } = useQuery(FETCH_PRODUCT_QUERY, {
    variables: {
      currency,
    },
  });

  return (
    <>
      <section className="productscontainer">
        {loading ? (
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
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          <div className="products">
            {data.products.map((product) => {
              return (
                <Product
                  key={product.id}
                  product={product}
                  currency={currency}
                />
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}

export default Products;
