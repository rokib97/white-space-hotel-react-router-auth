import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useFirebase from "../../hooks/useFirebase";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, , fireBaseError] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const { handleSignInWithGoogle } = useFirebase();
  const handleGoogleSignIn = () => {
    handleSignInWithGoogle();
    navigate("/");
  };
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePassBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  useEffect(() => {
    if (user) {
      navigate("/login");
    }
  }, [user, navigate]);
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("The password confirmation does not match.");
    }
    if (password.length < 8) {
      setError("Password must be eight character or longer");
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="container mt-5 sign-up-details">
      <h1 className="text-center mb-3">Sign Up</h1>
      <Form onSubmit={handleCreateUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={handlePassBlur}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={handleConfirmPassBlur}
            type="confirm-password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        <p style={{ color: "red" }}>{error}</p>
        <p style={{ color: "red" }}>{fireBaseError?.message}</p>
        <Button className="w-100" variant="info" type="submit">
          Sign Up
        </Button>
        <p className="text-center mt-2">
          Already have an account?
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </p>
        <Button
          onClick={handleGoogleSignIn}
          className="w-100 btn btn-light mt-5 sign-up"
          type="submit"
        >
          <FcGoogle className="icon" />
          Continue With Google
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
