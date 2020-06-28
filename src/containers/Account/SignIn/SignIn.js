import React, { Component } from "react";
import classes from "./SignIn.module.css";
import avatar from "../../../assets/logo.svg";
import TextBox from "../../../components/UI/TextBox/TextBox";
import HoverText from "../../../components/UI/HoverText/HoverText";
import Button from "../../../components/UI/Button/Button";
import firebase from "../../firebase/firebase";

import { connect } from "react-redux";
import * as actionTypes from "../../../store/actionTypes";

class SignIn extends Component {
  state = {
    email: {
      value: null,
    },
    password: {
      value: null,
    },
    buttonClicked: false,
    validation: {
      errorEmail: null,
      errorPassword: null,
    },
    error: false,
  };

  handleChange(event, boxType) {
    switch (boxType) {
      case "email":
        this.setState({ email: { value: event.target.value } });
        break;

      case "password":
        this.setState({ password: { value: event.target.value } });
        break;

      default:
        console.log("No textbox type passed");
        break;
    }
  }

  // buttonClickedHandler > formValidation > login
  buttonClickedHandler = () => {
    // Have to do this due to setState taking a while to load
    this.setState({ buttonClicked: true }, () => {
      this.formValidation();
    });
  };

  formValidation = () => {
    let errorEmail = null,
      errorPassword = null;

    if (this.state.email.value === null || this.state.email.value === "") {
      errorEmail = "*Field Required !";
    }

    if (
      this.state.password.value === null ||
      this.state.password.value === ""
    ) {
      errorPassword = "*Field Required !";
    }

    this.setState(
      {
        validation: {
          errorEmail: errorEmail,
          errorPassword: errorPassword,
        },
      },
      () => {
        if (
          this.state.validation.errorEmail ||
          this.state.validation.errorPassword
        ) {
          this.setState({ error: true });
        } else {
          this.login();
        }
      }
    );
  };

  async login() {
    if (this.state.buttonClicked) {
      try {
        await firebase.login(this.state.email.value, this.state.password.value);
        this.props.authenticateUser();
        this.props.history.push("/profile");
      } catch (error) {
        alert(error.message);
      }
    }
  }

  render() {
    const h2Class = [classes.title];

    return (
      <div className={classes.loginContent}>
        <form>
          <img src={avatar} alt="avatar" />
          <h2 className={h2Class}>Sign In</h2>
          <TextBox
            error={this.state.validation.errorEmail}
            iconClasses="fas fa-envelope"
            textboxName=" Email"
            inputType="text"
            changed={(event) => this.handleChange(event, "email")}
          />
          <TextBox
            error={this.state.validation.errorPassword}
            iconClasses="fas fa-lock"
            textboxName="Password"
            inputType="password"
            changed={(event) => this.handleChange(event, "password")}
          />

          <HoverText innerText="Forgot Your Password ?" path="/retrieve" />
          <Button
            styling="btn1"
            buttonText="Sign In"
            clicked={this.buttonClickedHandler}
          />
          <Button styling="btn1 btnUp" buttonText="Sign Up Here" path="/" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // This is unused
    loggedIn: state.authenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: () => dispatch({ type: actionTypes.AUTHENTICATE }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
