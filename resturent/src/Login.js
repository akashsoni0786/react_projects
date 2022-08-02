import React from "react";
import "./Login.css";
const Login = (props) => {
  return (
    <div>
      <div className="imgcontainer">
        <img alt="" src="logo.png" className="" />
      </div>

      <div className="container">
        <label>
          <b>Username</b>
        </label>
        <input onChange={()=>{}} type="text" placeholder="Enter Username" name="uname" required />

        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button type="submit">Login</button>
      </div>

      <div className="container" style={{ backgrounColor: "#f78e21" }}>
        No account?
        <button type="button" className="cancelbtn">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Login;
