import React from "react";
import "./LoginPage.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import img4 from "../images/img4.jpeg";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const postData = {
    email: String(email),
    password: String(password),
  };

  const handleSubmit = async (e) => {
    alert("Logging in...");
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8082/ee/v1/login",
        postData
      );
      setResult(response.data);
      console.log(response.status);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <Helmet>
        <Link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0"
          rel="stylesheet"
        />
      </Helmet>
      <div className="avatar">
        <img src={img4} alt="logo" />
      </div>
      <h2>Login</h2>
      <h3>Welcome back to Event Explore</h3>

      <form class="login-form" id="login">
        <div class="textbox">
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <span className="material-symbols-outlined">mail</span>
        </div>
        <div className="textbox">
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="material-symbols-outlined"> lock </span>
        </div>
        <button onclick={handleSubmit} type="submit" value="LOGIN">
          LOGIN
        </button>
        <a href="https://website.com">Forgot your credentials?</a>
      </form>
      <div>
        <h6>Output: {result}</h6>
      </div>
    </div>
  );
}
export default Login;
