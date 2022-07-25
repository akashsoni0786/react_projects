import React from 'react';
import './Page.css';
const EveryRestaurant = (props) => {
  return (
    <div className='mainpage'>
      <div className='backbtn'><img alt='' src='https://cdn-icons.flaticon.com/png/128/2028/premium/2028276.png?token=exp=1658741250~hmac=ab55f633965cec537ed3bb88279f9e0f' /></div>
        <div className="pageimg" style={{backgroundImage:"linear-gradient(0deg, rgba(0, 0, 0, 0.09) 0%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.05) 85%),url("+props.img+")"}}>
        <h1 className='mainhead'>{props.name}</h1> 
          <p>Location : {props.address}</p>   
          <p>Cuisine Type : {props.cuisine_type}</p> 
          <p>Neighborhood : {props.neighborhood}</p>
          <marquee className="offermarq">Get 100% off on first order</marquee>
          <h2>Timings</h2>
          <table >{props.operating_hours}</table>
        <p className='reviewhead'>Reviews</p>
        <div>{props.reviews}</div>
        </div>
          

    </div>
  )
}

export default EveryRestaurant