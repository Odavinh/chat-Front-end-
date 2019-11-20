import React from "react";
import propTypes from "prop-types";

import "./dialogInformation.css";

const DialogInformation = props => {
  return (
    <div className="dialog-information">
      <h2>{props.name}</h2>
      <p>{props.lastOnline ? "last seen: " + props.lastOnline : "online"}</p>
    </div>
  );
};

DialogInformation.prototype = {
  name: propTypes.string.isRequired,
  lastOnline: propTypes.string.isRequired
};

export default DialogInformation;
