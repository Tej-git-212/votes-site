import React from "react";
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className="app-container" id="login">
      <form className="form-grid">
        <h3 className="full">Login Form</h3>
        <p>User Name:</p>
        <input />
        <p>Password:</p>
        <input />
        <button className="btn full">Login</button>
        <p className="full">Forgot Password</p>
        <p className="full"> <Link to="/signup">New User? Signup here</Link></p>
      </form>
    </div>
  );
}

export default Login;
