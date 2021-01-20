import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { favicon } from "../../common/images";
import { logo } from "../../themes/appimages";
import { Layout, Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import "antd/dist/antd.css";
import "./sidebar.css";
const { Sider } = Layout;

const sidebar = () => {
  const path = "/dashboardHome/main";
  const menuItem = (link, label, icon, key, isLeft) => (
    <Menu.Item key={key}>
      {/* {label !== "Logout" ? localStorage.clear("token") : ""} */}
      <Link to={link}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px",
              paddingRight: "14px",
            }}
          >
            <FontAwesomeIcon icon={faHome} />
          </div>
          <div style={{ width: "80%", fontSize: "17px" }}>
            <span>{label}</span>
          </div>
        </div>
      </Link>
    </Menu.Item>
  );
  return (
    <div className="sidebar">
      <div className="sider">
        <div className="logo-class">
          <img
            src={logo}
            alt=""
            width={50}
            height={50}
            className="logo-class-image"
          />
          <div>
            <span>ADMIN</span>
          </div>
        </div>
        <Menu
          mode="inline"
          style={{ paddingLeft: "0px !important" }}
          className="menu-items"
        >
          {menuItem(path, "Dashboard", "faHome", "1", false)}
          {menuItem(
            "" + path + "/Usermanagement",
            "User Management",
            "faUser",
            "2",
            false
          )}
          {menuItem(
            "" + path + "/terminalManagement",
            "Terminal Management",
            "faUser",
            "3",
            false
          )}
          {menuItem(
            "" + path + "/reportPost",
            "Report Post",
            "faUser",
            "4",
            false
          )}
          {menuItem("" + "" + "/login", "Logout", "fa-user", "5", false)}
        </Menu>
      </div>
    </div>
  );
};

export default sidebar;
