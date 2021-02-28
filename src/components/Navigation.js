import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { doAuthedUser, getAuthedUser } from "../redux/modules/authedUser";

export default function Navigation() {
  const authedUser = useSelector(getAuthedUser);
  const dispatch = useDispatch();

  return (
    <Nav fill variant="pills" defaultActiveKey="/" className="mb-4">
      <NavLink exact to="/home" className="nav-link">
        Home
      </NavLink>

      <NavLink exact to="/add" className="nav-link">
        New Question
      </NavLink>
      <Nav.Link eventKey="link-leaderboard">Leaderboard</Nav.Link>

      <NavDropdown title={`Hello, ${authedUser}`} id="nav-dropdown">
        <NavLink
          exact
          to="/"
          className="dropdown-item"
          onClick={() => dispatch(doAuthedUser(null))}
        >
          Logout
        </NavLink>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}
