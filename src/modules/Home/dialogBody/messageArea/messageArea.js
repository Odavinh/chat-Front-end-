import React, {Component} from "react";
import PropTypes from "prop-types";

import {Message} from "../../../../components";

import "./messageArea.css";

const messages = [
  {
    id: 136,
    text: "Hello",
    date: "12:01 11,8",
    isAuthor: false
  }
];

class MessageArea extends Component {
  propTypes = {
    DialogId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired
  };
  render() {
    return (
      <div className="message-Area">
        {messages.map(message => {
          return (
            <Message
              id={message.id}
              text={message.text}
              date={message.date}
              isAuthor={message.isAuthor}
            />
          );
        })}
      </div>
    );
  }
}

export default MessageArea;
