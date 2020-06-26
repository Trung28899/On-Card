import React, { Component } from "react";
import logo from "../../../../assets/logo.svg";
import classes from "./HeaderBoxEdit.module.css";

import logout from "../../../../assets/header/logout.svg";
import view from "../../../../assets/header/view1.svg";
import UploadImage from "../../../UI/UploadImage/UploadImage";

class HeaderBoxEdit extends Component {
  // reference: https://techoverflow.net/2018/03/30/copying-strings-to-the-clipboard-using-pure-javascript/
  copyToClipboard = (event) => {
    let stringCopied = document.createElement("textarea");
    // Getting the content in <p>
    const linkName = document.getElementsByClassName("link")[0].innerHTML;

    stringCopied.value = linkName;
    stringCopied.setAttribute("readonly", "");
    stringCopied.style = {
      position: "absolute",
      left: "-9999px",
      display: "none",
    };

    document.body.appendChild(stringCopied);
    stringCopied.select();
    document.execCommand("copy");

    document.body.removeChild(stringCopied);
  };

  render() {
    const buttonClasses = [classes.btn, classes.btnDark];
    return (
      <div className={classes.HeaderBoxEdit}>
        <UploadImage />
        <h2>Edit your Profile</h2>
        <div className={classes.ButtonBar}>
          <a onClick={this.props.viewPage}>
            <img src={view} alt="edit" className={classes.ButtonBarImg} />
            View Page
          </a>
          <span>|</span>
          <a onClick={this.props.logOut}>
            <img src={logout} alt="logout" className={classes.ButtonBarImg} />
            Logout
          </a>
        </div>
        <div className={classes.PageBar}>
          <h4>Your On-Card Page: </h4>
          <p className="link">localhost:3000/profile</p>
          <button
            className={buttonClasses}
            onClick={(event) => this.copyToClipboard(event)}
          >
            {" "}
            <i className="fas fa-copy"></i> Copy
          </button>
        </div>
      </div>
    );
  }
}

export default HeaderBoxEdit;
