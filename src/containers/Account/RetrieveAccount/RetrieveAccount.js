import React, { Component } from "react";
import classes from "./RetrieveAccount.module.css";
import avatar from "../../../assets/logo.svg";
import TextBox from "../../../components/UI/TextBox/TextBox";
import Button from "../../../components/UI/Button/Button";
import firebase from "../../firebase/firebase";

class SignIn extends Component {
  state = {
    email: null,
    buttonClicked: false,
  };

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };

  retrieveButtonHandler = () => {
    this.setState({ buttonClicked: true }, () => {
      this.retrieveAccount();
    });
  };

  // See documentation:
  // https://firebase.google.com/docs/auth/web/manage-users
  retrieveAccount = () => {
    firebase.auth
      .sendPasswordResetEmail(this.state.email)
      .then(() => {
        console.log("email sent");
      })
      .catch(function (error) {
        alert(error);
      });
  };

  render() {
    const h2Class = [classes.title];

    return (
      <div className={classes.loginContent}>
        <form>
          <img src={avatar} alt='avatar' />
          <h2 className={h2Class}>Forgot Your Password ?</h2>
          <h3 className={classes.subText}>
            Enter your email, we'll send you an email shortly about your account
            information
          </h3>
          <TextBox
            iconClasses='fas fa-envelope'
            textboxName='Enter Your Email'
            inputType='text'
            changed={(event) => this.handleChange(event)}
          />

          <Button
            styling='btn1 btnUp'
            buttonText='Retrieve Account'
            clicked={this.retrieveButtonHandler}
          />
          <Button styling='btn1' buttonText='Return to Login' path='/login' />
        </form>
      </div>
    );
  }
}

export default SignIn;
