import React, {Component} from 'react'; 
// import user from '../../../assets/header/user.svg'; 
// import classes from './HeaderBox.module.css'; 
import url from '../../../assets/header/url.svg'; 
import classes from './LinkBox.module.css'; 

class LinkBox extends Component{
    render(){
        return(
            <div className={classes.LinkBox}>
                <img src={url} alt='url' />
                <h2>Facebook</h2>
            </div>
        );
    }
}

export default LinkBox; 