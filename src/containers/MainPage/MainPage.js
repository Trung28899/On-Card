import React, { Component } from "react";
import HeaderBox from "../../components/Boxes/HeaderBox/HeaderBox";
import classes from "./MainPage.module.css";
import LinkBox from "../../components/Boxes/LinkBox/LinkBox";
import Footer from "../Footer/Footer";

import waveImg from "../../assets/wave.png";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actionTypes";
import { Redirect } from "react-router";

class MainPage extends Component {
  logoutHandler = () => {
    this.props.unauthenticateUser();
    this.props.history.replace("/login");
  };

  editProfileHandler = () => {
    this.props.history.replace("/profile/edit");
  };

  render() {
    const listItems = this.props.userInformation.socialMediaList.map(
      (value, index) => {
        return (
          <LinkBox
            iconType={value.icon}
            content={value.title}
            url={value.url}
          />
        );
      }
    );
    if (this.props.loggedIn) {
      return (
        <div className={classes.MainPage}>
          <img className={classes.wave} src={waveImg} alt="wave"></img>
          <HeaderBox
            buttonShow={true}
            editProfile={this.editProfileHandler}
            logOut={this.logoutHandler}
            avatar={this.props.userInformation.avatarImg}
            userFullName={this.props.userInformation.fullName}
            userBio={this.props.userInformation.bio}
          />
          {listItems}
          <Footer />
        </div>
      );
    } else {
      return <Redirect from="/profile" to="/login" />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.authenticated,
    userInformation: state.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // This is unused
    authenticateUser: () => dispatch({ type: actionTypes.AUTHENTICATE }),
    unauthenticateUser: () => dispatch({ type: actionTypes.UNAUTHENTICATE }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
