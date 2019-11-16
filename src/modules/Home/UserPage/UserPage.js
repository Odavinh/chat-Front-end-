import React, {Component} from "react";
import {connect} from "react-redux";
import classNames from "classnames";
import {Redirect} from "react-router-dom";

import {getUserFetchData, deleteUserFetchData} from "../../../actions/user";
import {dialogAddFathData} from "../../../actions/dialog";
import {getUserIdLocalStorage} from "../../../actions/authData";
import {Button, Loading} from "../../../components";

import "./UserPage.css";

class UserPage extends Component {
  state = {singOut: false};
  componentDidMount() {
    this.props.getUser(
      "/user",
      window.location.pathname.split("/").slice(-1)[0]
    );
    this.props.getUserId();
  }
  onClickDeleteUser() {
    this.props.deleteUser("/user", this.props.user.id);
  }

  onClickSingOut() {
    localStorage.setItem("token", null);
    this.setState({singOut: true});
  }

  onClickCreateDialog() {
    this.props.addDialog("/dialog", this.props.user.id);
  }

  render() {
    const ownerId = +this.props.authData.id;
    const {
      id,
      login,
      email,
      image,
      last_online,
      createAt,
      isLoading,
      error
    } = this.props.user;

    if (isLoading) return <Loading />;

    return (
      <div className="user-page">
        {this.state.singOut && <Redirect to="/api/user/login" />}
        {error ? (
          <div style={{color: "red"}}>
            <h1>!</h1>
            {error}
          </div>
        ) : (
          <div>
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
              <h4>email: {email}</h4>
              {ownerId === id ? (
                <Button
                  onClick={this.onClickSingOut.bind(this)}
                  text="sing out"
                  className="user-button"
                />
              ) : (
                <Button
                  text="create dialog"
                  onClick={this.onClickCreateDialog.bind(this)}
                  className="user-button"
                />
              )}
              {ownerId === id ? (
                <Button
                  onClick={this.onClickDeleteUser.bind(this)}
                  text="delete Account"
                  className="user-button"
                />
              ) : null}

              <p>Account created: {createAt}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({user: state.user, authData: state.authData});

const mapDispatchToProps = dispatch => ({
  getUser: (url, login) => dispatch(getUserFetchData(url, login)),
  deleteUser: (url, id) => dispatch(deleteUserFetchData(url, id)),
  addDialog: (url, partnerId) => dispatch(dialogAddFathData(url, partnerId)),
  getUserId: id => dispatch(getUserIdLocalStorage(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
