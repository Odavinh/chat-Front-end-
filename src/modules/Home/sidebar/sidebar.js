import React, {Component} from "react";
import {NavLink, Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {
  Dialog,
  Button,
  Input,
  RedirectArea,
  Loading
} from "../../../components";
import {connect} from "react-redux";
import {dialogsFetchData} from "../../../actions/dialog";
import {getUserLoginLocalStorage} from "../../../actions/authData";

import "./sidebar.css";

class Sidebar extends Component {
  componentDidMount() {
    this.props.getDialogs("/");
    this.props.getLogin();
  }
  static propTypes = {
    findUser: PropTypes.func.isRequired,
    getDialogData: PropTypes.func.isRequired
  };
  onChangeInput(value) {
    this.setState({findUser: value});
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.findUser(this.state.findUser);
  }

  ChangeDialog(login, lastOnline) {
    this.props.getDialogData(login, lastOnline);
  }

  render() {
    const {dialogs, redirect, isLoading, error} = this.props.dialogs;
    const {login} = this.props.login;
    console.log(dialogs);
    if (isLoading) return <Loading />;
    return (
      <div className="sidebar">
        {redirect ? <Redirect to="/api/user/login" err={error} /> : null}
        <RedirectArea text=" ← Your profile" path={"/user/" + login} />
        <form onSubmit={this.onSubmit.bind(this)}>
          <Input
            className="find-input"
            name="find"
            onChangeValue={this.onChangeInput.bind(this)}
            placeholder="Find your friend!"
          />
          <Button className="find-button" text="Find" />
        </form>
        {dialogs ? <div>You currently have no dialogs</div> : null}
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
                    Change={this.ChangeDialog.bind(this)}
                    login={dialog.login}
                  />
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dialogs: state.dialog,
  login: state.authData
});

const mapDispatchToProps = dispatch => ({
  getDialogs: url => dispatch(dialogsFetchData(url)),
  getLogin: () => dispatch(getUserLoginLocalStorage())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
