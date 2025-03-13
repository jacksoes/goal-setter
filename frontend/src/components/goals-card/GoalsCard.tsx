import "./GoalsCard.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

interface cardProps {
  goal: string,
  completed: boolean,
  closed: boolean
}

const GoalsCard: React.FC<cardProps> = ( {goal, completed, closed}) =>  {
  
  if (!closed){ return (
    
    <>
      <Container className={ `${completed ? "container-card-completed" : "container-card"} container-card responsive-container-large mt-4`}>
        <Row className="mb-4">
          <Col>
            <button className="none">
            <span className="span-underline icon-text-pair pointer"><FaChevronUp /><span className="ml-05"></span>{completed ? <>Completed</> : <>Uncompleted</>}</span>
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
            <Button variant={completed ? undefined : "success"} className={completed ? "blue-button" : undefined }>completed</Button>
          </Col>
        </Row>
      </Container>
      </>);

      }
      return(
      <>
      <Container className={ `${completed ? "container-card-completed" : "container-card"} container-card responsive-container-large mt-4`}>
        <Row>
          <Col>
          <button className="none">
            <span className="span-underline icon-text-pair pointer">
              <FaChevronDown /><span className="ml-05">{completed ? <>Completed</> : <>Uncompleted</>}</span>
            </span>
            </button>
          </Col>
        </Row>
      </Container>

     
    </>);
    
  

};

export default GoalsCard;
