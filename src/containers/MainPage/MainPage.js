import React, { Component } from "react";
import HeaderBox from "../../components/Boxes/HeaderBox/HeaderBox";
import classes from "./MainPage.module.css";
import LinkBox from "../../components/Boxes/LinkBox/LinkBox";
import Footer from "../Footer/Footer";

import waveImg from "../../assets/wave.png";

class MainPage extends Component {
  logoutHandler = () => {
    this.props.history.replace("/login");
  };

  editProfileHandler = () => {
    this.props.history.replace("/profile/edit");
  };

  render() {
    return (
      <div className={classes.MainPage}>
        <img className={classes.wave} src={waveImg} alt="wave"></img>
        <HeaderBox
          buttonShow={true}
          editProfile={this.editProfileHandler}
          logOut={this.logoutHandler}
        />
        <LinkBox iconType="facebook" content="Facebook" />
        <LinkBox iconType="twitter" content="Twitter" />
        <LinkBox iconType="tiktok" content="Tiktok" />
        <LinkBox iconType="instagram" content="Instagram" />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
