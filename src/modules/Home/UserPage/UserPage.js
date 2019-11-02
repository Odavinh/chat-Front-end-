import React, {Component} from "react";
import {connect} from "react-redux";

import {getUserFetchData} from "../../../actions/user";

class UserPage extends Component {
  componentDidMount() {
    this.props.getUser("/user", "Locki");
  }

  render() {
    //console.log(this.props.match.params.redirectParam);
    //console.log(this.props.match.params.id);
    return (
      <div className="user-page">
        <h1>UserPage</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({user: state.user});

const mapDispatchToProps = dispatch => ({
  getUser: (url, login) => dispatch(getUserFetchData(url, login))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
