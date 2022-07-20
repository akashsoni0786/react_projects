import "./App.css";
import Home from "./Home";
import Nav from "./Nav";

import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Contact from "./Contact";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      cartarrfirse: [],
      emptycartar: [],
    };
  }
  cartarea = (val) => {
    this.setState({
      cartarrfirse: val,
    });
  };
  emptycartarea = (v) => {
    this.setState({
      cartarrfirse: []
    });
  };
  render() {
    return (
      <>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                sendtocartpage={this.cartarea}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                sendingToCart={this.state.cartarrfirse}
                emptyToCart={this.emptycartarea}
              />
            }
          />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    );
  }
}

export default App;
