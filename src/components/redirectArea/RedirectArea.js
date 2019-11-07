import React from "react";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import propTypes from "prop-types";

import "./RedirectArea.css";

const RedirectArea = props => {
  return (
    <NavLink className="redirect" to={props.path}>
      <div className={classNames("redirect-area", props.className)}>
        {props.text}
      </div>
    </NavLink>
  );
};

RedirectArea.prototype = {
  className: propTypes.string,
  text: propTypes.string,
  path: propTypes.path
};

RedirectArea.defaultProps = {
  className: "",
  text: "",
  path: "api/user/login"
};

export default RedirectArea;
