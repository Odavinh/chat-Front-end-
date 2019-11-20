import React, {useEffect, useState} from "react";
import {NavLink, Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {
  Dialog,
  Button,
  Input,
  RedirectArea,
  Loading,
  WarningMessage
} from "../../../components";
import {connect} from "react-redux";
import {dialogsFetchData} from "../../../actions/dialog";
import {getUserLoginLocalStorage} from "../../../actions/authData";

import "./sidebar.css";

const Sidebar = props => {
  const getDialogs = props.getDialogs;
  const getLogin = props.getLogin;
  const [findUser, setFindUser] = useState(null);
  useEffect(() => {
    getDialogs("/");
    getLogin();
  }, [getDialogs, getLogin]);

  const onChangeInput = value => {
    setFindUser(value);
  };
  const onSubmit = e => {
    e.preventDefault();
    props.findUser(findUser);
  };

  const ChangeDialog = (login, lastOnline) => {
    props.getDialogData(login, lastOnline);
  };

  const {dialogs, isLoading, error, redirect} = props.dialogs;
  const {login} = props.login;
  if (isLoading) return <Loading />;
  return (
    <div className="sidebar">
      {redirect ? <Redirect to="/api/user/login" err={error} /> : null}
      <RedirectArea text=" ← Your profile" path={"/user/" + login} />
      <form onSubmit={onSubmit.bind(this)}>
        <Input
          className="find-input"
          name="find"
          onChangeValue={onChangeInput.bind(this)}
          placeholder="Find your friend!"
        />
        <Button className="find-button" text="Find" />
      </form>
      {dialogs ? (
        <WarningMessage buttonText="You currently have no dialogs" />
      ) : null}
      <ul>
        {dialogs.map(dialog => {
          return (
            <li key={dialog.id}>
              <NavLink
                to={"/dialog/" + dialog.id}
                style={{textDecoration: "none"}}
              >
                <Dialog
                  id={dialog.id}
                  image={dialog.image}
                  lastOnline={dialog.lastOnline}
                  Change={ChangeDialog.bind(this)}
                  login={dialog.login}
                />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  findUser: PropTypes.func.isRequired,
  getDialogData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dialogs: state.dialog,
  login: state.authData
});

const mapDispatchToProps = dispatch => ({
  getDialogs: url => dispatch(dialogsFetchData(url)),
  getLogin: () => dispatch(getUserLoginLocalStorage())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
