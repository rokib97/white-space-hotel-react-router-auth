import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/login"
            >
              Login
            </NavLink>
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
