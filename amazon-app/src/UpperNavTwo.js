import React, { Component } from 'react'
import "./UpperNav.css";
export class UpperNavTwo extends Component {
  render() {
    return (
      <div className='secondnav'>
        <div className='liftlist'>
            <ul>
                <li><i class="fas fa-bars">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All</i></li>
                <li>Best&nbsp;Seller</li>
                <li>Mobiles</li>
                <li>Customer&nbsp;Service</li>
                <li>Today's&nbsp;Deal</li>
                <li>Books</li>
                <li>Electronics</li>
                <li>Fashion</li>
            </ul>
        </div>
        <div className='divright'>
            <img alt='' src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/LU/IN-PD-22-GW-SWM_400x39._CB634187897_.jpg' />
        </div>
      </div>
    )
  }
}

export default UpperNavTwo