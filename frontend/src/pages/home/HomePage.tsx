import "./HomePage.css";
import NavBar from "../../components/nav-bar/NavBar";
import GoalsCard from "../../components/goals-card/GoalsCard";

const HomePage = () =>{
    return(<div className="homepage-container">
    <NavBar />
    <GoalsCard />
    </div>)
}

export default HomePage;