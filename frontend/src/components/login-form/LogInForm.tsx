import "./LogInForm.css"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";


const LogInForm = () => {
  return (
    <Container className="responsive-container-small d-flex justify-content-center">
      <Form className="mt-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" autoComplete="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" autoComplete="password" />
        </Form.Group>
        <Button className="w-100 mb-3 blue-button" type="submit">
          Log In
        </Button>
      </Form>
    </Container>
  );
};

export default LogInForm;
