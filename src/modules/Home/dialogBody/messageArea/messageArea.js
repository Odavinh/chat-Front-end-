import React, {Component} from "react";
import {connect} from "react-redux";

import {Message} from "../../../../components";

import {getAllMessageFetchData} from "../../../../actions/message";
import {getUserIdLocalStorage} from "../../../../actions/authData";

import "./messageArea.css";

// const messages = [
//   {
//     id: 136,
//     text: "Hello",
//     date: "12:01 11,8",
//     author: true
//   },
//   {
//     id: 16,
//     text: "123467890",
//     date: "12:01 11,8",
//     author: false
//   },
//   {
//     id: 11,
//     text: "test",
//     date: "12:01 11,8",
//     author: true
//   }
// ];

class MessageArea extends Component {
  componentDidMount() {
    this.getMessages(
      "/dialog",
      window.location.pathname.split("/").slice(-1)[0]
    );
    this.state.getId();
  }

  render() {
    const {messages} = this.props;
    const id = this.props.userId;
    return (
      <div className="message-Area">
        <ul>
          {messages.messages.map(message => {
            return (
              <li key={message.id}>
                <Message
                  id={message.id}
                  text={message.text}
                  date={message.date}
                  isAuthor={+message.author === +id}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  userId: state.authData
});

const mapDispatchToProps = dispatch => ({
  getMessages: (url, dialogId) =>
    dispatch(getAllMessageFetchData(url, dialogId)),
  getId: () => getUserIdLocalStorage()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageArea);
