import React, {Component} from "react";
import {Dialog, Button, Input} from "../../../components";
import {connect} from "react-redux";
import {dialogsFetchData} from "../../../actions/dialog";

import "./sidebar.css";

class Sidebar extends Component {
  componentDidMount() {
    this.props.getDialogs("/");
  }

  state = {
    searchQuery: "",
    findUser: {}
  };

  dialogActive(id) {
    console.log(id);
  }
  onChangeInput(value) {
    this.setState({findUser: value});
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.findUser);
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
                <Dialog
                  Change={this.dialogActive}
                  id={dialog.id}
                  image={dialog.image}
                  lastOnline={dialog.lastOnline}
                  login={dialog.login}
                />
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
