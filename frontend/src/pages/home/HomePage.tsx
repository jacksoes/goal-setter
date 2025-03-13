import "./HomePage.css";
import NavBar from "../../components/nav-bar/NavBar";
import GoalsCard from "../../components/goals-card/GoalsCard";
import { Outlet } from "react-router-dom";
import AddGoalsButton from "../../components/add-goals-button/AddGoalsButton";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <NavBar />
      <div className="d-flex justify-content-center align-content-center mt-4"> <AddGoalsButton /> </div>
      <GoalsCard goal="finish homework today" completed={true} closed={true} />

      <Outlet />
    </div>
  );
};

export default HomePage;
