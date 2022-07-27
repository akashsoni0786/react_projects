import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import React, { Component, useContext, useState } from "react";
import { Route, Routes, useNavigationType } from "react-router-dom";
import Cart from "./Cart";
import Contact from "./Contact";
import { products } from "./Data";
import Signin from "./Signin";
import { ContextName } from "./MyContext";
import {useNavigate} from 'react-router-dom';


const App = () => {
  let navigate = useNavigate();
  const [
    login,
    setLogin,
    username,
    setUsername,
    cartvalues,
    setCartvalues,
    additem,
    setAdditem,
    emptycartar,
    setEmptycartar,
  ] = useContext(ContextName);

  const addtocart = (e) => {
    
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
        var d = -1;
        cartvalues.forEach((a) => {
          d = d + 1;
          if (a.id == k.id) {
            k = {
              id: i.id,
              name: i.name,
              price: i.price,
              pic: i.pic,
              quan: Number(a.quan) + 1,
            };
            cartvalues.splice(d, 1);
            
          }
        });
       
        cartarray = [...cartvalues, k];
        setCartvalues(cartarray);
        console.log(cartarray);
      }
    });
  };

  const emptycartarea = (v) => {
    setCartvalues([]);
  };

  const deleteme = (e) => {
    var pid = e.target.id;
    let l = -1;
    let cart = cartvalues
    cart.map((i) => {
      l = l + 1;
      if (i.id == pid) {
        cart = cart.filter(exp=> exp.id != i.id);
        setCartvalues(cart);
      }
    });
  };
  const logout =()=>{
    if(login == 0)
    {
      navigate("/signin");
    }
    else{
      if(window.confirm("Do you really want to logout ?"))
      {
        navigate("/");
        setUsername('');
        setLogin(0);
      }
      else
      {
        navigate("/");
      }
      
    }
    
  }
  const billit = ()=>{
    if(login == 1){
      alert("Order is placed!");
      setCartvalues([]);
      alert("Thanking you for shopping with us")

    }
    else{
      navigate("/signin");
    }
  }

  return (
    <>
      <Nav cartcount={cartvalues.length} user={username} loginstatus={logout}/>
      <Routes>
        <Route path="/" element={<Home addtocartfunc={addtocart} 
         />} />
        <Route
          path="/cart"
          element={
            <Cart
              sendingToCart={cartvalues}
              emptyToCart={emptycartarea}
              deletethis={deleteme}
              proceedingforbill={billit}
            />
          }
        />
        <Route path="/signin" element={<Signin
         />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
