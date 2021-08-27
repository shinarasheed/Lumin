import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import CurrencySelector from "./CurrencySelector";
import Product from "../components/Product";

import { FETCH_PRODUCT_QUERY } from "../graphql/product";

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
      <section className={styles.container}>
        {loading ? (
          <div className={styles.loading}>
            <img src="/spinner.gif" />
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
