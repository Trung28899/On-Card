import React from "react";
import classes from "./SimpleTextBox.module.css";

const modal = (props) => {
  const cssClasses = [classes.Modal, props.show ? classes.ModalOpen : classes.ModalClosed];

  return (
    <input type="text" placeholder="Enter URL / Phone Number"
        className={classes.input}></input>
  );
};

export default modal;