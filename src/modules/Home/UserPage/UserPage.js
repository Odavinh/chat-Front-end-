import React, {Component} from "react";
import {connect} from "react-redux";
import classNames from "classnames";

import {getUserFetchData, deleteUserFetchData} from "../../../actions/user";
import {getUserId} from "../../../actions/authData";
import {Button} from "../../../components";

import "./UserPage.css";

class UserPage extends Component {
  componentDidMount() {
    this.props.getUser(
      "/user",
      window.location.pathname.split("/").slice(-1)[0]
    );
  }
  onClickDeleteUser() {
    this.props.deleteUser("/user", this.props.user.id);
  }

  render() {
    const ownerId = this.props.authData.id;
    const {id, login, image, last_online, createAt} = this.props.user;
    return (
      <div className="user-page">
        <div className="user-line">
          <div
            className={classNames(
              "line user-circle",
              last_online ? "offline" : "online"
            )}
          ></div>
          <i>{last_online ? last_online : "online"}</i>
        </div>
        <img src={image} alt="" />
        <div className="user-data">
          <h5>{login}</h5>
          {ownerId === id ? (
            <Button onClick={this.onClickDeleteUser}>delete Account</Button>
          ) : (
            <Button text="create dialog" />
          )}
          <p>Account created: {createAt}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({user: state.user, authData: state.authData});

const mapDispatchToProps = dispatch => ({
  getUser: (url, login) => dispatch(getUserFetchData(url, login)),
  deleteUser: (url, id) => dispatch(deleteUserFetchData(url, id)),
  getUserId: id => getUserId(id)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
