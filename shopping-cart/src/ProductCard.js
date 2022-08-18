import React from 'react'
import './App.css';
const ProductCard = (props) => {
  return (
   
       <div className='productcard' style={{backgroundColor:props.bg}}>
         <img alt='' src={props.pic}/>
         <p className="productname" style={{color:props.txt}}>{props.name}</p>
         <div className='pricename'>
         <p className="productpricecancle" style={{color:props.txt}}>${props.cprice}</p>
           <p className="productprice" style={{color:props.txt}}>${props.price}</p>
         </div>
         <div style={{color:props.txt}} id={props.ids} onClick={props.adtocart} className='addtocartbtn'>Add&nbsp;to&nbsp;cart</div>
       </div>
   
  )
}

export default ProductCard