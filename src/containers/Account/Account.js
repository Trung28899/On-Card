import React, { Component } from "react";
import waveImg from "../../assets/wave.png";
import background from "../../assets/bg.svg";
import classes from "./Account.module.css";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import RetrieveAccount from "./RetrieveAccount/RetrieveAccount"; 


class Account extends Component {
  render() {
    return (
      <div className={classes.container}>
        <img className={classes.wave} src={waveImg} alt='image'></img>
        <div className={classes.img}>
          <img src={background} alt='img'></img>
        </div>
        <SignIn />
      </div>
    );
  }
}

export default Account;
