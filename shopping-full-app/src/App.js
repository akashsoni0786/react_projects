import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Contact from "./Contact";
import { products } from "./Data";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      cartvalues: [],
      additem: 0,
      emptycartar: [],
   
    };
  }
  addtocart = (e) => {
    let cartarray;
    products.map((i) => {
      if (i.id === e.target.id) {
        var k = {
          id: i.id,
          name: i.name,
          price: i.price,
          pic: i.pic,
          quan: 1,
        };
        var d=-1
        this.state.cartvalues.forEach(a=>{
          d=d+1;
          if(a.id == k.id){
            k = {
              id: i.id,
              name: i.name,
              price: i.price,
              pic: i.pic,
              quan: Number(a.quan)+1,
            };
            this.state.cartvalues.splice(d,1)
            this.setState({
              cartarray: this.state.cartvalues
            })
          }
        })
        console.log(cartarray)
        cartarray = [...this.state.cartvalues, k];
        this.setState({
          cartvalues: cartarray,
        });
      }
    });

  }

  emptycartarea = (v) => {
    this.setState({
      cartvalues: [],
    });
  };

  delete=(e)=>{
    var pid = e.target.id;
    let l=-1;
    this.state.cartvalues.map(i=>{
      l=l+1;
      if(i.id == pid){
        this.state.cartvalues.splice(l,1)
        this.setState({
          cartvalues:this.state.cartvalues
        })
      }
    })

  }
  render() {
    return (
      <>
        <Nav cartcount={this.state.cartvalues.length}/>
        <Routes>
          <Route path="/" element={<Home addtocartfunc={this.addtocart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                sendingToCart={this.state.cartvalues}
                emptyToCart={this.emptycartarea}
                deletethis={this.delete}
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
