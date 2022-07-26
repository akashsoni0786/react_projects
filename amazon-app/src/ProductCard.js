import React from 'react'
import './App.css';
const ProductCard = (props) => {
  return (
   
       <div className='productcard'>
         <img alt='' src={props.pic}/><br />
         <span className='delivery'>₹25 delivery Charges</span>
         <div className='pricename'>
           <p>{props.name}</p>
           <p>₹{props.price}</p>
         </div>
         <div id={props.ids} onClick={props.adtocart} className='addtocartbtn'>Add&nbsp;to&nbsp;cart</div>
       </div>
   
  )
}

export default ProductCard