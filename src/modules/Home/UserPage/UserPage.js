import React, {Component} from "react";
import {connect} from "react-redux";

import {getUserFetchData, deleteUserFetchData} from "../../../actions/user";
import {getUserId} from "../../../actions/authData";

import "./UserPage.css";

class UserPage extends Component {
  componentDidMount() {
    this.props.getUser("/user", this.props.match.params.login);
  }

  onClickDeleteUser() {
    this.props.deleteUser("/user", this.props.user.id);
  }

  render() {
    //console.log(this.props.match.params.redirectParam);
    //console.log(this.props.match.params.id);
    const ownerId = this.props.authData.id;
    const {id, login, image, last_online, createAt} = this.props.user;
    return (
      <div className="user-page">
        <img src={image} alt="" />
        <h5>{login}</h5>
        {ownerId === id ? (
          <button onClick={this.onClickDeleteUser}>delete Account</button>
        ) : (
          ""
        )}
        <i>{last_online ? last_online : "online"}</i>
        <p>{createAt}</p>
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
