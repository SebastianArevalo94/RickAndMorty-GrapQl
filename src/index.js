import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/Main";
import {
  InMemoryCache,
  HttpLink,
  from,
  ApolloClient,
  ApolloProvider,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import { Provider } from "react-redux";
import store from "./redux/store";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) =>
      console.log("GraphQl Error", message)
    );
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://rickandmortyapi.com/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Main />
    </Provider>
  </ApolloProvider>
);
