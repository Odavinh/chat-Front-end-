import React, {Component} from "react";

import {HomeBloc} from "../../components";

import Sidebar from "./sidebar/sidebar";
import DialogBody from "./dialogBody/index";

import "./home.css";

class Home extends Component {
  render() {
    return (
      <HomeBloc className="home">
        <Sidebar />
        <DialogBody DialogId="8" />
      </HomeBloc>
    );
  }
}

export default Home;
