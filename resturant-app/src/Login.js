import "./Login.css";
import React, { Component } from 'react'

export class Login extends Component {
  render() {

    return (
        <div className="loginback">
          <div className="logincontainer">
            <h1 className="pagename">Login</h1>
            <table className="tablelogin">
              <tr>
                <th>Email</th>
                <td>
                  <input onChange={this.props.emaill} className="inps" placeholder="Enter email" />
                </td>
              </tr>
              <br />
              <tr>
                <th>Password</th>
                <td>
                  <input onChange={this.props.pass} className="inps" placeholder="Enter password" />
                </td>
              </tr>
              <tr>
                <td></td>{" "}
                <td>
                  <button onClick={this.props.loginbtn} className="loginbtn"> Login</button>
                </td>
              </tr>
            </table>
            <p  onClick={this.props.gotosignuppage} className="clickme">Not yet registered ?</p>
          </div>
    
        </div>
      )
  }
}

export default Login

