import "./SignUpForm.css";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Alert } from "react-bootstrap";

import validatePassword from "../../utils/validatePassword";

const SignUpForm = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [passwordValidation, setPasswordValidation] = useState<boolean>();
  const [errorMessage, setErrorMessage] = useState<string[]>();

  let mapErrors;
  if (errorMessage) {
    mapErrors = errorMessage.map((value) => (
      <>
        {value}
        <br />
      </>
    ));
  }

  const userSignIn = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
  };

  return (
    <Container className="responsive-container-small d-flex justify-content-center">
      <Form onSubmit={userSignIn} className="mt-3">
        <Form.Group className="mb-3" controlId="formBasicEmailSignUp">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            autoComplete="username"
          />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPasswordSignUpPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="password"
            onBlur={(event) =>
              validatePassword(
                event.target.value,
                setErrorMessage,
                setPasswordValidation
              )
            }
          />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPasswordSignUpConfirmPassword"
        >
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            autoComplete="confirm-password"
          />
          {passwordValidation === false ? (
            <Alert variant="danger">{mapErrors}</Alert>
          ) : (
            <></>
          )}
        </Form.Group>
        <Button className="w-100 mb-3" variant="success" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default SignUpForm;
