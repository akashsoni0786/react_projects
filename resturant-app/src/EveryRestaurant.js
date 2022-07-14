import React from 'react';
import './Page.css';
const EveryRestaurant = (props) => {
  return (
    <div className='App'>
        <img alt='' src={props.img} className="pageimg"/>
          <h1 className='mainhead'>{props.name}</h1> 
          <p>Location : {props.address}</p>   
          <p>Cuisine Type : {props.cuisine_type}</p> 
          <p>Neighborhood : {props.neighborhood}</p>
          <h2>Timings</h2>
          <table >{props.operating_hours}</table>
        <p className='reviewhead'>Reviews</p>
        <div>{props.reviews}</div>

    </div>
  )
}

export default EveryRestaurant