import React, {Component} from "react";
import {Route, Switch, Redirect} from "react-router-dom";

import {HomeBloc} from "../../components";

import Sidebar from "./sidebar/sidebar";
import UserPage from "./UserPage/UserPage";
import DialogBody from "./dialogBody/index";

import "./home.css";

class Home extends Component {
  state = {dialogId: "", login: ""};
  dialogActive(id) {
    this.setState({id});
  }
  findUser(login) {
    this.setState({login});
  }
  redirectToUserPage() {
    if (this.state.login) {
      return <Redirect to={"/user/" + this.state.login} />;
    }
  }

  render() {
    return (
      <HomeBloc className="home">
        {this.redirectToUserPage()}
        <Sidebar
          dialogActive={this.dialogActive.bind(this)}
          findUser={this.findUser.bind(this)}
        />
        <Switch>
          <Route
            path={"/dialog/" + this.state.dialogId}
            component={DialogBody}
            DialogId={this.state.dialogId}
          />
          <Route path={"/user/" + this.state.login} component={UserPage} />
        </Switch>
      </HomeBloc>
    );
  }
}

export default Home;
