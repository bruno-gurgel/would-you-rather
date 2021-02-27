import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

export default function Navigation(props) {
  return (
    <Nav fill variant="pills" defaultActiveKey="/home" className="mb-4">
      <Nav.Item>
        <Nav.Link eventKey="link-home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-newQuestion">New Question</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-leaderboard">Leaderboard</Nav.Link>
      </Nav.Item>
      <NavDropdown title={`Hello, ${props.authedUser}`} id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Logout</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}
