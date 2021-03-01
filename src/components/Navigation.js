import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { doAuthedUser, getAuthedUser } from "../redux/modules/authedUser";
import { getUsers } from "../redux/modules/users";

export default function Navigation() {
  const users = useSelector(getUsers);
  const authedUser = useSelector(getAuthedUser);
  const dispatch = useDispatch();

  const authedUserName = users[authedUser].name;

  return (
    <Nav variant="pills" defaultActiveKey="/" className="mb-4">
      <NavLink exact to="/home" className="nav-link">
        Home
      </NavLink>

      <NavLink exact to="/add" className="nav-link">
        New Question
      </NavLink>
      <NavLink exact to="/leaderboard" className="nav-link">
        Leaderboard
      </NavLink>
      <NavDropdown
        title={`Hello, ${authedUserName}`}
        id="nav-dropdown"
        className="ml-auto"
      >
        <NavLink
          exact
          to="/"
          className="dropdown-item"
          onClick={() => dispatch(doAuthedUser(null))}
        >
          Logout
        </NavLink>
      </NavDropdown>
    </Nav>
  );
}
