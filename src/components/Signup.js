import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="app-container ltspace">
      <form className="form-grid">
        <h3 className="full">New User Form</h3>
        <p>First Name:</p>
        <input value="" />
        <p>Last Name:</p>
        <input value="" />
        <p>Mail Id:</p>
        <input value="" />
        <p>Password:</p>
        <input value="" />
        <p>Confirm Password:</p>
        <input value="" />
        <button className="btn full">Signup</button>
        <p className="full">
          <Link to="/login">Existing User? Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
