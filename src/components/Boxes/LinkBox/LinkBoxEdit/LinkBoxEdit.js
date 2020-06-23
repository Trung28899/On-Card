import React, {Component} from 'react'; 
// import user from '../../../assets/header/user.svg'; 
// import classes from './HeaderBox.module.css'; 
import url from '../../../../assets/header/url.svg'; 
import classes from './LinkBoxEdit.module.css'; 
import BlackButtonEdit from '../../../UI/Button/BlackButton/BlackButtonEdit/BlackButtonEdit'; 

class LinkBoxEdit extends Component{
    render(){
        return(
            <div className={classes.LinkBoxEdit}>
                <img src={url} alt='url' />
                <h2>Facebook</h2>
                <div className={classes.buttonBar}>
                    <BlackButtonEdit iconClass="fas fa-arrow-up"/>
                    <BlackButtonEdit deleteButton={true} iconClass="fas fa-trash"/>
                    <BlackButtonEdit iconClass="fas fa-arrow-down"/>
                </div>
            </div>
        );
    }
}

export default LinkBoxEdit; 