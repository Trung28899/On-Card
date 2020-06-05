import React from "react";
import classes from "./HoverText.module.css";

const hoverText = (props) => {
  return (
    <a href='/' className={classes.a}>
      {props.innerText}
    </a>
  );
};

export default hoverText;
