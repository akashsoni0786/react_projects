import React, { Component } from "react";
import "./App.css";
export class Bill extends Component {
  constructor() {
    super();
    this.state = {
      units: 0,
      amount: 0,
    };
  }
  unitInput = (e) => {
    this.setState({
      units: e.target.value,
    });
  };

  generatebill = () => {
    //   For first 50 units – Rs. 3.50/unit
    if (this.state.units < 51) {
      this.setState({
        amount: parseFloat(this.state.units * 3.5),
      });
    }
    // For next 100 units – Rs. 4.00/unit
    else if (this.state.units > 50 && this.state.units < 151) {
      var u = this.state.units - 50;
      var firstfifty = parseFloat(50 * 3.5);
      var nexthundred = parseFloat(u * 4.0);
      this.setState({
        amount: parseFloat(nexthundred) + parseFloat(firstfifty),
      });
    }
    // For next 100 units – Rs. 5.20/unit
    else if (this.state.units > 150 && this.state.units < 251) {
      var w = this.state.units - 150;
      var firstfifty2 = parseFloat(50 * 3.5);
      var firsthundred = parseFloat(100 * 4.0);
      var nexthundred2 = parseFloat(w * 5.2);
      this.setState({
        amount: (
          parseFloat(nexthundred2) +
          parseFloat(firstfifty2) +
          parseFloat(firsthundred)
        ).toFixed(2),
      });
    }
    // For units above 250 – Rs. 6.50/unit
    else if (this.state.units > 250) {
      var x = this.state.units - 250;
      var firstfifty3 = parseFloat(50 * 3.5);
      var firsthundred3 = parseFloat(100 * 4.0);
      var nexthundred3 = parseFloat(100 * 5.2);
      var overlimit = parseFloat(x * 6.5);
      this.setState({
        amount: (
          parseFloat(firstfifty3) +
          parseFloat(firsthundred3) +
          parseFloat(nexthundred3)+parseFloat(overlimit)
        ).toFixed(2),
      });
    }
  };
  render() {
    return (
      <div>
        <h1>Electricity Bill</h1>
        <div className="rows">
          <input
            onChange={this.unitInput}
            className="inputs"
            type="Number"
            placeholder="Enter units"
          />
          <button onClick={this.generatebill} className="inputsbtn">
            Generate Bill
          </button>
        </div>
        <div className="billwords">Your bill : {this.state.amount}</div>
      </div>
    );
  }
}

export default Bill;
