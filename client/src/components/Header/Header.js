import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Container>
          <Link to="/">
            <Navbar.Brand>Gamification</Navbar.Brand>
          </Link>
          <Link
            to="/rules"
            style={{
              textDecoration: "none",
              color: "white"
            }}
          >
            Rules
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
