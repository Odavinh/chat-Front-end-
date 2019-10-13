import React from "react";
import className from "classnames";
import PropTypes from "prop-types";

import "./dialog.css";

const Dialog = props => {
  const Change = () => {
    props.Change(props.id);
  };
  return (
    <div className="dialog" onClick={Change}>
      <img src={props.image} alt="" />
      <div className="body">
        <div className="status">
          <div
            className={className(
              "line",
              props.lastOnline ? "offline" : "online"
            )}
          ></div>
          <p>{props.lastOnline ? props.lastOnline : "online"}</p>
        </div>
        <h5>{props.login}</h5>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  login: PropTypes.string,
  image: PropTypes.string,
  lastOnline: PropTypes.string,
  Change: PropTypes.func
};

export default Dialog;
