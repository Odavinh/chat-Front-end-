import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Dialog} from "../../../components";
import {connect} from "react-redux";
import {dialogsFetchData} from "../../../actions/dialog";

import "./sidebar.css";

class Sidebar extends Component {
  componentDidMount() {
    this.props.getDialogs("/");
  }

  state = {
    searchQuery: "",
    result: {}
  };

  dialogActive(id) {
    console.log(id);
  }
  render() {
    const {dialogs} = this.props;
    console.log(dialogs);
    if (dialogs.isLoading) return null;
    return (
      <div className="sidebar">
        <ul>
          {dialogs.dialogs.map(dialog => {
            return (
              <li key={dialog.id}>
                <NavLink
                  to={`/dialog/${+dialog.id}`}
                  style={{textDecoration: "none"}}
                >
                  <Dialog
                    Change={this.dialogActive}
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
