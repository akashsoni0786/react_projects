import React, { Component } from 'react'
import './Login.css';
export class Signup extends Component {
  render() {
    return (
        <div className="loginback">
        <div className="logincontainer">
        <h1 className="pagename">Signup</h1>
        <table className="tablelogin">
          <tr>
            <th>Email</th>
            <td>
              <input className="inps" placeholder="Enter email" onChange={this.props.email} />
            </td>
          </tr>
          <br />
          <tr>
            <th>Password</th>
            <td>
              <input className="inps" placeholder="Enter password" onChange={this.props.password}/>
            </td>
          </tr><br />
          <tr>
            <th>Confirm Password</th>
            <td>
              <input className="inps" placeholder="Enter confirm password" onChange={this.props.confpass}/>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button onClick={this.props.signupbtn} className="loginbtn"> Signup</button>
            </td>
          </tr>
        </table>
        <p  onClick={this.props.gotologinpage} className="clickme">Already registered ?</p>
      </div></div>
    )
  }
}

export default Signup