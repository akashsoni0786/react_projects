import { Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./App.css";
import { contxtname } from './Contxt';
const Login = () => {
    const contxtobj = React.useContext(contxtname);
    const navigate = useNavigate();
    const [mail,setMail] = useState();
    const [pass,setPass] = useState();
    const noaccount=()=>{
        alert("Mail: user@mail.com and password: 1234");
    }
    const login=()=>{
        if(mail==="user@mail.com" && pass == 1234){
            contxtobj.setLogin("user@mail.com");
            navigate('/');
        }
        else
        {
            alert("Mail: user@mail.com and password: 1234");
        }
    }
  return (
    <div className='loginbox' style={{color:contxtobj.txts,backgroundColor:contxtobj.bgs}}>
        <div className="logindiv"  style={{color:contxtobj.txts,backgroundColor:contxtobj.bgsboxs}}>
            <p className='loginhead' style={{color:contxtobj.txts}}><b>Login</b></p>
            <input onChange={(e)=>{setMail(e.target.value)}} className='inpfield' placeholder='Enter mail id'/>
            <input type="password" onChange={(e)=>{setPass(e.target.value)}} className='inpfield' placeholder='Enter password'/>
            <div onClick={login} className='loginbtn'>Login</div>
            <p onClick={noaccount} style={{color:contxtobj.txts}} className='noaccount'><u>No account ? Signup</u></p>
        </div>
    </div>
    
  )
}

export default Login