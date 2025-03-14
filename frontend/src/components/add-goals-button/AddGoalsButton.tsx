import { Link } from "react-router-dom";
import "./AddGoalsButton.css";

import { useState } from "react";
import AddForm from "../../pages/add form/AddForm";

import { Button } from "react-bootstrap";

const AddGoalsButton = ({ goals, setGoals }) => {
  const [isClicked, setClicked] = useState<boolean>(false);

  const updateClicked = () => {
    if (isClicked) {
      setClicked(false);
      return;
    } else {
      setClicked(true);
      return;
    }
  };

  if (isClicked) {
    return (
      <>
        <Button className="pt-3 pb-3" variant="success" onClick={updateClicked}>
          Add goals
        </Button>
        <AddForm isClicked={isClicked} setClicked={setClicked} goals={goals} setGoals={setGoals} />
      </>
    );
  }

  return (
    //<Link to="AddForm" state={{goals : goals}}><Button className="pt-3 pb-3" variant="success">Add goals</Button></Link>
    <Button className="pt-3 pb-3" variant="success" onClick={updateClicked}>
      Add goals
    </Button>
  );
};

export default AddGoalsButton;
