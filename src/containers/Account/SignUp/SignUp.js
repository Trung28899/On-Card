import React, { Component } from "react";
import classes from "./SignUp.module.css";
import avatar from "../../../assets/logo.svg";
import TextBox from "../../../components/UI/TextBox/TextBox";
import HoverText from "../../../components/UI/HoverText/HoverText";
import Button from "../../../components/UI/Button/Button";

class SignUp extends Component {
  render() {
    const h2Class = [classes.title, classes.titleUp];
    return (
      <div className={classes.loginContent}>
        <form>
          <img src={avatar} alt='image icon' />
          <h2 className={h2Class}>Create Your Profile</h2>
          <TextBox
            iconClasses='fas fa-envelope'
            textboxName='Email'
            inputType='text'
          />
          <TextBox
            iconClasses='fas fa-qrcode'
            textboxName='On-Card Serial Number'
            inputType='text'
          />
          <TextBox
            iconClasses='fas fa-user'
            textboxName='Username (visible on Profile)'
            inputType='text'
          />
          <TextBox
            iconClasses='fas fa-lock'
            textboxName='Password'
            inputType='password'
          />
          <TextBox
            iconClasses='fas fa-lock'
            textboxName='Confirm Your Password'
            inputType='password'
          />
          <HoverText innerText='Return to Login.' path='/login' />
          <Button styling='btn1 btnUp' buttonText='Create Your Profile' />
        </form>
      </div>
    );
  }
}

export default SignUp;
