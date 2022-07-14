import React from 'react'

const Restaurant = (props) => {
    return (
        <div onClick={props.sendittopage} className='resparent' id={props.id} >
          
          <img className='resimg' alt='' src={props.photograph}/>
          <div className='nameadd'>
          <h2>{props.resName}</h2>
          <span>
          <p>Address : {props.address}</p>
          <p>Neighborhood : {props.neighborhood}</p>
          <p>Cuisine Type : {props.cuisine_type}</p>
          </span>
          </div>
      
        </div>
      )
}

export default Restaurant