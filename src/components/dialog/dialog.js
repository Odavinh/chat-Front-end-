import React from "react";
import className from "classnames";
import PropTypes from "prop-types";

import "./dialog.css";

const Dialog = ({id, image, lastOnline, login, Change}) => {
  const onClickDialog = () => {
    Change(login, lastOnline);
  };

  return (
    <div className="dialog" onClick={onClickDialog}>
      <img src={image} alt="" />
      <div className="body">
        <div className="status">
          <div
            className={className("line", lastOnline ? "offline" : "online")}
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
  Change: PropTypes.func,
  lastOnline: PropTypes.string
};

Dialog.defaultProps = {
  lastOnline: "online",
  Change: () => {}
};

export default Dialog;
