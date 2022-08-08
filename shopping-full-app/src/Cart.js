import React from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
const Cart = (props) => {
  const navigate = useNavigate();
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
    // props.emptyToCart();
    // alert("Thanks for shopping with us!!");
  };
  const emptycart = () => {
    if (window.confirm("Do you really want to empty this cart")) {
      props.emptyToCart();
    }
  };
  return (
    <div className="maincartpage">
      <div className="App">
        {props.sendingToCart.length == 0 ? (
          <h1>Your cart is empty</h1>
        ) : (
          <div>
            <h2 className="contactushead">Your Cart</h2>
            <div className="carttablediv">
                {props.sendingToCart.map((i) => {
                  return (
                    <>
                    <div className="cartitemblock">
                      <div className="cartimg">
                        <img className="cartimg" alt="" src={i.pic} />
                      </div>
                      <div className="cartcontent">
                        <b style={{fontSize:"20px"}}>{i.name}</b>
                        
                        <p><span>Price:  $</span><span>{i.price}</span></p>
                        <div className="quantity">
                          <p style={{ marginTop: "-1px" }}>Quantity:&nbsp;&nbsp;&nbsp;</p>
                          <div>
                            <button onClick={minusquan} id={i.id}>
                              -
                            </button>
                            <span>{i.quan}</span>
                            <button onClick={addquan} id={i.id}>
                              +
                            </button>
                          </div>
                        </div>
                        <button className="deleteit" id={i.id} onClick={props.deletethis}>
                        Delete
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
                  <p>{state.total}</p>
                  <Link to='/checkout' state={{cartarr:props.sendingToCart,ttl:state.total}}><div onClick={proceed} className="proceedtocheckout">
                    Proceed to checkout{" "}
                  </div></Link>
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
  );
};

export default Cart;

