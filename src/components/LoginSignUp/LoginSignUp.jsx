import React, { useState } from 'react'
import './LoginSignUp.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'



export default function LoginSignUp() {
  
    const[action,setAction]= useState("Sign Up");

  
  
  
  
  
  
    return (
    <div className='container'>
        <div className="header">
            <div className="text"> {action}</div>
               
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Log In" ? <div></div> : <div className="input">
                <img  className="img" src={user_icon} alt="" />
                <input type="text" placeholder='Name' />
            </div>}
           
            <div className="input">
                <img   className="img" src={email_icon} alt="" />
                <input type="email"  placeholder='Email Id'/>
            </div>
            <div className="input">
                <img  className="img" src={password_icon} alt="" />
                <input type="password" placeholder='password' />
            </div>
        </div>
        <div className="forgot-password">Lost Password <span>click here</span></div>
        <div className="submit-container">
            <div className={action==="Log In"?"Submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"Submit gray":"submit"} onClick={()=>{setAction("Log In")}} > Log in</div>
        </div>
    </div>
  )
}
