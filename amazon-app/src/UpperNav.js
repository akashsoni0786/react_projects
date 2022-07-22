import React, { Component } from "react";
import "./UpperNav.css";
export class UpperNav extends Component {
  render() {
    return (
      <div className="bothnav">
      <div className="navparent">
        <img
          className="logoimg"
          alt=""
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        <div className="location">
          <p>
            <i class="fa-solid fa-location-dot"></i>
          </p>
          <ul>
            <li>Hello</li>
            <li>
              <b>Select&nbsp;your&nbsp;address</b>
            </li>
          </ul>
        </div>
        <div className="searchdiv">
          <select>
            <option>All</option>
          </select>

          <input placeholder="Search here.."/>
          <div>
          <i className="fa-solid fa-search" id="searchlogo"></i>
          </div>
          
        </div>
        <div className="language">
          <img alt="" src="india.png"/>
         <p> <i class="fas fa-caret-down"></i></p>
        </div>
        <div className="location">
          
          <ul>
            <li>Hello Signin</li>
            <li>
              <b>Account&nbsp;&&nbsp;Lists</b>&nbsp;<i class="fas fa-caret-down"></i>
            </li>
          </ul>
        </div>
        <div className="location">
          
          <ul>
            <li>Returns</li>
            <li>
              <b>&nbsp;&&nbsp;Orders</b>
            </li>
          </ul>
        </div>
        <div className="cart">
        <i class="fa fa-shopping-cart"><span>2</span></i>
        </div>
      </div>

<div className='secondnav'>
<div className='liftlist'>
    <ul>
        <li><i class="fas fa-bars">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All</i></li>
        <li>Best&nbsp;Seller</li>
        <li>Mobiles</li>
        <li>Customer&nbsp;Service</li>
        <li>Today's&nbsp;Deal</li>
        <li>Books</li>
        <li>Electronics</li>
        <li>Fashion</li>
    </ul>
</div>
<div className='divright'>
    <img alt='' src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/LU/IN-PD-22-GW-SWM_400x39._CB634187897_.jpg' />
</div>
</div></div>
    );
  }
}

export default UpperNav;
