import React from "react";
import propType from "prop-types";

import "./loading.css";

const Loading = props => {
  return (
    <div className="loading">
      <div className="text">{props.text}</div>
      <div className="ring"></div>
    </div>
  );
};

Loading.prototype = {
  text: propType.string
};

Loading.defaultProps = {
  text: "loading..."
};

export default Loading;
