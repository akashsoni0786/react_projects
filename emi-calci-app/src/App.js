import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanamount: "",
      interest: "",
      period: "",
      periodmonth: "",
      emi: "--------------",
      totalinterest : "--------------",
      totalpayments : "--------------"
    };
  }
  inputLoan = (e) => {
    this.setState({
      loanamount: e.target.value,
    });
  };
  inputInterest = (e) => {
    this.setState({
      interest: e.target.value,
    });
  };
  inputPeriod = (e) => {
    this.setState({
      period: e.target.value,
    });
  };
  inputPeriodMonth = (e) => {
    this.setState({
      periodmonth: e.target.value,
    });
  };

  calculate = () => {
    if(this.state.loanamount === '' || this.state.loanamount === 0 || this.state.interest === '' || this.state.interest === 0 || this.state.period ==='' || this.state.period ===0)
    {
      alert("All fields are mendotary");
    }
    else{
      if (this.state.periodmonth === "" || this.state.periodmonth === 0) {
        var ci =
          this.state.loanamount *
          this.state.interest *
          0.0008333 *
          (Math.pow(1 + this.state.interest * 0.0008333, this.state.period) /
            (Math.pow(1 + this.state.interest * 0.0008333, this.state.period) -
              1));
        var ttlinterest = parseFloat(ci);
        
        var tp = parseFloat(ci) + parseFloat(this.state.loanamount);
        var em = tp / (12*parseFloat(this.state.period));

        this.setState({
          emi: em.toFixed(3),
          totalinterest : ttlinterest.toFixed(3),
          totalpayments : tp.toFixed(3)
  
        });
      }
      else{
        var time = parseFloat(this.state.period) + parseFloat(this.state.periodmonth/12);
        var ci2 =
          this.state.loanamount *
          this.state.interest *
          0.0008333 *
          (Math.pow(1 + this.state.interest * 0.0008333, time) /
            (Math.pow(1 + this.state.interest * 0.0008333, time) -
              1));
        var ttlintet = parseFloat(ci2);
        
        var tp2 = parseFloat(ci2) + parseFloat(this.state.loanamount);
        var em2 = tp2 / (12*parseFloat(this.state.period)+parseFloat(this.state.periodmonth));
        this.setState({
          emi: em2.toFixed(3),
          totalinterest : ttlintet.toFixed(3),
          totalpayments : tp2.toFixed(3)
  
        });
  
      }
    }

  };
  reset = () => {
    this.setState({
      loanamount: '',
      interest: '',
      period: '',
      periodmonth: '',
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="calcu">
            <h2>EMI Calculator</h2>
            <div className="rows">
              <span>Loan Amount : </span>
              <input
                onChange={this.inputLoan}
                className="inputs"
                type="Number"
                placeholder="Enter Loan Amount"
                value={this.state.loanamount}
              />
            </div>
            <div className="rows">
              <span>Interest : </span>
              <input
                onChange={this.inputInterest}
                className="inputs"
                type="Number"
                placeholder="Enter Rate of Interest"
                value={this.state.interest}
              />
            </div>
            <div className="rows">
              <span>Period : </span>
              <input
                onChange={this.inputPeriod}
                className="inputstime"
                type="Number"
                placeholder="Year"
                value={this.state.period}
              />
              <input
                onChange={this.inputPeriodMonth}
                className="inputstime"
                type="Number"
                placeholder="Month"
                value={this.state.periodmonth}
              />
            </div>
            <div className="rowsbtn">
              <input
                onClick={this.calculate}
                className="inputsbtn"
                type="button"
                value="Calculate"
              />
              <input
                onClick={this.reset}
                className="inputsbtn"
                type="button"
                value="Reset"
              />
              {/* <input className="inputsbtn" type="button" value="Details" /> */}
            </div>
            <Details
              monthlyemi={this.state.emi}
              totalinterest={this.state.totalinterest}
              totalpayment={this.state.totalpayments}
            />
          </div>
        </header>
      </div>
    );
  }
}

export const Details = (props) => {
  return (
    <div >
      <h3>Details</h3>
      <div className="rows">
        <span>Monthly EMI : </span>
        <span>{props.monthlyemi} </span>
      </div>
      <div className="rows">
        <span>Total Interest : </span>
        <span>{props.totalinterest} </span>
      </div>
      <div className="rows">
        <span>Total Payment : </span>
        <span>{props.totalpayment} </span>
      </div>
    </div>
  );
};
