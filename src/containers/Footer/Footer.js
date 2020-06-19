import React, { Component } from "react";
import classes from './Footer.module.css'; 
import logo from '../../assets/logo.svg'; 


class Footer extends Component{
  render(){
    return (
      <div className={classes.footerContainer}>
        <div className={classes.leftCol}>
            <img src={logo} alt="" className={classes.logo} />
            <div class={classes.socialMedia}>
                <a><i className="fab fa-facebook-f"></i></a>
                <a ><i className="fab fa-twitter"></i></a>
                <a ><i className="fab fa-instagram"></i></a>
                <a ><i className="fab fa-youtube"></i></a>
                <a ><i className="fab fa-linkedin-in"></i></a>
            </div>
            <p className={classes.rightsText}>© 2020 Copyright By On-Card All Rights Reserved.</p>
        </div>

        <div className={classes.rightCol}>
            <h1>Room For Improvement</h1>
            <div className={classes.border}></div>
            <p>Let us know if any improvements can be done to serve you better
            </p>
            <form action="" className={classes.newsletterForm}>
                <input type="text" className={classes.txtb} placeholder="Thoughts ?"/>
                <input type="submit" className={classes.btn} value="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Footer;