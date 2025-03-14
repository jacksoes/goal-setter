import "./AddForm.css";
import CloseButton from "../../components/close-button/CloseButton";
import { Container, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useState } from "react";

interface goalObject {
  goal: string;
  daily: boolean;
  date: Date;
  completed: boolean;
  closed: boolean;
  
}

const AddForm = ({isClicked, setClicked, goals, setGoals}) => {

  const [checkbox, setCheckbox] = useState(false);
  


  const addGoal = (event) => {
    event.preventDefault()
    

    const name = event.target.name.value
    const date = event.target.date.value

    const daily = checkbox
    console.log(daily)
    const newGoal: goalObject = {goal: name, completed: false, closed: false, daily: daily, date: date}
    setGoals([...goals, newGoal])
  }



  return (
    <div className="overlay-center-form">
      <div className="d-flex justify-content-end pointer red"><Button className="none mt-1 me-2" onClick={() => isClicked ? setClicked(false) : setClicked(true)}>X</Button></div>
      <Container className="responsive-container-small d-flex justify-content-center">
        <Form className="mt-3" onSubmit={addGoal}>
    
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className="d-flex align-items-center flex-column">
            <Form.Label>Goal:</Form.Label>
              <Form.Control type="text" placeholder="Enter your goal!" name="name" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className="d-flex align-items-center flex-column">
              <Form.Label>Date:</Form.Label>
              <Form.Control type="date" name="date" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Daily" name="daily" onChange={()  => checkbox ? setCheckbox(false) : setCheckbox(true)}
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
