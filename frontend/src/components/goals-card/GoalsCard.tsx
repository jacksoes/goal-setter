import "./GoalsCard.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const GoalsCard = () => {
  return (
    <>
      <Container className="container-card responsive-container-large mt-4">
        <Row className="mb-4">
          <Col>
            <button className="none">
            <span className="span-underline icon-text-pair"><FaChevronUp /><span className="ml-05">uncompleted</span></span>
              </button>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h1>go to gym for 30 minutes</h1>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Button variant="success">completed</Button>
          </Col>
        </Row>
      </Container>

      <Container className="container-card responsive-container-large mt-4">
        <Row>
          <Col>
          <button className="none">
            <span className="span-underline icon-text-pair">
              <FaChevronDown /><span className="ml-05">uncompleted</span>
            </span>
            </button>
          </Col>
        </Row>
      </Container>

      <Container className="container-card-completed responsive-container-large mt-4">
        <Row className="mb-4">
          <Col>
          <button className="none">
            <span className="span-underline icon-text-pair">
              <FaChevronUp /><span className="ml-05">completed</span>
            </span>
            </button>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h1>go to gym for 30 minutes</h1>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Button className="blue-button">
              uncompleted
            </Button>
          </Col>
        </Row>
      </Container>

      <Container className="container-card-completed responsive-container-large mt-4">
        <Row>
          <Col>
          <button className="none">
            <span className="span-underline icon-text-pair">
              <FaChevronDown /><span className="ml-05">completed</span>
            </span>
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GoalsCard;
