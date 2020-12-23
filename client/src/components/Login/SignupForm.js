// Username, Password and email
import React, { useState, useEffect } from "react";
import { Card, Button, Container, Form } from "react-bootstrap";
import axios from "axios";

const SignupForm = () => {
  const [user, setUser] = useState();

  const registerUser = (e) => {
    e.preventDefault();
    if (user.password !== user.cpassword) alert("Password does't match!");
    else console.log("User Details to resgister:", user);
  };
  return (
    <>
      <Card style={{ fontSize: "14px", borderWidth: "0px" }} className="shadow">
        <Card.Header style={{ backgroundColor: "#733b82", color: "white" }}>
          <Card.Title>Sign up</Card.Title>
        </Card.Header>
        <Card.Body className="m-2">
          <Form onSubmit={registerUser}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                size="sm"
                onChange={(e) => {
                  setUser({ ...user, username: e.target.value.trim() });
                }}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                size="sm"
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value.trim() });
                }}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                size="sm"
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value.trim() });
                }}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                size="sm"
                onChange={(e) => {
                  setUser({ ...user, cpassword: e.target.value.trim() });
                }}
                required
              />
            </Form.Group>
            <Button type="submit" variant="success" size="sm">
              Signup
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default SignupForm;
