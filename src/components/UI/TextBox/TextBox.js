import React, { Component } from "react";
import classes from "./TextBox.module.css";

class TextBox extends Component {
  state = {
    divClasses: [classes.inputDiv],
    inputEntered: false,
    textHolderSet: false,
    inputValue: null,
    focused: false,
    error: false,
    textboxName: this.props.textboxName,
  };

  componentDidMount() {
    if (this.props.textHolder) {
      this.setState({
        divClasses: [classes.inputDiv, classes.focus],
        focused: true,
        textHolderSet: true,
      });
    }
  }

  addcl = () => {
    this.setState({
      divClasses: [classes.inputDiv, classes.focus],
      focused: true,
    });
  };

  remcl = () => {
    if (!this.state.inputEntered && !this.state.textHolderSet) {
      this.setState({
        divClasses: [classes.inputDiv],
        focused: false,
        textHolderSet: false,
        inputEntered: false,
      });
    }
  };

  render() {
    return (
      <div className={this.state.divClasses.join(" ")}>
        <div className={classes.i}>
          <i className={this.props.iconClasses}></i>
        </div>
        <div className={classes.div}>
          <h5>{this.state.textboxName}</h5>
          <input
            required
            type={this.props.inputType}
            placeholder={this.props.textHolder}
            className={classes.input}
            onFocus={this.addcl}
            onBlur={this.remcl}
            onChange={(event) => {
              this.props.changed(event);
              if (event.target.value.length > 0) {
                this.setState({
                  inputEntered: true,
                  inputValue: event.target.value,
                });
              } else if (
                this.state.inputEntered &&
                event.target.value.length === 0
              ) {
                this.setState({ inputEntered: false });
              }
            }}
          />
          {this.props.error !== null && !this.state.focused ? (
            <span className={classes.errorSpan}>{this.props.error}</span>
          ) : null}
          {this.props.error !== null &&
          this.props.error !== "*Field Required !" ? (
            <span className={classes.errorSpan}>{this.props.error}</span>
          ) : null}
        </div>
      </div>
    );
  }
}

export default TextBox;
