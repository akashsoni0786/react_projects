import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import {useNavigate} from 'react-router-dom';
import { contextname } from "./MyContext";
const Signup = () => {
  let navigate = useNavigate();
  const [username,setUsername] = React.useState('');
  const [pass,setPass] = React.useState('');
  const [conpass,setConPass] = React.useState('');
  const [usertemp,setUserTemp,pastemp,setPastemp] = React.useContext(contextname);
  const signupbtn = ()=>{
    if(username == '' || pass == '' || conpass == ''){
      alert('All fields are mandetory');
    }
    else{
      if(pass === conpass){
        alert("U r registered successfully")
        
        setUserTemp(username);
        setPastemp(pass);
        navigate('/');
        
      }
      else{
        alert("Passwords are not same!!!")
      }
    }
  }

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
          onChange={(e) => {setUsername(e.target.value)}}
          type="text"
          placeholder="Enter Username"
        />

        <label>
          <b>Password</b>
        </label>
        <input
          onChange={(e) => {setPass(e.target.value)}}
          type="password"
          placeholder="Enter Password"
        />

        <label>
          <b>Confirm Password</b>
        </label>
        <input
          onChange={(e) => {setConPass(e.target.value)}}
          type="password"
          placeholder="Enter Password"
        />

        <button onClick={signupbtn} type="submit">Signup</button>
      </div>

      <div className="container" style={{ backgrounColor: "#f78e21" }}>
        Alreardy account?
        <Link to="/">
          <button type="button" className="cancelbtn">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
