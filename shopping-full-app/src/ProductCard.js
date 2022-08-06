import React from 'react'
import './App.css';
const ProductCard = (props) => {
  return (
   
       <div className='productcard'>
         <img alt='' src={props.pic}/>
         <p className="productname">{props.name}</p>
         <div className='pricename'>
         <p className="productpricecancle">${props.cprice}</p>
           <p className="productprice">${props.price}</p>
         </div>
         <div id={props.ids} onClick={props.adtocart} className='addtocartbtn'>Add&nbsp;to&nbsp;cart</div>
       </div>
   
  )
}

export default ProductCard