import React from "react";
import { useHistory } from "react-router-dom";
import { favicon } from "../../common/images";
import { Form, Input, Button, Checkbox } from "antd";
import "./login.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { logo, image } from "../../themes/appimages";

const forgotpassword = () => {
  return (
    <div className="container-fluid">
      <img src={image} className="img" />{" "}
      <div className="forgot-password-data">
        <div className="align-center">
          <img className="header-image" src={favicon} />
          <h2 className="admin-login-text">Forgot Password</h2>
          <div className="form-data">
            <Input className="form-data-email" placeholder="Email" />
            <Button className="login-button">Send reset password Email</Button>
          </div>
        </div>
      </div>
    </div>
    // <React.Fragment>
    //   <div className="main-container">
    //     <img src={image} />
    //   </div>
    //   <div className="container-view">
    //     <div className="forgot-password-data">
    //       <div className="align-center">
    //         <img
    //           className="header-image"
    //           src={favicon}
    //           alt=""
    //           width={50}
    //           height={50}
    //         />

    //         <h2 className="admin-login-text">Forgot Password</h2>
    //         <div className="form-data">
    //           <Input className="form-data-email" placeholder="Email" />
    //           <Button className="login-button">
    //             Send reset password Email
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </React.Fragment>
  );
};

export default forgotpassword;
