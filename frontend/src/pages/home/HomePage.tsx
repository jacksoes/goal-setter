import "./HomePage.css";
import NavBar from "../../components/nav-bar/NavBar";
import GoalsCard from "../../components/goals-card/GoalsCard";
import { Outlet } from "react-router-dom";

const HomePage = () =>{
    return(<div className="homepage-container">
    <NavBar />
    <GoalsCard />
    <Outlet />
    </div>)
}

export default HomePage;