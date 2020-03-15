import React from "react";
import "./SideNav.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="sidenav">
      <Nav className="flex-column">
        <Link to="/home">
          <Nav.Item className="navitems">Home</Nav.Item>
        </Link>

        <Link to="/rules">
          <Nav.Item className="navitems">Rules</Nav.Item>
        </Link>
        <Link to="/metrics">
          <Nav.Item className="navitems">Metrics</Nav.Item>
        </Link>
      </Nav>
    </div>
  );
};

export default SideNav;
