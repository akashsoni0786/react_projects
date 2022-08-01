import React from 'react'
import { useLocation, Link } from "react-router-dom";
import './respage.css'

const EneryReaturants = (props) => {
  // React.useEffect(()=>{window.scrollTo(0)})
  const location = useLocation();
  const { detalis } = location.state
  
    return (
      <>
    <div className='back' style={{backgroundImage:"url("+detalis.photograph+")"}}>
      <marquee className="offers" behavior="alternate" direction="left">Get 100% off on first 3 orders</marquee>
      
    </div>
    <p className='resname' >{detalis.name}</p>
     
    <p className='restdetails'>Neighborhood : {detalis.neighborhood}</p>
    <p className='restdetails'>Cuisine type :  {detalis.cuisine_type}</p>
    <p className='restdetails'>Address : {detalis.address}</p>
    <marquee className="offers" behavior="alternate" direction="left">Add gift card no. AKA123 and get 1000 rupees off on order</marquee>

    <div className='ophourz'>
    {/* <img className='offerlogo' alt="" src='offer2.gif'/> */}
    <div className='optable'>
    <br />
      <h3 style={{textAlign:"center"}}>Operating hours</h3>
      <table>
      {Object.keys(detalis.operating_hours).map(i=>{
        return(
          <tr><th>{i}</th><td>:  </td> <td>{detalis.operating_hours[i]}</td></tr>)
      })}
      </table>
    </div>
    </div>
    <h2 className='resname'>Reviews of Our Customers</h2>
    <div className='reviews'>
    
    {/* "name": "Steve",
                    "date": "October 26, 2016",
                    "rating": 4,
                    "comments": */}

    
      {detalis.reviews.map(j=>{
        return(<div className='reviewbox'><table>
          <tr><h2>{j.name}</h2></tr>
          <tr><th>Date: </th><td>{j.date}</td></tr>
          <tr><th>Rating: </th><td>{j.rating}</td></tr>
          <th>Comment: </th>
          
          <td>{j.comments}</td>
          </table>  </div>)
      })}
      
  
    </div>
    
    
    
    </>
  )
}

export default EneryReaturants