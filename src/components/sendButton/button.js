import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./button.css";

const SendButton = ({text, className, onClick}) => {
  const onClickButton = () => {
    onClick();
  };
  return (
    <button
      className={classNames("send-button", className)}
      type="submit"
      onClick={onClickButton}
    >
      {text}
    </button>
  );
};

SendButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

SendButton.defaultProps = {
  text: "",
  onClick: () => {}
};

export default SendButton;
