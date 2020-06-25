import React, { Component } from "react";
import classes from "./SimpleTextBox.module.css";

class Modal extends Component {
  updateInput = (event) => {
    this.props.urlEntered(event.target.value);
  };

  render() {
    const cssClasses = [
      classes.Modal,
      this.props.show ? classes.ModalOpen : classes.ModalClosed,
    ];
    return (
      <input
        type="text"
        placeholder="Enter URL / Phone Number"
        className={classes.input}
        onChange={(event) => this.updateInput(event)}
      ></input>
    );
  }
}

export default Modal;
