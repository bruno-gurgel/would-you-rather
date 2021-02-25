import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "../logo.svg";
import { handleNewUser, selectUsers } from "../redux/modules/users";
import { useDispatch, useSelector } from "react-redux";

export default function Authentication() {
  const [newUserName, updatenewUserName] = useState("");
  const [newFullName, updatenewFullName] = useState("");

  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const getUser = () => {
    const userNames = [];
    for (let user of Object.keys(users)) {
      userNames.push(users[user].name);
    }
    return userNames;
  };

  const handleInputChange = (event) => {
    if (event.target.name === "Username Input") {
      updatenewUserName(event.target.value);
    } else {
      updatenewFullName(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(handleNewUser(newFullName, newUserName));
  };

  return (
    <div className="container card bg-light w-50">
      <Form>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Please Sign in</h1>
        <Form.Group controlId="formUserSelect" className="mt-3">
          <Form.Control as="select" type="text" className="input w-50">
            {getUser().map((name, index) => (
              <option key={index}>{name}</option>
            ))}
          </Form.Control>
          <Button variant="primary" type="submit" className="mt-3 button">
            Login
          </Button>
        </Form.Group>
      </Form>
      <h2>
        Don't have an account? <span className="text-info">Sign up!</span>
      </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNewUser">
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            className="mt-3 w-50 input"
            name="Full Name Input"
            onChange={handleInputChange}
            required
          />
          <Form.Control
            type="text"
            placeholder="Enter an Username"
            className="mt-3 w-50 input"
            name="Username Input"
            onChange={handleInputChange}
            required
          />
          <Button variant="primary" type="submit" className="mt-3 button">
            Sign Up
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
