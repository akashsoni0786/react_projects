import React, { Component } from "react";
import "./UpperNav.css";
export class UpperNav extends Component {
  render() {
    return (
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
    );
  }
}

export default UpperNav;
