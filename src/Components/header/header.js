import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAngleRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
const Header = (props) => {
  console.log(props.searchbar);
  const [toglestate, settoglestate] = useState("true");
  return (
    <div className="header">
      <div className="modal"></div>
      <div className="header-heading">
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faAngleRight} className="fa-angle-right" />
        <FontAwesomeIcon
          icon={faBars}
          className="menu-icon"
          onClick={() => {
            if (toglestate) {
              document.querySelector(".sidebar").style.width = "0";
              document.querySelector(".sidebar").style.display = "none";
              document.querySelector(".side-layout-container").style.width =
                "100%";
              settoglestate(!toglestate);
            } else {
              document.querySelector(".side-layout-container").style.width =
                "80%";
              document.querySelector(".sidebar").style.width = "20%";
              settoglestate(!toglestate);
            }
          }}
        />
      </div>
      <div className="header-navbar"></div>
      <div className="header-navbar-shadow">
        <p>{props.heading}</p>
        <div className={props.searchbar ? "search-bar" : "search-bar-hide"}>
          <p className="search-bar-text">Search: </p>
          <input type="text" className="search-bar-input" />
        </div>
      </div>
    </div>
  );
};

export default Header;
