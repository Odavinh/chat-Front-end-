import React from "react";
import className from "classnames";
import PropTypes from "prop-types";

import "./dialog.css";

const Dialog = ({id, image, lastOnline, login, Change}) => {
  const onClick = e => {
    e.preventDefault();
    Change(id);
  };
  return (
    <div className="dialog" onClick={onClick}>
      <img src={image} alt="" />
      <div className="body">
        <div className="status">
          <div
            className={className(
              "line",
              lastOnline === "online" ? "offline" : "online"
            )}
          ></div>
          <p>{lastOnline ? lastOnline : "online"}</p>
        </div>
        <h5>{login}</h5>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  login: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  lastOnline: PropTypes.string,
  Change: PropTypes.func.isRequired
};

Dialog.defaultProps = {
  lastOnline: "online"
};

export default Dialog;
