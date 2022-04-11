import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, , error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
    navigate("/");
  };
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePassBlur = (event) => {
    setPassword(event.target.value);
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user]);
  const handleForm = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="container mt-5 sign-up-details">
      <Form onSubmit={handleForm}>
        <h1 className="text-center mb-3">Log in</h1>
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
        {error && <p style={{ color: "red" }}>{error?.message}</p>}

        <Button className="w-100" variant="info" type="submit">
          Log in
        </Button>
        <p className="text-center mt-2">
          New to WhiteSpace?
          <Link to="/signup" style={{ textDecoration: "none" }}>
            Create an account
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

export default Login;
