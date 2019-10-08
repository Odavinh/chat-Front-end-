import React from "react";
import PropTypes from "prop-types";

import "./message.css";

const Message = props => {
  return (
    <div className="message" value={props.id}>
      <label className="date">{props.date}</label>
      <label className="text">{props.text}</label>
    </div>
  );
};

Message.prototype = {
  text: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isAuthor: PropTypes.bool
};

export default Message;
