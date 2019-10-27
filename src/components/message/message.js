import React from "react";
import PropTypes from "prop-types";
import className from "classnames";

import "./message.css";

const Message = ({isAuthor, id, date, text}) => {
  return (
    <div className="bubble">
      <div
        className={className("message", isAuthor ? "user" : "partner")}
        value={id}
      >
        <label className="date">{date}</label>
        <label className="text">{text}</label>
      </div>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isAuthor: PropTypes.bool
};

Message.defaultProps = {
  date: "",
  isAuthor: true
};

export default Message;
