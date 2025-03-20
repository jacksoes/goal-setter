import NavBar from "../../components/nav-bar/NavBar";
import GoalsCard from "../../components/goals-card/GoalsCard";
import { Outlet } from "react-router-dom";
import AddGoalsButton from "../../components/add-goals-button/AddGoalsButton";

const LongTermGoals = ({ goals, setGoals }) => {
  const mapGoals = goals.map((goal) =>
    !goal.daily ? (
      <GoalsCard
        key={goal._id}
        _id={goal._id}
        name={goal.name}
        completed={goal.completed}
        closed={goal.closed}
        daily={goal.daily}
        date={new Date(goal.date)}
        setGoals={setGoals}
        goals={goals}
      />
    ) : undefined
  );

  return (
    <div className="homepage-container">
      <NavBar />
      <div className="d-flex justify-content-center align-content-center mt-4">
        <AddGoalsButton setGoals={setGoals} goals={goals} />{" "}
      </div>

      {mapGoals}

      <Outlet />
    </div>
  );
};

export default LongTermGoals;
