import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Filter from "./components/Filter";

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
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </ApolloProvider>
    </Router>
  );
}

export default App;
