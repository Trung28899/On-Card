import React, { Component } from "react";
// import HeaderBox from '../../components/Boxes/HeaderBox/HeaderBox'; 
import classes from './EditProfile.module.css'; 
// import LinkBox from '../../components/Boxes/LinkBox/LinkBox'; 
import Footer from '../Footer/Footer'; 
import waveImg from '../../assets/wave.png'; 
import HeaderBoxEdit from '../../components/Boxes/HeaderBox/HeaderBoxEdit/HeaderBoxEdit'; 
import BasicInfo from '../../components/BasicInfo/BasicInfo'; 
import SocialMediaList from '../../components/SocialMediaList/SocialMediaList'; 

class EditProfile extends Component{
  render(){
    return (
      <div className={classes.EditProfile}>
        <img className={classes.wave} src={waveImg} alt='wave'></img>
        <HeaderBoxEdit />
        <BasicInfo />
        <SocialMediaList />
        <Footer />
      </div>
    );
  }
}

export default EditProfile;
