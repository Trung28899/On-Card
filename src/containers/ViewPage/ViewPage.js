import React, { Component } from "react";
import HeaderBox from "../../components/Boxes/HeaderBox/HeaderBox";
import classes from "./ViewPage.module.css";
import LinkBox from "../../components/Boxes/LinkBox/LinkBox";
import Footer from "../Footer/Footer";

import waveImg from "../../assets/wave.png";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actionTypes";

class MainPage extends Component {
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
    return (
      <div className={classes.ViewPage}>
        <img className={classes.wave} src={waveImg} alt="wave"></img>
        <HeaderBox
          buttonShow={false}
          avatar={this.props.userInformation.avatarImg}
          userFullName={this.props.userInformation.fullName}
          userBio={this.props.userInformation.bio}
        />
        {listItems}
        <Footer />
      </div>
    );
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
