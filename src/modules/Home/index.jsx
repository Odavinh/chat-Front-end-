import React, {Component} from "react";
import {Route, Switch, Redirect} from "react-router-dom";

import {HomeBloc} from "../../components";

import Sidebar from "./sidebar/sidebar";
import UserPage from "./UserPage/UserPage";
import DialogBody from "./dialogBody/index";

import "./home.css";

class Home extends Component {
  state = {dialogId: "", login: "", dialogData: {}};

  findUser(login) {
    this.setState({login});
  }
  redirectToUserPage() {
    if (this.state.login) {
      return <Redirect to={"/user/" + this.state.login} />;
    }
  }

  getDialogData(...dialogData) {
    this.setState({dialogData});
  }

  render() {
    return (
      <HomeBloc className="home">
        {this.redirectToUserPage()}
        <Sidebar
          findUser={this.findUser.bind(this)}
          getDialogData={this.getDialogData.bind(this)}
        />
        <Switch>
          <Route
            path={"/dialog/:dialogId"}
            component={() => <DialogBody dialogData={this.state.dialogData} />}
          />
          <Route path={"/user/:login"} component={UserPage} />
        </Switch>
      </HomeBloc>
    );
  }
}

export default Home;
