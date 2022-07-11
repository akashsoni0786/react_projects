import "./App.css";
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loanamount : 0,
      interest : 0,
      period : 0,
      emi:0
    }
  }
  inputLoan =(e)=>{
    this.setState({
      loanamount : e.target.value
    })
  }
  inputInterest =(e)=>{
    this.setState({
      interest : e.target.value
    })
  }
  inputPeriod =(e)=>{
    this.setState({
      period : e.target.value
    })
  }
  calculate = ()=>{
    var em = (this.state.interest*100)/(this.state.loanamount * this.state.period);
    this.setState({
      emi : em
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="calcu">
          <h2>EMI Calculator</h2>
          <div className="rows">
            <span>Loan Amount : </span>
            <input onChange={this.inputLoan} className="inputs" type="Number"/>
          </div>
          <div className="rows">
            <span>Interest : </span>
            <input onChange={this.inputInterest} className="inputs" type="Number"/>
          </div>
          <div className="rows">
            <span>Period : </span>
            <input onChange={this.inputPeriod} className="inputs" type="Number"/>
          </div>
          <div className="rows">
            <input onClick={this.calculate} className="inputsbtn" type="button" value="Calculate"/>
            <input className="inputsbtn" type="button" value="Reset"/>
            <input className="inputsbtn" type="button" value="Details"/>
          </div>
          <Details monthlyemi={this.state.emi} totalinterest="0" totalpayment="0"/>
          </div>
          
        </header>
      </div>
    );
  }
}



export const Details = (props) => {
  return (
    <div><h3>Details</h3>
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
    </div></div>
  )
}

