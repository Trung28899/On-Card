import React, { Component } from "react";
import classes from "./ModalRetrieve.module.css";

class ModalRetrieve extends Component {
  handleClick = () => {
    console.log("clicked");
  };

  render() {
    const cssClasses = [
      classes.Modal,
      this.props.show ? classes.ModalOpen : classes.ModalClosed,
    ];
    return (
      <div className={cssClasses.join(" ")}>
        <p className={classes.closeButton} onClick={this.props.closed}>
          x
        </p>
        <h3>
          {" "}
          {this.props.h3text} {this.props.email} <br />
          {this.props.h3text2}
        </h3>
        <button
          type="button"
          className={classes.Button}
          onClick={this.props.closed}
        >
          {this.props.buttonName}
        </button>
      </div>
    );
  }
}

export default ModalRetrieve;
