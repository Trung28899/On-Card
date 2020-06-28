import React, { Component } from "react";
import classes from "./BasicInfo.module.css";
import TextBox from "../UI/TextBox/TextBox";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actionTypes";

class BasicInfo extends Component {
  state = {
    fullname: this.props.userName,
    bio: this.props.bioVal,
  };

  handleChange(event, boxType) {
    switch (boxType) {
      case "fullname":
        this.setState({ fullname: event.target.value }, () => {
          this.props.updateFullNameBio(this.state.fullname, this.state.bio);
        });
        break;

      case "bio":
        this.setState({ bio: event.target.value }, () => {
          this.props.updateFullNameBio(this.state.fullname, this.state.bio);
        });
        break;

      default:
        console.log("No textbox type passed");
        break;
    }
  }

  handleClick = (fullName, bio) => {
    this.props.updateFullNameBio(fullName, bio);
  };

  render() {
    return (
      <div className={classes.BasicInfo}>
        <TextBox
          textboxName="Full Name"
          inputType="text"
          changed={(event) => this.handleChange(event, "fullname")}
          textHolder={this.props.userName}
        />
        <TextBox
          textboxName="Bio"
          inputType="text"
          changed={(event) => this.handleChange(event, "bio")}
          textHolder={this.props.bioVal}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.userInfo.fullName,
    bioVal: state.userInfo.bio,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFullNameBio: (fullName, bio) =>
      dispatch({
        type: actionTypes.UPDATEFULLNAMEANDBIO,
        valFullName: fullName,
        valBio: bio,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfo);
