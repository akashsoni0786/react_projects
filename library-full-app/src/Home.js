import React from 'react'
import './Home.css'
import Navbar from './Nav'
const Home = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <div className='carouselwithwelcome'>
        <div className='thought'>
        <p className='welcome'>“As the great Indian scholar Shantideva has said: ‘If there is a way to overcome the suffering, then there is no need to worry; if there is no way to overcome the suffering, then there is no use in worrying.”</p>
        </div>
        </div>
        
        <div className='blocklayerfirst'>
            <img className='addimg' alt='' src='p1.png'/>
            <div className='content'>
            <p className='headingcontent'>Online Reading facility</p>
            <p className='head_para_content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
            </div>
           
        </div>
        <div className='blocklayer'>
        <div className='content'>
            <p className='headingcontent'>Increase your knowledge</p>
            <p className='head_para_content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
            </div>
            <img className='addimg' alt='' src='p2.png'/>
            
           
        </div>
        <div className='blocklayer'>
            <img className='addimg' alt='' src='p3.png'/>
            <div className='content'>
            <p className='headingcontent'>Make your notes</p>
            <p className='head_para_content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
            </div>
           
        </div>
        <div className='blocklayer'>
        <div className='content'>
            <p className='headingcontent'>Invest in right way</p>
            <p className='head_para_content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
            </div>
            <img className='addimg' alt='' src='p4.png'/>
            
           
        </div>
        <div className='blocklayer'>
            <img className='addimg' alt='' src='p5.png'/>
            <div className='content'>
            <p className='headingcontent'>Logic your mind</p>
            <p className='head_para_content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
            </div>
           
        </div>
        <div className='blocklayer'>
        <div className='content'>
            <p className='headingcontent'>Increase success rate</p>
            <p className='head_para_content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
            </div>
            <img className='addimg' alt='' src='p6.png'/>
            
           
        </div>
        <div className='blocklayer'>
            <img className='addimg' alt='' src='p7.png'/>
            <div className='content'>
            <p className='headingcontent'>Go step by step</p>
            <p className='head_para_content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
            </div>
           
        </div>
    </div>
  )
}

export default Home