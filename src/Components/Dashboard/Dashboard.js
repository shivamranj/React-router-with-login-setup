import React, { useEffect } from "react";
import Sidebar from "../sidebar/sidebar";
import "./style.css";
import "./dashboard.css";
import { Card } from "antd";
import "../../themes/antd.css";
import "../../customstyles/customstyles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { user } from "../../common/images";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import "../header/header.css";

function Dashboard() {
  let history = useHistory();
  const length = window.location.href.length;
  let heading = window.location.href.slice(21, length);
  console.log(heading);

  const sessiontoken = sessionStorage.getItem("token");
  const token = localStorage.getItem("token");
  const location = "/dashboardHome/main";

  useEffect(() => {
    console.log("token", token);
    if (token == null || token == "") {
      localStorage.setItem("path", "/dashboardHome/main");
      history.push({
        pathname: "/login",
        search: "shi",
        state: { detail: "shivam" },
      });
    }
  }, []);
  // useEffect(() => {
  //   console.log("token", token);
  //   if (sessiontoken == null || sessiontoken == "") {
  //     history.push("/login");
  //     window.location.reload("/login");
  //   }
  // }, []);

  if ((heading = "/dashboard")) {
    heading = "Dashboard";
  }

  return (
    <div className="side-layout-container">
      <Header heading={heading} searchbar={false} />
      <div className="dashboard-card">
        <div className="dashboard-card-user-management">
          <img src={user} className="user-image" />
          <p
            className="management-text"
            onClick={() => {
              history.push("/dashboard/userManagement");
            }}
          >
            User Management
          </p>
        </div>

        <div className="dashboard-card-terminal-management">
          <img src={user} className="user-image" />
          <p className="management-text">Terminal Management</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
