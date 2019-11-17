import React from "react";
import propType from "prop-types";
import classNames from "classnames";

import "./warningMessage.css";

const WarningMessage = props => {
  return (
    <div
      className={classNames(
        "warning-message",
        props.error ? "user-error" : "standard"
      )}
    >
      <h3>!</h3>

      <h2>{props.topText}</h2>
      <p>{props.buttonText}</p>
    </div>
  );
};

WarningMessage.prototype = {
  topText: propType.string,
  buttonText: propType.string,
  error: propType.bool.isRequired
};

WarningMessage.defaultProps = {
  topText: "",
  buttonText: ""
};

export default WarningMessage;
