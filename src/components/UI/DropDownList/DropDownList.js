import React, { Component } from "react";

import classes from "./DropDownList.module.css";

class DropDownList extends Component {
  state = {
    dropDownClicked: false,
    selected: "Select Account",
    optionChosen: false,
  };

  selectClicked = () => {
    this.setState({
      dropDownClicked: !this.state.dropDownClicked,
      optionChosen: false,
    });
  };

  optionClickHandler = (objectValue) => {
    this.props.optionChosen(objectValue.content);
    this.setState({
      selected: objectValue.content,
      optionChosen: true,
      dropDownClicked: false,
    });
  };

  render() {
    const optionsContainerClasses = [classes.optionsContainer];
    if (this.state.dropDownClicked) {
      optionsContainerClasses.push(classes.active);
    }
    if (this.state.optionChosen && optionsContainerClasses.length === 2) {
      optionsContainerClasses.pop();
    }

    const itemList = [
      { content: "Facebook", key: "facebook" },
      { content: "Instagram", key: "instagram" },
      { content: "Linkedin", key: "linkedin" },
      { content: "Email", key: "mail" },
      { content: "Phone Number", key: "phoneNumber" },
      { content: "Snapchat", key: "snapchat" },
      { content: "Soundcloud", key: "soundcloud" },
      { content: "Tiktok", key: "tiktok" },
      { content: "Twitter", key: "twitter" },
      { content: "URL", key: "url" },
      { content: "Youtube", key: "youtube" },
    ];

    const list = itemList.map((objectValue, index) => {
      return (
        <div
          className={classes.option}
          key={objectValue.key}
          onClick={() => this.optionClickHandler(objectValue)}
        >
          <input
            type="radio"
            className={classes.radio}
            id={objectValue.key}
            name="category"
          />
          <label htmlFor={objectValue.key}>{objectValue.content}</label>
        </div>
      );
    });
    return (
      <div className={classes.container}>
        <h2>Select Account</h2>
        <div className={classes.selectBox}>
          <div className={optionsContainerClasses.join(" ")}>{list}</div>

          <div className={classes.selected} onClick={this.selectClicked}>
            {this.state.selected}
          </div>
        </div>
      </div>
    );
  }
}

export default DropDownList;
