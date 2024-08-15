import "./LogInForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";



const LogInForm = () => {
  const submitLogIn = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: event.target[0].value,
        password: event.target[1].value,
      }),
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <Container className="responsive-container-small d-flex justify-content-center">
      <Form onSubmit={submitLogIn} className="mt-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            autoComplete="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="password"
          />
        </Form.Group>
        <Button className="w-100 mb-3 blue-button" type="submit">
          Log In
        </Button>
      </Form>
    </Container>
  );
};

export default LogInForm;
