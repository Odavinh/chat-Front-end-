import React from "react";
import PropTypes from "prop-types";

import "./loginButton.css";

const button = props => {
  return (
    <div className="loginButton">
      <button type="submit">{props.text}</button>
    </div>
  );
};

button.propTypes = {
  text: PropTypes.string
};

export default button;
