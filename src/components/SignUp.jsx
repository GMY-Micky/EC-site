import React, { useState } from "react";
import "../css/signUp.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [confirmEmail, setConfirmEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const submitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sign-up-form" style={{ marginTop: "60px" }}>
      <h1>Create Account</h1>
      <div className="form">
        <form onSubmit={submitHandle}>
          <br />
          <br /> <h3>Name</h3>
          <br />
          <label htmlFor="First Name">
            <span>First Name</span>
            <br />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label htmlFor="Last Name">
            <span>Last Name</span>
            <br />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <br />
          <br />
          <h3>Login Information</h3>
          <br />
          <br />
          <label htmlFor="Email">
            <span>Email</span>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label htmlFor="confirm email">
            <span>Confirm Email</span>
            <br />
            <input
              type="email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label htmlFor="password">
            <span>Password</span>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label htmlFor="password">
            <span>Confirm Password</span>
            <br />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <br />
          <br />
          <input className="submit-btn" type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
