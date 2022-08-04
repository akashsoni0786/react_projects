import './App.css';
import { products } from './Data';
import ProductCard from './ProductCard';
import React from 'react'

const Home = (props) => {
  return (
    <>
     <div className='advertisment'>
       <div className='offername'>
         <p>Sale 20% Off</p>
         <p>On Everything</p>
         <p >Shop Now</p>
       </div>
     </div>
     <div className='whyshopwithus'>
       <p>Why shop with us ?</p>
       <div className='allcards'>
 
       <div className='cards'>
         <img alt='' src='https://cdn-icons-png.flaticon.com/128/3063/3063822.png'/>
         <p>Fast Delivery</p>
         <span>variations of passages of Lorem Ipsum available</span>
       </div>
 
       <div className='cards'>
         <img alt='' src='https://cdn-icons-png.flaticon.com/128/679/679922.png'/>
         <p>Free Shiping</p>
         <span>variations of passages of Lorem Ipsum available</span>
       </div>
 
       <div className='cards'>
         <img alt='' src='https://cdn-icons-png.flaticon.com/128/610/610333.png'/>
         <p>Best Quality</p>
         <span>variations of passages of Lorem Ipsum available</span>
       </div>
 
       </div>
     </div>
     <div className='advertisment2'>
       <div className='offername2'>
         <p>#NewArrives</p>
         <p>#NewLook</p>
         <p>#NewCharm</p>
         <p disabled>Shop Now</p>
       </div>
     </div>
     <div className='ourproducts'>
     <p className='headourpro'><span>Our</span>&nbsp;<span>products</span></p>
    <div className='allcardsofproducts'>
    {products.map(i=>{
      return <ProductCard ids={i.id} name={i.name} price={i.price} pic={i.pic} adtocart={props.addtocartfunc}/>
    })}
    </div>
    
     
     </div>
     <div className='footer'>
      <p>Terms & Conditions</p>
      <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

</span>
<h4>© Copyright 2022 : By Shopsy</h4>
     </div>
     </>
   )
}

export default Home

