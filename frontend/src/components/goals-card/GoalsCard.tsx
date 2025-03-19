import "./GoalsCard.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import Cookies from "js-cookie";
import { useEffect } from "react";

interface cardProps {
  _id: string;
  name: string;
  daily: boolean;
  date: Date;
  completed: boolean;
  closed: boolean;
}

const GoalsCard: React.FC<cardProps> = ({
  _id,
  name,
  completed,
  closed,
  daily,
  date,
  setGoals,
  goals
}) => {
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
    console.log(isCompleted);

    if (!isCompleted) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }

    const username = Cookies.get("userName");
    if (username == undefined) return;

    fetch(`http://localhost:3000/goals/${username}/${_id}`, {
      method: "PUT",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        console.log("Success:", responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const removeGoal = () =>{
    setGoals(goals.filter(goal => goal._id != _id))

  }


  let dateString = "";

  if (date instanceof Date) {
    dateString =
      date.getMonth() +
      1 +
      "-" +
      (date.getDate() + 1) +
      "-" +
      date.getFullYear();
  }

  if (!isClosed) {
    return (
      <>
        <Container
          style={
            daily && !isCompleted ? { backgroundColor: "yellow" } : undefined
          }
          className={`${
            isCompleted ? "container-card-completed" : "container-card"
          } container-card responsive-container-large mt-4`}
        >
          <Row className="mb-4">
            <Col>
              <span className="span-underline icon-text-pair pointer">
                <button className="none" onClick={updateClose}>
                  <FaChevronUp />
                </button>

                <span className="ml-05"></span>
                {isCompleted ? (
                  <>Completed- {daily ? <>daily</> : dateString}</>
                ) : (
                  <>Uncompleted- {daily ? <>daily</> : dateString}</>
                )}
              </span>
            </Col>
            <Col className="d-flex justify-content-end">
              <span className="pointer text-end">
                <Button className="none" onClick={removeGoal}>X</Button>
              </span>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col>
              <h1>{name}</h1>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col>
              <Button
                onClick={updateComplete}
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
        style={
          daily && !isCompleted ? { backgroundColor: "yellow" } : undefined
        }
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
