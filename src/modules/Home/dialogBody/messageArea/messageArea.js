import React, {useEffect} from "react";
import {connect} from "react-redux";

import {Message, Loading, WarningMessage} from "../../../../components";

import {getAllMessageFetchData} from "../../../../actions/message";
import {getUserIdLocalStorage} from "../../../../actions/authData";

import "./messageArea.css";

const MessageArea = props => {
  const getMessages = props.getMessages;
  const getId = props.getId;
  useEffect(() => {
    getMessages("/dialog", window.location.pathname.split("/").slice(-1)[0]);
    getId();
  }, [getMessages, getId]);

  const {messages, isLoading, error} = props.messages;
  const id = props.userId;

  if (isLoading) return <Loading />;
  return (
    <div className="message-Area">
      {error ? (
        <WarningMessage topText={error} error={true} />
      ) : (
        <ul>
          {messages
            ? messages.map(message => {
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
              })
            : null}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  messages: state.message,
  userId: state.authData.id
});

const mapDispatchToProps = dispatch => ({
  getMessages: (url, dialogId) =>
    dispatch(getAllMessageFetchData(url, dialogId)),
  getId: () => dispatch(getUserIdLocalStorage())
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageArea);
