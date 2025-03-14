import "./GoalsCard.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

interface cardProps {
  goal: string;
  daily: boolean;
  date: Date;
  completed: boolean;
  closed: boolean;
}

const GoalsCard: React.FC<cardProps> = ({ goal, completed, closed, daily, date }) => {
  const [isClosed, setClosed] = useState<boolean>(closed);

  const updateClose = () => {
    if (!isClosed) {
      setClosed(true);
      return;
    } else {
      setClosed(false);
      return;
    }
  };

  const [isCompleted, setCompleted] = useState<boolean>(completed);

  const updateComplete = () => {
    if (!isCompleted) {
      setCompleted(true);
      return;
    } else {
      setCompleted(false);
      return;
    }
  };

  const dateString = (date.getMonth() + 1) + "-" + (date.getDate() + 1) + "-" + date.getFullYear()
//
  if (!isClosed) {
    return (
      <>
        <Container style={daily && !isCompleted ? {backgroundColor: "yellow"} : undefined}
          className={`${
            isCompleted ? "container-card-completed" : "container-card"
          } container-card responsive-container-large mt-4`}
        >
          <Row className="mb-4">
            <Col>
              <button className="none" onClick={updateClose}>
                <span className="span-underline icon-text-pair pointer">
                  <FaChevronUp />
                  <span className="ml-05"></span>
                  {isCompleted ? <>Completed- {daily ? <>daily</> : dateString}</> : <>Uncompleted- {daily ? <>daily</> : dateString}</>}
                </span>
              </button>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col>
              <h1>{goal}</h1>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col>
              <Button onClick={updateComplete}
                variant={isCompleted ? undefined : "success"}
                className={isCompleted ? "blue-button" : undefined}
              >
                completed
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
  return (
    <>
      <Container
        className={`${
          isCompleted ? "container-card-completed" : "container-card"
        } container-card responsive-container-large mt-4`}
      >
        <Row>
          <Col>
            <button className="none" onClick={updateClose}>
              <span className="span-underline icon-text-pair pointer">
                <FaChevronDown />
                <span className="ml-05">
                  {isCompleted ? <>Completed</> : <>Uncompleted</>}
                </span>
              </span>
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GoalsCard;
