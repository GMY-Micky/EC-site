import React, { useState } from "react";
import "../css/signIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandle = () => {};

  return (
    <div className="sign-in" style={{ marginTop: "60px" }}>
      <h1>My Account Login</h1>
      <div className="sign-in-form">
        <div className="form-left">
          <form onSubmit={submitHandle}>
            <label htmlFor="email">
              Email
              <br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <br />
            <label htmlFor="email">
              Password
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <br />
            <input className="sign-in-btn" type="submit" value="Sign In" />
          </form>
        </div>
        <div className="form-right">
          <h3>New Customers</h3>
          <p>
            Create your personalized ECOM account! You can track your orders,
            update and share your wishlist, edit billing/shipping info and more.
          </p>
          <button className="create-account-btn">Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
