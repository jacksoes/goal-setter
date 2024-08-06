import "./SignUpPage.css";
import SignUpForm from "../../components/signup-form/SignUpForm";
import CloseButton from "../../components/close-button/CloseButton";

const SignUpPage = () => {
  return (
    <div className="overlay-center-form">
      <CloseButton />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
