import { Link } from "react-router-dom";
import "./AddGoalsButton.css";

import { Button } from "react-bootstrap";

const AddGoalsButton = () => {
    return <Link to="AddForm"><Button className="pt-3 pb-3" variant="success">Add goals</Button></Link>
}

export default AddGoalsButton;