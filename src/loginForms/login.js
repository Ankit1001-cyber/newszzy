import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./login.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate(); // Initialize useNavigate

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   logedin();
  // };

  const logedin = () => {
    if (username === "Ankit0_0" && password === "hello") {
      // navigate("/test"); // Redirect to the /test route
      document.location.href = "www.google.com  ";
      window.alert("login sccussful");
    } else {
      window.alert("Incorrect username or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="form-group">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button type="submit" className="login-button" onClick={logedin}>
          Login
        </button>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
        <div className="sign-Up">
          <Link to="/signUp">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
