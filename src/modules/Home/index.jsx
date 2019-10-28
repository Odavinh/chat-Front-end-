import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

import {HomeBloc} from "../../components";

import Sidebar from "./sidebar/sidebar";
import UserPage from "./UserPage/UserPage";
import DialogBody from "./dialogBody/index";

import "./home.css";

class Home extends Component {
  dialogActive(id) {
    console.log(id);
  }
  findUser(login) {
    console.log(login);
  }

  render() {
    return (
      <HomeBloc className="home">
        <Sidebar
          dialogActive={this.dialogActive}
          findUser={this.findUser.bind(this)}
        />
        <Switch>
          <Route path="/dialog/23" component={DialogBody} DialogId="8" />
          <Route path="/user/:id" component={UserPage} />
        </Switch>
      </HomeBloc>
    );
  }
}

export default Home;
