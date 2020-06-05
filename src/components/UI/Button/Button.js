import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    return <a className={this.props.styling}>{this.props.buttonText}</a>;
  }
}

export default Button;
