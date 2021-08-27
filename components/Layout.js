import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Products | Lumin Skincare</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <section>{children}</section>
    </>
  );
}
