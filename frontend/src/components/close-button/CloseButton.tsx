import { Button } from "react-bootstrap";
import { Link

 } from "react-router-dom";
const CloseButton = () => {
    return (
        <div className="d-flex justify-content-end pointer red"><Link className="none" to="/"><Button className="none mt-1 me-2">X</Button></Link></div>
    )
}

export default CloseButton;