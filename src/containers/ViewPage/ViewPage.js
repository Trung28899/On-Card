import React, { Component } from "react";
import HeaderBox from '../../components/Boxes/HeaderBox/HeaderBox'; 
import classes from './ViewPage.module.css'; 
import LinkBox from '../../components/Boxes/LinkBox/LinkBox'; 
import Footer from '../Footer/Footer';

import waveImg from '../../assets/wave.png'; 

class MainPage extends Component{
  render(){
    return (
      <div className={classes.ViewPage}>
        <img className={classes.wave} src={waveImg} alt='wave'></img>
        <HeaderBox buttonShow={false}/>
        <LinkBox />
        <LinkBox />
        <LinkBox />
        <LinkBox />
        <Footer />
      </div>
    );
  }
}

export default MainPage;