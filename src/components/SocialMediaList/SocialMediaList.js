import React, { Component } from "react";
import classes from "./SocialMediaList.module.css";
import BlackButton from "../UI/Button/BlackButton/BlackButton";
import LinkBoxEdit from "../../components/Boxes/LinkBox/LinkBoxEdit/LinkBoxEdit";
import Backdrop from "../UI/Backdrop/Backdrop";
import Modal from "../UI/Modal/Modal";
import ModalRetrieve from "../UI/Modal/ModalRetrieve/ModalRetrieve";

class SocialMediaList extends Component {
  state = {
    modalIsOpen: false,
    modalRetrieveIsOpen: false,
    email: "trung28899@gmail.com",
    socialMediaList: [],
  };

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
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false, modalRetrieveIsOpen: false });
  };

  btnUpClickedHandler = (index) => {
    if (index !== 0) {
      let socialMediaListCopied = this.state.socialMediaList;

      let nextValue = socialMediaListCopied[index];
      socialMediaListCopied[index] = socialMediaListCopied[index - 1];
      socialMediaListCopied[index - 1] = nextValue;

      this.setState({ socialMediaList: socialMediaListCopied });
    }
  };

  btnDownClickedHandler = (index) => {
    let socialMediaListCopied = this.state.socialMediaList;

    if (index < socialMediaListCopied.length - 1) {
      let prevValue = socialMediaListCopied[index];
      socialMediaListCopied[index] = socialMediaListCopied[index + 1];
      socialMediaListCopied[index + 1] = prevValue;

      this.setState({ socialMediaList: socialMediaListCopied });
    }
  };

  deleteClickedHandler = (index) => {
    let socialMediaListCopied = this.state.socialMediaList;
    socialMediaListCopied.splice(index, 1);
    this.setState({ socialMediaList: socialMediaListCopied });
  };

  addAccount = (accountType, url) => {
    let socialMediaListCopied = this.state.socialMediaList;
    let addedObject = null;
    addedObject = this.addObject(accountType, url);

    socialMediaListCopied.push(addedObject);

    this.setState({
      socialMediaList: socialMediaListCopied,
      modalIsOpen: false,
    });
  };

  addObject = (accountType, url) => {
    let addObject = null;
    switch (accountType) {
      case "Facebook":
        addObject = { title: accountType, icon: "facebook", url: url };
        break;
      case "Instagram":
        addObject = { title: accountType, icon: "instagram", url: url };
        break;
      case "Linkedin":
        addObject = { title: accountType, icon: "linkedin", url: url };
        break;
      case "Email":
        addObject = { title: accountType, icon: "mail", url: url };
        break;
      case "Phone Number":
        addObject = { title: accountType, icon: "phoneNumber", url: url };
        break;
      case "Snapchat":
        addObject = { title: accountType, icon: "snapchat", url: url };
        break;
      case "Soundcloud":
        addObject = { title: accountType, icon: "soundcloud", url: url };
        break;
      case "Tiktok":
        addObject = { title: accountType, icon: "tiktok", url: url };
        break;
      case "Twitter":
        addObject = { title: accountType, icon: "twitter", url: url };
        break;
      case "URL":
        addObject = { title: accountType, icon: "url", url: url };
        break;
      case "Youtube":
        addObject = { title: accountType, icon: "youtube", url: url };
        break;
      default:
        addObject = { title: accountType, icon: "url", url: url };
    }
    return addObject;
  };

  updateButtonHandler = () => {
    this.setState({ modalRetrieveIsOpen: true });
  };

  render() {
    const listItems = this.state.socialMediaList.map((value, index) => {
      return (
        <LinkBoxEdit
          key={index}
          content={value.title}
          iconType={value.icon}
          btnUpClicked={() => this.btnUpClickedHandler(index)}
          btnDownClicked={() => this.btnDownClickedHandler(index)}
          deleteClicked={() => this.deleteClickedHandler(index)}
        />
      );
    });

    // this.swap(values, 1, 3);
    // console.log(values);
    // // values.splice(index,1);
    // values.splice(2,1);
    // console.log(values);

    return (
      <div className={classes.SocialMediaList}>
        <h3>Add New Links And Channel: </h3>
        <BlackButton
          content="ADD NEW"
          iconClass="fas fa-plus"
          clicked={this.openModal}
        />
        <h3>Your Links and Channels: </h3>
        {listItems}
        <BlackButton
          iconClass="fas fa-download"
          content="Update Changes"
          updateButton={true}
          clicked={this.updateButtonHandler}
        />

        <Modal
          show={this.state.modalIsOpen}
          closed={this.closeModal}
          buttonName="Add Account"
          clicked={this.addAccount}
        />

        <ModalRetrieve
          show={this.state.modalRetrieveIsOpen}
          closed={this.closeModal}
          h3text="Your Profile Is Updated."
          buttonName="Got It !"
        />

        <Backdrop
          show={this.state.modalIsOpen || this.state.modalRetrieveIsOpen}
        />
      </div>
    );
  }
}

export default SocialMediaList;
