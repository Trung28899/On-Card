import React, { Component } from "react";
import classes from "./RetrieveAccount.module.css";
import avatar from "../../../assets/logo.svg";
import TextBox from "../../../components/UI/TextBox/TextBox";
import HoverText from "../../../components/UI/HoverText/HoverText";
import Button from "../../../components/UI/Button/Button";

class SignIn extends Component{
    render(){
        const h2Class = [classes.title];

        return(
            
        <div className={classes.loginContent}>
        <form>
          <img src={avatar} alt='image icon' />
          <h2 className={h2Class}>Forgot Your Password ?</h2>
          <h3 className={classes.subText}>Enter your email, we'll send you an email shortly about your account information</h3>
          <TextBox
            iconClasses='fas fa-envelope'
            textboxName='Enter Your Email'
            inputType='text'
          />

          <Button styling='btn1 btnUp' buttonText='Retrieve Account' />
          <Button styling='btn1' buttonText='Return to Login' />
        </form>
      </div>
        );
    }
}

export default SignIn; 