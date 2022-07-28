import React, { useEffect } from 'react'
import MediaControlCard from './FoodCard'

const FoodContainer = (props) => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div><h2>Break our fast</h2>
      <div className='allproducts'>
      {props.products.map((i,index)=><div className='carddiv'><MediaControlCard  nameoffood={i.name} price={i.price} id={i.id} addtocart={props.addfood}/></div>)}
      </div></div>
  )
}

export default FoodContainer