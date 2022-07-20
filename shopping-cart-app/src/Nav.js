import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';


const Nav = () => {
  return (
    <div className='nav'>
        <p className='logoname'><img className='logomain' alt='' src='https://cdn-icons-png.flaticon.com/512/3081/3081559.png' />Shopsy</p>
        <ul>
            <li><Link className='link' to="/">Home</Link></li>
            <li><Link className='link'to="/cart">Cart</Link></li>
            <li><Link className='link'to="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Nav