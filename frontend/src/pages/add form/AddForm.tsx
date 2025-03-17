import "./AddForm.css";
import CloseButton from "../../components/close-button/CloseButton";
import { Container, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

interface goalObject {
  goal: string;
  daily: boolean;
  date: Date;
  completed: boolean;
  closed: boolean;
}

const AddForm = ({ isClicked, setClicked, goals, setGoals }) => {
  const [checkbox, setCheckbox] = useState(false);

  // send json of username and goals

  const addGoal = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const date = new Date(event.target.date.value);

    const daily = checkbox;
    console.log(daily);
    const newGoal: goalObject = {
      goal: name,
      completed: false,
      closed: false,
      daily: daily,
      date: date,
    };
    setGoals([...goals, newGoal]);

    if (Cookies.get("userName") == undefined) return;

    fetch("http://localhost:3000/addGoal", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userName: Cookies.get("userName"),
        goal: { name: name, date: date, completed: false, daily: daily },
      }),
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

  return (
    <div className="overlay-center-form">
      <div className="d-flex justify-content-end pointer red">
        <Button
          className="none mt-1 me-2"
          onClick={() => (isClicked ? setClicked(false) : setClicked(true))}
        >
          X
        </Button>
      </div>
      <Container className="responsive-container-small d-flex justify-content-center">
        <Form className="mt-3" onSubmit={addGoal}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className="d-flex align-items-center flex-column">
              <Form.Label>Goal:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your goal!"
                name="name"
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className="d-flex align-items-center flex-column">
              <Form.Label>Date:</Form.Label>
              <Form.Control type="date" name="date" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Daily"
              name="daily"
              onChange={() =>
                checkbox ? setCheckbox(false) : setCheckbox(true)
              }
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
