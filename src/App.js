import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";

import "./App.scss";

const client = new ApolloClient({
  uri: "https://pangaea-interviews.now.sh/api/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Navbar />
        <Filter />
        <Switch>
          <Route exact path="/" component={Products} />
        </Switch>
      </ApolloProvider>
    </Router>
  );
}

export default App;
