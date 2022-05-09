import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginBox">
        <div className="formBox">
          <p className="loginHeading">Welcome back!</p>
          <p className="loginDesc">We're so excited to see you again</p>
          <label htmlFor="loginEmail" className="">
            EMAIL
          </label>
          <input type="email" className="loginEmail" />
          <label htmlFor="loginPassword" className="">
            PASSWORD
          </label>
          <input type="password" className="loginPassword" />
          <a href="#">Forgot your password?</a>
          <button>Login</button>
          <span>
            Need an account? <a href="#">Register</a>
          </span>
        </div>
        <div className="qrBox">
          <img src="../assets/qr_code.png" alt="" />
          <p className="qrHeading">Log in with QR Code</p>
          <p className="qrDesc1">
            Scan this with the <span className="bold">Discord mobile</span>
          </p>
          <p className="qrDesc2">
            <span className="bold">app</span> to log in instantly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
