import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./button.css";

const SendButton = ({text, className}) => {
  return (
    <button className={classNames("send-button", className)} type="submit">
      {text}
    </button>
  );
};

SendButton.propTypes = {
  text: PropTypes.string
};

SendButton.defaultProps = {
  text: ""
};

export default SendButton;
