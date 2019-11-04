import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {Dialog, Button, Input} from "../../../components";
import {connect} from "react-redux";
import {dialogsFetchData} from "../../../actions/dialog";

import "./sidebar.css";

class Sidebar extends Component {
  componentDidMount() {
    this.props.getDialogs("/");
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

const mapStateToProps = state => ({dialogs: state.dialog});

const mapDispatchToProps = dispatch => ({
  getDialogs: url => dispatch(dialogsFetchData(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
