import React, { Component } from "react";
import classes from './BasicInfo.module.css'; 
import TextBox from '../UI/TextBox/TextBox';

class BasicInfo extends Component{

  state = {
    fullname: null, 
    bio: null, 
  }

  handleChange(event, boxType) {
    switch (boxType) {
      case "fullname":
        this.setState({ fullname: { value: event.target.value } });
        break;

      case "bio":
        this.setState({ bio: { value: event.target.value } });
        break;

      default:
        console.log("No textbox type passed");
        break;
    }
  }

  render(){
    return (
      <div className={classes.BasicInfo}>
        <TextBox
            textboxName='Full Name'
            inputType='text'
            changed={(event) => this.handleChange(event, "fullname")}
          />
          <TextBox
            textboxName='Bio'
            inputType='text'
            changed={(event) => this.handleChange(event, "bio")}
          />
      </div>
    );
  }
}

export default BasicInfo;