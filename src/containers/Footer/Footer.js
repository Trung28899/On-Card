import React, { Component } from "react";
import classes from './Footer.module.css'; 
import logo from '../../assets/logo.svg'; 


class Footer extends Component{
  render(){
    return (
      <div className={classes.footerContainer}>
        <div className={classes.leftCol}>
            <img src={logo} alt="" className={classes.logo} />
            <div className={classes.socialMedia}>
                <a><i className="fab fa-facebook-f"></i></a>
                <a ><i className="fab fa-twitter"></i></a>
                <a ><i className="fab fa-instagram"></i></a>
                <a ><i className="fab fa-youtube"></i></a>
                <a ><i className="fab fa-linkedin-in"></i></a>
            </div>
            <p className={classes.rightsText}>© 2020 Copyright By On-Card All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;