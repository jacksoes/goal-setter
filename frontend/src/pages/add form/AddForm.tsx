import "./AddForm.css";
import CloseButton from "../../components/close-button/CloseButton";
import { Container, Form, Button } from "react-bootstrap";

const AddForm = () => {
  return (
    <div className="overlay-center-form">
      <CloseButton />
      <Container className="responsive-container-small d-flex justify-content-center">
        <Form className="mt-3">
    
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className="d-flex align-items-center">
              <Form.Control type="text" placeholder="Enter your goal!" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className="d-flex align-items-center flex-column">
              <Form.Label>Date:</Form.Label>
              <Form.Control type="date" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Daily"
            />
          </Form.Group>
          <Button className="w-100 mb-3" type="submit" variant="success">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddForm;
