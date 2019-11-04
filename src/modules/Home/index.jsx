import React, {Component} from "react";
import {Route, Switch, Redirect} from "react-router-dom";

import {HomeBloc} from "../../components";

import Sidebar from "./sidebar/sidebar";
import UserPage from "./UserPage/UserPage";
import DialogBody from "./dialogBody/index";

import "./home.css";

class Home extends Component {
  state = {dialogId: "", login: ""};

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
        <Sidebar findUser={this.findUser.bind(this)} />
        <Switch>
          <Route path={"/dialog/:dialogId"} component={DialogBody} />
          <Route path={"/user/:" + this.state.login} component={UserPage} />
        </Switch>
      </HomeBloc>
    );
  }
}

export default Home;
