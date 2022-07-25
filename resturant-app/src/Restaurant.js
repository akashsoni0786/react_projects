import React from 'react'

const Restaurant = (props) => {
    return (
        <div onClick={props.sendittopage} className='resparent' id={props.id} 
        style={{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%),url("+props.photograph+")"}} >
          <div className='nameadd'>
          <h2 className='namehead'>{props.resName}</h2>
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