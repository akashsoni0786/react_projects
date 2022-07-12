import "./App.css";

import React, { Component } from "react";
import Result from "./Result";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      weight: "",
      height: "",
      result: "",
    };
  }
  w = (e) => {
    this.setState({
      weight: e.target.value,
    });
  };
  h = (e) => {
    this.setState({
      height: e.target.value,
    });
  };
  calculate = () => {
    if (this.state.weight === "" || this.state.height === "") {
      alert("All fields are mendotary");
    } else {
      var wt = parseFloat(this.state.weight);
      var ht = parseFloat(this.state.height) / 100;
      var res = wt / Math.pow(ht, 2).toFixed(1);
      console.log(res);
      if (res < 18.5) {
        this.setState({
          result: "Yor are Underweight",
        });
      } else if (res > 18.4 && res < 25) {
        this.setState({
          result: "Yor are Healthy weight",
        });
      } else if (res > 24.9 && res < 30) {
        this.setState({
          result: "Yor are Overweight",
        });
      } else if (res >= 30) {
        this.setState({
          result: "Yor are Obesity",
        });
      }
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>BMI Calculator</h1>
          <div>
            <input
              onChange={this.w}
              type="Number"
              className="inputfields"
              placeholder="Enter weight (in KG)"
            />
            <input
              onChange={this.h}
              type="Number"
              className="inputfields"
              placeholder="Enter height (in Centimeters)"
            />
          </div>
          <div style={{ margin: "50px" }}>
            <button onClick={this.calculate} className="inputfields">
              Calculate
            </button>
            <button className="inputfields">Reset</button>
          </div>
          <Result results={this.state.result}/>
        </header>
      </div>
    );
  }
}

export default App;
