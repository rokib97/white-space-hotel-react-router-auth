import React from "react";
import { Button, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <>
      <div className="container mt-5 sign-up-details">
        <h1 className="text-center mb-3">Sign Up</h1>
        <Form className="">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="confirm-password"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Button className="w-100" variant="info" type="submit">
            Sign Up
          </Button>
          <p className="text-center mt-2">
            Already have an account?
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </p>
          <Button className="w-100 btn btn-light mt-5 sign-up" type="submit">
            <FcGoogle className="icon" />
            Continue With Google
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Signup;
