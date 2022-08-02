import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { contextname } from "./MyContext";
const Login = (props) => {
  const [username2, setUsername2] = React.useState("");
  const [pass2, setPass2] = React.useState("");

  const [
    login,
    setLogin,
    pastemp,
    setPastemp,
    usernamefinal,
    setUsernamefinal,
    passfinal,
    setPassfinal,
    usertemp,
    setUserTemp,
  ] = React.useContext(contextname);

  const loginbtn = () => {
    console.log( username2);
    console.log( pass2);
    console.log( usertemp);
    console.log( pastemp);
    if (username2 == "" || pass2 == "") {
      alert("All fields are mandetory");
    } else {
      if (pass2 == pastemp && username2 == usertemp) {
        setUsernamefinal(username2);
        setPassfinal(pass2);
        setLogin(1);
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
    </div>
  );
};

export default Login;
