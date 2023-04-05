import React from "react";

// import logo from './logo.svg';
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detail from './pages/Detail';
import { StoreProvider } from "./utils/GlobalState";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav/index";
import OrderHistory from "./pages/OrderHistory";
import Success from './pages/Success';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <body>
        <div>
          <StoreProvider>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route 
                path="/success" 
                element={<Success />} 
              />
              <Route path="/orderHistory" element={<OrderHistory />} />
              <Route
                path="/products/:id"
                element={<Detail />}
              />
            </Routes>
          </StoreProvider>
        </div>
        </body>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
      </Router>
    </ApolloProvider>
  );
}

export default App;
