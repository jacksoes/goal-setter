import { Link } from "react-router-dom";
import LogInForm from "../../components/login-form/LogInForm";
import "./LogInPage.css"
import CloseButton from "../../components/close-button/CloseButton";


import { Container, Button } from "react-bootstrap";
const LogIn = () => {
  return (
    <div className="overlay-center-form">
      <CloseButton />
      <LogInForm />
      <Container className="responsive-container d-flex justify-content-center ">
      <Link to="/SignUpPage" className="none w-75"><Button className="w-100 mt-3 mb-3" variant="success" type="button" >Sign Up</Button></Link>
      </Container>
    </div>
  );
};

export default LogIn;
/*
w-50: Applies to all screen sizes.
w-sm-50: Applies to small devices (≥576px).
w-md-25: Applies to medium devices (≥768px).
w-lg-25: Applies to large devices (≥992px).
w-xl-25: Applies to extra large devices (≥1200px).
*/