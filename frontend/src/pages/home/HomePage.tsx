import "./HomePage.css";
import NavBar from "../../components/nav-bar/NavBar";
import GoalsCard from "../../components/goals-card/GoalsCard";
import { Outlet } from "react-router-dom";
import AddGoalsButton from "../../components/add-goals-button/AddGoalsButton";
import { useState } from "react";

interface goalObject {
  goal: string;
  daily: boolean;
  date: Date;
  completed: boolean;
  closed: boolean;
}
//state of goals arr of json object
//json object,


function addTest() {
  fetch("http://localhost:3000/goals/" )
    .then((response) => {
      if (!response.ok)
      {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Success:", responseData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  

    
}

const HomePage = ({goals, setGoals}) => {


  const mapGoals = goals.map((goal) => (
    <GoalsCard
      key={goal._id}
      _id={goal._id}
      name={goal.name}
      completed={goal.completed}
      closed={goal.closed}
      daily={goal.daily}
      date={new Date(goal.date)}
    />
  ));

  return (
    <div className="homepage-container">
      <button onClick={addTest}>test</button>

      <NavBar />
      <div className="d-flex justify-content-center align-content-center mt-4">
        <AddGoalsButton setGoals={setGoals} goals={goals} />{" "}
      </div>

      {mapGoals}

      <Outlet />
    </div>
  );
};

export default HomePage;

//<GoalsCard goal="finish homework today" completed={false} closed={false} />
