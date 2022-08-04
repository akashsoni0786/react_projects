import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { contextname } from "./MyContext";

const Login = (props) => {
  let navigate = useNavigate();
  const [username2, setUsername2] = React.useState("");
  const [pass2, setPass2] = React.useState("");

 
 const contxt = React.useContext(contextname);

  const loginbtn = () => {
 
    console.log( username2);
    console.log( pass2);
    console.log( contxt.usertemp);
    console.log( contxt.pastemp);
    if (username2 == "" || pass2 == "") {
      alert("All fields are mandetory");
    } else {
      if (pass2 == contxt.pastemp && username2 == contxt.usertemp) {
        contxt.setUsernamefinal(username2);
        contxt.setPassfinal(pass2);
        contxt.setLogin(1);
        navigate("home")
      } else {
        alert("Invalid Credentials");
      }
    }
  };
  return (
    <div>
      <div className="imgcontainer">
        <img alt="" src="logo.png" className="" />
      </div>

      <div className="container">
        <label>
          <b>Username</b>
        </label>
        <input
          onChange={(e) => {
            setUsername2(e.target.value);
          }}
          type="text"
          placeholder="Enter Username"
        />

        <label>
          <b>Password</b>
        </label>
        <input
          onChange={(e) => {
            setPass2(e.target.value);
          }}
          type="password"
          placeholder="Enter Password"
        />

        <button onClick={loginbtn} type="submit">
          Login
        </button>
      </div>
      
      <div className="container" style={{ backgrounColor: "#f78e21" }}>
        No account?
        <Link to="/signup">
          <button type="button" className="cancelbtn">
            Signup
          </button>
        </Link>
      </div>
      <marquee className="offers" behavior="alternate" direction="left">Add gift card no. AKA123 and get 1000 rupees off on order</marquee>
    </div>
  );
};

export default Login;
