import React, { Component } from "react";
import classes from './BasicInfo.module.css'; 
import TextBox from '../UI/TextBox/TextBox';

class BasicInfo extends Component{
  render(){
    return (
      <div className={classes.BasicInfo}>
        <TextBox textboxName=' Full Name' inputType='text' />
        <TextBox textboxName='Bio' inputType='text' />
      </div>
    );
  }
}

export default BasicInfo;