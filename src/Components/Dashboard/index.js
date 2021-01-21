import React, { useEffect } from "react";
import Sidebar from "../sidebar/sidebar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import dashboard from "./Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

import Usermanagement from "../usermanagement/usermanagement";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Terminal from "../terminal/terminal";
import { routes } from "../../pages/routes";

const DashboardHome = () => {
  const history = useHistory();
  const location = useLocation();

  console.log(location.pathname);

  const sessiontoken = sessionStorage.getItem("token");
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log("token", token);
    if (token == null || token == "") {
      history.push("/login");
      window.location.reload("/login");
    }
  }, []);

  useEffect(() => {
    if (location.pathname === "/dashboardHome") {
      history.push("/dashboardHome/main");
    }
  }, [location]);
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="container-fluid">
          {console.log(history)}
          <Sidebar />
          <Switch>
            <Route
              exact={true}
              path={routes.DASHBOARDHOME}
              component={dashboard}
            />
            <Route path={routes.USERMANAGEMENT} component={Usermanagement} />

            <Route path={routes.TERMINALMANAGEMENT} component={Terminal} />
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default DashboardHome;
