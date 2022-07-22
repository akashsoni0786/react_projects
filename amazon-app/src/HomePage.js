import React, { Component } from 'react'
import "./HomePage.css"

export class HomePage extends Component {
constructor(){
    super();
    this.state={
      product:[
        {id:1,offername:"Prime day is back",pic:"https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/LU/IN-PD-22-teaser-GW_379x304_deals._SY304_CB631772745_.jpg"},
        {id:2,offername:"Revamp your home in style",pic:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"},

        {id:3,offername:"Upto 70% off | clearance store",pic:"https://m.media-amazon.com/images/I/41Byw2Rl-qL._AC_SY200_.jpg"},
        {id:4,offername:"Upgrade your home | Amazon Brands & more",pic:"https://m.media-amazon.com/images/I/716WTUyS7HL._AC_SY200_.png"},
        {id:5,offername:"Shop by category",pic:"https://m.media-amazon.com/images/I/41Byw2Rl-qL._AC_SY200_.jpg"},
        {id:6,offername:"Home sweet home offer",pic:"https://m.media-amazon.com/images/I/81zzoWGt+qL._AC_SY200_.jpg"},

        {id:7,offername:"Mighty food offer",pic:"https://m.media-amazon.com/images/I/61HziypI5oL._AC_SY200_.jpg"},

        {id:8,offername:"Upto 80% off | hadware store",pic:"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCCC/cc_379x304-01._SY304_CB625511053_.jpg"},

        

      ]
    }
}
  render() {
    return (
      <div>
        <div className='carousel'>
        <img alt='' src='jugjug.png'/>
        </div>
        <div className='allproductsdiv'>
            {this.state.product.map(i=> <div className='productdiv'>
                <span className='offername'>{i.offername}</span>
                <img className='imgsoffer' src={i.pic}alt=''/>
                <p>Explore here</p>
            </div>

            )}
            
        </div>
      </div>
    )
  }
}

export default HomePage