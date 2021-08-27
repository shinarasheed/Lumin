import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import CurrencySelector from "./CurrencySelector";
import Product from "../components/Product";
import { FETCH_PRODUCT_QUERY } from "../queries/product";
import styles from "../styles/Product.module.scss";

function Products() {
  const [currency, setCurrency] = useState("USD");
  const { error, loading, data } = useQuery(FETCH_PRODUCT_QUERY, {
    variables: {
      currency,
    },
  });

  return (
    <>
      <CurrencySelector setCurrency={setCurrency} />

      <section className={styles.productscontainer}>
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
          <div className={styles.products}>
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
