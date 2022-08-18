import React, { useContext } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { contxtname } from "./Contxt";
import { IconButton, Tooltip } from "@mui/material";
const Cart = (props) => {
  const navigate = useNavigate();
  const contxtobj = useContext(contxtname);
  const [state, setState] = React.useState({
    total: 0,
    cart: 0,
    quantity: 0,
    show: 0,
  });
  const addquan = (e) => {
    e.target.previousElementSibling.textContent =
      parseInt(e.target.previousElementSibling.textContent) + 1;
    var q = e.target.previousElementSibling.textContent;
    var p = e.target.parentElement.parentElement.previousElementSibling.lastChild.textContent;
    props.sendingToCart.map((i) => {
      if (e.target.id == i.id) {
        i.quan = q;
      }
    });
    var tl = 0;
    props.sendingToCart.map((s) => {
      tl = tl + s.quan * parseFloat(s.price);
    });
    setState({
      ...state,
      total: "Total amount : " + tl,
    });
  };
  const minusquan = (e) => {
    if (parseInt(e.target.nextElementSibling.textContent) == 1) {
      alert("Quantity can't be zero");
    } else {
      e.target.nextElementSibling.textContent =
        parseInt(e.target.nextElementSibling.textContent) - 1;
      var q = e.target.nextElementSibling.textContent;
      
      props.sendingToCart.map((i) => {
        if (e.target.id == i.id) {
          i.quan = q;
        }
      });
      var tl = 0;
      props.sendingToCart.map((s) => {
        tl = tl + s.quan * parseFloat(s.price);
      });
      setState({
        ...state,
        total: "Total amount : " + tl,
      });
    }
  };
  const totalprice = () => {
    var tl = 0;
    props.sendingToCart.map((s) => {
      tl = tl + s.quan * parseFloat(s.price);
    });
    setState({
      ...state,
      total: "Total amount : " + tl,
      show: 1,
    });
  };
  const proceed = () => {
    navigate("/checkout");
  };
  const emptycart = () => {
    if (window.confirm("Do you really want to empty this cart")) {
      props.emptyToCart();
    }
  };


  return (
    <div style={{width:"100%",backgroundColor:contxtobj.bgs}}>
    <div className="maincartpage" style={{backgroundColor:contxtobj.bgs}}>
      <div className="App"style={{backgroundColor:contxtobj.bgs}} >
        {props.sendingToCart.length == 0 ? (
          <h1 style={{color:contxtobj.txts}}>Your cart is empty</h1>
        ) : (
          <div>
            <h2 style={{color:contxtobj.txts}} className="contactushead">Your Cart</h2>
            <div className="carttablediv">
                {props.sendingToCart.map((i) => {
                  return (
                    <>
                    <div className="cartitemblock" style={{backgroundColor:contxtobj.bgsboxs}}>
                      <div className="cartimg">
                        <img className="cartimg" alt="" src={i.pic} />
                      </div>
                      <div className="cartcontent">
                        <b style={{fontSize:"20px",color:contxtobj.txts}}>{i.name}</b>
                        
                        <p style={{color:contxtobj.txts}}><span>Price:  $</span><span>{i.price}</span></p>
                        <div className="quantity">
                          <p style={{ marginTop: "-1px",color:contxtobj.txts }}>Quantity:&nbsp;&nbsp;&nbsp;</p>
                          <div style={{display:"flex"}}>
                            <button onClick={minusquan} id={i.id} style={{marginRight:"15px",cursor:"pointer",height:"30px",fontSize:"25px",fontWeight:"bolder"}}>
                              -
                            </button>
                            {/* <IconButton onClick={minusquan}>
                            <RemoveCircleOutlineIcon   sx={{ color: "#FBB03B" }} /></IconButton> */}
                            <b style={{color:contxtobj.txts}}>{i.quan}</b>
                            {/* <IconButton onClick={addquan}><RemoveCircleOutlineIcon   sx={{ color: "#FBB03B" }} /></IconButton> */}
                            <button onClick={addquan} id={i.id} style={{marginLeft:"15px",cursor:"pointer",height:"30px",fontSize:"25px",fontWeight:"bolder"}}>
                              +
                            </button>
                          </div>
                        </div>
                        <button className="deleteit" id={i.id} onClick={props.deletethis}>
                        Remove from cart
                      </button>
                      </div>
                      
                      
                    </div>
                  </>
                  );
                })}

               
              <div onClick={emptycart} className="proceedtocheckout">
                Empty Cart{" "}
              </div>
              {state.show == 1 ? (
                <>
                  <p style={{color:contxtobj.txts,fontWeight:"bolder"}}>{state.total}</p>
                  {contxtobj.login === ''?<><Link to='/login'><div className="proceedtocheckout">
                    Please login first{" "}
                  </div></Link></>:<Link to='/checkout' state={{cartarr:props.sendingToCart,ttl:state.total}}><div onClick={proceed} className="proceedtocheckout">
                    Proceed to checkout{" "}
                  </div></Link>}
                  
                </>
              ) : (
                <>
                  <div onClick={totalprice} className="proceedtocheckout">
                    Generate Bill Amount{" "}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Cart;

