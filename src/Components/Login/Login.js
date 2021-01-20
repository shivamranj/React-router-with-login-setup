import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DashboardHome } from "../Dashboard/index";
import { Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";

import "./login.css";
import { logo, image } from "../../themes/appimages";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Login() {
  let history = useHistory();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  // useEffect(() => {
  //   setInterval(() => {
  //     document.querySelector(".admin-login-text").style.animation = "change";
  //   }, 2200);
  // }, []);
  return (
    <div className="container-fluid">
      <img src={image} className="img" />{" "}
      <div className="login-form">
        <div className="align-center">
          <img
            className="header-image"
            src={logo}
            alt=""
            width={50}
            height={50}
          />
          <h2 className="admin-login-text">Admin Login</h2>
          <div className="form-data">
            <Input
              type="email"
              className="form-data-email"
              isValidating={true}
              placeholder="Email"
              value={email}
              onChange={(event) => {
                setemail(event.target.value);
              }}
            />

            <Input
              type="password"
              type="password"
              isValidating={true}
              placeholder="Password"
              value={pass}
              onChange={(event) => {
                setpass(event.target.value);
              }}
            />

            <div
              className="forgot-password"
              onClick={() => {
                history.push("/forgot");
              }}
            >
              Forgot Password?
            </div>
            <Button
              htmlType="submit"
              className="login-button"
              isSubmitting={true}
              onClick={(event) => {
                if (pass == "shivam" && email == "shivam") {
                  history.push("/dashboardHome/main");
                  localStorage.setItem("token", "shivam");
                } else {
                  setemail("");
                  setpass("");
                }
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// function Login() {
//   let history = useHistory();
//   const [email, setemail] = useState("");
//   const [pass, setpass] = useState("");
//   const SignupSchema = Yup.object().shape({
//     password: Yup.string()
//       .min(2, "Too Short!")
//       .max(50, "Too Long!")
//       .required("Username is Required"),
//     email: Yup.string().email("Invalid email").required("email is Required"),
//   });
//   return (
//     <React.Fragment>
//       <div className="main-container">
//         <img src={image} className="img" />{" "}
//         <Formik
//           initialValues={{
//             email: "",
//             password: "",
//           }}
//           validationSchema={SignupSchema}
//           onSubmit={(values) => {
//             // same shape as initial values
//             console.log(values);
//           }}
//         >
//           {({ errors, touched, isSubmitting, isValidating, handleSubmit }) => (
//             <Form onSubmit={handleSubmit}>
//               <div className="login-form">
//                 <div className="align-center">
//                   <img
//                     className="header-image"
//                     src={logo}
//                     alt=""
//                     width={50}
//                     height={50}
//                   />
//                   <h2 className="admin-login-text">Admin Login</h2>
//                   <div className="form-data">
//                     <input
//                       type="email"
//                       className="form-data-email"
//                       isValidating={true}
//                       placeholder="Email"
//                       value={email}
//                       onChange={(event) => {
//                         setemail(event.target.value);
//                       }}
//                     />
//                     {errors.email && touched.email && <div>{errors.email}</div>}

//                     <input
//                       type="password"
//                       type="password"
//                       isValidating={true}
//                       placeholder="Password"
//                       value={pass}
//                       onChange={(event) => {
//                         setpass(event.target.value);
//                       }}
//                     />
//                     {errors.password && touched.password && (
//                       <div>{errors.password}</div>
//                     )}

//                     <div
//                       className="forgot-password"
//                       onClick={() => {
//                         history.push("/forgot");
//                       }}
//                     >
//                       Forgot Password?
//                     </div>
//                     <Button
//                       htmlType="submit"
//                       className="login-button"
//                       isSubmitting={true}
//                       onClick={(event) => {
//                         if (pass == "shivam" && email == "shivam")
//                           history.push("/dashboardHome/main");
//                         else {
//                           setemail("");
//                           setpass("");
//                         }
//                       }}
//                     >
//                       Login
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </React.Fragment>
//   );
// }

export default Login;
