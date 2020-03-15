import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        style={{
          height: "40px"
        }}
      >
        <Link to="/">
          <Navbar.Brand
            style={{
              fontSize: "1rem"
            }}
          >
            Gamification
          </Navbar.Brand>
        </Link>
      </Navbar>
    </div>
  );
};

export default Header;
