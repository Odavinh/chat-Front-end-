import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import classNames from "classnames";
import {Redirect} from "react-router-dom";

import {getUserFetchData, deleteUserFetchData} from "../../../actions/user";
import {dialogAddFathData} from "../../../actions/dialog";
import {getUserIdLocalStorage} from "../../../actions/authData";
import {Button, Loading, WarningMessage} from "../../../components";

import "./UserPage.css";

const UserPage = props => {
  const getUser = props.getUser;
  const getUserId = props.getUserId;
  const [singOut, setSingOut] = useState(false);
  const params = window.location.pathname.split("/").slice(-1)[0];
  useEffect(() => {
    getUser("/user", params);
    getUserId();
  }, [getUser, getUserId, params]);
  const onClickDeleteUser = () => {
    props.deleteUser("/user", props.user.id);
  };

  const onClickSingOut = () => {
    localStorage.setItem("token", null);
    setSingOut(true);
  };

  const onClickCreateDialog = () => {
    props.addDialog("/dialog", props.user.id);
  };

  const userButtons = () => {
    if (ownerId === id) {
      return (
        <div>
          <Button
            onClick={onClickSingOut.bind(this)}
            text="sing out"
            className="user-button"
          />
          <Button text="edit profile" className="user-button" />
          <Button
            onClick={onClickDeleteUser.bind(this)}
            text="delete Account"
            className="user-button delete"
          />
        </div>
      );
    } else {
      return (
        <div>
          <Button
            text="create dialog"
            onClick={onClickCreateDialog.bind(this)}
            className="user-button"
          />
        </div>
      );
    }
  };

  const ownerId = +props.authData.id;
  const {
    id,
    login,
    email,
    image,
    last_online,
    createAt,
    isLoading,
    error
  } = props.user;

  if (isLoading) return <Loading />;
  return (
    <div className="user-page">
      {singOut && <Redirect to="/api/user/login" />}
      {error ? (
        <WarningMessage topText={error} error={true} />
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
            {userButtons()}

            <p>Account created: {Date(createAt).slice(0, 21)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({user: state.user, authData: state.authData});

const mapDispatchToProps = dispatch => ({
  getUser: (url, login) => dispatch(getUserFetchData(url, login)),
  deleteUser: (url, id) => dispatch(deleteUserFetchData(url, id)),
  addDialog: (url, partnerId) => dispatch(dialogAddFathData(url, partnerId)),
  getUserId: id => dispatch(getUserIdLocalStorage(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
