import React, { Component } from "react";
import classes from "./SignIn.module.css";
import avatar from "../../../assets/logo.svg";
import TextBox from "../../../components/UI/TextBox/TextBox";
import HoverText from "../../../components/UI/HoverText/HoverText";
import Button from "../../../components/UI/Button/Button";

class SignIn extends Component {
  render() {
    const h2Class = [classes.title];

    return (
      <div className={classes.loginContent}>
        <form>
          <img src={avatar} alt='image icon' />
          <h2 className={h2Class}>Sign In</h2>
          <TextBox
            iconClasses='fas fa-envelope'
            textboxName='Username or Email'
            inputType='text'
          />
          <TextBox
            iconClasses='fas fa-lock'
            textboxName='Password'
            inputType='password'
          />

          <HoverText innerText='Forgot Your Password ?' path='/retrieve' />
          <Button styling='btn1' buttonText='Sign In' />
          <Button styling='btn1 btnUp' buttonText='Sign Up Here' path='/' />
        </form>
      </div>
    );
  }
}

export default SignIn;
