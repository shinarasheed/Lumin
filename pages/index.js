import React from "react";
import Head from "next/head";
import Products from "../components/Products";
import ProductsCta from "../components/ProductsCta";

function Home() {
  return (
    <>
      <Head>
        <title>Products | Lumin Skincare</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <ProductsCta />
      <Products />
    </>
  );
}

export default Home;
