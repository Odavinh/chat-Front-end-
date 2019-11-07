import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {Dialog, Button, Input, RedirectArea} from "../../../components";
import {connect} from "react-redux";
import {dialogsFetchData} from "../../../actions/dialog";
import {getUserLoginLocalStorage} from "../../../actions/authData";

import "./sidebar.css";

class Sidebar extends Component {
  state = {login: ""};
  componentDidMount() {
    this.props.getDialogs("/");
    const login = this.props.getLogin();
    this.setState({login});
  }
  static propTypes = {
    findUser: PropTypes.func.isRequired
  };
  onChangeInput(value) {
    this.setState({findUser: value});
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.findUser(this.state.findUser);
  }
  render() {
    const {dialogs} = this.props;
    if (dialogs.isLoading) return null;
    return (
      <div className="sidebar">
        <RedirectArea
          text=" ← Your profile"
          path={"/user/" + this.state.login}
        />
        <form onSubmit={this.onSubmit.bind(this)}>
          <Input
            className="find-input"
            name="find"
            onChangeValue={this.onChangeInput.bind(this)}
            placeholder="Find your friend!"
          />
          <Button className="find-button" text="Find" />
        </form>
        <ul>
          {dialogs.dialogs.map(dialog => {
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
  getLogin: () => getUserLoginLocalStorage()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
