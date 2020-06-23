import React, {Component} from 'react';
import classes from './SocialMediaList.module.css';
import BlackButton from '../UI/Button/BlackButton/BlackButton'; 
import LinkBoxEdit from '../../components/Boxes/LinkBox/LinkBoxEdit/LinkBoxEdit'; 
import { Link } from 'react-router-dom';


class SocialMediaList extends Component{
    render(){
        return (
            <div className={classes.SocialMediaList}>
                <h3>Add New Links And Channel: </h3>
                <BlackButton content="ADD NEW" iconClass="fas fa-plus"/>
                <h3>Your Links and Channels: </h3>
                <LinkBoxEdit />
                <LinkBoxEdit />
                <LinkBoxEdit />
                <LinkBoxEdit />
                <BlackButton iconClass="fas fa-download" content="Update Changes" updateButton={true}/>
            </div>
        );
    }
}

export default SocialMediaList; 