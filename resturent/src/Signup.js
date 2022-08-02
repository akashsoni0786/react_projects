import React from 'react'
import "./Login.css"
const Signup = () => {
  return (
    <div>
       

        <div className="imgcontainer">
            <img alt='' src="logo.png" className=""/>
        </div>
 
        <div className="container">
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />
 
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <label><b>Confirm Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
 
            <button type="submit">Signup</button>
        </div>
 
        <div className="container" style={{backgrounColor:"#f78e21"}}>
          Alreardy account?<button type="button" className="cancelbtn">Login</button>
        </div>

    </div>
  )
}

export default Signup