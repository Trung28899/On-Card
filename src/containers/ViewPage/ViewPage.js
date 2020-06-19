import React, { Component } from "react";
import HeaderBox from '../../components/Boxes/HeaderBox/HeaderBox'; 
import classes from './ViewPage.module.css'; 
import LinkBox from '../../components/Boxes/LinkBox/LinkBox'; 
import FooterBasic from '../Footer/FooterBasic/FooterBasic';

class MainPage extends Component{
  render(){
    return (
      <div className={classes.ViewPage}>
        <HeaderBox buttonShow={false}/>
        <LinkBox />
        <LinkBox />
        <LinkBox />
        <LinkBox />
        <FooterBasic />
      </div>
    );
  }
}

export default MainPage;