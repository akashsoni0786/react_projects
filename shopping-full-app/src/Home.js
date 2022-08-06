import "./App.css";
import { products } from "./Data";
import ProductCard from "./ProductCard";
import React from "react";
import MyCarousel from "./Carousel";
import ProductCarousel from "./ProductCarousel";

const Home = (props) => {
  return (
    <>
      <MyCarousel />
      <ProductCarousel />
      <h1 style={{ textAlign: "center" }}>Category your style</h1>
      <img
      style={{width:"100%"}}
        alt=""
        src="https://admintcns.wforwoman.com/commonsection/1654668501AURELIA-Sets-and-Dresses.jpg"
      />
      <h1 style={{ textAlign: "center" }}>Top deals with us</h1>
      <img
      style={{width:"100%"}}
        alt=""
        src="https://admintcns.wforwoman.com/commonsection/1653036906A-Footer-Footwear.jpg"
      />

      <div className="ourproducts">
        <p className="headourpro">
          <span>Trending</span>&nbsp;<span>products</span>
        </p>
        <div className="allcardsofproducts">
          {products.map((i) => {
            return (
              <ProductCard
              cprice={i.cprice}
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
      <div className="footer">
        <p>Terms & Conditions</p>
        <span>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </span>
        <h4>© Copyright 2022 : By Shopsy</h4>
      </div>
    </>
  );
};

export default Home;
