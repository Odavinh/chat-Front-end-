import React, {Component} from "react";
import PropTypes from "prop-types";
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
//     isAuthor: true
//   },
//   {
//     id: 16,
//     text: "123467890",
//     date: "12:01 11,8",
//     isAuthor: false
//   },
//   {
//     id: 11,
//     text: "test",
//     date: "12:01 11,8",
//     isAuthor: true
//   }
// ];

class MessageArea extends Component {
  static propTypes = {
    DialogId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired
  };

  componentDidMount() {
    this.getMessages("/dialog", this.props.dialogId);
    this.state.getId();
  }

  render() {
    const {messages} = this.props;
    const id = this.state.userId;
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
