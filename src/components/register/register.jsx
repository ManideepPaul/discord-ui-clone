import React from 'react'
import './register.css'

const Register = (props) => {
    return (

        // This is copied from login
        <div className="registerContainer">
            <img src={props.icon} alt=""  className="discordIcon"/>
            <div className="formBox registerBox">
          <p className="loginHeading registerHeading">Create an account</p>
          <label htmlFor="loginEmail" className="">
            EMAIL
          </label>
          <input type="email" className="loginEmail" />
          <label htmlFor="registerUsername" className="">
            USERNAME
          </label>
          <input type="username" className="registerUsername" />
          <label htmlFor="loginPassword" className="">
            PASSWORD
          </label>
          <input type="password" className="loginPassword" />
          <button>Continue</button>
          <a href="#">Already have an account?</a>
        </div>
        </div>
    )
}

export default Register