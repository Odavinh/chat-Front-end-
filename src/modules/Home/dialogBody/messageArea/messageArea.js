import React, {Component} from "react";
import PropTypes from "prop-types";

import {Message} from "../../../../components";

import "./messageArea.css";

const messages = [
  {
    id: 136,
    text: "Hello",
    date: "12:01 11,8",
    isAuthor: true
  },
  {
    id: 16,
    text: "123467890",
    date: "12:01 11,8",
    isAuthor: false
  },
  {
    id: 16,
    text: "test",
    date: "12:01 11,8",
    isAuthor: true
  }
];

class MessageArea extends Component {
  static propTypes = {
    DialogId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired
  };
  render() {
    return (
      <div className="message-Area">
        <ul>
          {messages.map(message => {
            return (
              <li key={message.id}>
                <Message
                  id={message.id}
                  text={message.text}
                  date={message.date}
                  isAuthor={message.isAuthor}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MessageArea;
