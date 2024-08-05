import "./GoalsCard.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const GoalsCard = () => {
  return (
    <>
      <Container className="container-card responsive-container-large mt-4">
        <Row className="mb-4">
          <Col>
            <FaChevronUp className="icon-text-pair" />{" "}
            <span className="icon-text-pair">uncompleted</span>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h1>go to gym for 30 minutes</h1>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Button className="completed-button" variant="success">
              completed
            </Button>
          </Col>
        </Row>
      </Container>

      <Container className="container-card-completed responsive-container-large mt-4">
        <Row>
          <Col>
            <FaChevronDown className="icon-text-pair" />{" "}
            <span className="icon-text-pair">completed</span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GoalsCard;
