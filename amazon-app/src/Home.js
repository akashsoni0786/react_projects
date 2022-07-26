import "./App.css";

import "./Home.css";
import { products } from "./Data";
import ProductCard from "./ProductCard";
import Nav2 from "./Nav2";
import Footer from "./Foter";

import React, { useContext, useState } from "react";
import { ContextName } from "./MyContext";

const Home = (props) => {


const product = [
  {
    id: 1,
    offername: "Prime day is back",
    pic: "https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/LU/IN-PD-22-teaser-GW_379x304_deals._SY304_CB631772745_.jpg",
  },
  {
    id: 2,
    offername: "Revamp your home in style",
    pic: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg",
  },

  {
    id: 3,
    offername: "Upto 70% off | clearance store",
    pic: "https://m.media-amazon.com/images/I/41Byw2Rl-qL._AC_SY200_.jpg",
  },
  {
    id: 4,
    offername: "Upgrade your home | Amazon Brands & more",
    pic: "https://m.media-amazon.com/images/I/716WTUyS7HL._AC_SY200_.png",
  },
  {
    id: 5,
    offername: "Shop by category",
    pic: "https://m.media-amazon.com/images/I/41Byw2Rl-qL._AC_SY200_.jpg",
  },
  {
    id: 6,
    offername: "Home sweet home offer",
    pic: "https://m.media-amazon.com/images/I/81zzoWGt+qL._AC_SY200_.jpg",
  },

  {
    id: 7,
    offername: "Mighty food offer",
    pic: "https://m.media-amazon.com/images/I/61HziypI5oL._AC_SY200_.jpg",
  },

  {
    id: 8,
    offername: "Upto 80% off | hadware store",
    pic: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCCC/cc_379x304-01._SY304_CB625511053_.jpg",
  },
]
  return (
    <>
      <Nav2 />
      <div>
        <img className="advertisment" alt="" src="jugjug.png" />
      </div>
      <div className="offfer_banner"></div>

      <div className="ourproducts">
        <p className="headourpro">Top Deals</p>
        <div className="allcardsofproducts">
          {products.map((i) => {
            return (
              <ProductCard
                ids={i.id}
                name={i.name}
                price={i.price}
                pic={i.pic}
                adtocart={props.addtocartfunc}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
