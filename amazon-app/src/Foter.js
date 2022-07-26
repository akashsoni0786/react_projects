import React, { Component } from "react";
import "./App.css";
import "./Home.css";
export class Footer extends Component {
  
  render() {
    return (
      <>
        <div className="footer">
          <p>Terms & Conditions</p>
          <span>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </span>
          <h4>© Copyright 2022 : By Amazon</h4>
        </div>
      </>
    );
  }
}

export default Footer;
