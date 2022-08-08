import React from "react";
import { products } from "./Data";
import ProductCard from "./ProductCard";
import {contxtname} from "./Contxt";

const SearchContent = (props) => {
 
  const contxtobj = React.useContext(contxtname);

  return (
    <>
      {" "}
      <p className="headourpro" style={{ marginTop: "100px",textAlign:"center",fontSize:"25px",fontWeight:"bolder" }}>
        <span>Searched</span>&nbsp;<span>products</span>
      </p>
      <div className="allcardsofproducts" style={{ marginTop: "10px" }}>
        {contxtobj.search.map((i) => {
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
    </>
  );
};

export default SearchContent;
