import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, signOutFromGoogle } = useFirebase();
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand
            className="fw-bolder"
            style={{ color: "#222831" }}
            href="#home"
          >
            WHITE SPACE
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/checkout"
            >
              Checkout
            </NavLink>
            {user?.uid ? (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/login"
                onClick={() => signOutFromGoogle()}
              >
                Sign Out
              </NavLink>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/login"
              >
                Login
              </NavLink>
            )}
            {user?.displayName && (
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                {user.displayName}
              </NavLink>
            )}
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/about"
            >
              About
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
