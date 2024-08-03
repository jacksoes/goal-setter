import LogInForm from "../components/login-form/LogInForm";

import { Container, Button } from "react-bootstrap";
const LogIn = () => {
  return (
    <div className="mt-3">
      <LogInForm />
      <Container className="responsive-container test d-flex justify-content-center ">
        <Button className="w-75 mt-3 mb-3">Sign Up</Button>
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