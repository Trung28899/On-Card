import React, {Component} from 'react'; 
import classes from './UploadImage.module.css'; 
import logo from '../../../assets/logo.svg'

class UploadImage extends Component{

    showPreview = (event) => {
        console.log(event.target.files[0]); 
        /*
          if(event.target.files.length > 0){
          let src = URL.createObjectURL(event.target.files[0]);
          let preview = document.getElementById("file-ip-1-preview");
          preview.src = src;
          preview.style.display = "block";
        }
        */
    }

    render(){
        return (
            <div className={classes.center}>
                <div className={classes.formInput}>
                    <div className={classes.preview}>
                    <img src={logo} id="file-ip-1-preview"/>
                    </div>
                    <label htmlFor="file-ip-1"><i className="fas fa-edit"></i></label>
                    <input type="file" id="file-ip-1" accept="image/*" onChange={(event) => this.showPreview(event)}/>
                </div>
            </div>
        );
    }
}

export default UploadImage; 