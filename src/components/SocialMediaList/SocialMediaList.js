import React, {Component} from 'react';
import classes from './SocialMediaList.module.css';
import BlackButton from '../UI/Button/BlackButton/BlackButton'; 
import LinkBoxEdit from '../../components/Boxes/LinkBox/LinkBoxEdit/LinkBoxEdit'; 
import { Link } from 'react-router-dom';
import Backdrop from '../UI/Backdrop/Backdrop'; 
import Modal from '../UI/Modal/Modal'; 


class SocialMediaList extends Component{

    state = {
        modalIsOpen: false, 
        email: "trung28899@gmail.com", 
        socialMediaList: [
            {title: 'Facebook', icon: 'facebook'},
            {title: 'Instagram', icon: 'instagram'},
            {title: 'Linkedin', icon: 'linkedin'},
            {title: 'Email', icon: 'mail'},
            {title: 'Phone Number', icon: 'phoneNumber'},
            {title: 'Snapchat', icon: 'snapchat'},
            {title: 'Soundcloud', icon: 'soundcloud'},
            {title: 'Tiktok', icon: 'tiktok'},
            {title: 'Twitter', icon: 'twitter'},
            {title: 'URL', icon: 'url'},
            {title: 'Youtube', icon: 'youtube'},
        ]
    }


    /*
        example socialMediaList: 
        socialMediaList: [
            {title: 'Facebook', icon: 'facebook', link: ''},
            {title: 'Instagram', icon: 'instagram', link: ''},
            {title: 'Linkedin', icon: 'linkedin', link: ''},
            {title: 'Email', icon: 'mail', link: ''},
            {title: 'Phone Number', icon: 'phoneNumber', link: ''},
            {title: 'Snapchat', icon: 'snapchat', link: ''},
            {title: 'Soundcloud', icon: 'soundcloud', link: ''},
            {title: 'Tiktok', icon: 'tiktok', link: ''},
            {title: 'Twitter', icon: 'twitter', link: ''},
            {title: 'URL', icon: 'url', link: ''},
            {title: 'Youtube', icon: 'youtube', link: ''},
        ]
    */

    openModal = () => {
        this.setState({ modalIsOpen: true});
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false});
    };

    btnUpClickedHandler = (index) => {
        if(index !== 0){
            let socialMediaListCopied = this.state.socialMediaList; 
        
            let nextValue = socialMediaListCopied[index]; 
            socialMediaListCopied[index] = socialMediaListCopied[index-1];
            socialMediaListCopied[index-1] = nextValue; 
            
            this.setState({socialMediaList: socialMediaListCopied}); 
        }
    }

    btnDownClickedHandler = (index) => {
        let socialMediaListCopied = this.state.socialMediaList; 
        
        if(index < socialMediaListCopied.length -1){
            let prevValue = socialMediaListCopied[index]; 
            socialMediaListCopied[index] = socialMediaListCopied[index+1];
            socialMediaListCopied[index+1] = prevValue; 
            
            this.setState({socialMediaList: socialMediaListCopied}); 
        }
    }

    deleteClickedHandler = (index) => {
        let socialMediaListCopied = this.state.socialMediaList; 
        socialMediaListCopied.splice(index,1); 
        this.setState({socialMediaList: socialMediaListCopied});
    }

    addAccount = (dataFromChild) => {
        console.log('add account clicked'); 
        console.log(dataFromChild); 
    }
    
    render(){

        const listItems = this.state.socialMediaList.map((value, index) => {
            return <LinkBoxEdit key={index} content={value.title} 
            iconType={value.icon} 
            btnUpClicked={() => this.btnUpClickedHandler(index)}
            btnDownClicked={() => this.btnDownClickedHandler(index)}
            deleteClicked={() => this.deleteClickedHandler(index)}/>
        });

        // this.swap(values, 1, 3); 
        // console.log(values); 
        // // values.splice(index,1);
        // values.splice(2,1);
        // console.log(values);
        
        return (
            <div className={classes.SocialMediaList}>
                <h3>Add New Links And Channel: </h3>
                <BlackButton content="ADD NEW" iconClass="fas fa-plus" clicked={this.openModal}/>
                <h3>Your Links and Channels: </h3>
                {listItems}
                <BlackButton iconClass="fas fa-download" content="Update Changes" updateButton={true} />

                <Modal show={this.state.modalIsOpen} closed={this.closeModal}  
                     buttonName="Add Account" clicked={this.addAccount}/>
                <Backdrop show={this.state.modalIsOpen} />
            </div>
        );
    }
}

export default SocialMediaList; 