import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';


const Nav = (props) => {
  return (
    <>
    <div className='nav'>
        <div className='logomaindiv'><img className='logomain' alt='' src='//pngimg.com/uploads/amazon/amazon_PNG11.png' /></div>
        <ul>
            <li><Link className='link' to="/">Home</Link></li>
            <li><Link className='link'to="/cart">Cart ({props.cartcount})</Link></li>
            <li><Link className='link'to="/signin">{props.user}</Link></li>
            {/* <li><Link className='link'to="/contact">Contact</Link></li> */}
        </ul>
    </div>

</>
  )
}

export default Nav