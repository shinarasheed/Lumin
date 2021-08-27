import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "../components/Layout";
import store from "../redux/store";
import client from "../apollo-client";
import "../styles/Globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
