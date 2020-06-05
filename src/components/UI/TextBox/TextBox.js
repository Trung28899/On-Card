import React, { Component } from "react";
import classes from "./TextBox.module.css";

class TextBox extends Component {
  state = {
    divClasses: [classes.inputDiv],
    inputValue: null,
    inputEntered: false,
  };

  addcl = () => {
    this.setState({ divClasses: [classes.inputDiv, classes.focus] });
  };

  remcl = () => {
    if (!this.state.inputEntered) {
      this.setState({ divClasses: [classes.inputDiv] });
    }
  };

  render() {
    return (
      <div className={this.state.divClasses.join(" ")}>
        <div className={classes.i}>
          <i className={this.props.iconClasses}></i>
        </div>
        <div className={classes.div}>
          <h5>{this.props.textboxName}</h5>
          <input
            type={this.props.inputType}
            className={classes.input}
            onFocus={this.addcl}
            onBlur={this.remcl}
            onChange={(event) => {
              if (!this.state.inputEntered && event.target.value.length > 0) {
                this.setState({ inputEntered: true });
              } else if (
                this.state.inputEntered &&
                event.target.value.length == 0
              ) {
                this.setState({ inputEntered: false });
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default TextBox;
