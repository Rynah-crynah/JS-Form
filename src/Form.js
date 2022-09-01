import React from "react";
import "./Form.css";
import image from "./reg-pic.png";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Form = () => {
       return (

<div className="main-container">
<div className="Component">
  <nav className="nav">
    <ul>
      <li className="title"><h2>EddieShop</h2></li>
      <li className="account"> <p> Don't have an account? <span className="signup"> Sign up </span></p> </li>
    </ul>
  </nav>
  <div className="Component2">
<h2 className="header">Welcome Back</h2>
   <form className="form">
   <p className="input"> Your Email</p>
   <input type="email" className="forminputbox" name="username" id="user-email" placeholder="name@domain.com" />
   <p className="input"> Your Password</p>
  <input type="password" name="username" className="forminputbox" id="user-password" placeholder="at least 8 characters"/> <br/>
  <input type="checkbox" className="checkbox"/>
  <p className="login">Keep me logged in <span className="reset"> Forgot password? </span></p>
<button className="log-button">Login</button>
</form>
<p className="or">_________________<span>or</span> ________________</p>
<div className="icons">
           <div className="facebook">
           <FaFacebook />
           </div>
           <div className="google">
           <FaGoogle />
           </div>
           <div className="instagram">
           <FaInstagram />
           </div>
 </div>

</div>
<div className="img">
    <img src={image} alt={image}/>
</div>
  </div>
  </div>
);
};


export default Form;
