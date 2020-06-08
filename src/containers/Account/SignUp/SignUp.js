import React, { Component } from "react";
import classes from "./SignUp.module.css";
import avatar from "../../../assets/logo.svg";
import TextBox from "../../../components/UI/TextBox/TextBox";
import HoverText from "../../../components/UI/HoverText/HoverText";
import Button from "../../../components/UI/Button/Button";
import firebase from "../../firebase/firebase";

class SignUp extends Component {
  state = {
    email: {
      value: null,
    },
    serialNo: {
      value: null,
    },
    userName: {
      value: null,
    },
    password: {
      value: null,
    },
    passwordConfirm: {
      value: null,
    },
    validation: {
      errorEmail: null,
      errorSerialNo: null,
      errorUserName: null,
      errorPassword: null,
      errorPasswordConfirm: null,
    },
    error: false,
  };

  handleChange = (event, boxType) => {
    switch (boxType) {
      case "email":
        this.setState({ email: { value: event.target.value } });
        break;
      case "serialNo":
        this.setState({ serialNo: { value: event.target.value } });
        break;
      case "userName":
        this.setState({ userName: { value: event.target.value } });
        break;
      case "password":
        this.setState({ password: { value: event.target.value } });
        break;
      case "passwordConfirm":
        this.setState({ passwordConfirm: { value: event.target.value } });
        break;
      default:
        console.log("No textbox type passed");
        break;
    }
  };

  formValidation() {
    let errorEmail = null,
      errorSerialNo = null,
      errorUserName = null,
      errorPassword = null,
      errorPasswordConfirm = null;

    // email validation:
    if (this.state.email.value === null || this.state.email.value === "") {
      errorEmail = "*Field Required !";
    } else {
      const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (reg.test(this.state.email.value) === false) {
        errorEmail = "*Invalid email!";
      }
    }

    // serial no validation:
    if (
      this.state.serialNo.value === null ||
      this.state.serialNo.value === ""
    ) {
      errorSerialNo = "*Field Required !";
    }

    // serial no validation:
    if (
      this.state.userName.value === null ||
      this.state.userName.value === ""
    ) {
      errorUserName = "*Field Required !";
    }

    // serial no validation:
    if (
      this.state.password.value === null ||
      this.state.password.value === ""
    ) {
      errorPassword = "*Field Required !";
    }

    // serial no validation:
    if (this.state.password.value !== this.state.passwordConfirm.value) {
      errorPasswordConfirm = "*Password Not Matching";
    } else if (
      this.state.passwordConfirm.value === null ||
      this.state.passwordConfirm.value === ""
    ) {
      errorPasswordConfirm = "*Field Required !";
    }

    // Updating states to store errors
    // There is a lag in setState so have to use the
    // 2nd argument function to execute the next code
    this.setState(
      {
        validation: {
          errorEmail: errorEmail,
          errorUserName: errorUserName,
          errorSerialNo: errorSerialNo,
          errorPassword: errorPassword,
          errorPasswordConfirm: errorPasswordConfirm,
        },
      },
      () => {
        // console.log(this.state.validation);
        if (
          this.state.validation.errorEmail ||
          this.state.validation.errorUserName ||
          this.state.validation.errorSerialNo ||
          this.state.validation.errorPassword ||
          this.state.validation.errorPassword ||
          this.state.validation.errorPasswordConfirm
        ) {
          this.setState({ error: true });
        } else {
          this.registerUser();
        }
      }
    );
  }

  registerClicked = () => {
    this.formValidation();
  };

  // register(userName, email, password, serialNo)

  async registerUser() {
    try {
      await firebase.register(
        this.state.userName.value,
        this.state.email.value,
        this.state.password.value,
        this.state.serialNo.value
      );
      await firebase.addUser(
        this.state.userName.value,
        this.state.email.value,
        this.state.password.value,
        this.state.serialNo.value
      );
      this.props.history.replace("/profile/");
    } catch (error) {
      alert(error.message);
    }
  }

  onSubmitHandler = () => {
    console.log("Submitted dawg !!");
  };

  render() {
    const h2Class = [classes.title, classes.titleUp];

    return (
      <div className={classes.loginContent}>
        <form onSubmit={this.onSubmitHandler}>
          <img src={avatar} alt='avatar' />
          <h2 className={h2Class}>Create Your Profile</h2>
          <TextBox
            error={this.state.validation.errorEmail}
            iconClasses='fas fa-envelope'
            textboxName='Email'
            inputType='email'
            changed={(event) => this.handleChange(event, "email")}
          />
          <TextBox
            error={this.state.validation.errorSerialNo}
            iconClasses='fas fa-qrcode'
            textboxName='On-Card Serial Number'
            inputType='text'
            changed={(event) => this.handleChange(event, "serialNo")}
          />
          <TextBox
            error={this.state.validation.errorUserName}
            iconClasses='fas fa-user'
            textboxName='Username (visible on Profile)'
            inputType='text'
            changed={(event) => this.handleChange(event, "userName")}
          />
          <TextBox
            error={this.state.validation.errorPassword}
            iconClasses='fas fa-lock'
            textboxName='Password'
            inputType='password'
            changed={(event) => this.handleChange(event, "password")}
          />
          <TextBox
            error={this.state.validation.errorPasswordConfirm}
            iconClasses='fas fa-lock'
            textboxName='Confirm Your Password'
            inputType='password'
            changed={(event) => this.handleChange(event, "passwordConfirm")}
          />
          <HoverText innerText='Return to Login.' path='/login' />
          <Button
            styling='btn1 btnUp'
            buttonText='Create Your Profile'
            clicked={this.registerClicked}
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
