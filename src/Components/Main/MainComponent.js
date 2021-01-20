import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import forgotpassword from "../Login/forgotpassword";
import DashboardHome from "../Dashboard/index";
import Dashboard from "../Dashboard/Dashboard";
import { routes } from "../../pages/routes";
import Usermamagement from "../usermanagement/usermanagement";
import Terminal from "../terminal/terminal";

function Main() {
  const token = localStorage.getItem("token");
  const history = useHistory();

  return (
    <React.Fragment>
      {console.log("hello", history)}
      <BrowserRouter>
        <Switch>
          <Route
            exact={true}
            path="/"
            component={() =>
              token ? (
                <Redirect to="/dashboardHome/main" />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route exact={true} path={routes.LOGIN} component={Login} />
          <Route path={routes.DASHBOARDHOME} component={DashboardHome} />
          <Route exact={true} path={routes.FORGOT} component={forgotpassword} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Main;
