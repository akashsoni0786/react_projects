import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './App.css';
import { ContextName } from "./MyContext";

const Nav = (props) => {
  const [
    login,
  ] = useContext(ContextName);

  return (
    <>
    <div className='nav'>
        <div className='logomaindiv'><Link className='link' to="/"><img className='logomain' alt='' src='//pngimg.com/uploads/amazon/amazon_PNG11.png' /></Link></div>
        <ul>
        <li><b>{props.user}</b></li>
            <li><Link className='link' to="/">Home</Link></li>
            <li><Link className='link'to="/cart">Cart ({props.cartcount})</Link></li>
            <li className='link' onClick={props.loginstatus}>{login==1 ? "Logout" : "Login"}</li>
            
        </ul>
    </div>

</>
  )
}

export default Nav