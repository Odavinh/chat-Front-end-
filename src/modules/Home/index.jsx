import React, {useState} from "react";
import {Route, Switch, Redirect} from "react-router-dom";

import {HomeBloc, WarningMessage} from "../../components";

import Sidebar from "./sidebar/sidebar";
import UserPage from "./UserPage/UserPage";
import DialogBody from "./dialogBody/index";

import "./home.css";

const Home = () => {
  const [login, setLogin] = useState(null);
  const [dialogData, setDialogData] = useState({});

  const findUser = login => {
    setLogin(login);
  };
  const redirectToUserPage = () => {
    if (login) {
      return <Redirect to={"/user/" + login} />;
    }
  };

  const getDialogData = (...dialogData) => {
    setDialogData(dialogData);
  };

  return (
    <div className="main">
      <div className="right"></div>
      <HomeBloc className="home">
        {redirectToUserPage()}
        <Sidebar
          findUser={findUser.bind(this)}
          getDialogData={getDialogData.bind(this)}
        />
        <Switch>
          <Route
            path={"/dialog/:dialogId"}
            component={() => <DialogBody dialogData={dialogData} />}
          />
          <Route path={"/user/:login"} component={UserPage} />
          <Route
            except
            path={"/"}
            component={() => (
              <WarningMessage
                buttonText="Select a dialog or open a user page"
                className="warning"
              />
            )}
          />
        </Switch>
      </HomeBloc>
      <div className="right"></div>
    </div>
  );
};

export default Home;
