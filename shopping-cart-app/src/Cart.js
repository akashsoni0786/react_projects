import React, { Component } from "react";
import './App.css'
export class Cart extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      cart: 0,
      quantity: 0,
      show:0,

    };
  }
  addquan = (e) => {
    e.target.previousElementSibling.textContent =
      parseInt(e.target.previousElementSibling.textContent) + 1;
    var q = e.target.previousElementSibling.textContent;
    var p = e.target.parentElement.previousElementSibling.textContent;
    e.target.parentElement.nextElementSibling.textContent = q * p;
    this.props.sendingToCart.map((i) => {
      if (e.target.id == i.id) {
        i.quan = q;
      }
    });
    var tl = 0;
    this.props.sendingToCart.map((s) => {
      tl = tl + s.quan * parseFloat(s.price);
    });
    this.setState({
      total: "Total amount : "+tl,
    });
  };
  minusquan = (e) => {

    if (parseInt(e.target.nextElementSibling.textContent) == 1) {
      alert("Quantity can't be zero");
    } else {
      e.target.nextElementSibling.textContent =
        parseInt(e.target.nextElementSibling.textContent) - 1;
      var q = e.target.nextElementSibling.textContent;
      var p = e.target.parentElement.previousElementSibling.textContent;
      e.target.parentElement.nextElementSibling.textContent = q * p;
      this.props.sendingToCart.map((i) => {
        if (e.target.id == i.id) {
          i.quan = q;
        }
      });
      var tl = 0;
      this.props.sendingToCart.map((s) => {
        tl = tl + s.quan * parseFloat(s.price);
      });
      this.setState({
        total: "Total amount : "+tl,
      });
    }
  };
  totalprice = () => {
    var tl = 0;
    this.props.sendingToCart.map((s) => {
      tl = tl + s.quan * parseFloat(s.price);
    });
    this.setState({
      total: "Total amount : "+tl,
      show:1,
    });
  };
  proceed=()=>{
    this.props.emptyToCart();
    alert("Thanks for shopping with us!!");
  }
  emptycart=()=>{
    if(window.confirm("Do you really want to empty this cart")){
      this.props.emptyToCart();
    }
  }
 
  render() {
    return (
      <div className="maincartpage">
      <div className="App">
        {this.props.sendingToCart.length == 0 ? (
          <h1>Your cart is empty</h1>
        ) : (
          <div>
            <h2 className="contactushead">Your Cart</h2>
            <div className="carttablediv">
              <table className="carttable">
                <tr>
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
                {this.props.sendingToCart.map((i) => {
                  return (
                    <tr>
                      <td>{i.name}</td>
                      <td>{i.price}</td>
                      <td>
                        <button onClick={this.minusquan} id={i.id}>
                          -
                        </button>
                        <span>{i.quan}</span>
                        <button onClick={this.addquan} id={i.id}>
                          +
                        </button>
                      </td>
                      <td>{i.quan * parseFloat(i.price)}</td>
                      <td><u className="deleteit" id={i.id} onClick={this.props.deletethis}>Delete</u></td>
                    </tr>
                  );
                })}

                <tr>
                  <th>---------</th>
                  <th>---------</th>
                  <th>---------</th>
                  <th>---------</th>
                </tr>
              </table>
              <div onClick={this.emptycart} className="proceedtocheckout">Empty Cart </div>
          {this.state.show ==1 ? <><p>{this.state.total}</p>
              <div onClick={this.proceed} className="proceedtocheckout">Proceed to checkout </div></>:<><div onClick={this.totalprice} className="proceedtocheckout">Generate Bill Amount </div></>}
              
            </div>
          </div>
        )}
      </div>

     </div>
    );
  }
}

export default Cart;
