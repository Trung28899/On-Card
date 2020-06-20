import React, { Component } from "react";
import HeaderBox from '../../components/Boxes/HeaderBox/HeaderBox'; 
import classes from './MainPage.module.css'; 
import LinkBox from '../../components/Boxes/LinkBox/LinkBox'; 
import Footer from '../Footer/Footer';

import waveImg from '../../assets/wave.png'; 

class MainPage extends Component{
  render(){
    return (
      <div className={classes.MainPage}>
        <img className={classes.wave} src={waveImg} alt='wave'></img>
        <HeaderBox buttonShow={true}/>
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
