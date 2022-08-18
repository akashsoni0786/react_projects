import React from "react";
import { products } from "./Data";
import ProductCard from "./ProductCard";
import {contxtname} from "./Contxt";
import { Button, Menu, MenuItem } from "@mui/material";

const SearchContent = (props) => {
 
  const contxtobj = React.useContext(contxtname);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const lessfivehund =()=>{
    let filtered=[];
    handleClose();
    contxtobj.search.map(i=>{
      if(i.price<500){
        filtered.push(i)
      }
    })
    contxtobj.search = filtered;
  }
  const lessthousnd =()=>{
    let filtered=[];
    handleClose();
    contxtobj.search.map(i=>{
      if(i.price<1000){
        filtered.push(i)
      }
    })
    contxtobj.search = filtered;
  }
  
  const lessfivethousnd =()=>{
    let filtered=[];
    handleClose();
    contxtobj.search.map(i=>{
      if(i.price<5000){
        filtered.push(i)
      }
    })
    contxtobj.search = filtered;
  }
  return (
    <>
      {" "}
      <div style={{display:"flex",justifyContent:"space-between"}}>

      <p className="headourpro" style={{ marginTop: "100px",fontSize:"25px",fontWeight:"bolder" }}>
        <span>{contxtobj.searchtxts}</span>&nbsp;<span style={{color:contxtobj.txts}}>products</span>
      </p>

      <div style={{ marginTop: "100px"}}>
     
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color:"#FBB03B",fontSize:"20px",fontWeight:"bold"}}
      >
        Filter
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={lessfivehund}>Less than 500</MenuItem>
        <MenuItem onClick={lessthousnd}>Less than 1000</MenuItem>
        <MenuItem onClick={lessfivethousnd}>Less than 5000</MenuItem>
      </Menu>
    </div>
      </div>
     
      <div className="allcardsofproducts" style={{ marginTop: "10px" }}>
        {contxtobj.search.map((i) => {
          return (
            <ProductCard
            bg={contxtobj.bgsboxs}
              txt={contxtobj.txts}
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
