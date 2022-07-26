import "./Signin.css";
import React, { useContext, useState,  } from "react";
import { ContextName } from "./MyContext";
import {useNavigate} from 'react-router-dom';

const Signin = (props) => {
  const [login,setLogin,username,setUsername] = useContext(ContextName);
  const [usernamelocal,setUsernamelocal]=useState('');
  const [passwordlocal,setPasswordlocal]=useState('');
  let navigate=useNavigate();
  const create = () => {
    alert("Username : User123 and Paddword : pass");
  };
  const loginbtn = () => {
    if (usernamelocal === "User123" && passwordlocal === "pass")
     { setLogin(1);
       setUsername(usernamelocal);
       navigate("/");
    }
  };
  return (
    <div>
      <img
        className="logoofamazon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
        alt="Amazon.com"
      />

      <div id="signInBorder">
        <p id="SignInTxt">Sign in</p>
        <label>
          <strong>Email (phone for mobile accounts)</strong>
          <br />
          <input onChange={(e)=>{setUsernamelocal(e.target.value)}} type="email" name="email" />
        </label>
        <br />
        <label>
          <strong>Password</strong>
          <span>
            <a onClick={create} href="#" id="password">
              Forgot your password?
            </a>
          </span>
          <br />
          <input onChange={(e)=>{setPasswordlocal(e.target.value)}}  type="password" name="password" />
        </label>

        <div>
          <button onClick={loginbtn} id="amazon">
            Sign in
          </button>
        </div>

        <div id="createAccount">
          <h2>
            <span>New to Amazon?</span>
          </h2>
          <button onClick={create} id="newAccount" name="newAcct">
            Create your Amazon account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
