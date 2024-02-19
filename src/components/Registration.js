import "./Registration.css";
import React from "react";
import event from "../images/event.jpeg";
import { useState } from "react";
import axios from "axios";
import TwoFactorAuthView from "./otp";

function Registration() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [dob, setDob] = useState();
  const [password, setPassword] = useState();
  const [result, setResult] = useState(null);
  const data = email;

  const postData = {
    email: String(email),
    password: String(password),
    firstName: String(firstName),
    lastName: String(lastName),
    dateOfBirth: String(dob),
  };
  const handleSubmit = async (e) => {
    alert("Submitting...");
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8082/ee/v1/signup",
        postData
      );
      setResult(response.data);
      console.log(response.status);
      console.log(response.data);
      // Handle successful response
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div className="registration">
      <div className="signup">
        <div className="avatar">
          <img src={event} alt="event" />
        </div>
        <h2>Create Account</h2>
        <h3>Welcome to Event Explore</h3>

        <form className="signup-form">
          <div className="textbox">
            <input
              type="text"
              id="fname"
              placeholder="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <span className="material-symbols-outlined"> account_circle </span>
          </div>
          <div className="textbox">
            <input
              type="text"
              id="lname"
              placeholder="lastName"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <span className="material-symbols-outlined"> account_circle </span>
          </div>
          <div className="textbox">
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="material-symbols-outlined"> mail</span>
          </div>
          <div className="textbox">
            <input
              type="date"
              id="dob"
              placeholder="Date of Birth"
              onChange={(e) => setDob(e.target.value)}
              required
            />
            <span className="material-symbols-outlined">calendar_month</span>
          </div>
          <div className="textbox">
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span className="material-symbols-outlined"> lock </span>
          </div>
          <button type="submit" onClick={handleSubmit} id="submit">
            Signup
          </button>
          <p>
            Existing user's click <a href="login.html">here</a>
          </p>
        </form>
        <h2>server result: {result}</h2>
      </div>
      <TwoFactorAuthView ForwardedMail={data} />
    </div>
  );
}
export default Registration;
