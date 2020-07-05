import React, { Component } from "react";
import classes from "./SignIn.module.css";
import avatar from "../../../assets/logo.svg";
import TextBox from "../../../components/UI/TextBox/TextBox";
import HoverText from "../../../components/UI/HoverText/HoverText";
import Button from "../../../components/UI/Button/Button";
import firebase from "../../firebase/firebase";

import ModalRetrieve from "../../../components/UI/Modal/ModalRetrieve/ModalRetrieve";
import Backdrop from "../../../components/UI/Backdrop/Backdrop";

import { connect } from "react-redux";
import * as actionTypes from "../../../store/actionTypes";
import * as actionCreators from "../../../store/actionCreators";

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
    modalIsOpen: false,
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
    let userUrl = null;
    const urlString = document.location.href;
    const subString = urlString.substring(0, urlString.indexOf("/login"));
    if (this.state.buttonClicked) {
      try {
        await firebase.login(this.state.email.value, this.state.password.value);
        userUrl = this.exactString(this.state.email.value);
        await this.props.getInfoAfterLoggedIn(subString, userUrl);
        this.props.authenticateUser();
        this.props.history.push("/profile/" + userUrl);
      } catch (error) {
        alert(error.message);
      }
    }
  }

  exactString = (stringVal) => {
    let subString1 = stringVal.substring(0, stringVal.indexOf("."));
    let subString2 = stringVal.substring(
      stringVal.indexOf(".") + 1,
      stringVal.length
    );
    const exactedString = subString1 + subString2;

    return exactedString;
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
    this.setState({ buttonClicked: true });
  };

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

          <ModalRetrieve
            show={this.state.modalIsOpen}
            closed={this.closeModal}
          />
          <Backdrop show={this.state.modalIsOpen} />
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
    getInfoAfterLoggedIn: (currentPage, userKey) =>
      dispatch(actionCreators.pullInfo(currentPage, userKey)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
