import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./otp.css";

function TwoFactorAuthView(props) {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);

  const handleInputChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleInputChange = (event) => {
    setCode(event.target.value);
  };

  const postData = {
    otp: String(code),
    email: String(email),
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8082/ee/v1/verify",
        postData
      );
      setResult(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="container w-50 mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={props.ForwardedMail}
            onChange={handleInputChangeEmail}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <div className="result">
        <h6>Server Result: {result}</h6>
      </div>
    </div>
  );
}

export default TwoFactorAuthView;
