import React, {Component} from 'react'; 
import logo from '../../../../assets/logo.svg'; 
import classes from './HeaderBoxEdit.module.css'; 

import logout from '../../../../assets/header/logout.svg';
import view from '../../../../assets/header/view1.svg';
import UploadImage from '../../../UI/UploadImage/UploadImage'; 

class HeaderBoxEdit extends Component{
    render(){
        const buttonClasses = [classes.btn, classes.btnDark]; 
        return(
            <div className={classes.HeaderBoxEdit}>
                <UploadImage />
                <h2>Edit your Profile</h2>
                <div className={classes.ButtonBar}>
                    <a><img src={view} alt='edit' className={classes.ButtonBarImg}/>View Page</a>
                        <span>|</span>
                    <a><img src={logout} alt='logout' className={classes.ButtonBarImg}/>Logout</a>
                </div>
                <div className={classes.PageBar}>
                    <h4>Your On-Card Page: </h4>
                    <p>localhost:3000/profile</p>
                    <button className={buttonClasses}> <i className="fas fa-copy"></i> Copy</button>
                </div>
            </div>
        );
    }
}

export default HeaderBoxEdit; 