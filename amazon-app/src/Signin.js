import React, { Component } from 'react'
import './Signin.css'
export class Signin extends Component {
  render() {
    return (
      <div><img className='logoofamazon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="Amazon.com"/>

      <div id="signInBorder">
        <p id="SignInTxt">
          Sign in
        </p>
  
        <label>
          <strong>Email (phone for mobile accounts)</strong>
          <br/>
          <input type="email" name="email" value=""/>
        </label>
  
        <br/>
  
        <label>
          <strong>Password</strong>
          <span><a href="#" id="password">Forgot your password?</a></span>
          <br/>
          <input type="password" name="password" value=""/>
        </label>
  
        <div>
          <button id="amazon">Sign in</button>
        </div>
  
        <div id="createAccount">
          <h2><span>New to Amazon?</span></h2>
          <button id="newAccount" name="newAcct">Create your Amazon account</button>
        </div>
  
  
  
      </div>
  
    <hr id="footer"/>
  
    <div class="extra">
      <p class="links"><a href="#" id="first">Conditions of Use</a>
      <a href="#">Notice of Use</a>
      <a href="#">Help</a></p>
      <p class="links" id="special">
        © 1996-2016, Amazon.com, Inc. or its affiliates
      </p>
    </div></div>
    )
  }
}

export default Signin