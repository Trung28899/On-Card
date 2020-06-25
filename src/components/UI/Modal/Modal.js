  
import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Modal.module.css";
import DropDownList from '../DropDownList/DropDownList'; 
import SimpleTextBox from '../TextBox/SimpleTextBox/SimpleTextBox';

class Modal extends Component{

  handleClick = () => {
    const val = "passed data here from child Modal.js"; 
    this.props.clicked(val); 
  }

  render() {
    const cssClasses = [classes.Modal, this.props.show ? classes.ModalOpen : classes.ModalClosed];
    return (
      <div className={cssClasses.join(" ")}>
      <p className={classes.closeButton} onClick={this.props.closed}>x</p>
      <h3> {this.props.h3text} {this.props.email} <br/>{this.props.h3text2}</h3>
      <DropDownList />
      <SimpleTextBox />
      <button type="button" className={classes.Button} onClick={this.handleClick}>
        {this.props.buttonName}
      </button>
    </div>
    )
  }
}

export default Modal;