  
import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

const modal = (props) => {
  const cssClasses = ["Modal", props.show ? "ModalOpen" : "ModalClosed"];

  return (
    <div className={cssClasses.join(" ")}>
      <h3>An email has been sent to {props.email} <br/> Please Check Your Email !</h3>
        <button type="button" className="Button" onClick={props.closed}>
            Dismiss
        </button>
    </div>
  );
};

export default modal;