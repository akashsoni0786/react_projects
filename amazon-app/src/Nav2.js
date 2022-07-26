import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Nav2 = (props) => {
  return (
    <>
      <div className="secondnav">
        <div className="liftlist">
          <ul>
            <li>
              <i class="fas fa-bars">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All</i>
            </li>
            <li>Mobiles</li>
            <li>Electronics</li>
            <li>Fashion</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav2;
