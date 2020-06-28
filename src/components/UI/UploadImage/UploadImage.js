import React, { Component } from "react";
import classes from "./UploadImage.module.css";
import logo from "../../../assets/logo.svg";

import { connect } from "react-redux";
import * as actionTypes from "../../../store/actionTypes";

class UploadImage extends Component {
  state = {
    imageLoaded: false,
    imgSrc: this.props.avatar,
  };

  showPreview = (event) => {
    try {
      let src = URL.createObjectURL(event.target.files[0]);
      this.setState({ imageLoaded: true, imgSrc: src }, () =>
        this.props.updateImage(this.state.imgSrc)
      );
    } catch (error) {
      // console.log(error);
      console.log("Need to choose an image");
    }
  };

  render() {
    return (
      <div className={classes.center}>
        <div className={classes.formInput}>
          <div className={classes.preview}>
            <img src={this.state.imgSrc} id="file-ip-1-preview" />
          </div>
          <label htmlFor="file-ip-1">
            <i className="fas fa-edit"></i>
          </label>
          <input
            type="file"
            id="file-ip-1"
            accept="image/*"
            onChange={(event) => this.showPreview(event)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // This is unused
    loggedIn: state.authenticated,
    avatar: state.userInfo.avatarImg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // This is unused
    authenticateUser: () => dispatch({ type: actionTypes.AUTHENTICATE }),
    unauthenticateUser: () => dispatch({ type: actionTypes.UNAUTHENTICATE }),
    updateImage: (imagePassed) =>
      dispatch({ type: actionTypes.IMAGEUPDATE, imageLoaded: imagePassed }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);
