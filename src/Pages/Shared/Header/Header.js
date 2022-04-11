import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
// import useFirebase from "../../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  // let { user, signOutFromGoogle } = useFirebase();
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
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
                // onClick={() => signOutFromGoogle()}
                onClick={handleSignOut}
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
            {user?.uid && (
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
