import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { handleNewUser, getUsers } from "../redux/modules/users";
import { useDispatch, useSelector } from "react-redux";
import { doAuthedUser } from "../redux/modules/authedUser";
import Alert from "react-bootstrap/Alert";
import { Redirect } from "react-router-dom";
import { hideLoading, showLoading } from "react-redux-loading-bar";

export default function Authentication() {
  const [newUsername, updatenewUsername] = useState("");
  const [newFullName, updatenewFullName] = useState("");
  const [gender, updateGender] = useState(null);
  const [selectedUser, updateSelectedUser] = useState(null);
  const [showAlert, updateShowAlert] = useState(false);
  const [isAuthorized, updateIsAuthorized] = useState(false);

  const users = useSelector(getUsers);
  const dispatch = useDispatch();

  const handleSelectChange = (event) => {
    event.target.value !== "Select an user"
      ? updateSelectedUser(event.target.value)
      : updateSelectedUser(null);
  };

  const handleLogIn = (event) => {
    event.preventDefault();

    dispatch(doAuthedUser(selectedUser));
    updateIsAuthorized(true);
  };

  const handleInputChange = (event) => {
    if (event.target.name === "Username Input") {
      updatenewUsername(event.target.value);
    } else {
      updatenewFullName(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!users[newUsername]) {
      dispatch(showLoading());
      return dispatch(handleNewUser({ newFullName, newUsername, gender })).then(
        () => {
          dispatch(doAuthedUser(newUsername));
          updateIsAuthorized(true);
          dispatch(hideLoading());
        }
      );
    } else {
      updateShowAlert(true);
    }
  };

  if (isAuthorized === true) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="container card bg-light w-75 mt-5 p-0">
      <Form onSubmit={handleLogIn}>
        <h1 className="mb-4 card-header">Would you rather...</h1>
        <h2>Please Sign in</h2>
        <Form.Group controlId="formUserSelect" className="mt-3">
          <Form.Control
            as="select"
            type="text"
            className="input w-50"
            onChange={handleSelectChange}
            defaultValue={selectedUser}
          >
            <option>Select an user</option>
            {Object.keys(users).map((userID, index) => {
              const userName = users[userID].name;
              return (
                <option key={index} value={userID}>
                  {userName}
                </option>
              );
            })}
          </Form.Control>
          <Button variant="primary" type="submit" className="mt-2 button">
            Login
          </Button>
        </Form.Group>
      </Form>
      <h3 className="mb-3">
        Don't have an account? <span className="text-info">Sign up!</span>
      </h3>
      {showAlert && (
        <Alert
          variant="danger"
          onClose={() => updateShowAlert(false)}
          dismissible={true}
        >
          Username already in use, please choose another
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNewUser" className="form-new-user mx-auto">
          <Form.Control
            type="text"
            placeholder="Enter your first and last name"
            className="input"
            name="Full Name Input"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formNewUser" className="form-new-user mx-auto">
          <Form.Control
            type="text"
            placeholder="Enter an Username"
            className="input"
            name="Username Input"
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group
          controlId="formNewUser"
          className="form-new-user mx-auto"
          onChange={(event) => updateGender(event.target.value)}
        >
          <Form.Check
            inline
            type="radio"
            label="Male"
            name="genderRadio"
            value="male"
            required
          />
          <Form.Check
            inline
            type="radio"
            label="Female"
            name="genderRadio"
            value="female"
            required
          />
          <Form.Check
            inline
            type="radio"
            label="Other"
            name="genderRadio"
            value="other"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3 button">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
