import React from "react";
import { Button, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mt-5 sign-up-details">
      <Form className="">
        <h1 className="text-center mb-3">Log in</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Log in
        </Button>
        <p className="text-center mt-2">
          New to white Space?
          <Link to="/signup" style={{ textDecoration: "none" }}>
            Create an account
          </Link>
        </p>
        <Button className="w-100 btn btn-light mt-5 sign-up" type="submit">
          <FcGoogle className="icon" />
          Continue With Google
        </Button>
      </Form>
    </div>
  );
};

export default Login;
