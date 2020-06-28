import React, { Component } from "react";
// import HeaderBox from '../../components/Boxes/HeaderBox/HeaderBox';
import classes from "./EditProfile.module.css";
// import LinkBox from '../../components/Boxes/LinkBox/LinkBox';
import Footer from "../Footer/Footer";
import waveImg from "../../assets/wave.png";
import HeaderBoxEdit from "../../components/Boxes/HeaderBox/HeaderBoxEdit/HeaderBoxEdit";
import BasicInfo from "../../components/BasicInfo/BasicInfo";
import SocialMediaList from "../../components/SocialMediaList/SocialMediaList";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actionTypes";
import { Redirect } from "react-router";

class EditProfile extends Component {
  viewPageHandler = () => {
    this.props.history.replace("/profile");
  };

  logoutHandler = () => {
    this.props.unauthenticateUser();
    this.props.history.replace("/login");
  };

  render() {
    //this.props.loggedIn
    if (this.props.loggedIn) {
      return (
        <div className={classes.EditProfile}>
          <img className={classes.wave} src={waveImg} alt="wave"></img>
          <HeaderBoxEdit
            viewPage={this.viewPageHandler}
            logOut={this.logoutHandler}
          />
          <BasicInfo />
          <SocialMediaList />
          <Footer />
        </div>
      );
    } else {
      return <Redirect from="/profile/edit" to="/login" />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.authenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // This is unused
    authenticateUser: () => dispatch({ type: actionTypes.AUTHENTICATE }),
    unauthenticateUser: () => dispatch({ type: actionTypes.UNAUTHENTICATE }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
