import "./App.css";
import React, { useState } from "react";

const Cart = (props) => {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [show, setShow] = useState(0);

  const addquan = (e) => {
    e.target.previousElementSibling.textContent =
      parseInt(e.target.previousElementSibling.textContent) + 1;
    var q = e.target.previousElementSibling.textContent;
    var p = e.target.parentElement.previousElementSibling.textContent;
    e.target.parentElement.nextElementSibling.textContent = q * p;
    props.sendingToCart.map((i) => {
      if (e.target.id == i.id) {
        i.quan = q;
      }
    });
    var tl = 0;
    props.sendingToCart.map((s) => {
      tl = tl + s.quan * parseFloat(s.price);
    });
    setTotal("Total amount : " + tl);
  };
  const minusquan = (e) => {
    if (parseInt(e.target.nextElementSibling.textContent) == 1) {
      alert("Quantity can't be zero");
    } else {
      e.target.nextElementSibling.textContent =
        parseInt(e.target.nextElementSibling.textContent) - 1;
      var q = e.target.nextElementSibling.textContent;
      var p = e.target.parentElement.previousElementSibling.textContent;
      e.target.parentElement.nextElementSibling.textContent = q * p;
      props.sendingToCart.map((i) => {
        if (e.target.id == i.id) {
          i.quan = q;
        }
      });
      var tl = 0;
      props.sendingToCart.map((s) => {
        tl = tl + s.quan * parseFloat(s.price);
      });
      setTotal("Total amount : " + tl);
    }
  };
  const totalprice = () => {
    var tl = 0;
    props.sendingToCart.map((s) => {
      tl = tl + s.quan * parseFloat(s.price);
    });
    setTotal("Total amount : " + tl);
    setShow(1);
  };
  const proceed = () => {

    props.proceedingforbill();
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
            <h2 className="contactushead">
              Your Cart &nbsp;
              <img
                className="amazonfullfill"
                alt=""
                src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
              />
            </h2>
            <div className="carttablediv">
              <table className="carttable">
                <tr>
                  <th>
                    <u>Image of Product</u>
                  </th>
                  <th>
                    <u>Name of Product</u>
                  </th>
                  <th>
                    <u>Product Price</u>
                  </th>
                  <th>
                    <u>Quantity</u>
                  </th>
                  <th>
                    <u>Total Price</u>
                  </th>
                  <th>
                    <u>Delete </u>
                  </th>
                </tr>
                {props.sendingToCart.map((i) => {
                  return (
                    <tr>
                      <td>
                        <img className="cartimg" alt="" src={i.pic} />
                      </td>
                      <td>{i.name}</td>
                      <td>{i.price}</td>
                      <td>
                        <button onClick={minusquan} id={i.id}>
                          -
                        </button>
                        <span>{i.quan}</span>
                        <button onClick={addquan} id={i.id}>
                          +
                        </button>
                      </td>
                      <td>{i.quan * parseFloat(i.price)}</td>
                      <td>
                        <u
                          className="deleteit"
                          id={i.id}
                          onClick={props.deletethis}
                        >
                          Delete
                        </u>
                      </td>
                    </tr>
                  );
                })}

                {/* <tr>
                  <th>---------</th>
                  <th>---------</th>
                  <th>---------</th>
                  <th>---------</th>
                </tr> */}
              </table>
              <div onClick={emptycart} className="proceedtocheckout">
                Empty Cart{" "}
              </div>
              {show == 1 ? (
                <>
                  <p>{total}</p>
                  <div onClick={proceed} className="proceedtocheckout">
                    Proceed to checkout{" "}
                  </div>
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
