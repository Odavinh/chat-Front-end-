import React, {Component} from "react";
import {connect} from "react-redux";

import {Message, Loading, WarningMessage} from "../../../../components";

import {getAllMessageFetchData} from "../../../../actions/message";
import {getUserIdLocalStorage} from "../../../../actions/authData";

import "./messageArea.css";

class MessageArea extends Component {
  componentDidMount() {
    this.getMessages(
      "/dialog",
      window.location.pathname.split("/").slice(-1)[0]
    );
    this.props.getId();
  }

  render() {
    const {messages, isLoading, error} = this.props.messages;
    const id = this.props.userId;

    if (isLoading) return <Loading />;

    return (
      <div className="message-Area">
        {error ? (
          <WarningMessage topText={error} error={true} />
        ) : (
          <ul>
            {messages.map(message => {
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
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  userId: state.authData.id
});

const mapDispatchToProps = dispatch => ({
  getMessages: (url, dialogId) =>
    dispatch(getAllMessageFetchData(url, dialogId)),
  getId: () => dispatch(getUserIdLocalStorage())
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageArea);
